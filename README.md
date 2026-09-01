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

### Phase 2 · Day 8

**Task 8 – Receipts, Refunds & Reconciliation**

The objective of Day 8 was to extend the Razorpay payment infrastructure by implementing receipt retrieval, refund processing, and payment reconciliation, ensuring that payment records can be tracked and compared against gateway transaction data.

The implementation includes:

- Payment receipt retrieval workflow
- Receipt generation and persistence through the existing payment record
- Receipt API for authenticated students
- Payment ownership validation before receipt access
- Captured-payment validation before issuing a receipt
- Razorpay order ID and payment ID tracking in receipts
- Refund workflow for captured payments
- Full and partial refund amount handling
- Refund amount validation
- Prevention of refunds exceeding the original payment amount
- Prevention of refunds for non-captured payments
- Razorpay refund API integration
- Razorpay refund ID tracking
- Refund reason tracking
- Refund status persistence in PostgreSQL
- Payment-to-refund relationship through Prisma
- Payment ownership validation before refund processing
- Reconciliation workflow between local payment data and Razorpay gateway data
- Gateway payment amount verification
- Gateway payment status verification
- Local payment status comparison
- Reconciled and mismatch status handling
- Reconciliation mismatch reason tracking
- Payment-to-reconciliation relationship through Prisma
- Reconciliation records persisted in PostgreSQL
- Receipt, refund, and reconciliation API validation
- Authentication and authorization for payment operations
- Payment service and repository-layer integration
- Payment controller and route integration
- Prisma schema updates for `Refund` and `Reconciliation`
- Prisma migration for receipts, refunds, and reconciliation
- Prisma migration successfully applied to PostgreSQL
- Prisma schema validation completed successfully
- Jest integration test verification
- Existing test suite verified with **20/20 tests passing**
- Real payment receipt retrieval verified successfully
- Razorpay payment data verified directly against the gateway
- Razorpay refund error handling implemented
- Clean handling of Razorpay `BAD_REQUEST_ERROR` responses
- Prevention of local refund persistence when Razorpay rejects a refund
- Payment reconciliation logic confirmed demo-ready
- End-to-end Task 8 payment infrastructure confirmed demo-ready

**Known Razorpay Test Mode Limitation:**

- The captured test payment was successfully verified.
- Receipt retrieval was successfully verified.
- Razorpay rejected the refund request with `BAD_REQUEST_ERROR: invalid request sent`.
- The application now handles this gateway rejection cleanly instead of returning a generic internal server error.
- The refund failure is a Razorpay Test Mode/gateway limitation and does not indicate an incomplete refund implementation.

### Phase 2 · Day 9

**Task 9 – Failure Handling & Resilience**

The objective of Day 9 was to implement and verify deterministic failure handling for payment operations, ensuring that invalid refund requests, Razorpay gateway failures, insufficient refund balance, and reconciliation failures are handled cleanly without corrupting local payment data.

The implementation includes:

- Deterministic payment failure handling
- Refund validation failure handling
- Prevention of refunds for non-existent payments
- Payment ownership validation before refund processing
- Prevention of refunds for payments belonging to another user
- Prevention of refunds for non-captured payments
- Validation for missing Razorpay payment IDs
- Refund amount validation
- Prevention of zero-value refunds
- Prevention of refunds exceeding the original payment amount
- Razorpay refund failure handling
- Razorpay `BAD_REQUEST_ERROR` handling
- Razorpay refund error normalization
- Application-friendly refund error messages
- Razorpay insufficient balance error detection
- Deterministic `RAZORPAY_REFUND_INSUFFICIENT_BALANCE` error handling
- Generic `RAZORPAY_REFUND_ERROR` handling for unknown refund failures
- Preservation of original Razorpay errors for server-side debugging
- Prevention of local refund persistence when Razorpay rejects a refund
- Reconciliation failure handling
- Prevention of reconciliation for non-existent payments
- Payment ownership validation before reconciliation
- Prevention of reconciliation without a Razorpay payment ID
- Payment failure handling at the service layer
- Payment error propagation through the controller layer
- HTTP status code handling for Razorpay refund failures
- Payment failure test coverage using Jest
- Razorpay API mocking for deterministic failure scenarios
- Validation of repository behavior during failed refund operations
- Verification that failed Razorpay refunds do not create local refund records
- Prisma schema validation completed successfully
- Dedicated `payment.failure.test.js` test suite implemented
- Dedicated payment failure test suite verified with **11/11 tests passing**
- Complete existing Jest test suite verified with **31/31 tests passing**
- Refund failure scenarios confirmed deterministic
- Reconciliation failure scenarios confirmed deterministic
- End-to-end payment failure handling confirmed demo-ready

**Failure Handling Verification:**

- Invalid Razorpay refund requests are converted into application-friendly errors.
- Razorpay insufficient balance failures are detected and returned with a deterministic application error code.
- Failed Razorpay refunds do not create local `Refund` records.
- Invalid refund amounts are rejected before contacting Razorpay.
- Unauthorized refund and reconciliation attempts are rejected.
- Reconciliation cannot proceed when the Razorpay payment ID is missing.
- All dedicated payment failure tests passed successfully.
- The complete existing test suite passed successfully with **31/31 tests passing**.

**Task 9 Status: ✅ COMPLETED**

### Phase 2 · Day 10

**Task 10 – Payment Stabilization & Production Readiness**

The objective of Day 10 was to stabilize the payment workflow and make the Razorpay integration resilient against duplicate requests, payment failures, webhook retries, refund failures, and gateway/local payment mismatches while also providing revenue analytics.

The implementation includes:

- Razorpay payment order creation
- Payment persistence in PostgreSQL using Prisma
- Payment verification against Razorpay
- Payment ownership validation
- Payment amount validation during verification
- Payment status validation during verification
- Idempotent payment order creation using `Idempotency-Key`
- Prevention of duplicate payment orders for repeated requests
- Database-level unique idempotency constraints
- Idempotent refund creation using `Idempotency-Key`
- Prevention of duplicate refunds for repeated requests
- Refund amount validation
- Prevention of refunds exceeding the original payment amount
- Razorpay refund failure handling
- Razorpay insufficient balance error detection
- Application-friendly Razorpay refund errors
- Payment reconciliation against Razorpay
- Gateway amount and local amount comparison
- Gateway payment status and local payment status comparison
- Reconciliation mismatch detection
- Reconciliation result persistence
- Razorpay webhook endpoint implementation
- Raw request body handling for webhook signature verification
- Razorpay webhook HMAC-SHA256 signature verification
- `RAZORPAY_WEBHOOK_SECRET` configuration
- `X-Razorpay-Signature` validation
- `payment.captured` webhook handling
- `payment.failed` webhook handling
- Duplicate webhook protection
- Prevention of captured payments being changed back to `FAILED`
- Graceful acknowledgement of unsupported Razorpay webhook events
- Payment failure recovery through webhook processing
- Revenue analytics implementation
- Total payment count calculation
- Captured payment count calculation
- Failed payment count calculation
- Created payment count calculation
- Gross revenue calculation
- Total refund calculation
- Net revenue calculation
- Total refund count calculation
- Automated payment failure test coverage using Jest
- Razorpay failure scenarios mocked for deterministic testing
- Prisma schema validation completed successfully
- Database migration created for payment and refund idempotency
- Complete Jest test suite verified with **33/33 tests passing**
- Webhook failure and duplicate processing verified through Postman
- Payment idempotency verified through repeated Postman requests
- Revenue analytics endpoint verified successfully
- End-to-end payment stabilization workflow confirmed demo-ready

**Payment Stabilization Verification:**

- Repeated payment-order requests with the same `Idempotency-Key` return the existing payment order instead of creating a duplicate Razorpay order.
- Missing `Idempotency-Key` requests are rejected with `IDEMPOTENCY_KEY_REQUIRED`.
- Repeated webhook requests are detected and handled without applying the payment update twice.
- `payment.failed` webhook processing correctly changes a pending local payment to `FAILED`.
- A repeated `payment.failed` webhook is returned with `duplicate: true`.
- Captured payments are protected from being changed back to `FAILED`.
- Razorpay webhook signatures are verified using the configured webhook secret and raw request body.
- Payment reconciliation compares local payment information with the Razorpay gateway state.
- Revenue analytics correctly reports gross revenue, refunds, and net revenue.
- The complete Jest test suite passed successfully with **33/33 tests passing**.

**Task 10 Status: ✅ COMPLETED**

### Phase 2 · Day 11

**Task 11 – Offer Generation & E-Sign Design**

The objective of Day 11 was to implement the offer generation workflow for shortlisted candidates and design the offer data model to support a future e-signature integration while maintaining company ownership and role-based authorization.

The implementation includes:

- Offer data model implementation using Prisma
- Offer persistence in PostgreSQL
- Application-to-offer relationship
- Student-to-offer relationship
- Job-to-offer relationship
- One-offer-per-application constraint
- Offer compensation and currency fields
- Offer joining date support
- Offer lifecycle status tracking
- Offer document URL support
- E-sign provider tracking
- E-sign status tracking
- E-sign request ID tracking
- Signed timestamp tracking
- Company ownership validation during offer generation
- Prevention of unauthorized companies generating offers
- Validation that the application exists
- Validation that only shortlisted candidates can receive offers
- Prevention of duplicate offer generation
- Compensation validation
- Offer generation through the service layer
- Student offer retrieval
- Specific offer retrieval with application and job details
- Company job-offer retrieval
- Role-based access control for offer APIs
- Request validation for offer creation
- Prisma migration for the Offer model
- PostgreSQL persistence verification
- E-sign workflow design using `eSignProvider`, `eSignStatus`, `eSignRequestId`, and `signedAt`
- Offer creation with `DRAFT` status
- Initial eSign state using `NOT_STARTED`
- End-to-end offer generation and retrieval testing through Postman
- Existing automated test suite verification with all 33 tests passing

**Task 11 Status: ✅ COMPLETED**

### Phase 2 · Day 12

**Task 12 – E-Sign Integration & Tamper-Evident Offer Verification**

The objective of Day 12 was to extend the offer workflow with a mock e-signature integration and introduce tamper-evident verification for signed offers using cryptographic hashing.

The implementation includes:

- Mock e-signature provider service implementation
- e-Sign request creation for offers
- Unique e-Sign request ID generation using UUID
- E-sign provider tracking using `MOCK_ESIGN`
- E-sign lifecycle state tracking
- E-sign request status transition from `NOT_STARTED` to `REQUESTED`
- Offer document URL persistence during e-Sign request creation
- Company ownership validation during e-Sign request creation
- Prevention of unauthorized companies requesting e-Sign
- Validation that the offer exists
- Validation that only `DRAFT` offers can enter the e-Sign workflow
- Prevention of duplicate e-Sign requests
- Student offer signing workflow implementation
- Signed offer status transition to `SIGNED`
- E-sign status transition to `SIGNED`
- Signed timestamp persistence using `signedAt`
- Tamper-evident offer hash generation using SHA-256
- Signed offer hash persistence using `signedHash`
- Deterministic hash generation from signed offer data
- Offer hash verification workflow
- Comparison of stored hash against recalculated hash
- Detection of modified signed offer data
- Successful verification when signed offer data remains unchanged
- Failed verification when signed offer data is tampered with
- Restoration and re-verification of the original signed offer
- Offer integrity verification through the service layer
- Company and student authorization checks for offer operations
- Controller and route integration for e-Sign and verification workflows
- Prisma schema update for the `signedHash` field
- Prisma migration for Task 12 changes
- PostgreSQL persistence verification
- Prisma Client regeneration
- End-to-end e-Sign, signing, hashing, and verification testing through Postman
- Existing automated test suite verification with all 33 tests passing
- Controller and route module loading verification

**Task 12 Status: ✅ COMPLETED**

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
- Cryptographic hashing
- SHA-256 tamper-evident verification

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

### Offer Generation & E-Sign Integration

- Prisma-based offer management
- Offer generation for shortlisted candidates
- Offer-to-application relationship
- Offer-to-student relationship
- Offer-to-job relationship
- One-offer-per-application constraint
- Offer compensation and currency tracking
- Joining date support
- Offer lifecycle status tracking
- Offer document URL support
- Mock e-signature provider integration
- E-sign request creation
- Unique e-sign request ID generation
- E-sign provider tracking
- E-sign status tracking
- E-sign request ID tracking
- Signed timestamp tracking
- Signed offer status transition
- Company ownership authorization
- Shortlisted-candidate validation
- Duplicate offer prevention
- Duplicate e-sign request prevention
- Compensation validation
- Draft-offer e-sign workflow validation
- Student offer retrieval
- Specific offer retrieval
- Company job-offer retrieval
- `DRAFT` offer status
- `NOT_STARTED` e-sign status
- `REQUESTED` e-sign status
- `SIGNED` offer status
- `SIGNED` e-sign status
- `signedAt` persistence
- SHA-256 signed offer hashing
- Tamper-evident `signedHash` persistence
- Deterministic signed offer hash generation
- Offer hash verification
- Stored-hash versus calculated-hash comparison
- Signed offer tamper detection
- Cryptographic integrity verification
- PostgreSQL offer and signature metadata persistence

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
- Payment receipt retrieval
- Payment verification
- `CREATED` → `CAPTURED` payment status transition
- Pay-per-application payment gate
- Payment-gated job applications
- Refund processing
- Full and partial refund handling
- Refund amount validation
- Razorpay refund integration
- Razorpay refund ID tracking
- Refund reason tracking
- Refund status tracking
- Payment-to-refund relationship
- Payment reconciliation
- Gateway payment amount verification
- Gateway payment status verification
- Local payment status comparison
- Reconciled and mismatch status tracking
- Reconciliation mismatch reason tracking
- Payment-to-reconciliation relationship
- Razorpay error handling
- Deterministic payment failure handling
- Refund failure handling
- Razorpay insufficient-balance error handling
- Application-friendly Razorpay error normalization
- Prevention of local refund persistence after gateway rejection
- Payment idempotency using `Idempotency-Key`
- Idempotent payment order creation
- Idempotent refund creation
- Duplicate payment request protection
- Duplicate refund request protection
- Database-level unique idempotency constraints
- Razorpay webhook integration
- Raw request body handling for webhook signature verification
- HMAC-SHA256 Razorpay webhook signature verification
- `payment.captured` webhook handling
- `payment.failed` webhook handling
- Duplicate webhook protection
- Webhook payment amount validation
- Safe acknowledgement of unsupported webhook events
- PostgreSQL payment, refund, reconciliation, and idempotency persistence

### Testing

- Jest
- Supertest
- Postman
- Prisma Studio
- Razorpay Test Checkout
- Razorpay payment verification
- Razorpay refund API testing
- Payment receipt testing
- Payment reconciliation testing
- Payment failure testing
- Refund validation failure testing
- Razorpay gateway failure simulation
- Insufficient balance failure simulation
- Deterministic failure-path verification
- Payment idempotency testing
- Refund idempotency testing
- Razorpay webhook testing
- Webhook signature verification testing
- Duplicate webhook testing
- Payment captured webhook testing
- Payment failed webhook testing
- End-to-end payment and application testing
- Offer generation testing
- Offer retrieval testing
- Company job-offer retrieval testing
- Offer authorization testing
- Shortlisted-candidate offer validation testing
- E-sign request testing
- E-sign signing workflow testing
- Signed offer hash generation testing
- Offer hash verification testing
- Offer tamper detection testing
- Signed offer integrity restoration testing

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
│   │   ├── 20260824095038_task7_payment_job_relation/
│   │   │   └── migration.sql
│   │   ├── 20260825115628_task8_receipts_refunds_reconciliation/
│   │   │   └── migration.sql
│   │   ├── 20260827134634_task10_payment_idempotency/
│   │   │   └── migration.sql
│   │   ├── 20260828105957_task11_offer/
│   │   |   └── migration.sql
|   |   └── 20260829134025_task12_esign_tamper_hash/
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
│   │   ├── paymentController.js
│   │   └── offerController.js
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
│   │   ├── paymentRepository.js
│   │   └── offerRepository.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── companyRoutes.js
│   │   ├── jobRoutes.js
│   │   ├── discoveryRoutes.js
│   │   ├── applicationRoutes.js
│   │   ├── paymentRoutes.js
│   │   └── offerRoutes.js
│   │
│   ├── services/
│   │   ├── authService.js
│   │   ├── companyService.js
|   |   ├── esignService.js
│   │   ├── jobService.js
│   │   ├── assessmentService.js
│   │   ├── thresholdRulesEngine.js
│   │   ├── discoveryService.js
│   │   ├── applicationService.js
│   │   ├── paymentService.js
│   │   └── offerService.js
│   │
│   ├── validations/
│   │   ├── authValidation.js
│   │   ├── companyValidation.js
│   │   ├── jobValidation.js
│   │   ├── discoveryValidation.js
│   │   ├── applicationValidation.js
│   │   ├── paymentValidation.js
│   │   └── offerValidation.js
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
│   ├── health.integration.test.js
│   └── payment.failure.test.js
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
| `POST` | `/offers` | JWT + COMPANY role | Generates an offer for a shortlisted candidate |
| `POST` | `/offers/:id/esign` | JWT + COMPANY role | Sends an offer document for e-Signature and creates the e-Sign request |
| `GET` | `/offers` | JWT + STUDENT role | Returns all offers belonging to the authenticated student |
| `GET` | `/offers/:id` | JWT | Returns a specific offer for an authorized student or company |
| `GET` | `/jobs/:jobId/offers` | JWT + COMPANY role | Returns all offers generated for a company-owned job |
| `POST` | `/offers/:id/sign` | JWT + STUDENT role | Signs an e-Sign requested offer and generates a tamper-evident SHA-256 hash |
| `GET` | `/offers/:id/verify` | JWT | Verifies the offer's stored hash against a newly calculated hash to detect document tampering |
| `POST` | `/payments/orders` | JWT | Creates a Razorpay payment order for a specific job and stores the payment record |
| `POST` | `/payments/verify` | JWT | Verifies a Razorpay payment and updates the payment status to `CAPTURED` |
| `GET` | `/payments` | JWT + STUDENT role | Returns payment records belonging to the authenticated student |
| `GET` | `/payments/:paymentId/receipt` | JWT | Retrieves the receipt details for a captured payment |
| `POST` | `/payments/:paymentId/refund` | JWT | Creates a Razorpay refund request for a captured payment and persists the refund record |
| `POST` | `/payments/:paymentId/reconcile` | JWT | Compares the local payment record with Razorpay gateway data and stores the reconciliation result |
| `POST` | `/payments/webhook` | Public + Razorpay Signature | Receives Razorpay webhook events, verifies the webhook signature, and updates local payment status for supported events |
| `GET` | `/payments/analytics/revenue` | JWT + COMPANY role | Returns revenue analytics including total payments, captured payments, failed payments, gross revenue, refunds, and net revenue |

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

## Phase 2 · Day 7

### Task 7 – Task 7: Pay-per-Application Flow (Backend Engineer)

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

 ## Phase 2 · Day 8

### Task 8: Receipts, Refunds & Reconciliation (Backend Engineer)

**Status: ✅ COMPLETED**

### Completed
 - Payment receipt retrieval workflow implemented and verified
 - Authenticated receipt API access verified
 - Captured-payment validation before receipt retrieval implemented
 - Payment ownership authorization for receipt access implemented
 - Receipt details retrieved successfully from PostgreSQL payment records
 - Refund workflow implemented for captured payments
 - Full and partial refund amount handling implemented
 - Refund amount validation implemented
 - Prevention of refunds exceeding the original payment amount implemented
 - Razorpay refund API integration completed
 - Razorpay refund ID tracking implemented
 - Refund reason tracking implemented
 - Refund status persistence implemented
 - `Refund` database model created
 - Payment-to-refund relationship implemented through Prisma
 - Reconciliation workflow implemented
 - Local payment amount compared with Razorpay gateway amount
 - Local payment status compared with Razorpay gateway payment status
 - `RECONCILED` and `MISMATCH` reconciliation statuses implemented
 - Reconciliation mismatch reason tracking implemented
 - `Reconciliation` database model created
 - Payment-to-reconciliation relationship implemented through Prisma
 - Refund and reconciliation database migration created and applied successfully
 - PostgreSQL `Refund` and `Reconciliation` table structures verified
 - Payment service and repository layers extended for Task 8
 - Payment controller and route integration completed
 - Payment request validation implemented
 - Receipt, refund, and reconciliation API routes integrated
 - Payment authentication and authorization verified
 - Prisma schema validation completed successfully
 - Prisma migration status verified
 - Existing Jest integration test suite verified with 20/20 tests passing
 - Real payment receipt retrieval verified successfully
 - Razorpay captured payment details verified against the gateway
 - Razorpay refund error handling implemented
 - Razorpay refund rejection handled cleanly without creating a false local refund record
 - Payment reconciliation logic confirmed
 - Task 8 payment infrastructure confirmed demo-ready

### Razorpay Refund Note

 - Razorpay rejected the refund request with `BAD_REQUEST_ERROR: invalid request sent`
 - The application now handles the Razorpay rejection cleanly and returns a meaningful application-level error
 - No refund is persisted locally when Razorpay rejects the refund request
 - Receipt retrieval and payment reconciliation workflows remain fully functional
 - Refund processing is implemented, with the final refund execution dependent on successful Razorpay gateway acceptance

---

## Phase 2 · Day 9

### Task 9: Failure Handling & Resilience (Backend Engineer)

**Status: ✅ COMPLETED**

### Completed
 - Payment failure handling workflow implemented
 - Deterministic refund validation failures implemented
 - Payment existence validation before refund processing implemented
 - Payment ownership authorization for refund processing implemented
 - Prevention of refunds for non-captured payments implemented
 - Razorpay payment ID validation before refund processing implemented
 - Refund amount validation implemented
 - Prevention of zero or negative refund amounts implemented
 - Prevention of refunds exceeding the original payment amount implemented
 - Razorpay refund rejection handling implemented
 - Razorpay `BAD_REQUEST_ERROR` handling implemented
 - Razorpay insufficient balance failure detection implemented
 - Razorpay refund errors converted into application-friendly errors
 - Meaningful application-level error messages implemented for refund failures
 - Original Razorpay error retained for server-side debugging
 - Prevention of local refund persistence when Razorpay rejects a refund
 - Reconciliation failure handling implemented
 - Payment existence validation before reconciliation implemented
 - Payment ownership authorization for reconciliation implemented
 - Razorpay payment ID validation before reconciliation implemented
 - Payment failure scenarios covered through automated tests
 - Dedicated `payment.failure.test.js` test suite created
 - Refund validation failure scenarios tested
 - Razorpay refund rejection scenario tested
 - Razorpay insufficient balance scenario tested
 - Reconciliation failure scenarios tested
 - Payment service failure paths verified
 - Payment repository interaction verified during failure scenarios
 - Prisma schema validation completed successfully
 - Dedicated payment failure test suite verified with **11/11 tests passing**
 - Full Jest test suite verified with **31/31 tests passing**
 - Deterministic failure responses confirmed
 - Task 9 failure handling and resilience confirmed demo-ready

### Failure Handling Note

 - Razorpay refund requests can be rejected by the gateway with `BAD_REQUEST_ERROR`
 - Razorpay insufficient balance failures are detected and mapped to a dedicated application error code
 - Razorpay gateway rejection does not create a false local refund record
 - Validation failures are rejected before any Razorpay refund request is made
 - Reconciliation failures are handled without creating invalid reconciliation state
 - Payment failure paths are covered by automated Jest tests
 - Failure handling is deterministic and prevents inconsistent local payment data

---

## Phase 2 · Day 10

### Task 10: Payment Stabilization & Production Readiness (Backend Engineer)

