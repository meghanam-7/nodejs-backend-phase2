# 🚀 PlaceMux Backend – Phase 2

## 📌 Overview

This repository contains the backend implementation for **PlaceMux – Phase 2**, built as part of the Backend Development / Industry Immersion Program.

Phase 2 builds on the backend foundation completed during Phase 1 and focuses on developing the core marketplace functionality required for the PlaceMux platform.

### Phase 2 · Day 1

**Task 1 – Company Onboarding & Marketplace Data Model**

The objective of Day 1 was to establish the initial marketplace data model and enable companies to register and create their profiles.

The implementation includes:

- Marketplace company data modelling
- Company onboarding
- Company profile creation
- Initial KYC record creation
- PostgreSQL persistence
- JWT-based authenticated company access
- Input validation
- Failure and edge-case handling
- Integration testing
- API documentation

---

# 🛠️ Tech Stack

### Backend

- Node.js
- Express.js
- REST APIs

### Database

- PostgreSQL
- Prisma ORM
- Prisma Client
- Prisma Migrations

### Authentication & Security

- JSON Web Token (JWT)
- bcrypt
- Express Validator
- Role-based authorization
- Rate limiting

### Testing

- Jest
- Supertest
- Postman
- Prisma Studio

### Documentation

- Swagger / OpenAPI

### Development Tools

- Git
- GitHub
- npm

---

# 📁 Project Structure

```text
p2task-node-server/
│
├── prisma/
│   ├── migrations/
│   │   └── 20260820124500_task1_company_marketplace/
│   │       └── migration.sql
│   │
│   ├── schema.prisma
│   └── seed.js
│
├── src/
│   ├── config/
│   │   ├── prismaClient.js
│   │   └── redisConnection.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   └── companyController.js
│   │
│   ├── docs/
│   │   └── swagger.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── authorizationMiddleware.js
│   │   ├── rateLimiter.js
│   │   └── validationMiddleware.js
│   │
│   ├── persistence/
│   │   ├── userRepository.js
│   │   └── companyRepository.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── companyRoutes.js
│   │
│   ├── services/
│   │   ├── authService.js
│   │   └── companyService.js
│   │
│   ├── validations/
│   │   ├── authValidation.js
│   │   └── companyValidation.js
│   │
│   ├── app.js
│   └── server.js
│
├── tests/
│   ├── setup.js
│   ├── auth.integration.test.js
│   ├── authorization.integration.test.js
│   ├── company.integration.test.js
│   ├── docs.integration.test.js
│   └── health.integration.test.js
│
├── .github/
│   └── workflows/
│       └── test.yml
│
├── package.json
├── package-lock.json
├── jest.config.js
├── .gitignore
└── README.md
```

---

# 🌐 Available APIs

| Method | Endpoint | Authentication | Description |
|--------|----------|----------------|-------------|
| `GET` | `/health` | Public | Checks whether the backend server is running |
| `POST` | `/auth/login` | Public | Authenticates a user and returns a JWT |
| `POST` | `/companies/signup` | Public | Registers a company and creates its user, profile, and initial KYC record |
| `GET` | `/companies/me` | JWT + COMPANY role | Returns the authenticated company's details, profile, and KYC information |

---

# 📈 Project Progress

## Day 1 – Company Onboarding & Marketplace Data Model

### 1. Marketplace Data Model

The first step was to extend the Phase 1 database model with the initial marketplace entities required for company onboarding.

Three new entities were introduced:

- `Company`
- `CompanyProfile`
- `CompanyKyc`

The `Company` entity is connected to the existing `User` model.

```text
User
 │
 ▼
Company
 ├── CompanyProfile
 └── CompanyKyc
```

---

### 2. Company Onboarding

Implemented the company onboarding API:

```http
POST /companies/signup
```

The endpoint validates the incoming request and creates the required records.

A successful onboarding creates:

```text
User
   ↓
Company
   ↓
CompanyProfile
   ↓
CompanyKyc
```

The company user is assigned:

```text
role = COMPANY
```

The newly created company initially receives:

```text
status = ONBOARDING
```

---

### 3. Company Profile

A company profile is automatically created during signup.

The profile currently supports fields such as:

- Website
- Description
- Industry
- Company size
- Phone
- Address

The profile is associated with the newly created company.

---

### 4. KYC Initialization

A KYC record is automatically created when the company is onboarded.

The initial KYC status is:

```text
NOT_STARTED
```

This establishes the foundation for the future KYC workflow without implementing the complete KYC verification process in Task 1.

---

### 5. Database Migration

A new Prisma migration was created:

```text
20260820124500_task1_company_marketplace
```

The migration was successfully applied to the existing PostgreSQL database.

The Prisma schema was also validated and introspected successfully.

---

### 6. Authentication Integration

The existing Phase 1 authentication system was reused.

