# Project Report – Sprint 03

## Project Name
BAE-Store 

## Team Members
- Ayman Abou Hashem
- Bassel Samo
- Eva El Sakka

## Backlog
You can view our complete backlog [here](bae-store/backlog.md).

## Stories Implemented in This Sprint
- **User Authentication:** Users can now authenticate using their username and password. This involves setting up the authentication logic and user session management.
- **User Registration:** Users can register an account by providing a username and password. The system hashes the password before saving it to the database.
- **User Login:** Users can log in to their account using the credentials provided at registration. The system checks the credentials against the stored hash in the database (which is not implemented yet)

## Technical Issues and Resolutions
- **Issue:** Encountered `MODULE_NOT_FOUND` error when trying to require the `express-ejs-layouts` module.
  - **Resolution:** Realized the module wasn't installed. Fixed by running `npm install express-ejs-layouts` and verified by checking the `node_modules` folder.
- **Issue:** `homeController is not defined` error when setting up routes in `main.js`.
  - **Resolution:** Found that `homeController` was not being imported in `main.js`. Added the correct import statement at the top of the file, `const homeController = require('./controllers/homeController');`.

## Git Repository URL
[BAE-Store Repository](https://github.com/basselsamo/bae-store)

## Reflection
This sprint was challenging but ultimately rewarding. We successfully implemented critical user management features, which form the backbone of our application's functionality. The technical issues we faced, mainly related to module management and correct file importing, were valuable learning opportunities. These challenges underscored the importance of thorough checking of our development environment and dependencies. Moving forward, we aim to refine our setup process to prevent similar issues and improve our deployment workflow.
