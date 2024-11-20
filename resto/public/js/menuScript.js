const menuItems = [];

async function displayMenu() {
    const menuContainer = document.getElementById('menu-items');
    menuContainer.innerHTML = ''; 

    try {
        const response = await fetch('/menu/menu-items');
        const items = await response.json();

        menuItems.push(...items);

        items.forEach(item => {
            const menuItemDiv = document.createElement('div');
            menuItemDiv.classList.add('menu-item');
            menuItemDiv.innerHTML = `
                <h3>${item.item_name}</h3>
                <p>${item.description}</p>
                <p><strong>₹${item.price}</strong></p>
                <button onclick="addToCart(${item.menu_id})">Add to Cart</button>
            `;
            menuContainer.appendChild(menuItemDiv);
        });
    } catch (error) {
        console.error('Error fetching menu:', error);
        alert('Failed to load menu items.');
    }
}

function addToCart(menuId) {
    const menuItem = menuItems.find(item => item.menu_id === menuId);
    if (!menuItem) return;

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.menu_id === menuId);
    if (existingItem) {
        existingItem.quantity += 1; // Increment quantity
    } else {
        cart.push({
            menu_id: menuItem.menu_id,
            item_name: menuItem.item_name,
            price: menuItem.price,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${menuItem.item_name} added to cart successfully!`);
    displayCart();
}

function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    
    if (!cartContainer) {
        console.error("Element with id 'cart-items' not found.");
        return;
    }
    
    cartContainer.innerHTML = ''; 

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty</p>';
        return;
    }

    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
            <h3>${item.item_name}</h3>
            <p>Quantity: ${item.quantity}</p>
            <p>Price: ₹${item.price}</p>
            <p>Total: ₹${item.quantity * item.price}</p>
            <button onclick="removeFromCart(${item.menu_id})">Remove</button>
        `;
        cartContainer.appendChild(cartItemDiv);
    });
}


function removeFromCart(menuId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart = cart.filter(item => item.menu_id !== menuId);

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item removed from cart successfully!');
    displayCart();
}

document.addEventListener('DOMContentLoaded', () => {
    displayCart();
});
