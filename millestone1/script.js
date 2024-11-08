document.getElementById('resumeForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting
    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var hobbies = document.getElementById('hobbies').value;
    var references = document.getElementById('references').value;
    // Generate resume output
    var resumeOutput = "\n        <h2>Resume</h2>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n        <h3>hobbies</h3>\n        <p>").concat(hobbies, "</p>\n        <h3>references</h3>\n        <p>").concat(references, "</p>\n    ");
    // Display the resume
    var resumeOutputDiv = document.getElementById('resumeOutput');
    resumeOutputDiv.innerHTML = resumeOutput;
    // Add animation class
    resumeOutputDiv.classList.add('fade-in');
});
// Download resume functionality
document.getElementById('downloadResume').addEventListener('click', function () {
    // Get the resume output
    var resumeOutput = document.getElementById('resumeOutput').innerHTML;
    // Create a blob with the resume output
    var blob = new Blob([resumeOutput], { type: 'text/html' });
    // Create a link to download the resume
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resume.html';
    link.click();
});
