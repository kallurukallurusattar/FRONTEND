document.getElementById('resume-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;

    const resume = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
    `;

    document.getElementById('resume').innerHTML = resume;
    document.getElementById('download').style.display = 'block';
});

document.getElementById('download').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const resumeContent = document.getElementById('resume').innerHTML;
    doc.fromHTML(resumeContent, 15, 15, {
        'width': 170
    });

    doc.save('resume.pdf');
});