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

### Phase 2 · Day 3

**Task 3 – Search & Discovery**

The objective of Day 3 was to expose search and discovery APIs that allow users to find published jobs using keywords and filters and receive ranked results.

The implementation includes:

- Job search API
- Keyword-based job search
- Location filtering
- Employment type filtering
- Competency-based search
- Search and filter combinations
- Relevance-based job ranking
- Published-job discovery
- Query parameter validation
- Dedicated discovery controller, service, repository, and routes
- Postman API testing

### Phase 2 · Day 4

**Task 4 – Job Applications & Candidate Shortlisting**

The objective of Day 4 was to implement the job application and candidate shortlisting workflow, allowing students to apply for published jobs and companies to review and shortlist applicants.

The implementation includes:

- Student application API
- Published-job application validation
- Duplicate application prevention
- Student application listing
- Company applicant listing
- Company ownership authorization
- Candidate shortlisting API
- Application status management
- `APPLIED` and `SHORTLISTED` application statuses
- Dedicated application controller, service, repository, validation, and routes
- PostgreSQL persistence for applications
- Role-based access control for students and companies
- Postman API testing
- End-to-end application and shortlisting workflow verification

### Phase 2 · Day 5

**Task 5 – Marketplace Integration & Company Portal v1**

The objective of Day 5 was to stabilize and verify the marketplace APIs through an end-to-end marketplace workflow, ensuring that companies can publish jobs, students can apply, and companies can review and shortlist candidates with changes persisted correctly.

The implementation includes:

- Marketplace integration verification
- End-to-end company job publishing workflow
- Student job application workflow verification
- Company applicant listing verification
- Candidate shortlisting workflow verification
- Application status transition from `APPLIED` to `SHORTLISTED`
- Company ownership authorization verification
- Student and company role-based access control verification
- Duplicate application prevention verification
- Duplicate shortlisting prevention verification
- API response and error-handling verification
- PostgreSQL persistence verification
- Real database state validation after marketplace operations
- Postman API testing
- End-to-end marketplace workflow testing
- Marketplace failure and edge-case testing

### Phase 2 · Day 6

**Task 6 – Payment Integration & Razorpay Order Management**

The objective of Day 6 was to implement and verify the payment infrastructure using Razorpay, enabling authenticated users to create payment orders while maintaining payment records and status information in PostgreSQL.

The implementation includes:

- Razorpay payment gateway integration
- Payment order creation workflow
- Authenticated payment API access
- Payment service and repository implementation
- Razorpay order ID generation and persistence
- Payment record creation in PostgreSQL
- Payment status management with default `CREATED` status
- Support for payment amount and currency
- Razorpay payment ID and receipt tracking
- Payment-to-user relationship through Prisma
- Payment database migration
- Payment API route integration
- Payment request validation
- Payment controller and service-layer separation
- Payment repository and database persistence
- PostgreSQL payment table verification
- Prisma migration status verification
- Real database state validation after payment order creation
- Razorpay integration dependency configuration
- Integration with the existing application routing
- Authentication and authorization verification for payment APIs

### Phase 2 · Day 7

**Task 7 – Pay-per-Application Flow**

The objective of Day 7 was to implement and verify a pay-per-application workflow using Razorpay, ensuring that students must complete and verify a successful payment before they can apply to a published job.

The implementation includes:

- Pay-per-application payment workflow
- Razorpay test mode integration
- Payment order creation for a specific job
- Payment-to-job relationship through Prisma
- Payment-to-user relationship through Prisma
- Published-job validation before payment creation
- Razorpay order creation and persistence
- Payment verification workflow
- Razorpay payment ID tracking
- Razorpay order and payment ownership validation
- Captured payment status verification
- Payment status transition from `CREATED` to `CAPTURED`
- Successful payment verification persistence in PostgreSQL
- Payment gate before job application
- Prevention of job application without a successful payment
- Student application workflow after successful payment
- Existing duplicate application prevention
- Payment controller and service-layer integration
- Payment repository updates for job association and payment verification
- Payment API validation
- Razorpay checkout integration through a test HTML page
- End-to-end payment and application workflow testing
- PostgreSQL payment and application state validation
- Prisma schema migration for payment-to-job relationship
- Prisma migration and schema validation
- Jest integration test verification
- Real database state validation after successful payment and application
- End-to-end Task 7 workflow confirmed demo-ready

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

### Search & Discovery

