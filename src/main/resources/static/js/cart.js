function displayCart(){
    const cartTableBody = document.querySelector(('#cartTable tbody'));
    const cartTotal =document.getElementById('cartTotal');
    cartTableBody.innerHTML = '';

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        const emptyRow = document.createElement('tr');
        emptyRow.innerHTML = '<td colspan="5">Il carrello è vuoto.</td>';
        cartTableBody.appendChild(emptyRow);
        cartTotal.innerHTML = `<strong>Totale: €0.00</strong>`;
    }else{
        let total = 0;
        cart.forEach(item => {
            const cartItemRow = document.createElement('tr');
            cartItemRow.classList.add('cart-row');
            cartItemRow.innerHTML = `
                <td><img src="${item.image}" alt="${item.name}" style="width: 80px; height: 100px; padding-bottom: 4px; padding-top: 4px"></td>
                <td>${item.name}</td>
                <td>€${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td><button class="btn-remove" onclick="removeFromCart(${item.id})">-</button></td>
            `;
            cartTableBody.appendChild(cartItemRow);
            total += item.price * item.quantity;
        })

        cartTotal.innerHTML = `<strong>Totale: €${total.toFixed(2)}</strong>`;
    }
}

function removeFromCart (productID) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = cart.findIndex(item => item.id === productID);

    if (itemIndex > -1){
        cart[itemIndex].quantity -=1;
        if (cart[itemIndex].quantity === 0){
            cart.splice(itemIndex,1);
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}
document.addEventListener('DOMContentLoaded',displayCart);