const student = JSON.parse(
    localStorage.getItem("studentProfile")
);

if (student) {
    document.getElementById("studentName").textContent =
        student.name;

    document.getElementById("studentEmail").textContent =
        student.email;

    document.getElementById("studentTeach").textContent =
        student.teachSkill;

    document.getElementById("studentLearn").textContent =
        student.learnSkill;
}