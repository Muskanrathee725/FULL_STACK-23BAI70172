document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields!");
        return;
    }

    alert("Form submitted successfully!\n\nName: " + name + "\nEmail: " + email);
    
    this.reset(); // Clear the form
});