After creating the company account, the company user can authenticate through:

```http
POST /auth/login
```

A JWT is returned after successful authentication.

The JWT is then used to access protected company APIs.

---

### 7. Authenticated Company Access

Implemented:

```http
GET /companies/me
```

The endpoint verifies the JWT and retrieves the authenticated company.

The response includes:

```text
Company
 ├── Company Profile
 └── Company KYC
```

This also verifies that the company data returned by the API is actually persisted in PostgreSQL.

---

### 8. Validation & Failure Handling

The implementation was tested against both successful and failure scenarios.

#### Successful Signup

```text
POST /companies/signup
→ Success
```

#### Duplicate Signup

```text
POST /companies/signup
→ 409 Conflict
```

#### Invalid Signup Data

```text
POST /companies/signup
→ 400 Bad Request
```

#### Unauthenticated Company Access

```text
GET /companies/me
→ 401 Unauthorized
```

#### Authenticated Company Access

```text
GET /companies/me
→ 200 OK
```

---

### 9. Database Persistence Verification

The newly created company data was verified using Prisma Studio.

The following records were confirmed in PostgreSQL:

```text
User
Company
CompanyProfile
CompanyKyc
```

The same data was subsequently retrieved through:

```http
GET /companies/me
```

This verified the complete:

```text
API → PostgreSQL → API
```

flow.

---

### 10. Testing

Task 1 was verified through Postman and the existing integration-test infrastructure.

The following scenarios were successfully tested:

- Health check
- Company signup
- Database persistence
- Company login
- JWT authentication
- Authenticated company retrieval
- Duplicate signup
- Invalid signup
- Unauthorized access
- Authorized access

All tested scenarios passed successfully.

---

# 📊 Current Status

## Phase 2 · Day 1

### Task 1 – Company Onboarding & Marketplace Data Model

**Status: ✅ COMPLETED**

### Completed

- [x] Marketplace entities created
- [x] Prisma migration created
- [x] Migration applied successfully
- [x] Company signup implemented
- [x] Company profile creation implemented
- [x] Initial KYC record implemented
- [x] PostgreSQL persistence verified
- [x] Company authentication verified
- [x] JWT-protected company endpoint implemented
- [x] Input validation implemented
- [x] Duplicate signup handling implemented
- [x] Unauthorized access handling verified
- [x] Integration testing completed
- [x] API testing completed

---

# 🔮 Upcoming Technologies / Phase 2 Roadmap

The upcoming Phase 2 tasks will progressively extend the marketplace backend.

Future areas will include:

- Advanced marketplace data modelling
- Company profile management
- KYC workflow expansion
- Marketplace discovery
- Search and filtering
- Matching and recommendation logic
- Transactions and business workflows
- Additional security and authorization
- Performance and scalability improvements
- Production-oriented backend architecture

> These technologies will be introduced progressively as the corresponding Phase 2 tasks are implemented.

---

# ▶️ How to Run the Project

## 1. Clone the Repository

```bash
git clone <repository-url>
cd p2task-node-server
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Configure Environment Variables

Create a `.env` file in the project root.

Example:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/placemux_backend"
```

Add the remaining environment variables required by the application configuration.

> `.env` is excluded from Git using `.gitignore`.

---

## 4. Generate Prisma Client

```bash
npx prisma generate
```

---

## 5. Apply Database Migrations

```bash
npx prisma migrate deploy
```

---

## 6. Validate Prisma Schema

```bash
npx prisma validate
```

---

## 7. Start the Server

```bash
npm start
```

For development:

```bash
npm run dev
```

---

## 8. Run Tests

```bash
npm test
```

---

## 9. Open Prisma Studio

```bash
npx prisma studio
```

Prisma Studio will be available at:

```text
http://localhost:5555
```

---

# 🎓 Learning Goals

Through Phase 2 · Day 1, the main learning objectives were:

- Designing marketplace-oriented database entities
- Extending an existing Prisma schema safely
- Creating and applying database migrations
- Understanding entity relationships
- Implementing transactional company onboarding
- Creating related database records during registration
- Reusing an existing authentication system
- Implementing JWT-protected APIs
- Applying role-based authorization
- Validating API input
- Handling duplicate and invalid requests
- Verifying real database persistence
- Testing backend APIs using Postman
- Structuring backend code using controllers, services, repositories, routes, and validations

---

# 👨‍💻 Author

**Meghana**

Computer Science Graduate | Backend Developer

### Technical Focus

- Node.js
- Express.js
- PostgreSQL
- Prisma
- REST APIs
- JWT Authentication
- Backend Development

### GitHub

[GitHub Profile](<your-github-profile-link>)

---

# 🚀 Phase 2 · Day 1 Completed

**Task 1 – Company Onboarding & Marketplace Data Model**

**Status: ✅ Completed**

Moving forward to **Phase 2 · Task 2**.