// Import Firebase modules
import { onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import { auth } from '../firebase-config.js';

// DOM elements
const userEmailSpan = document.getElementById('userEmail');
const logoutBtn = document.getElementById('logoutBtn');

// Authentication state management
let currentUser = null;

function isAuthed() {
    return localStorage.getItem('pp_authed') === '1' && currentUser !== null;
}

function updateUI() {
    if (currentUser) {
        userEmailSpan.textContent = currentUser.email || 'Account';
    } else {
        userEmailSpan.textContent = 'Account';
    }
}

// Logout functionality
if (logoutBtn) {
    logoutBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        try {
            await signOut(auth);
            // Clear localStorage
            localStorage.removeItem('pp_authed');
            localStorage.removeItem('pp_user_email');
            localStorage.removeItem('pp_user_uid');
            // Redirect to login
            window.location.href = 'login.html';
        } catch (error) {
            console.error('Logout error:', error);
            alert('Failed to sign out. Please try again.');
        }
    });
}

// Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
    currentUser = user;
    
    if (user) {
        // User is signed in
        localStorage.setItem('pp_authed', '1');
        localStorage.setItem('pp_user_email', user.email);
        localStorage.setItem('pp_user_uid', user.uid);
        updateUI();
    } else {
        // User is signed out
        localStorage.removeItem('pp_authed');
        localStorage.removeItem('pp_user_email');
        localStorage.removeItem('pp_user_uid');
        updateUI();
        
        // Redirect to login if not already on auth pages
        const currentPage = location.pathname;
        const authPages = ['/login.html', '/signup.html', '/welcome.html'];
        const isAuthPage = authPages.some(page => currentPage.endsWith(page));
        
        if (!isAuthPage) {
            location.href = 'login.html';
        }
    }
});

// Export for use in other scripts
window.Auth = { 
    isAuthed,
    getCurrentUser: () => currentUser
};