- Prisma-based job search
- Keyword search
- Location filtering
- Employment type filtering
- Competency-based search
- Relevance-based ranking

### Job Applications & Shortlisting

- Prisma-based application management
- Student job applications
- Published-job validation
- Duplicate application prevention
- Company applicant management
- Candidate shortlisting
- Application status tracking
- Role-based access control

### Marketplace Integration & Company Portal

- End-to-end marketplace workflow
- Company job publishing
- Student application workflow
- Company applicant review
- Candidate shortlisting
- Application status transitions
- Company ownership authorization
- Student and company role-based access control
- Marketplace edge-case validation
- PostgreSQL persistence verification

### Payment Integration

- Razorpay
- Razorpay Test Mode
- Razorpay Checkout
- Payment order creation
- Job-specific payment orders
- Payment-to-user relationship
- Payment-to-job relationship
- Payment order persistence
- Payment status tracking
- Razorpay order ID validation
- Razorpay payment ID persistence
- Payment receipt tracking
- Payment verification
- `CREATED` → `CAPTURED` payment status transition
- Pay-per-application payment gate
- Payment-gated job applications
- PostgreSQL payment persistence

### Testing

- Jest
- Supertest
- Postman
- Prisma Studio
- Razorpay Test Checkout
- End-to-end payment and application testing

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
│   │   ├── 20260820120000_task1_company_marketplace/
│   │   │   └── migration.sql
│   │   ├── 20260820130000_task2_job_skill_thresholds/
│   │   │   └── migration.sql
│   │   ├── 20260822094442_task4_applications_shortlisting/
│   │   │   └── migration.sql
│   │   ├── 20260823065440_task6_payment_model/
│   │   │   └── migration.sql
│   │   └── 20260824095038_task7_payment_job_relation/
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
│   │   ├── jobController.js
│   │   ├── discoveryController.js
│   │   ├── applicationController.js
│   │   └── paymentController.js
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
│   │   ├── jobRepository.js
│   │   ├── discoveryRepository.js
│   │   ├── applicationRepository.js
│   │   └── paymentRepository.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── companyRoutes.js
│   │   ├── jobRoutes.js
│   │   ├── discoveryRoutes.js
│   │   ├── applicationRoutes.js
│   │   └── paymentRoutes.js
│   │
│   ├── services/
│   │   ├── authService.js
│   │   ├── companyService.js
│   │   ├── jobService.js
│   │   ├── assessmentService.js
│   │   ├── thresholdRulesEngine.js
│   │   ├── discoveryService.js
│   │   ├── applicationService.js
│   │   └── paymentService.js
│   │
│   ├── validations/
│   │   ├── authValidation.js
│   │   ├── companyValidation.js
│   │   ├── jobValidation.js
│   │   ├── discoveryValidation.js
│   │   ├── applicationValidation.js
│   │   └── paymentValidation.js
│   │
│   ├── app.js
│   └── server.js
│
├── public/
│   └── payment.html
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
| `POST` | `/auth/signup` | Public | Registers a new user account |
| `POST` | `/auth/login` | Public | Authenticates a user and returns a JWT |
| `POST` | `/companies/signup` | Public | Registers a company and creates its user, profile, and initial KYC record |
| `GET` | `/companies/me` | JWT + COMPANY role | Returns the authenticated company's details, profile, and KYC information |
| `POST` | `/jobs` | JWT + COMPANY role | Creates and publishes a job with skill thresholds |
| `GET` | `/jobs` | JWT + COMPANY role | Returns jobs belonging to the authenticated company |
| `GET` | `/jobs/:id` | JWT + COMPANY role | Returns a specific company job with its thresholds and assessment information |
| `POST` | `/jobs/:id/evaluate` | JWT + COMPANY role | Evaluates candidate skills against the job's skill thresholds |
| `GET` | `/jobs/search` | Public | Searches and filters published jobs with ranked results |
| `GET` | `/jobs/discover` | Public | Discovers published jobs using search, filtering, and ranking criteria |
| `POST` | `/jobs/:id/applications` | JWT + STUDENT role | Allows a student to apply to a published job after successful payment |
| `GET` | `/applications` | JWT + STUDENT role | Returns all applications submitted by the authenticated student |
| `GET` | `/jobs/:id/applications` | JWT + COMPANY role | Returns applications submitted for a specific company job |
| `POST` | `/applications/:id/shortlist` | JWT + COMPANY role | Shortlists an applicant for a company-owned job |
| `POST` | `/payments/orders` | JWT | Creates a Razorpay payment order for a specific job and stores the payment record |
| `POST` | `/payments/verify` | JWT | Verifies a Razorpay payment and updates the payment status to `CAPTURED` |
| `GET` | `/payments` | JWT + STUDENT role | Returns payment records belonging to the authenticated student |

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

