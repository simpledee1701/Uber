# Uber Clone - Full Stack Application

A comprehensive Uber-like ride-sharing application built with React.js frontend and Node.js backend, featuring real-time communication, maps integration, and complete ride booking functionality.

## 🚀 Features

### For Users
- **User Authentication**: Register, login, and logout functionality
- **Profile Management**: View and manage user profiles
- **Location Services**: Search and select pickup/drop locations
- **Ride Booking**: Book rides with different vehicle types
- **Real-time Tracking**: Track driver location in real-time
- **Ride History**: View past rides and booking details

### For Captains (Drivers)
- **Captain Registration**: Register as a driver with vehicle details
- **Ride Management**: Accept/decline ride requests
- **Real-time Communication**: Live updates on ride status
- **Earnings Tracking**: Monitor ride earnings and history

### Technical Features
- **Real-time Communication**: WebSocket integration using Socket.io
- **Maps Integration**: Interactive maps for location selection and tracking
- **Authentication**: JWT-based secure authentication
- **Responsive Design**: Mobile-first responsive UI using Tailwind CSS
- **State Management**: Context API for global state management

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **React Router DOM**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **GSAP**: Advanced animations
- **Socket.io Client**: Real-time communication
- **Axios**: HTTP client for API requests
- **React Icons**: Icon library

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **Socket.io**: Real-time bidirectional communication
- **JWT**: JSON Web Tokens for authentication
- **bcrypt**: Password hashing
- **CORS**: Cross-origin resource sharing
- **Express Validator**: Input validation middleware

## 📁 Project Structure

```
Uber/
├── BACKEND/
│   ├── controllers/         # Route controllers
│   │   ├── captain.controller.js
│   │   ├── maps.controller.js
│   │   ├── ride.controller.js
│   │   └── user.controller.js
│   ├── models/             # Database models
│   │   ├── blacklistToken.model.js
│   │   ├── captain.model.js
│   │   ├── ride.model.js
│   │   └── user.model.js
│   ├── routes/             # API routes
│   │   ├── captain.routes.js
│   │   ├── maps.routes.js
│   │   ├── ride.routes.js
│   │   └── user.routes.js
│   ├── services/           # Business logic
│   │   ├── captain.service.js
│   │   ├── maps.service.js
│   │   ├── ride.service.js
│   │   └── user.service.js
│   ├── middlewares/        # Custom middlewares
│   │   └── auth.middleware.js
│   ├── db/                 # Database configuration
│   │   └── db.js
│   ├── app.js              # Express app configuration
│   ├── server.js           # Server entry point
│   └── socket.js           # Socket.io configuration
│
├── FRONTEND/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── CaptainDetails.jsx
│   │   │   ├── ConfirmedRide.jsx
│   │   │   ├── ConfirmRidePopUp.jsx
│   │   │   ├── FinishRide.jsx
│   │   │   ├── LocationSearchPanel.jsx
│   │   │   ├── LookingForDriver.jsx
│   │   │   ├── RidePopUp.jsx
│   │   │   ├── VehiclePanel.jsx
│   │   │   └── WaitForDriver.jsx
│   │   ├── pages/          # Main pages
│   │   │   ├── CaptainHome.jsx
│   │   │   ├── CaptainLogin.jsx
│   │   │   ├── CaptainProtectWrapper.jsx
│   │   │   ├── CaptainRiding.jsx
│   │   │   ├── CaptainSignup.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Riding.jsx
│   │   │   ├── Start.jsx
│   │   │   ├── UserLogin.jsx
│   │   │   ├── UserLogout.jsx
│   │   │   ├── UserProtectedWrapper.jsx
│   │   │   └── UserSignup.jsx
│   │   ├── context/        # React Context providers
│   │   │   ├── CaptainContext.jsx
│   │   │   ├── SocketContext.jsx
│   │   │   └── UserContext.jsx
│   │   ├── assets/         # Static assets
│   │   ├── App.jsx         # Main App component
│   │   └── main.jsx        # Application entry point
│   ├── public/             # Public assets
│   └── index.html          # HTML template
└── package.json            # Root dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/simpledee1701/Uber.git
cd Uber
```

