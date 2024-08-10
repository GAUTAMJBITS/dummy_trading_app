# flutter dummy_trading_app

A new Flutter project.

This app strictly made using the following tech stack only<img width="959" alt="login" src="https://github.com/user-attachments/assets/61d91443-f0a1-4f9e-9a9a-7d238a357a89">
<img width="959" alt="register signup" src="https://github.com/user-attachments/assets/0b44d9e1-40a4-4c3b-b179-28050ae2ba19">
.
Frontend: flutter, dart
Backend: Typescript
Database: Postgresql

## Getting Started
########################################                     PRD                   ###########################################

Product Requirements Document (PRD)
1. Overview
1.1. Product Name
Dummy Trading App

1.2. Purpose
The Dummy Trading App is a simplified version of a trading application that serves as a prototype for potential future trading apps. It allows users to create an account, log in, and reset their password. This document outlines the requirements for the first version of the app.

1.3. Scope
The app will include:

User registration (Sign up)
User login
Password reset (Forgot password)
A basic home screen post-login
1.4. Assumptions and Dependencies
The app will be built using Flutter and Dart for the frontend.
The backend will be developed using TypeScript with Express.js.
PostgreSQL will be used as the database.
Users will need internet access to interact with the backend API.
2. Objectives and Goals
2.1. Goals
Provide a seamless user experience for account creation and login.
Ensure secure handling of user credentials.
Offer a simple and intuitive UI/UX for easy navigation.
Lay a foundation for potential expansion into a fully functional trading app.
2.2. Non-Goals
The app will not include any actual trading functionalities.
The app will not have advanced features such as two-factor authentication (2FA) in this version.
The app will not store sensitive personal data beyond the email and password.
3. Functional Requirements
3.1. User Stories
3.1.1. User Registration (Sign up)
As a user,
I want to create an account by providing my email and password,
so that I can log in and access the app.

Acceptance Criteria:
The user must provide a unique email address.
The user must provide a password with a minimum length of 8 characters.
The app should display an error message if the email is already registered.
On successful registration, the user should be redirected to the login screen.
3.1.2. User Login
As a registered user,
I want to log in by entering my email and password,
so that I can access the home screen of the app.

Acceptance Criteria:
The user must enter a registered email address and the correct password.
The app should display an error message if the credentials are incorrect.
On successful login, the user should be redirected to the home screen.
3.1.3. Password Reset (Forgot Password)
As a user who has forgotten my password,
I want to request a password reset link by providing my email address,
so that I can regain access to my account.

Acceptance Criteria:
The user must enter a registered email address.
The app should simulate sending a password reset link to the provided email.
A confirmation message should be displayed, indicating that the reset link has been sent.
3.1.4. Home Screen
As a logged-in user,
I want to see a home screen,
so that I know I have successfully logged in.

Acceptance Criteria:
The home screen should display a welcome message with the user's email.
The home screen should have an option to log out.
3.2. Functional Flow
User Registration Flow:

User opens the app and navigates to the sign-up screen.
User enters email and password.
Backend checks if the email is unique and creates the user account.
User is redirected to the login screen.
User Login Flow:

User opens the app and navigates to the login screen.
User enters email and password.
Backend validates the credentials.
On success, the user is redirected to the home screen.
Password Reset Flow:

User opens the app and navigates to the forgot password screen.
User enters email address.
Backend simulates sending a password reset link.
User is informed that the reset link has been sent.
Home Screen:

