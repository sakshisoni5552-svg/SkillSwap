const requestList = document.getElementById("requestList");

let requests = JSON.parse(
    localStorage.getItem("connectionRequests")
) || [];

function displayRequests() {
    requestList.innerHTML = "";

    if (requests.length === 0) {
        requestList.innerHTML = "<p>No connection requests yet.</p>";
        return;
    }

    requests.forEach(function(request, index) {
        const card = document.createElement("div");
        card.className = "partner-card";

        card.innerHTML = `
            <h3>${request.partnerName}</h3>
            <p>Status: ${request.status}</p>

            <button onclick="updateRequest(${index}, 'Accepted')">
                Accept
            </button>

            <button onclick="updateRequest(${index}, 'Rejected')">
                Reject
            </button>
        `;

        requestList.appendChild(card);
    });
}

function updateRequest(index, status) {
    requests[index].status = status;

    localStorage.setItem(
        "connectionRequests",
        JSON.stringify(requests)
    );

    displayRequests();
}

displayRequests();