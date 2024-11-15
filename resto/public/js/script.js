document.addEventListener('DOMContentLoaded', () => {
    displayMenu();
    displayCart();
});


document.getElementById('signup-form').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Print inputs for debugging
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    // Basic validation
    if (!username || !email || !password || !confirmPassword) {
        alert("All fields are required!");
        console.log('Validation failed: All fields are required');
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        console.log('Validation failed: Passwords do not match');
        return;
    }

    // Optionally, you can add a password strength check here
    console.log('All validations passed');

    try {
        console.log('Sending signup request...');
        const response = await fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        });

        console.log('Response status:', response.status);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json(); 
        console.log('Response data:', data);

        if (data.success) {
            alert(`Welcome, ${username}! You've successfully signed up.`);
            console.log('Signup successful, redirecting to login');
            window.location.href = '/'; 
        } else {
            alert(data.message || 'Signup failed!');
            console.log('Signup failed:', data.message || 'Unknown error');
        }
    } catch (error) {
        console.error('Error during signup:', error);
        alert('An error occurred during signup.');
    }
});



  
document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    console.log('Submitting login form');
    console.log('Email:', email);
    console.log('Password:', password);

    if (email === "" || password === "") {
        alert("Both fields are required!");
        return;
    }

    try {
        console.log('Sending request to /loginreq...');
        const response = await fetch('/loginreq', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        console.log('Response status:', response.status);
        const data = await response.json();
        console.log('Response:', data);

        if (response.ok) {
            alert("Successfully logged in!");
            window.location.href = '/menu'; // Redirect to menu page
        } else {
            alert(data.message || 'Login failed!');
        }
    } catch (error) {
        console.error('Error during login:', error);
        alert('An error occurred during login.');
    }
});


const menuItems = [];

async function displayMenu() {
    const menuContainer = document.getElementById('menu-items');
    menuContainer.innerHTML = ''; // Clear existing content

    try {
        const response = await fetch('/menu-items');
        const items = await response.json();

        // Update the global menuItems array with fetched data
        menuItems.push(...items);

        items.forEach(item => {
            const menuItemDiv = document.createElement('div');
            menuItemDiv.classList.add('menu-item');
            menuItemDiv.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p><strong>₹${item.price}</strong></p>
                <button onclick="addToCart(${item.id})">Add to Cart</button>
            `;
            menuContainer.appendChild(menuItemDiv);
        });
    } catch (error) {
        console.error('Error fetching menu:', error);
        alert('Failed to load menu items.');
    }
}

// Add to Cart Function
async function addToCart(itemId) {
    const menuItem = menuItems.find(item => item.id === itemId);
    if (!menuItem) return;

    const cartItem = {
        item_id: menuItem.id,
        quantity: 1 // Default quantity
    };

    try {
        const response = await fetch('/add-to-cart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cartItem)
        });
        const data = await response.json();
        if (data.success) {
            alert(`${menuItem.name} added to cart successfully!`);
            displayCart(); // Update cart UI dynamically
        } else {
            alert('Failed to add item to cart.');
        }
    } catch (error) {
        console.error('Error adding to cart:', error);
        alert('Failed to add item to cart.');
    }
}

async function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = ''; 

    try {
        const response = await fetch('/cart-items');
        const cart = await response.json();

        if (cart.length === 0) {
            cartContainer.innerHTML = '<p>Your cart is empty</p>';
            return;
        }

        cart.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');
            cartItemDiv.innerHTML = `
                <h3>${item.name}</h3>
                <p>Quantity: ${item.quantity}</p>
                <p>Price: ₹${item.price}</p>
                <p>Total: ₹${item.quantity * item.price}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            `;
            cartContainer.appendChild(cartItemDiv);
        });
    } catch (error) {
        console.error('Error fetching cart:', error);
        alert('Failed to load cart items.');
    }
}

async function removeFromCart(itemId) {
    try {
        const response = await fetch(`/remove-from-cart/${itemId}`, { method: 'DELETE' });
        const data = await response.json();
        if (data.success) {
            alert('Item removed from cart.');
            displayCart(); 
        } else {
            alert('Failed to remove item from cart.');
        }
    } catch (error) {
        console.error('Error removing item from cart:', error);
        alert('Failed to remove item from cart.');
    }
}


async function placeOrder() {
    try {
        const response = await fetch('/place-order', { method: 'POST' });
        const data = await response.json();
        if (data.success) {
            alert('Order placed successfully!');
            window.location.href = `/order-confirmation/${data.orderId}`;
        } else {
            alert('Failed to place order.');
        }
    } catch (error) {
        console.error('Error placing order:', error);
        alert('Failed to place order.');
    }
}
