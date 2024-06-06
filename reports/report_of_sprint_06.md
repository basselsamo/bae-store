# Project Report – Sprint 06

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

## Stories Implemented in This Sprint
- **Product Listing Page:** We developed a new page that lists all available exclusive products for members to browse. The page includes product titles, brands, images, and prices, and users can click to add products to their cart (adding to cart still not implemented).
- **Admin Dashboard Access:** We created an admin dashboard accessible upon logging in, allowing site administrators to manage products, track orders, and manage users. The dashboard is restricted to authenticated administrators and is styled for a clear and user-friendly interface.
- **User Authentication for Product Listing:** We ensured that only authenticated users can access the product listing and product details pages. Unauthenticated users attempting to access these pages are redirected to the login page, with session persistence across pages.

## Technical Issues and Resolutions
- **Issue:** Products were not displaying correctly in a grid format on the product listing page.
  - **Resolution:** We adjusted the CSS and grid settings to ensure that products are displayed properly and uniformly in a grid format.

## Git Repository URL
[BAE-Store Repository](https://github.com/basselsamo/bae-store)

## Reflection
This sprint was pivotal in enhancing the user interface and administrative capabilities of our application. By implementing the product listing page, we provided a more dynamic and user-friendly browsing experience for our members. The admin dashboard access has significantly streamlined site management for administrators, making it easier to track orders, manage products, and handle user data. The focus on user authentication ensured that our members' data remains secure, enhancing the overall trustworthiness of our platform. Addressing the technical issues related to product display and admin permissions further solidified the robustness of our application. Moving forward, we aim to continue improving the user experience and administrative functionalities while maintaining high security standards.
