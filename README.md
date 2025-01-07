# Authentication_system master branch 
Authentication System 

Front end 
Backend 
Mysql 

Authentication System

This project is a responsive and colorful authentication system built with the following technologies:

Backend: Node.js

Frontend: HTML, CSS, JavaScript

Database: MySQL

Features

User Registration

User Login

Password hashing for security

JSON Web Token (JWT) authentication

Responsive and colorful UI design

Project Structure

authentication-system/
│
├── backend/
│   ├── server.js        # Main server file
│   ├── db.js            # MySQL connection
│   ├── routes/
│   │   ├── auth.js      # Authentication routes
│   └── middlewares/
│       └── authMiddleware.js # Middleware for authentication
│
├── frontend/
│   ├── index.html       # Login page
│   ├── signup.html      # Signup page
│   ├── css/
│   │   └── style.css    # Stylesheet
│   ├── js/
│   │   └── main.js      # Frontend JS
│
└── .env                 # Environment variables

Prerequisites

Node.js and npm installed on your system.

MySQL installed and running.

Setup Instructions

1. Clone the Repository

git clone https://github.com/your-username/authentication-system.git
cd authentication-system

2. Install Backend Dependencies

cd backend
npm install

3. Configure Environment Variables

Create a .env file in the backend/ directory and add the following:

DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=auth_system
JWT_SECRET=your_jwt_secret

4. Setup the Database

Run the following SQL commands to create the database and table:

CREATE DATABASE auth_system;
USE auth_system;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

5. Start the Backend Server

node server.js

The backend will run on http://localhost:5000 by default.

6. Serve the Frontend

Open the frontend/ folder in your favorite code editor and use a local web server (e.g., Live Server in VS Code) to serve the frontend files.

Usage

User Registration

Open the signup.html page.

Fill in the form with a username, email, and password.

Click the "Sign Up" button.

If successful, you will receive a success message.

User Login

Open the index.html page.

Enter your registered email and password.

Click the "Login" button.

If successful, you will be logged in and receive a JWT token.

Technologies Used

Backend

Node.js: Server-side JavaScript runtime.

Express.js: Web framework for Node.js.

MySQL: Relational database management.

bcrypt: Password hashing.

jsonwebtoken: Authentication tokens.

Frontend

HTML5: Structure of the web pages.

CSS3: Responsive and colorful design.

JavaScript: Interactivity and API integration.

Additional Tools

dotenv: Environment variable management.

body-parser: Parsing incoming request bodies.

CORS: Cross-origin resource sharing.

Future Enhancements

Add password reset functionality.

Implement user roles and permissions.

Enhance UI/UX with animations and additional feedback.

Add a dashboard for logged-in users.

Implement 2FA (Two-Factor Authentication).

License

This project is licensed under the MIT License. Feel free to use and modify it as per your requirements.

Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

Contact

For any inquiries or feedback, please contact:

Email: mr.mukukakasonde3@gmail.com

GitHub: KASONDE3

