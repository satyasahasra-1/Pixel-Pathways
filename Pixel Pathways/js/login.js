// Import Firebase modules
import { signInWithEmailAndPassword, setPersistence, browserLocalPersistence, browserSessionPersistence } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import { auth } from '../firebase-config.js';

// DOM elements
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const rememberMeCheckbox = document.getElementById('rememberMe');
const loginBtn = document.getElementById('loginBtn');
const btnText = document.querySelector('.btn-text');
const btnSpinner = document.querySelector('.btn-spinner');
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');
const forgotPasswordLink = document.getElementById('forgotPassword');

// Utility functions
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    successMessage.style.display = 'none';
}

function showSuccess(message) {
    successMessage.textContent = message;
    successMessage.style.display = 'block';
    errorMessage.style.display = 'none';
}

function hideMessages() {
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
}

function setLoading(loading) {
    loginBtn.disabled = loading;
    btnText.style.display = loading ? 'none' : 'inline';
    btnSpinner.style.display = loading ? 'inline' : 'none';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Login form submission
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    hideMessages();
    
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const rememberMe = rememberMeCheckbox.checked;
    
    // Validation
    if (!email) {
        showError('Please enter your email address.');
        return;
    }
    
    if (!isValidEmail(email)) {
        showError('Please enter a valid email address.');
        return;
    }
    
    if (!password) {
        showError('Please enter your password.');
        return;
    }
    
    if (password.length < 6) {
        showError('Password must be at least 6 characters long.');
        return;
    }
    
    setLoading(true);
    
    try {
        // Set persistence based on remember me checkbox
        const persistence = rememberMe ? browserLocalPersistence : browserSessionPersistence;
        await setPersistence(auth, persistence);
        
        // Sign in with email and password
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        showSuccess('Login successful! Redirecting...');
        
        // Store user info in localStorage
        localStorage.setItem('pp_authed', '1');
        localStorage.setItem('pp_user_email', user.email);
        localStorage.setItem('pp_user_uid', user.uid);
        
        // Redirect to welcome page after a short delay
        setTimeout(() => {
            window.location.href = 'welcome.html';
        }, 1500);
        
    } catch (error) {
        console.error('Login error:', error);
        
        // Handle specific error cases
        switch (error.code) {
            case 'auth/user-not-found':
                showError('No account found with this email address.');
                break;
            case 'auth/wrong-password':
                showError('Incorrect password. Please try again.');
                break;
            case 'auth/invalid-email':
                showError('Invalid email address format.');
                break;
            case 'auth/user-disabled':
                showError('This account has been disabled. Please contact support.');
                break;
            case 'auth/too-many-requests':
                showError('Too many failed attempts. Please try again later.');
                break;
            case 'auth/network-request-failed':
                showError('Network error. Please check your connection and try again.');
                break;
            default:
                showError('Login failed. Please check your credentials and try again.');
        }
    } finally {
        setLoading(false);
    }
});

// Forgot password functionality
forgotPasswordLink.addEventListener('click', async (e) => {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    
    if (!email) {
        showError('Please enter your email address first.');
        return;
    }
    
    if (!isValidEmail(email)) {
        showError('Please enter a valid email address.');
        return;
    }
    
    try {
        const { sendPasswordResetEmail } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js');
        await sendPasswordResetEmail(auth, email);
        showSuccess('Password reset email sent! Check your inbox.');
    } catch (error) {
        console.error('Password reset error:', error);
        showError('Failed to send password reset email. Please try again.');
    }
});

// Check if user is already logged in
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is already logged in, redirect to welcome page
        localStorage.setItem('pp_authed', '1');
        localStorage.setItem('pp_user_email', user.email);
        localStorage.setItem('pp_user_uid', user.uid);
        window.location.href = 'welcome.html';
    }
});

// Add some visual feedback for form interactions
emailInput.addEventListener('focus', hideMessages);
passwordInput.addEventListener('focus', hideMessages);
