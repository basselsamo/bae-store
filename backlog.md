# Project Backlog

## User Stories

### Browse Exclusive Products

As a member of BAE-Store, I want to be able to browse exclusive products, so that I can make valuable purchases before they sell out.

#### Acceptance Criteria:

- **Homepage:** 
  - When I visit the BAE-Store website, I see a homepage displaying featured products and promotions.

- **Product Listing:** 
  - [x] I can navigate to a page that lists all available exclusive products.

- **Product Details:** 
  - [] When I click on a product, I can view its details such as name, description, price, sizes and release date.

- **User Authentication:** 
  - [x] To access exclusive products, I must be authenticated as a BAE-Store member.

- **User Registration:** 
  - [x] If I'm not already a member, I can sign up for BAE-Store membership.

- **User Login:** 
  - [x] As a registered member, I can log in to my account to access exclusive products.

- **User Profile:** 
  - [x] As a member, I want to be redirected to my profile after I log in and would also be able to log out. (s3)

- **Personal Details:** 
  - [x] As a member, I want to be able to update my profile details (username, password...etc) or delete my account. (s4)

- **Add to Cart:** 
  - [] I can add products to my shopping cart for purchase.

- **Checkout Process:** 
  - [] Once I've selected the products I want to purchase, I can proceed to a checkout process to complete my order.

- **Order History:** 
  - [] As a member, I can view my order history to track past purchases.

  **Return History:** 
  - [] As a member, I can view my return history to track past returns.

  **Favorite Products:** 
  - [] As a member, I can view a list of all favorite products that I haven't purchased yet.

  **Account Settings:** 
  - [] As a member, I can access my account settings, control and update them however I like.

- **Real-Time Notifications:** 
  - [] I receive real-time notifications about new exclusive products, promotions order/return status via a notification service.

- **REST API:** 
  - [] There is a REST API available to retrieve product information in JSON format, enabling integration with other services.

### Admin Product Management

As a Site Administrator, I want to be able to manage products at the BAE-Store, so that I can keep the inventory up-to-date.

#### Acceptance Criteria:

- **Admin Dashboard:** 
  - [x] Upon logging in, I have access to an admin dashboard where I can manage site.

- **Add Product:** 
  - [x] From the admin dashboard, I have the option to add a new product by providing details such as name, description, price, etc...

- **Edit Product:** 
  - [x] I can edit existing product details, such as name, description, price, and release date from the admin dashboard.

- **Delete Product:** 
  - [x] I have the ability to delete products that are no longer available or relevant from the admin dashboard.

- **View Product Inventory:** 
  - [x] I can view a list of all products currently available in the BAE-Store inventory from the admin dashboard.

- **Product Image Management:** 
  - [x] I can search through a list of all exisitng products to find a specific one I'm looking for, in order to update or delete it.

- **Category Management:** 
  - [x] I can assign products to specific categories or tags for better organization and filtering on the frontend.

- **Inventory Management:** 
  - [] I can receive notifications when stock is running low.

- **Incoming Orders:**
  - [] I can see a list of all recent orders, and search and filter that list based on order status.

- **Processing Orders:**
  - [] I can click each order individually to view its details, update/delete them and change the processing status accordingly.

- **Incoming Returns:** 
  - [] I can see a list of all recent returns, and search and filter that list based on return status.

  - **Processing Return:**
  - [] I can click each return individually to view its details, update/delete them and change the processing status accordingly.

- **Site Clients:** 
  - [] I can see a list of all site clients, search and filter that list based on specific entries as well as update/delete their data individually.

- **Manage Site Settings:**  
  - [] I can see a list of all site settings, manage and update them accordingly.


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

  ## Sprint 04

### Ticket 1: Set Up MongoDB Database
- **Description:** Install and configure MongoDB for the project, setting up a local development database.
- **Acceptance Criteria:**
  - [x] MongoDB installed locally.
  - [x] Database `bae_store` created and configured.
  - [x] Connection from Node.js application to MongoDB established using Mongoose.

### Ticket 2: Create User Model with Mongoose
- **Description:** Define and implement a User model in Mongoose to handle user data.
- **Acceptance Criteria:**
  - [x] User model created with fields for username and password.
  - [x] Passwords are hashed before saving to the database using bcrypt.
  - [x] Model includes methods for user registration and authentication.

### Ticket 3: Implement User Registration and Login (s3)
- **Description:** Develop user registration and login functionality using the User model.
- **Acceptance Criteria:**
  - [x] Users can register with a username and password.
  - [x] Users can log in using their credentials.
  - [x] Sessions are used to maintain login state across requests.

### Ticket 4: Profile Page and Welcome Message (s3)
- **Description:** After login, users are redirected to their profile page with a welcome message.
- **Acceptance Criteria:**
  - [x] After login, redirect users to a profile page.
  - [x] Profile page displays a welcome message and the user's username.
  - [x] Ensure the session persists and the user remains logged in until they log out.
  - [x] Users can view their current profile information on the profile page.
  
  ## Sprint 05

### Ticket 1: Integrate Controllers and Promises for Database Interactions
- **Description:** Refactoring the app to integrate controllers and use promises to manage database interactions efficiently.
- **Acceptance Criteria:**
  - [x] Implement controllers for all current database interaction routes.
  - [x] Use promises to handle asynchronous database operations.
  - [x] Error handling is improved across all database interactions.
  
