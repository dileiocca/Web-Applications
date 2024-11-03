function addToCart(productID){
    const productElement = document.querySelector(`.product[data-id="${productID}"]`);
    const productName = productElement.getAttribute('data-name');
    const productPrice = parseFloat(productElement.getAttribute('data-price'));
    const productImage = productElement.querySelector('img').src;

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingProductIndex = cart.findIndex(item => item.id === productID);
    if (existingProductIndex > -1){
        cart[existingProductIndex].quantity += 1;
    }else{
        cart.push({
            id: productID,
            name: productName,
            price: productPrice,
            quantity: 1,
            image: productImage
        });
    }
    localStorage.setItem('cart',JSON.stringify(cart));
}