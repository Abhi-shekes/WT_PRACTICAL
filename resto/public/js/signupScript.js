// signup.js

document.getElementById('signup-form').addEventListener('submit', handleSignupFormSubmit);

function handleSignupFormSubmit(event) {
    event.preventDefault(); 
    
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (!username || !email || !password || !confirmPassword) {
        alert("All fields are required!");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    signupRequest(username, email, password);
}

async function signupRequest(username, email, password) {
    try {
    const response = await fetch('/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
    });

    const data = await response.json(); 

    if (data.success) {
        alert(`Welcome, ${username}! You've successfully signed up.`);
        window.location.href = '/'; 
    } else {
        alert(data.message || 'Signup failed!');
    }
    } catch (error) {
        console.error('Error during signup:', error);
        alert('An error occurred during signup.');
    }
}
