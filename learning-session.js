const topicInput = document.getElementById("learningTopic");
const notesInput = document.getElementById("sessionNotes");
const meetingInput = document.getElementById("meetingLink");

const form = document.getElementById("sessionForm");
const message = document.getElementById("sessionMessage");
const savedSession = document.getElementById("savedSession");

function displaySession() {
    const session = JSON.parse(
        localStorage.getItem("skillSwapSession")
    );

    if (session) {
        savedSession.innerHTML = `
            <h3>${session.topic}</h3>
            <p>${session.notes}</p>

            <p><strong>Meeting Link:</strong></p>

            <a href="${session.meetingLink}"
               target="_blank"
               rel="noopener noreferrer">
                <button type="button">Join Meeting</button>
            </a>
        `;

        topicInput.value = session.topic || "";
        notesInput.value = session.notes || "";
        meetingInput.value = session.meetingLink || "";
    }
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const link = meetingInput.value.trim();

    if (!link.startsWith("https://meet.google.com/")) {
        message.textContent =
            "Please enter a valid Google Meet link.";
        return;
    }

    const session = {
        topic: topicInput.value,
        notes: notesInput.value,
        meetingLink: link
    };

    localStorage.setItem(
        "skillSwapSession",
        JSON.stringify(session)
    );

    message.textContent =
        "Session and meeting link saved successfully!";

    displaySession();
});

displaySession();