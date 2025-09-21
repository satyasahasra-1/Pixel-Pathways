# Firebase Authentication Setup

This project includes a complete Firebase Authentication setup with HTML, CSS, and JavaScript (no React).

## Files Created

1. **firebase-config.js** - Firebase initialization and auth object export
2. **login.html + js/login.js** - Login page with email/password authentication
3. **signup.html + js/signup.js** - Signup page for user registration
4. **welcome.html + js/welcome.js** - Welcome page after successful login
5. **css/auth-styles.css** - Modern, responsive CSS styling

## Setup Instructions

### 1. Firebase Project Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Enable Authentication:
   - Go to Authentication > Sign-in method
   - Enable Email/Password provider
4. Get your Firebase configuration:
   - Go to Project Settings > General
   - Scroll down to "Your apps" section
   - Click "Add app" and select Web
   - Copy the Firebase configuration object

### 2. Configure Firebase

1. Open `firebase-config.js`
2. Replace the placeholder values with your actual Firebase configuration:

```javascript
const firebaseConfig = {
    apiKey: "your-actual-api-key",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "your-app-id"
};
```

### 3. Run the Application

1. Install live-server globally (if not already installed):
   ```bash
   npm install -g live-server
   ```

2. Start the development server:
   ```bash
   npx live-server
   ```

3. Open your browser and navigate to:
   - `http://localhost:8080/login.html` - Login page
   - `http://localhost:8080/signup.html` - Signup page

## Features

### Login Page (`login.html`)
- Email/password authentication
- Remember me functionality
- Forgot password link
- Error handling with user-friendly messages
- Redirects to welcome page on successful login

### Signup Page (`signup.html`)
- User registration with email/password
- Password confirmation
- Terms of service agreement
- Real-time password validation
- Redirects to login page after successful signup

### Welcome Page (`welcome.html`)
- Displays welcome message with user email
- Sign out functionality
- Redirects to login if not authenticated

### Styling (`css/auth-styles.css`)
- Modern, clean design
- Responsive layout
- Dark mode support
- High contrast mode support
- Smooth animations and transitions
- Accessibility features

## Error Handling

The application includes comprehensive error handling for:
- Invalid email formats
- Weak passwords
- Network errors
- Firebase authentication errors
- User not found
- Wrong password
- Email already in use
- Too many requests

## Browser Compatibility

- Modern browsers with ES6 module support
- Chrome 61+
- Firefox 60+
- Safari 10.1+
- Edge 16+

## Security Notes

- Passwords are handled securely by Firebase
- No sensitive data is stored in localStorage
- All authentication is handled server-side by Firebase
- HTTPS is recommended for production deployment

## Troubleshooting

1. **Module import errors**: Make sure you're running the app with a local server (live-server)
2. **Firebase errors**: Verify your Firebase configuration is correct
3. **CORS errors**: Ensure you're using HTTPS in production or localhost for development
4. **Authentication not working**: Check that Email/Password is enabled in Firebase Console