**Status: ✅ COMPLETED**

### Completed

- Razorpay payment order creation workflow implemented
- Payment persistence workflow implemented
- Razorpay payment verification implemented
- Payment ownership authorization implemented
- Payment amount validation implemented during verification
- Payment status validation implemented during verification
- Payment order idempotency implemented using `Idempotency-Key`
- Duplicate payment-order prevention implemented
- Database-level unique payment idempotency constraint implemented
- Refund idempotency implemented using `Idempotency-Key`
- Duplicate refund prevention implemented
- Database-level unique refund idempotency constraint implemented
- Razorpay refund failure handling implemented
- Razorpay insufficient balance detection implemented
- Application-friendly Razorpay refund error handling implemented
- Payment reconciliation workflow implemented
- Local payment amount compared with Razorpay gateway amount
- Local payment status compared with Razorpay gateway status
- Reconciliation mismatch detection implemented
- Reconciliation records persisted in the database
- Razorpay webhook endpoint implemented
- Raw request body handling implemented for webhook verification
- Razorpay webhook HMAC-SHA256 signature verification implemented
- `RAZORPAY_WEBHOOK_SECRET` configuration implemented
- `X-Razorpay-Signature` validation implemented
- `payment.captured` webhook processing implemented
- `payment.failed` webhook processing implemented
- Duplicate webhook protection implemented
- Protection against changing captured payments back to `FAILED` implemented
- Unsupported webhook events safely acknowledged
- Payment failure recovery through webhook processing implemented
- Revenue analytics endpoint implemented
- Total payments metric implemented
- Captured payments metric implemented
- Failed payments metric implemented
- Created payments metric implemented
- Gross revenue metric implemented
- Total refunded amount metric implemented
- Net revenue metric implemented
- Total refunds metric implemented
- Payment failure tests maintained and verified
- Razorpay failure scenarios tested with mocked gateway responses
- Payment idempotency tested through Postman
- Webhook signature verification tested through Postman
- Duplicate webhook handling tested through Postman
- Payment failure webhook tested through Postman
- Revenue analytics endpoint tested through Postman
- Prisma schema validation completed successfully
- Task 10 payment idempotency migration created
- Full Jest test suite verified with **33/33 tests passing**
- Payment stabilization workflow confirmed demo-ready

### Payment Stabilization Note

- Payment order creation is protected against duplicate requests through an idempotency key
- Refund creation is protected against duplicate requests through an idempotency key
- Database unique constraints provide an additional layer of idempotency protection
- Razorpay webhook signatures are verified using the raw request body and dedicated webhook secret
- Duplicate webhook deliveries are safely detected and do not repeatedly update payment state
- Captured payments cannot be incorrectly reverted to a failed state through a failure webhook
- Failed payments can be recovered and reflected in local payment state through webhook processing
- Payment reconciliation identifies mismatches between local records and Razorpay gateway data
- Revenue analytics provides gross revenue, refunds, net revenue, and payment-status metrics
- Automated tests confirm deterministic payment failure and refund behavior
- Task 10 payment stabilization and production-readiness requirements are confirmed complete

---

## Phase 2 · Day 11

### Task 11: Offer Generation & E-Sign Design (Backend Engineer)

**Status: ✅ COMPLETED**

### Completed

- Offer data model implemented using Prisma
- Offer database migration created and applied successfully
- Offer persistence workflow implemented
- Application-to-offer relationship implemented
- Student-to-offer relationship implemented
- Job-to-offer relationship implemented
- One-offer-per-application database constraint implemented
- Offer compensation and currency fields implemented
- Offer joining date support implemented
- Offer lifecycle status tracking implemented
- Offer document URL support implemented
- E-sign provider tracking implemented
- E-sign status tracking implemented
- E-sign request ID tracking implemented
- Signed timestamp tracking implemented
- Company ownership validation implemented during offer generation
- Unauthorized company offer generation prevented
- Application existence validation implemented
- Shortlisted-candidate validation implemented
- Duplicate offer generation prevention implemented
- Compensation validation implemented
- Offer generation service implemented
- Student offer retrieval implemented
- Specific offer retrieval implemented
- Company job-offer retrieval implemented
- Role-based authorization implemented for offer APIs
- Offer request validation implemented using Express Validator
- `DRAFT` offer status implemented
- `NOT_STARTED` e-sign status implemented
- E-sign integration data model prepared for future provider integration
- Offer generation successfully tested through Postman
- Student offer retrieval successfully tested through Postman
- Specific offer retrieval successfully tested through Postman
- Company job-offer retrieval successfully tested through Postman
- Prisma schema validation completed successfully
- Prisma migration status verified successfully
- Offer repository module loading verified
- Offer service module loading verified
- Offer controller module loading verified
- Offer routes module loading verified
- Offer validation module loading verified
- Existing automated test suite verified with **33/33 tests passing**

