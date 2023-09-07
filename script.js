document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // You should perform server-side validation and authentication here.
    // In a real application, this data would be sent to the server for validation.

    // For demonstration purposes, let's assume a simple username and password check:
    if (username === 'user' && password === 'password') {
        // Successful login
        window.location.href = 'dashboard.html';
      
    } else {
        // Display error message
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
});
