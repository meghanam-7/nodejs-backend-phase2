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

### Phase 2 · Day 2

**Task 2 – Job Posting with Skill Thresholds**

The objective of Day 2 was to allow companies to publish jobs with minimum skill-level requirements and evaluate candidates against those requirements.

The implementation includes:

- Job posting and publishing
- Competency/skill data modelling
- Job skill threshold modelling
- Skill threshold validation
- Threshold rules engine
- Candidate eligibility evaluation
- Per-job assessment token generation
- Company-only job access using JWT authentication
- Role-based authorization
- PostgreSQL persistence using Prisma
- Competency seed data
- API validation
- Postman API testing

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
- Helmet
- CORS

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
│   │   ├── 20260820124500_task1_company_marketplace/
│   │   │   └── migration.sql
│   │   └── task2_job_skill_thresholds/
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
│   │   ├── companyController.js
│   │   └── jobController.js
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
│   │   ├── companyRepository.js
│   │   └── jobRepository.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── companyRoutes.js
│   │   └── jobRoutes.js
│   │
│   ├── services/
│   │   ├── authService.js
│   │   ├── companyService.js
│   │   ├── jobService.js
│   │   ├── assessmentService.js
│   │   └── thresholdRulesEngine.js
│   │
│   ├── validations/
│   │   ├── authValidation.js
│   │   ├── companyValidation.js
│   │   └── jobValidation.js
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

---

# 🌐 Available APIs

| Method | Endpoint | Authentication | Description |
|--------|----------|----------------|-------------|
| `GET` | `/health` | Public | Checks whether the backend server is running |
| `POST` | `/auth/login` | Public | Authenticates a user and returns a JWT |
| `POST` | `/companies/signup` | Public | Registers a company and creates its user, profile, and initial KYC record |
| `GET` | `/companies/me` | JWT + COMPANY role | Returns the authenticated company's details, profile, and KYC information |
| `POST` | `/jobs` | JWT + COMPANY role | Creates and publishes a job with skill thresholds |
| `GET` | `/jobs` | JWT + COMPANY role | Returns jobs belonging to the authenticated company |
| `GET` | `/jobs/:id` | JWT + COMPANY role | Returns a specific company job with its thresholds and assessment information |
| `POST` | `/jobs/:id/evaluate` | JWT + COMPANY role | Evaluates candidate skills against the job's skill thresholds |

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

## Phase 2 · Day 2

### Task 2 – Job Posting with Skill Thresholds

**Status: ✅ COMPLETED**

### Completed

- [x] Job data model implemented
- [x] Competency data model implemented
- [x] Job skill threshold model implemented
- [x] Prisma migration created and applied
- [x] Competency seed data added
- [x] Job creation implemented
- [x] Job publishing implemented
- [x] Skill threshold validation implemented
- [x] Threshold rules engine implemented
- [x] Candidate eligibility evaluation implemented
- [x] Per-job assessment token generation implemented
- [x] Company-only job access implemented
- [x] JWT authentication verified
- [x] Role-based authorization verified
- [x] Job retrieval APIs implemented
- [x] Postman API testing completed
- [x] Passing candidate evaluation verified
- [x] Failing candidate evaluation verified

### Task 2 Flow

```text
Company
   ↓
Create Job
   ↓
Add Skill Thresholds
   ↓
Validate Thresholds
   ↓
Publish Job
   ↓
Generate Assessment Token
   ↓
Evaluate Candidate Skills
   ↓
Determine Eligibility
```
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
- Candidate and assessment workflows
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

## 2. Install
```bash
npm install
```

## 3. Prisma
```bash
npx prisma generate
npx prisma migrate deploy
npx prisma db seed
```

## 4. Start the Server
```bash
npm start
```

---

# 👩‍💻 Author

**Meghana M.**

Computer Science Graduate | Backend Developer (Node.js) | Aspiring Software Engineer

GitHub: https://github.com/meghanam-7

