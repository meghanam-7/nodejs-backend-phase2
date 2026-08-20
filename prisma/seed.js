const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function main() {

    console.log("🌱 Seeding database...");

    // Clear existing data
    await prisma.companyKyc.deleteMany();
    await prisma.companyProfile.deleteMany();
    await prisma.company.deleteMany();
    await prisma.order.deleteMany();
    await prisma.product.deleteMany();
    await prisma.user.deleteMany();

    // Hash password
    const hashedPassword = await bcrypt.hash("Password123", 10);

    // Create Users
    const users = await prisma.user.createMany({
        data: [
            {
                name: "Meghana",
                email: "meghana@gmail.com",
                password: hashedPassword,
                role: "ADMIN",
            },
            {
                name: "Rahul",
                email: "rahul@gmail.com",
                password: hashedPassword,
                role: "USER",
            },
            {
                name: "Priya",
                email: "priya@gmail.com",
                password: hashedPassword,
                role: "USER",
            },
        ],
    });

    console.log("✅ Users Seeded");

    // Create Products
    await prisma.product.createMany({
        data: [
            {
                name: "Laptop",
                price: 65000,
                stock: 15,
            },
            {
                name: "Mouse",
                price: 800,
                stock: 50,
            },
            {
                name: "Keyboard",
                price: 1500,
                stock: 30,
            },
            {
                name: "Monitor",
                price: 12000,
                stock: 20,
            },
            {
                name: "Headphones",
                price: 2500,
                stock: 25,
            },
        ],
    });

    console.log("✅ Products Seeded");

    const companyOwner = await prisma.user.findUnique({
        where: { email: "meghana@gmail.com" },
    });

    const company = await prisma.company.create({
        data: {
            name: "PlaceMux Demo Technologies",
            legalName: "PlaceMux Demo Technologies Private Limited",
            slug: "placemux-demo-technologies",
            status: "ONBOARDING",
            ownerUserId: companyOwner.id,
            profile: {
                create: {
                    website: "https://example.com",
                    description: "Seed company for Task 1 onboarding demos.",
                    industry: "Technology",
                    companySize: "11-50",
                    phone: "+919999999999",
                    address: "Bengaluru, Karnataka",
                },
            },
            kyc: {
                create: {
                    status: "NOT_STARTED",
                },
            },
        },
        include: {
            profile: true,
            kyc: true,
        },
    });

    console.log("✅ Company, profile, and KYC seeded");


    // Fetch created users and products
    const allUsers = await prisma.user.findMany();
    const allProducts = await prisma.product.findMany();

    // Create Orders
    await prisma.order.createMany({
        data: [
            {
                quantity: 1,
                totalPrice: 65000,
                userId: allUsers[0].id,
                productId: allProducts[0].id,
            },
            {
                quantity: 2,
                totalPrice: 1600,
                userId: allUsers[1].id,
                productId: allProducts[1].id,
            },
            {
                quantity: 1,
                totalPrice: 1500,
                userId: allUsers[2].id,
                productId: allProducts[2].id,
            },
            {
                quantity: 1,
                totalPrice: 12000,
                userId: allUsers[0].id,
                productId: allProducts[3].id,
            },
            {
                quantity: 2,
                totalPrice: 5000,
                userId: allUsers[1].id,
                productId: allProducts[4].id,
            },
            {
                quantity: 1,
                totalPrice: 2500,
                userId: allUsers[2].id,
                productId: allProducts[4].id,
            },
        ],
    });

    console.log("✅ Orders Seeded");

    console.log("🎉 Database Seeded Successfully");
}

main()
    .catch((e) => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });