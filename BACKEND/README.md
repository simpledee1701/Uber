# User Registration Endpoint

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

### Example Request
 ```json
  -"email": "user@example.com",
  -"fullname": {
    -"firstname": "John",
    -"lastname": "Doe"
  },
  -"password": "securepassword"

### Example Responce

### Success Response
{
  "token": "JWT_TOKEN_HERE",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "user@example.com",
    "password": "hashed_password_here"
  }
}

### Error Responce

{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Firstname Should be more than 3 characters",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "password must be 6 character long",
      "param": "password",
      "location": "body"
    }
  ]
}