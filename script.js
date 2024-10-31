
// Initialize EmailJS with your user ID
(function() {
    emailjs.init("CfzeiBIdD43go7qIx"); // Replace with your actual User ID
})();

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send the email
    emailjs.send("123456789", "11223344", {
        name: name,
        email: email,
        message: message
    })
        .then(function(response) {
            alert('Email sent successfully! Status: ' + response.status + ', Message: ' + response.text);
            // Clear form fields
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Failed to send email. Please try again later. Error: ' + JSON.stringify(error));
        });
});