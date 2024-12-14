# Backend API Docs

## Endpoint
`POST /users/register`

## Description
This endpoint allows a new user to register by providing their email, first name, last name, and password. Upon successful registration, a JSON Web Token (JWT) is generated and returned, which can be used for authentication in subsequent requests.

## Request Body
The request body must be in JSON format and should include the following fields:

- `email` (string, required): The email address of the user. It must be a valid email format.
- `fullname` (object, required): An object containing the user's name.
  - `firstname` (string, required): The first name of the user. It must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the user. It must be at least 3 characters long if provided.
- `password` (string, required): The password for the user account. It must be at least 6 characters long.


### Responce

### Success Response
- **Status Code:** `201 Created`
- **Content:**
  - **`token`**: JWT token for authentication.
  - **`user`**: Object containing user details.
    - **`fullname`**: 
      - **`firstname`**: User's first name.
      - **`lastname`**: User's last name.
    - **`email`**: User's email address.
    - **`password`**: Hashed password.



### Error Responses
- **Status Code:** `400 Bad Request`
  - **Content:**
    - **`errors`**: Array of error objects.
      - **`msg`**: Error message.
      - **`param`**: The parameter that caused the error.
      - **`location`**: The location of the error (e.g., body).



### Notes
- Ensure that the email provided is unique and not already registered in the system.
- Passwords are hashed before being stored in the database for security purposes.
- The generated JWT token should be stored securely by the client for future authentication.

---

## User Login Endpoint

### Endpoint
`POST /users/login`

### Description
This endpoint allows an existing user to log in by providing their email and password. Upon successful login, a JSON Web Token (JWT) is generated and returned for authentication in subsequent requests.

### Request Body
The request body must be in JSON format and should include the following fields:

- **`email`** (string, required): 
  - The email address of the user.
  - Must be a valid email format.

- **`password`** (string, required): 
  - The password for the user account.


### Responses

#### Success Response
- **Status Code:** `200 OK`
- **Content:**
  - **`token`**: JWT token for authentication.
  - **`user`**: Object containing user details.
    - **`fullname`**: 
      - **`firstname`**: User's first name.
      - **`lastname`**: User's last name.
    - **`email`**: User's email address.
    - **`password`**: Hashed password.


# User Profile Endpoint

## Endpoint
`GET /users/profile`

## Description
This endpoint retrieves the profile information of the authenticated user. It returns the user's details such as their name and email.

## Authentication Required
Yes (uses `authMiddleware`)

## Request Headers
- **`Authorization`** (string, required): Bearer token (JWT) for authentication.

## Responses

### Success Response
- **Status Code:** `200 OK`
- **Content:**
  ```json
  {
      "id": "user_id",
      "fullname": {
          "firstname": "John",
          "lastname": "Doe"
      },
      "email": "john.doe@example.com"
      // other user fields...
  }

## User Logout Endpoint

### Endpoint
`GET /users/logout`

### Description
This endpoint logs out the authenticated user by clearing the authentication token from the cookies and adding it to a blacklist to prevent further use.

### Authentication Required
Yes (uses `authMiddleware`)

### Request Headers
- **`Authorization`** (string, required): Bearer token (JWT) for authentication.

### Responses

#### Success Response
- **Status Code:** `200 OK`
- **Content:**
  ```json
  {
      "message": "Logged out successfully"
  }