---

## Phase 2 · Day 12

### Task 12: E-Signature Integration & Tamper-Evident Offer Verification (Backend Engineer)

**Status: ✅ COMPLETED**

### Completed

- E-signature workflow implemented for offers
- Mock e-sign provider service implemented
- E-sign request generation implemented
- Unique e-sign request ID generation using `crypto.randomUUID()`
- E-sign provider tracking implemented using `MOCK_ESIGN`
- E-sign request status tracking implemented
- Offer document URL persistence implemented
- Company ownership validation implemented before requesting e-Sign
- Unauthorized companies prevented from requesting e-Sign
- Draft-offer validation implemented before initiating e-Sign
- Duplicate e-sign request prevention implemented
- Required offer ID validation implemented
- Required document URL validation implemented
- E-sign request details persisted to the Offer record
- Offer signing workflow implemented
- Signed offer status transition implemented
- `DRAFT` → `SIGNED` offer lifecycle transition implemented
- `REQUESTED` → `SIGNED` e-sign status transition implemented
- Signed timestamp persistence implemented using `signedAt`
- Tamper-evident signed offer hash implemented using SHA-256
- `signedHash` field added to the Offer data model
- SHA-256 hash generated when an offer is signed
- Signed offer hash persisted in PostgreSQL
- Offer hash verification workflow implemented
- Stored hash compared against a newly calculated hash
- Valid signature verification response implemented
- Tampered-document detection implemented
- Invalid hash verification response implemented when document content changes
- Hash verification exposes both stored and calculated hashes
- Successful hash verification tested through Postman
- Tampered hash verification tested through Postman
- E-sign request successfully tested through Postman
- Offer signing successfully tested through Postman
- Signed offer persisted successfully with `SIGNED` status
- Signed timestamp verified successfully
- Signed hash persistence verified successfully
- Matching stored and calculated hashes verified successfully
- Hash mismatch scenario verified successfully with `valid: false`
- Final hash verification successfully restored to `valid: true`
- Prisma schema updated for tamper-evident offer storage
- Prisma migration created and applied successfully
- Prisma Client regenerated successfully
- Prisma migration status verified successfully
- E-sign service module loading verified successfully
- Offer service module loading verified successfully
- Offer controller module loading verified successfully
- Offer routes module loading verified successfully
- Existing automated test suite verified with **33/33 tests passing**

---

# 🔮 Upcoming Technologies / Phase 2 Roadmap

The upcoming Phase 2 tasks will progressively extend the marketplace backend, company portal, offer and e-signature workflows, payment infrastructure, transaction workflows, and financial operations.

Future areas will include:

- Advanced marketplace data modelling
- Company portal enhancements
- Company profile management
- KYC workflow expansion
- Marketplace discovery
- Search and filtering
- Matching and recommendation logic
- Candidate and assessment workflows
- Offer generation and offer lifecycle management
- E-signature provider integration
- Offer document generation and management
- Candidate offer acceptance and rejection workflows
- Payment and transaction workflows
- Razorpay payment verification and transaction management
- Pay-per-application workflows
- Application and payment state management
- Receipt generation and retrieval
- Refund processing and refund lifecycle management
- Payment reconciliation and gateway transaction matching
- Financial transaction tracking
- Payment failure handling and resilience
- Deterministic gateway error handling
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

