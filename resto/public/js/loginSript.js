// login.js

document.getElementById('login-form').addEventListener('submit', handleLoginFormSubmit);

function handleLoginFormSubmit(event) {
    event.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email === "" || password === "") {
        alert("Both fields are required!");
        return;
    }

    loginRequest(email, password);
}

async function loginRequest(email, password) {
    try {
        const response = await fetch('/auth/loginreq', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            alert("Successfully logged in!");
            window.location.href = '/menu'; 
        } else {
            alert(data.message || 'Login failed!');
        }
    } catch (error) {
        console.error('Error during login:', error);
        alert('An error occurred during login.');
    }
}
