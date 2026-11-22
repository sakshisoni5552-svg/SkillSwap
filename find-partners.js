const partners = [
    {
        name: "Aarav",
        teach: "HTML, CSS, JavaScript",
        learn: "Graphic Design, Python"
    },
    {
        name: "Priya",
        teach: "Graphic Design, Canva",
        learn: "HTML, CSS"
    },
    {
        name: "Riya",
        teach: "JavaScript, Python",
        learn: "Web Development, Java"
    },
    {
        name: "Rahul",
        teach: "Python, Java",
        learn: "CSS, JavaScript"
    },
    {
        name: "Sneha",
        teach: "HTML, Web Development",
        learn: "Video Editing, Canva"
    }
];
const currentStudent = JSON.parse(
    localStorage.getItem("studentProfile")
);

if (currentStudent) {
    partners.unshift({
        name: currentStudent.name,
        teach: currentStudent.teachSkill,
        learn: currentStudent.learnSkill
    });
}

const partnerList = document.getElementById("partnerList");
const searchInput = document.getElementById("searchSkill");

function displayPartners(list) {
    partnerList.innerHTML = "";

    list.forEach(function(partner) {
        const card = document.createElement("div");

        card.className = "partner-card";

       const studentSkills = currentStudent
    ? currentStudent.learnSkill
        .split(",")
        .map(skill => skill.trim().toLowerCase())
    : [];

const partnerSkills = partner.teach
    .split(",")
    .map(skill => skill.trim().toLowerCase());

const isMatch = partnerSkills.some(skill =>
    studentSkills.includes(skill)
);

       card.innerHTML = `
    <h3>${partner.name}</h3>

    <p><strong>Can Teach:</strong> ${partner.teach}</p>

    <p><strong>Wants to Learn:</strong> ${partner.learn}</p>

    ${isMatch ? "<p class='match'>Skill Match!</p>" : ""}

    <button onclick="connectPartner('${partner.name}')">
        Connect
    </button>
`; 

        partnerList.appendChild(card);
    });
}

function connectPartner(name) {
    let requests = JSON.parse(
        localStorage.getItem("connectionRequests")
    ) || [];

    requests.push({
        partnerName: name,
        status: "Pending"
    });

    localStorage.setItem(
        "connectionRequests",
        JSON.stringify(requests)
    );

    alert("Connection request sent to " + name);
}

searchInput.addEventListener("input", function() {
    const search = searchInput.value.toLowerCase();

    const filtered = partners.filter(function(partner) {
        return partner.teach.toLowerCase().includes(search) ||
               partner.learn.toLowerCase().includes(search);
    });

    displayPartners(filtered);
});

displayPartners(partners);