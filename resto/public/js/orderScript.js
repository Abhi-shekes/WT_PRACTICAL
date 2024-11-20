// order.js

async function placeOrder() {
    try {
        const response = await fetch('/order/place-order', { method: 'POST' });
        const data = await response.json();
        if (data.success) {
            alert('Order placed successfully!');
        } else {
            alert('Failed to place order.');
        }
    } catch (error) {
        console.error('Error placing order:', error);
        alert('Failed to place order.');
    }
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
