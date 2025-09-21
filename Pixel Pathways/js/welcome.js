// Import Firebase modules
import { signOut } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import { auth } from '../firebase-config.js';

// DOM elements
const welcomeMessage = document.getElementById('welcomeMessage');
const logoutBtn = document.getElementById('logoutBtn');

// Check authentication status and display user info
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        const email = user.email || 'User';
        welcomeMessage.textContent = `Welcome back, ${email}! You have successfully signed in.`;
    } else {
        // User is not signed in, redirect to login
        window.location.href = 'login.html';
    }
});

// Logout functionality
logoutBtn.addEventListener('click', async () => {
    try {
        await signOut(auth);
        
        // Clear localStorage
        localStorage.removeItem('pp_authed');
        localStorage.removeItem('pp_user_email');
        localStorage.removeItem('pp_user_uid');
        
        // Redirect to login page
        window.location.href = 'login.html';
    } catch (error) {
        console.error('Logout error:', error);
        alert('Failed to sign out. Please try again.');
    }
});

// Add some visual feedback
logoutBtn.addEventListener('mouseenter', () => {
    logoutBtn.style.transform = 'translateY(-1px)';
});

logoutBtn.addEventListener('mouseleave', () => {
    logoutBtn.style.transform = 'translateY(0)';
});