2. **Install root dependencies**
```bash
npm install
```

3. **Setup Backend**
```bash
cd BACKEND
npm install
```

4. **Setup Frontend**
```bash
cd ../FRONTEND
npm install
```

### Environment Variables

Create a `.env` file in the `BACKEND` directory with the following variables:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/uber-clone
# or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/uber-clone

# JWT Secret
JWT_SECRET=your_jwt_secret_key

# Server Configuration
PORT=3000

# Maps API (if using external maps service)
MAPS_API_KEY=your_maps_api_key

# Other service keys
GOOGLE_MAPS_API=your_google_maps_api_key
```

### Running the Application

1. **Start the Backend Server**
```bash
cd BACKEND
npm start
# or for development with nodemon
npm run dev
```

2. **Start the Frontend Development Server**
```bash
cd FRONTEND
npm run dev
```

3. **Access the Application**
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

## 📱 Usage

### For Users
1. **Registration/Login**: Create an account or log in with existing credentials
2. **Book a Ride**: 
   - Enter pickup and destination locations
   - Select vehicle type (car, motorcycle, auto)
   - Confirm booking and wait for driver acceptance
3. **Track Ride**: Monitor driver location and estimated arrival time
4. **Complete Ride**: Rate the driver and view ride summary

### For Captains
1. **Registration**: Sign up as a captain with vehicle details
2. **Go Online**: Start accepting ride requests
3. **Accept Rides**: View and accept/decline incoming ride requests
4. **Complete Rides**: Navigate to pickup location, complete the ride
5. **Earnings**: Track daily/weekly earnings

## 🔧 API Documentation

### User Endpoints

#### Register User
```
POST /users/register
Content-Type: application/json

{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Login User
```
POST /users/login
Content-Type: application/json

{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Get User Profile
```
GET /users/profile
Authorization: Bearer <jwt_token>
```

#### Logout User
```
GET /users/logout
Authorization: Bearer <jwt_token>
```

### Captain Endpoints
- `POST /captains/register` - Register new captain
- `POST /captains/login` - Captain login
- `GET /captains/profile` - Get captain profile
- `GET /captains/logout` - Captain logout

### Ride Endpoints
- `POST /rides/create` - Create new ride
- `GET /rides/:id` - Get ride details
- `POST /rides/:id/start` - Start ride
- `POST /rides/:id/end` - End ride

### Maps Endpoints
- `GET /maps/get-coordinates` - Get location coordinates
- `GET /maps/get-distance-time` - Calculate distance and time
- `GET /maps/get-suggestions` - Get location suggestions

For detailed API documentation, see [Backend README](./BACKEND/README.md).

## 🎨 Features in Detail

### Real-time Communication
- **Socket.io Integration**: Bi-directional communication between users and captains
- **Live Location Tracking**: Real-time updates of driver/user locations
- **Instant Notifications**: Immediate updates on ride status changes

### Authentication & Security
- **JWT Tokens**: Secure stateless authentication
- **Password Hashing**: bcrypt for secure password storage
- **Token Blacklisting**: Secure logout with token invalidation
- **Route Protection**: Protected routes for authenticated users

### User Experience
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Smooth Animations**: GSAP and Framer Motion for enhanced UX
- **Interactive Maps**: Real-time location selection and tracking
- **Loading States**: Proper loading indicators for better UX

## 🚀 Deployment

### Backend Deployment
1. Set up environment variables on your hosting platform
2. Deploy to services like Heroku, DigitalOcean, or AWS
3. Ensure MongoDB connection is properly configured

### Frontend Deployment
1. Build the production version:
```bash
cd FRONTEND
npm run build
```
2. Deploy the `dist` folder to platforms like Netlify, Vercel, or Surge

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Authors

- **Deepak V** - [@simpledee1701](https://github.com/simpledee1701)

## 🙏 Acknowledgments

- React.js team for the amazing framework
- Express.js community for the robust backend framework
- Socket.io for real-time communication capabilities
- Tailwind CSS for the utility-first CSS framework
- All contributors and open-source libraries used in this project

## 📞 Support

For support, email deepak@example.com or create an issue in the GitHub repository.

---

**Happy Coding! 🚗💨**