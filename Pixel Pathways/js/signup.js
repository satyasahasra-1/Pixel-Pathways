// Import Firebase modules
import { createUserWithEmailAndPassword, updateProfile } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import { auth } from '../firebase-config.js';

// DOM elements
const signupForm = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const agreeTermsCheckbox = document.getElementById('agreeTerms');
const signupBtn = document.getElementById('signupBtn');
const btnText = document.querySelector('.btn-text');
const btnSpinner = document.querySelector('.btn-spinner');
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');

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
    signupBtn.disabled = loading;
    btnText.style.display = loading ? 'none' : 'inline';
    btnSpinner.style.display = loading ? 'inline' : 'none';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

// Real-time password validation
passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const requirements = document.querySelector('.password-requirements small');
    
    if (password.length > 0) {
        if (password.length < 6) {
            requirements.textContent = 'Password must be at least 6 characters long';
            requirements.style.color = '#e74c3c';
        } else {
            requirements.textContent = 'Password looks good!';
            requirements.style.color = '#27ae60';
        }
    } else {
        requirements.textContent = 'Password must be at least 6 characters long';
        requirements.style.color = '#666';
    }
});

// Confirm password validation
confirmPasswordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    
    if (confirmPassword.length > 0) {
        if (password === confirmPassword) {
            confirmPasswordInput.style.borderColor = '#27ae60';
        } else {
            confirmPasswordInput.style.borderColor = '#e74c3c';
        }
    } else {
        confirmPasswordInput.style.borderColor = '#ddd';
    }
});

// Signup form submission
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    hideMessages();
    
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const agreeTerms = agreeTermsCheckbox.checked;
    
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
        showError('Please enter a password.');
        return;
    }
    
    if (!validatePassword(password)) {
        showError('Password must be at least 6 characters long.');
        return;
    }
    
    if (!confirmPassword) {
        showError('Please confirm your password.');
        return;
    }
    
    if (password !== confirmPassword) {
        showError('Passwords do not match.');
        return;
    }
    
    if (!agreeTerms) {
        showError('Please agree to the Terms of Service and Privacy Policy.');
        return;
    }
    
    setLoading(true);
    
    try {
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Update user profile (optional - you can add display name here)
        // await updateProfile(user, {
        //     displayName: "User"
        // });
        
        showSuccess('Account created successfully! Redirecting to login...');
        
        // Store user info in localStorage
        localStorage.setItem('pp_authed', '1');
        localStorage.setItem('pp_user_email', user.email);
        localStorage.setItem('pp_user_uid', user.uid);
        
        // Redirect to login page after a short delay
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
        
    } catch (error) {
        console.error('Signup error:', error);
        
        // Handle specific error cases
        switch (error.code) {
            case 'auth/email-already-in-use':
                showError('An account with this email already exists. Please sign in instead.');
                break;
            case 'auth/invalid-email':
                showError('Invalid email address format.');
                break;
            case 'auth/weak-password':
                showError('Password is too weak. Please choose a stronger password.');
                break;
            case 'auth/operation-not-allowed':
                showError('Email/password accounts are not enabled. Please contact support.');
                break;
            case 'auth/network-request-failed':
                showError('Network error. Please check your connection and try again.');
                break;
            default:
                showError('Account creation failed. Please try again.');
        }
    } finally {
        setLoading(false);
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
confirmPasswordInput.addEventListener('focus', hideMessages);
