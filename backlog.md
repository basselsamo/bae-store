# Project Backlog

## User Stories

### User Story 1: Browse Exclusive Products

As a member of BAE-Store, I want to be able to browse exclusive products before their public release, so that I can make purchases before they sell out.

#### Acceptance Criteria:

- **Homepage:** 
  - When I visit the BAE-Store website, I see a homepage displaying featured products and promotions.

- **Product Listing:** 
  - I can navigate to a page that lists all available exclusive products.

- **Product Details:** 
  - When I click on a product, I can view its details such as name, description, price, sizes and release date.

- **User Authentication:** 
  - To access exclusive products, I must be authenticated as a BAE-Store member.

- **User Registration:** 
  - If I'm not already a member, I can sign up for BAE-Store membership.

- **User Login:** 
  - As a registered member, I can log in to my account to access exclusive products.

- **Add to Cart:** 
  - I can add products to my shopping cart for purchase.

- **Checkout Process:** 
  - Once I've selected the products I want to purchase, I can proceed to a checkout process to complete my order.

- **Order History:** 
  - As a member, I can view my order history to track past purchases.

- **Real-Time Notifications:** 
  - I receive real-time notifications about new exclusive products or promotions via a notification service.

- **REST API:** 
  - There is a REST API available to retrieve product information in JSON format, enabling integration with other services.

### User Story 2: Admin Product Management

As a Site Administrator, I want to be able to add new products to the BAE-Store, so that I can keep the inventory up-to-date.

#### Acceptance Criteria:

- **Admin Dashboard:** 
  - Upon logging in, I have access to an admin dashboard where I can manage products.

- **Add Product:** 
  - From the admin dashboard, I have the option to add a new product by providing details such as name, description, price, size and release date.

- **Edit Product:** 
  - I can edit existing product details, such as name, description, price, and release date, from the admin dashboard.

- **Delete Product:** 
  - I have the ability to delete products that are no longer available or relevant from the admin dashboard.

- **View Product Inventory:** 
  - I can view a list of all products currently available in the BAE-Store inventory from the admin dashboard.

- **Product Image Management:** 
  - I can upload, update, or remove product images to accompany product listings.

- **Category Management:** 
  - I can assign products to specific categories or tags for better organization and filtering on the frontend.

- **Inventory Management:** 
  - I can track inventory levels for each product and receive notifications when stock is running low.

## Sprint 01

### Ticket 1: Project Setup and Planning
- **Description:** Set up the project environment, define structure, and finalize user stories.
- **Acceptance Criteria:**
  - [x] Node.js installed.
  - [x] Project architecture defined.
  - [x] User stories finalized.

### Ticket 2: Basic Node App Development
- **Description:** Develop a Node.js application serving static files with CRUD operations and REST API.
- **Acceptance Criteria:**
  - [x] Basic Node app created.
  - [x] CRUD operations implemented for at least one model (userStory).
  - [x] REST API serving JSON data (userStory).

### Ticket 3: User Authentication and Real-Time Communication
- **Description:** Implement user authentication and real-time communication.
- **Acceptance Criteria:**
  - [x] User authentication functionality added (userStory).
  - [x] Basic real-time communication service set up (userStory).

## Sprint 02

### Ticket 1: Setup and Planning
- **Description:** Define project backlog and setup initial development environment.
- **Acceptance Criteria:**
  - [x] Backlog created.
  - [x] Initial development environment setup.

### Ticket 2: Express.js Installation and Understanding
- **Description:** Install and understand Express.js framework.
- **Acceptance Criteria:**
  - [x] Product Owner : Eva El Sakka
  - [x] Express.js installed.
  - [x] Basic understanding of Express.js framework achieved.

### Ticket 3: Middleware and Routes Implementation
- **Description:** Implement middleware and routes in Express app.
- **Acceptance Criteria:**
  - [x] Middleware setup completed.
  - [x] Routes implemented with at least one utilizing a parameter (s1).

## Sprint 03

### Ticket 1: Adding Views and Error Handling
- **Description:** Add views and error handling to the Express app.
- **Acceptance Criteria:**
  - [x] Views integrated.
  - [x] Error handling implemented.

### Ticket 2: Migration of Existing Views
- **Description:** Migrate any existing views to the Express app if applicable.
- **Acceptance Criteria:**
  - [x] Existing views successfully migrated.
  - [x] Views functioning correctly within Express app.

### Ticket 3: Passing Content to Views
- **Description:** Implement passing content from controller to view and displaying it.
- **Acceptance Criteria:**
  - [x] Controller passes content to view.
  - [x] Content correctly displayed in view.