## Phase 2 · Day 3

### Task 3 – Search & Discovery

**Status: ✅ COMPLETED**

### Completed
 - Search service implemented
 - Job search functionality implemented
 - Job filtering implemented
 - Job discovery endpoint implemented
 - Published-job filtering implemented
 - Search and filter parameters validated
 - Job ranking implemented
 - Ranked search results verified
 - Discovery results verified
 - Search edge cases tested
 - Authentication and authorization behavior verified where applicable
 - Postman API testing completed
 - Search and discovery workflow tested end-to-end

 ---

## Phase 2 · Day 4

### Task 4 – Job Applications & Candidate Shortlisting

**Status: ✅ COMPLETED**

### Completed
 - Student application service implemented
 - Student job application functionality implemented
 - Published-job application validation implemented
 - Duplicate application prevention implemented
 - Student application listing implemented
 - Company application listing implemented
 - Company job ownership authorization implemented
 - Candidate shortlisting functionality implemented
 - Application status management implemented
 - `APPLIED` and `SHORTLISTED` statuses verified
 - Student and company role-based access control verified
 - Application request validation implemented
 - Application persistence and database relationships verified
 - Postman API testing completed
 - Student application workflow tested end-to-end
 - Company applicant review workflow tested end-to-end
 - Candidate shortlisting workflow tested end-to-end

---

## Phase 2 · Day 5
### Task 5 – Marketplace Integration & Company Portal v1

**Status: ✅ COMPLETED**

### Completed
 - Marketplace integration and API stabilization completed
 - End-to-end marketplace workflow verified
 - Company job publishing workflow verified
 - Student job application workflow verified
 - Company applicant listing workflow verified
 - Candidate shortlisting workflow verified
 - `APPLIED` → `SHORTLISTED` status transition verified
 - Company ownership authorization verified
 - Student and company role-based access control verified
 - Duplicate application prevention verified
 - Duplicate shortlisting prevention verified
 - Marketplace error and edge-case scenarios tested
 - API responses and persistence behavior verified
 - PostgreSQL application state verified after shortlisting
 - Postman API testing completed
 - End-to-end marketplace flow tested successfully
 - Marketplace integration confirmed demo-ready

---

## Phase 2 · Day 6
### Task 6 – Payment Integration & Razorpay Order Management

**Status: ✅ COMPLETED**

### Completed
 - Razorpay payment gateway integration completed
 - Payment order creation workflow implemented and verified
 - Authenticated payment API access verified
 - Payment service and repository layers implemented
 - Razorpay order ID generation and persistence verified
 - Payment records persisted successfully in PostgreSQL
 - Payment status tracking with `CREATED` status implemented
 - Payment amount and currency handling verified
 - Razorpay payment ID and receipt tracking implemented
 - User-to-payment relationship implemented through Prisma
 - Payment database migration created and applied successfully
 - Payment API routes integrated into the application
 - Payment request validation implemented
 - Payment controller, service, and repository separation completed
 - PostgreSQL `Payment` table structure verified
 - Prisma migration status verified
 - Real database payment records verified after order creation
 - Razorpay dependency configuration completed
 - Payment APIs integrated with the existing application
 - Payment authentication and authorization verified
 - Payment integration confirmed demo-ready

---

# 🔮 Upcoming Technologies / Phase 2 Roadmap

The upcoming Phase 2 tasks will progressively extend the marketplace backend, company portal, payment infrastructure, and transaction workflows.

Future areas will include:

- Advanced marketplace data modelling
- Company portal enhancements
- Company profile management
- KYC workflow expansion
- Marketplace discovery
- Search and filtering
- Matching and recommendation logic
- Candidate and assessment workflows
- Payment and transaction workflows
- Razorpay payment verification and transaction management
- Pay-per-application workflows
- Application and payment state management
- Additional security and authorization
- Performance and scalability improvements
- Production-oriented backend architecture
- Further marketplace integration and stabilization

> These technologies and capabilities will be introduced progressively as the corresponding Phase 2 tasks are implemented.

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

