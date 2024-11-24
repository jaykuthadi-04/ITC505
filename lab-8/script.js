document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = '';

    // Get form values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate form fields
    let isValid = true;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        errorMessages.innerHTML += '<p>All fields are required.</p>';
        isValid = false;
    }

    if (email && !validateEmail(email)) {
        errorMessages.innerHTML += '<p>Please enter a valid email address.</p>';
        isValid = false;
    }

    if (password !== confirmPassword) {
        errorMessages.innerHTML += '<p>Passwords do not match.</p>';
        isValid = false;
    }

    // If form is valid, you can submit it or perform further actions
    if (isValid) {
        alert('Registration successful!');
        // Here you can submit the form or perform other actions
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}