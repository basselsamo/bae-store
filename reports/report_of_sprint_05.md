# Project Report – Sprint 05

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
- **Enhanced User Registration:** Registration now requires an email address in addition to a username and password, and users must confirm their password before submitting the form.
- **Account Deletion Capability:** Users can now delete their accounts from the profile settings page. This action requires password confirmation and is irreversible, which we ensured with a confirmation prompt.
- **Profile Editing:** Users can update their profile details, including username, email, and contact information, directly from their profile settings page.

## Technical Issues and Resolutions
- **Issue:** Users were able to submit the registration form with unmatching passwords.
  - **Resolution:** Implemented front-end JavaScript validation to check for password match before the form submission, alongside back-end validation to catch any discrepancies.
- **Issue:** After implementing account deletion, some users were still able to access their profiles until the session expired.
  - **Resolution:** Enhanced session management to destroy the user's session immediately upon account deletion, ensuring they are logged out and redirected to the homepage instantly.

## Git Repository URL
[BAE-Store Repository](https://github.com/basselsamo/bae-store)

## Reflection
This sprint focused heavily on enhancing user interaction and security features within our application. The introduction of email verification and password confirmation significantly improved the integrity of our user registration process. The ability to delete accounts added an important aspect of user control over personal data, aligning our application with better privacy practices. Implementing these features brought to light several challenges, particularly around session management and form validations. These challenges were valuable in strengthening our backend logic and ensuring robustness in our application's functionality. As we move forward, we aim to continue enhancing user experience and security, and to streamline our deployment and testing processes to accommodate the increasingly complex functionalities.
