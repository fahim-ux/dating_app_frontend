# Dating App - Mobile Application


## 📱 Overview
Dating App is a modern mobile application built with React Native that helps users find meaningful connections based on their interests, preferences, and location. The app features an intuitive user interface, real-time messaging, and sophisticated matching algorithms.

## ✨ Features
- **User Authentication:** Secure login and signup system
- **User Profiles:** Create and customize detailed profiles
- **Matching Algorithm:** Smart matching based on preferences and interests
- **Real-time Messaging:** Chat with your matches instantly
- **Location Services:** Find matches nearby
- **Privacy Controls:** Manage who sees your profile and information

## 📸 Screenshots
<table>
  <tr>
    <td align="center">
      <img src="[https://images.coderfolks.me/images/app_land.jpg]" width="200" alt="Landing Page"/>
      <br /><b>Landing Page</b>
    </td>
    <td align="center">
      <img src="[https://images.coderfolks.me/images/app_login.jpg" width="200" alt="Login Screen"/>
      <br /><b>Login Screen</b>
    </td>
  </tr>
</table>


## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or later)
- npm or yarn
- React Native development environment set up ([follow the official guide](https://reactnative.dev/docs/environment-setup))

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/dating-app.git
   cd dating-app
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Create a `.env` file in the root of the project with your API keys.
4. Start Metro bundler:
   ```sh
   npx react-native start
   ```
5. Run on Android/iOS:
   ```sh
   npx react-native run-android  # For Android
   npx react-native run-ios      # For iOS
   ```

## 📄 API Documentation
The application uses a dedicated backend server for handling user data, authentication, and messaging. The API endpoints are as follows:

### **Base URL**
- [BACKEND_URL](https://dating-app-backend.coderfolks.me/)

### **Authentication Endpoints**
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login a user
- `GET /auth/me` - Get current user information

### **User Endpoints**
- `GET /users` - Get user list based on preferences
- `GET /users/:id` - Get specific user profile
- `PUT /users/:id` - Update user profile
- `PUT /users/:id/preferences` - Update user preferences

### **Matching Endpoints**
- `POST /matches` - Create a new match
- `GET /matches` - Get all matches
- `DELETE /matches/:id` - Unmatch a user

### **Messaging Endpoints**
- `POST /messages` - Send a new message
- `GET /messages/:matchId` - Get conversation history
- `PUT /messages/:id/read` - Mark message as read



## 📝 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team
- **@fahim-ux** - Developer
- **@fox-trap** - UI/UX Designer

## 🔗 Links
- [Backend Repository](https://github.com/fahim-ux/dating_app_backend)
- [Project Board](https://github.com/your-repo/projects)
- [Documentation](https://your-docs-url.com)