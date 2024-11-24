// Function to escape special characters for HTML display
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#x27;");
}

// Function to sanitize user input to prevent XSS
function sanitizeInput(input) {
    var element = document.createElement('div');
    if (input) {
        element.innerText = input; // Convert input to plain text, removing any tags
        return element.innerHTML; // Return the sanitized string
    }
    return '';
}

// Event listener for form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = '';

    // Get and sanitize form values
    const firstName = sanitizeInput(document.getElementById('firstName').value.trim());
    const lastName = sanitizeInput(document.getElementById('lastName').value.trim());
    const email = sanitizeInput(document.getElementById('email').value.trim());
    const password = sanitizeInput(document.getElementById('password').value);
    const confirmPassword = sanitizeInput(document.getElementById('confirmPassword').value);

    // Validate form fields
    let isValid = true;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        errorMessages.innerHTML += escapeHtml('<p>All fields are required.</p>');
        isValid = false;
    }

    if (email && !validateEmail(email)) {
        errorMessages.innerHTML += escapeHtml('<p>Please enter a valid email address.</p>');
        isValid = false;
    }

    if (password !== confirmPassword) {
        errorMessages.innerHTML += escapeHtml('<p>Passwords do not match.</p>');
        isValid = false;
    }

    // If form is valid, you can submit it or perform further actions
    if (isValid) {
        alert('Registration successful!');
        // Here you can submit the form or perform other actions
    }
});

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
