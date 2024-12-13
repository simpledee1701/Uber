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


### Example Responce

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
