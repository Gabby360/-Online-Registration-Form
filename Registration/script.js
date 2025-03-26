

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to validate first

    // Get form field values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Error message container
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    // Clear any previous messages
    errorMessage.textContent = '';
    successMessage.style.display = 'none'; // Hide success message if previously shown

    // Validate the fields
    if (!name || !email || !phone || !password) {
        errorMessage.textContent = 'All fields are required.';
        return;
    }

    // Validate email format using regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return;
    }

    // Validate password (at least 8 characters, 1 uppercase, 1 number)
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
        errorMessage.textContent = 'Password must be at least 8 characters long, include 1 uppercase letter and 1 number.';
        return;
    }

    // If all validations pass, display success message
    successMessage.style.display = 'block';
    successMessage.textContent = 'Registration successful! Welcome to the platform.';

    // Reset form after success
    document.getElementById('registrationForm').reset();
});