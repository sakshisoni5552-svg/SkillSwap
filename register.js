const form = document.getElementById("registerForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const student = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        teachSkill: document.getElementById("teachSkill").value,
        learnSkill: document.getElementById("learnSkill").value
    };

    localStorage.setItem("studentProfile", JSON.stringify(student));

    document.getElementById("message").textContent =
        "Registration Successful!";

        window.location.href="profile.html";
        
    form.reset();
});