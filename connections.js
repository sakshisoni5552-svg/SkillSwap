const connectionList = document.getElementById("connectionList");

const requests = JSON.parse(
    localStorage.getItem("connectionRequests")
) || [];

const accepted = requests.filter(function(request) {
    return request.status === "Accepted";
});

if (accepted.length === 0) {
    connectionList.innerHTML = "<p>No accepted connections yet.</p>";
} else {
    accepted.forEach(function(request) {
        const card = document.createElement("div");
        card.className = "partner-card";

        card.innerHTML = `
            <h3>${request.partnerName}</h3>
            <p>Connection Status: Accepted</p>
        `;

        connectionList.appendChild(card);
    });
}