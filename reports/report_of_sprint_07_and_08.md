# Project Report – Sprint 07 and Sprint 08

## Project Name
BAE-Store

## Team Members
- Ayman Abou Hashem
- Bassel Samo
- Eva El Sakka

## Scrum Master
- Bassel Samo

## Product Owner
- Eva El Sakka

## Backlog
You can view our complete backlog [here](bae-store/backlog.md).

## Stories Implemented in These Sprints

### Sprint 07

During Sprint 07, our primary focus was on estimating the effort required for individual backlog items using Planning Poker, utilizing Fibonacci numbers 0, 1, 2, 3, 5, 8, 13, and 21 for scoring. This helped us better understand the workload and allocate resources efficiently. Creating Order model and associate it with users and products might be the trickiest.

We then implemented the Create Operation for Products, allowing administrators to add new products to the store with details such as name, description, price, size, and release date. This functionality ensures that products are correctly saved to the MongoDB database.

Future Product-CRUD stories will be implmented in the next sprints. We already have one for User-schema.

### Sprint 08

We were always ahead with these stories. Kindly refer back to stroy 03.

Back then, We focused on adding login support. We implemented user login functionality, including password hashing using bcrypt. This ensures that users can log in using their username and password, with sessions used to maintain the login state securely.

We also worked on adding user login based on user ID and password, with passwords securely hashed using bcrypt to enhance security.

## Technical Issues and Resolutions

During these sprints, we encountered an issue where products were not displaying correctly in a grid format on the product listing page. We resolved this by adjusting the CSS and grid settings to ensure that products are displayed properly and uniformly in a grid format.

We did a mass styling change to our website.

## Git Repository URL
[BAE-Store Repository](https://github.com/basselsamo/bae-store)

## Reflection

These sprints were crucial in adding essential features and improving the functionality of our application. In Sprint 07, we focused on implementing CRUD operations (partially) for products, ensuring in the near future that administrators can efficiently add, read, update, and delete products. The estimation process are helping us allocate resources effectively and meet our deadlines.

Sprint 08 was dedicated to enhancing the functionality and usability of our application by making some changes to our code logic and updating our styling sheet. We are confident in the stability and usability of the BAE-Store and look forward to future improvements soon.
