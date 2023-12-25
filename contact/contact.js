document.addEventListener("DOMContentLoaded", function() {
    let submitButton = document.getElementById("submitButton");
    let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");
    let messageInput = document.getElementById("message");
    let confirmationMessage = document.getElementById("confirmationMessage");

    function isValidEmail(email) {
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function checkInputs() {
        let nameValue = nameInput.value.trim();
        let emailValue = emailInput.value.trim();
        let messageValue = messageInput.value.trim();

        if (nameValue !== "" && isValidEmail(emailValue) && messageValue !== "") {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    nameInput.addEventListener("input", checkInputs);
    emailInput.addEventListener("input", checkInputs);
    messageInput.addEventListener("input", checkInputs);

    checkInputs();

    submitButton.addEventListener("click", function() {
        
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";

        
        confirmationMessage.style.display = "block";

        setTimeout(function() {
            confirmationMessage.style.display = "none";
        }, 3000);
    });
});
