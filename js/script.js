document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    if (!form) return;

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageBox = document.getElementById("msg");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        // Basic validation
        if (name === "" || email === "") {
            messageBox.textContent = "⚠️ Please fill all required fields.";
            messageBox.style.color = "#ef4444";
            return;
        }

        // Simple email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            messageBox.textContent = "⚠️ Please enter a valid email address.";
            messageBox.style.color = "#ef4444";
            return;
        }

        // Success message
        messageBox.textContent = "✅ Form submitted successfully!";
        messageBox.style.color = "#22c55e";

        // Optional: reset form
        form.reset();
    });
});