# Full Stack Todo Application for beginners foucing backend

This repository contains a full-stack Todo application that was created during a live coding session while teaching students modern web development concepts. The project demonstrates the implementation of a complete web application using Node.js, Express.js, SQLite, and vanilla JavaScript.

## Project Overview

This Todo application features user authentication, CRUD operations for todos, and a responsive user interface. It was built to teach students various important concepts in web development:

- Backend API development with Express.js
- Database operations with SQLite
- User authentication using JWT (JSON Web Tokens)
- Frontend development with vanilla JavaScript
- CSS styling and responsive design
- RESTful API design principles

## Tech Stack

### Backend

- Node.js
- Express.js
- SQLite (in-memory database)
- JWT for authentication
- bcryptjs for password hashing

### Frontend

- Vanilla JavaScript
- HTML5
- CSS3
- Font Awesome icons
- Custom CSS framework (Fanta.css)

## Features

1. **User Authentication**

   - User registration
   - User login
   - JWT-based authentication
   - Protected routes

2. **Todo Management**

   - Create new todos
   - Read existing todos
   - Update todo status (complete/incomplete)
   - Delete todos
   - Filter todos by status (All/Open/Complete)

3. **User Interface**
   - Responsive design
   - Dark/Light mode support
   - Tab-based navigation
   - Dynamic content updates
   - Error handling and user feedback

## Project Structure

src/
├── server.js # Main application entry point
├── db.js # Database configuration and schema
├── routes/
│ ├── authRoutes.js # Authentication routes
│ └── todoRoutes.js # Todo CRUD routes
└── middleware/
└── authMiddleware.js # JWT authentication middleware

public/
├── index.html # Main HTML file
├── styles.css # Custom styles
└── fanta.css # CSS framework

package.json # Project dependencies and scripts
.env # Environment variables

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```
   PORT=8000
   JWT_SECRET=your_secret_key
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication

- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login existing user

### Todos (Protected Routes)

- `GET /todos` - Get all todos for logged-in user
- `POST /todos` - Create a new todo
- `PUT /todos/:id` - Update a todo's status
- `DELETE /todos/:id` - Delete a todo

## Learning Outcomes

Students who follow along with this project learn:

1. **Backend Development**

   - Setting up an Express.js server
   - Implementing user authentication
   - Creating and managing database operations
   - Building RESTful APIs
   - Middleware implementation

2. **Frontend Development**

   - DOM manipulation
   - Event handling
   - Fetch API usage
   - State management
   - Dynamic UI updates

3. **Development Practices**
   - Project structure organization
   - Environment variable usage
   - Error handling
   - API testing (using REST client)

## Notes for Instructors

This project was designed to be taught in multiple sessions, focusing on different aspects in each session:

1. Initial Setup & Backend Basics
2. Database Integration & API Development
3. Authentication Implementation
4. Frontend Development
5. Styling & UI/UX
6. Testing & Deployment

Feel free to modify the code or structure to better suit your teaching needs.

## Contributing

This is an educational project, but contributions are welcome! Please feel free to submit issues and pull requests.

## License

This project is licensed under the ISC License.
