# Backend Setup

This repository contains the backend code for a web application that utilizes Express.js, MongoDB, and JSON Web Tokens (JWT) for authentication.

## Prerequisites

- Node.js: Make sure you have Node.js installed. You can download it from [https://nodejs.org/](https://nodejs.org/).

## Getting Started

1. Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd backend
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Configure MongoDB:

    - Create a MongoDB Atlas account or set up a local MongoDB instance.
    - Update the MongoDB connection string in `backend/db.js` with your connection details.

5. Configure JWT Secret:

    - Open `backend/config.js`.
    - Replace the placeholder string in `JWT_SECRET` with a strong, random secret key.

6. Run the server:

    ```bash
    npm start
    ```

    The server should be running at `http://localhost:3000`.

## API Routes

- **Users:**
    - `/api/v1/users/signup`: Sign up a new user.
    - `/api/v1/users/signin`: Sign in a user.
    - `/api/v1/users/update`: Update user information.
    - `/api/v1/users/bulk`: Bulk search users based on filter.

- **Account:**
    - `/api/v1/account/transfer`: Transfer money between accounts.

## Additional Information

- The application uses MongoDB for data storage. Make sure to have a running MongoDB instance.
- JSON Web Tokens (JWT) are used for authentication. Keep the JWT secret key secure and confidential.

Feel free to explore and customize the code to fit your specific requirements!