After a successful login, the user is shown the home screen with a welcome message and logout option.
4. Non-Functional Requirements
4.1. Performance
The app should load the login screen within 2 seconds.
The API response time should be under 500ms for all operations.
4.2. Security
User passwords should be stored securely in the database (hashed and salted).
All API calls should be made over HTTPS.
User sessions should be managed securely.
4.3. Usability
The app should be intuitive and easy to navigate.
Error messages should be clear and informative.
The UI should be responsive and work on various Android screen sizes.
4.4. Compatibility
The app should be compatible with Android versions 8.0 and above.
The app should work on various Android devices, including smartphones and tablets.
5. Technical Requirements
5.1. Frontend
Framework: Flutter
Language: Dart
Key Dependencies:
http for API calls
provider for state management
flutter_secure_storage for storing session tokens
5.2. Backend
Framework: Express.js
Language: TypeScript
Key Dependencies:
pg for PostgreSQL integration
body-parser for handling JSON request bodies
5.3. Database
Database System: PostgreSQL
Schema:
Users Table:
id: SERIAL PRIMARY KEY
email: VARCHAR(255) UNIQUE NOT NULL
password: VARCHAR(255) NOT NULL
6. User Interface (UI/UX)
6.1. Design Considerations
The app should have a simple, clean, and modern design.
The primary color should be blue (#2196F3), consistent with the branding.
Error states should be highlighted in red.
6.2. Screens
Login Screen:

Fields: Email, Password
Buttons: Login, Sign Up, Forgot Password
Sign-Up Screen:

Fields: Email, Password
Buttons: Sign Up, Back to Login
Forgot Password Screen:

Fields: Email
Buttons: Send Reset Link, Back to Login
Home Screen:

Text: Welcome, [User’s Email]
Buttons: Logout
7. Risks and Mitigations
7.1. Potential Risks
Risk: Users may enter weak passwords.
Mitigation: Enforce password complexity rules.
Risk: API endpoints may be vulnerable to SQL injection.
Mitigation: Use parameterized queries in the backend.
Risk: User credentials may be intercepted during transmission.
Mitigation: Ensure all API requests are made over HTTPS.
8. Timeline
8.1. Milestones
Week 1:
Set up Flutter project and basic navigation
Design and implement UI for login, sign-up, and forgot password screens
Week 2:
Set up the backend with Express.js and PostgreSQL
Implement user registration and login functionality
Week 3:
Implement password reset functionality
Test end-to-end user flows
Week 4:
Finalize UI/UX
Conduct user acceptance testing (UAT)
Prepare for deployment
9. Success Metrics
9.1. KPIs
User Sign-Up Rate: Percentage of users who successfully sign up after opening the app.
Login Success Rate: Percentage of login attempts that are successful.
Error Rate: Number of errors encountered per 1,000 API calls.
User Satisfaction: Measured through user feedback and ratings.
10. Appendix
10.1. Glossary
PRD: Product Requirements Document
API: Application Programming Interface
UAT: User Acceptance Testing
10.2. References
Flutter Documentation
Express.js Documentation
PostgreSQL Documentation

##################################################################################################################################################3



This project is a starting point for a Flutter application.

A few resources to get you started if this is your first Flutter project:<img width="959" alt="login" src="https://github.com/user-attachments/assets/a24f6402-b5e0-42da-8749-a2d3e07cb4e9">
<img width="959" alt="register signup" src="https://github.com/user-attachments/assets/44c35e28-ab81-41de-ab03-39da08ed831c">
<img width="602" alt="trade 1" src="https://github.com/user-attachments/assets/8f766e4b-4e56-48a9-9acb-0eeb5b2e3337">
<img width="535" alt="trade 2" src="https://github.com/user-attachments/assets/74f6c9c9-a709-478d-97ba-6024df12c106">
<img width="710" alt="trade 3" src="https://github.com/user-attachments/assets/9ef72ae4-f311-4493-94a7-1aae3b7b7441">
<img width="728" alt="trade 4" src="https://github.com/user-attachments/assets/70e6c24d-0662-426a-aaba-125427de6d6b">


- [Lab: Write your first Flutter app](https://flutter.dev/docs/get-started/codelab)
- [Cookbook: Useful Flutter samples](https://flutter.dev/docs/cookbook)

For help getting started with Flutter, view our
[online documentation](https://flutter.dev/docs), which offers tutorials,
samples, guidance on mobile development, and a full API reference.
