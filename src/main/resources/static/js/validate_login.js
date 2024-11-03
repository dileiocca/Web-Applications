document.getElementById('login-input-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let isValid = true;
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Inserisci un\'email valida.';
        isValid = false;
    }
    if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'La password deve contenere almeno 6 caratteri.';
        isValid = false;
    }
    if (isValid) {
        alert('Login effettuato con successo!');
        // invio del modulo
    }
});