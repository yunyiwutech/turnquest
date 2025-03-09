document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the login button for hover effect
    const loginButton = document.querySelector('.login-button');
    
    loginButton.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    loginButton.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });

    // Example: Add functionality to the "Remember Me" checkbox
    const rememberCheckbox = document.getElementById('remember');
    
    rememberCheckbox.addEventListener('change', function() {
        if (this.checked) {
            console.log('Remember Me is checked');
            // Add logic here to store user credentials securely
        } else {
            console.log('Remember Me is unchecked');
            // Add logic here to clear stored credentials
        }
    });

    // Example: Add functionality to the "Forgot Password" link
    const forgotPasswordLink = document.querySelector('.forgot-password');
    
    forgotPasswordLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        console.log('Forgot Password link clicked');
        // Add logic here to open a password recovery form or send a recovery email
    });
});
