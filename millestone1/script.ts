// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
    const resumeForm = document.getElementById('resumeForm');
    const resumeOutputDiv = document.getElementById('resumeOutput');
    const downloadResumeButton = document.getElementById('downloadResume');

    if (resumeForm && resumeOutputDiv && downloadResumeButton) {
        resumeForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting

            // Get form data
            const name = (document.getElementById('name') as HTMLInputElement).value;
            const email = (document.getElementById('email') as HTMLInputElement).value;
            const phone = (document.getElementById('phone') as HTMLInputElement).value;
            const education = (document.getElementById('education') as HTMLTextAreaElement).value;
            const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
            const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
            const hobbies = (document.getElementById('hobbies') as HTMLTextAreaElement).value;
            const references = (document.getElementById('references') as HTMLTextAreaElement).value;

            // Generate resume output
            const resumeOutput = `
                <h2>Resume</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <h3>Education</h3>
                <p>${education}</p>
                <h3>Experience</h3>
                <p>${experience}</p>
                <h3>Skills</h3>
                <p>${skills}</p>
                <h3>Hobbies</h3>
                <p>${hobbies}</p>
                <h3>References</h3>
                <p>${references}</p>
            `;

            // Display the resume
            resumeOutputDiv.innerHTML = resumeOutput;

            // Add animation class
            resumeOutputDiv.classList.add('fade-in');
        });
        // Download resume functionality
        downloadResumeButton.addEventListener('click', function() {
            // Get the resume output
            const resumeOutput = resumeOutputDiv.innerHTML;

            // Create a blob with the resume output
            const blob = new Blob([resumeOutput], { type: 'text/html' });

            // Create a link to download the resume
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'resume.html';
            link.click();
        });
    } else {
        console.error('Required elements are missing from the DOM.');
    }
});