### Ticket 2: Implement Enhanced User Registration (s4)
- **Description:** Upgrading the user registration process to include email verification and password confirmation to ensure data integrity and enhance security.
- **Acceptance Criteria:**
  - [x] Users must provide an email address along with their username during registration.
  - [x] Users must confirm their password by entering it twice; registration proceeds only if the passwords match.
  - [x] An initial check for existing username or email is implemented to avoid duplicate entries.
  - [x] Appropriate error messages are displayed if the username or email already exists or if the passwords do not match.
  - [x] Upon successful registration, users are directed to a confirmation page or directly to the login page.

### Ticket 3: Implement Account Deletion Capability (s4)
- **Description:** Providing users with the ability to delete their account from the profile settings page, including a confirmation step to verify user intent and password confirmation to enhance security.
- **Acceptance Criteria:**
  - [x] Users can initiate the account deletion process from the profile details page.
  - [x] Users are required to confirm their password before the account can be deleted.
  - [x] A confirmation prompt is displayed to ensure the user understands that deletion is irreversible.
  - [x] Upon confirmation and correct password entry, the account is deleted from the database.
  - [x] Users are redirected to the homepage with a message confirming account deletion.
  - [x] Appropriate error messages are displayed for incorrect password entries or system errors during the deletion process.

### Ticket 4: Implement Basic User Profile Editing (s4)
- **Description:** Allow users to view and update their profile information stored in the database.
- **Acceptance Criteria:**
  - [x] Users can view their current profile information on the profile page.
  - [x] Users can update their username, password and other personal details.
  - [x] Changes are saved to the MongoDB database.

  ## Sprint 06

### Ticket 1: Implement Product Listing Page
- **Description:** Develop a page that lists all available exclusive products for members to browse.
- **Acceptance Criteria:**
  - [x] A new route is created to serve the product listing page.
  - [x] Product data is fetched from the database and displayed in a grid format.
  - [x] Each product entry includes the title, brand, image, price.
  - [x] Users can click to add product to cart.
  - [x] The page is styled to match the overall site design.

### Ticket 2: Implement Admin Dashboard Access
- **Description:** Create an admin dashboard accessible upon logging in, where the site administrator can manage the site.
- **Acceptance Criteria:**
  - [x] A new route is created for the admin dashboard.
  - [x] Access to the dashboard is restricted to authenticated administrators.
  - [x] The dashboard includes links to manage products, track orders, manage users ...etc.
  - [x] The dashboard is styled to provide a clear and user-friendly interface.

### Ticket 3: User Authentication for Product Listing
- **Description:** Ensure that only authenticated users can access the product listing and product details pages.
- **Acceptance Criteria:**
  - [x] Unauthenticated users attempting to access the product listing or details pages are redirected to the login page.
  - [x] The session persists across pages to maintain the user's authenticated state.

  ## Sprint 07

### Ticket 0 : CRUD operations on the database
- **Description:** Ensure CRUD operations are implemented for all necessary models.
- **Acceptance Criteria:**
  - [x] CRUD operations are implemented for User, and partially Product.
  
#### Ticket 1: Implement Create Operation for Products
- **Description:** Implement the functionality to add new products to the store.
- **Acceptance Criteria:**
  - [x] Admin can add a new product with details such as name, description, price, size, and release date..etc.
  - [x] Product is saved to the MongoDB database.

#### Ticket 2: Implement Read Operation for each Product
- **Description:** Implement the functionality to view product details.
- **Acceptance Criteria:**
  - [x] Admin can view an overview list of all exisiting products and search it for specific product.
  - [] Users can view product details by clicking on a product.
  - [] Product details are fetched from the database and displayed.

#### Ticket 3: Implement Update Operation for Products
- **Description:** Implement the functionality to update product details.
- **Acceptance Criteria:**
  - [x] Admin can update product details from the admin dashboard.
  - [x] Changes are saved to the MongoDB database.

#### Ticket 4: Implement Delete Operation for Products
- **Description:** Implement the functionality to delete a product.
- **Acceptance Criteria:**
  - [x] Admin can delete a product from the admin dashboard.
  - [x] Product is removed from the MongoDB database.

## Sprint 08 (Already Done)

#### Ticket 1: Implement User Login (s3)
- **Description:** Add support for user login, including password hashing.
- **Acceptance Criteria:**
  - [x] Users can log in using their email and password.
  - [x] Passwords are hashed using bcrypt.
  - [x] Sessions are used to maintain login state.

### Ticket 2: User login, password hashing
- **Description:** Add support for user login based on user ID and password.
- **Acceptance Criteria:**
  - [x] Login functionality is implemented.
  - [x] Passwords are securely hashed using bcrypt.
  - [] Users can reset their password when they forget it via a link sent to their email address.

## Sprint 09

#### Ticket 1: Implement User Authentication with Passport.js
- **Description:** Implement user authentication using Passport.js, either by means of the “local” strategy or an external authentication provider.
- **Acceptance Criteria:**
  - [] User authentication implemented with Passport.js.
  - [] Users can log in using the implemented strategy.
  - [] Integration with the chosen authentication provider is functional.

### Topic of the Week: Passport.js
- **Description:** Find a user story which relies on authenticated users and implement it with the help of the Passport library. Optionally include authentication with the help of an external authentication provider such as Google, Twitter, or Facebook.
- **Acceptance Criteria:**
  - [] User story relying on authenticated users is implemented with Passport.js.
  - [] Optional: Authentication with an external provider is included and functional.

## Additional Story (Sprint 09)

### Ticket: Implement Product Filtering Feature
- **Description:** Implement a feature allowing users to filter products based on criteria such as brand, year, gender, etc.
- **Acceptance Criteria:**
  - [x] Users can filter products using various criteria.
  - [x] Filtered results are displayed correctly.
  - [x] The feature is fully integrated into the product listing page.