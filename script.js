document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const location = document.querySelector('input[name="location"]').value;
    const linkedin = document.querySelector('input[name="linkedin"]').value;
    const github = document.querySelector('input[name="github"]').value;
    const summary = document.querySelector('textarea[name="summary"]').value;
    const technicalSkills = document.querySelector('textarea[name="technicalSkills"]').value;
    const softSkills = document.querySelector('textarea[name="softSkills"]').value;

    const experienceEntries = Array.from(document.querySelectorAll('.experienceEntry')).map(entry => ({
        jobTitle: entry.querySelector('input[name="jobTitle[]"]').value,
        companyName: entry.querySelector('input[name="companyName[]"]').value,
        location: entry.querySelector('input[name="location[]"]').value,
        startDate: entry.querySelector('input[name="startDate[]"]').value,
        endDate: entry.querySelector('input[name="endDate[]"]').value,
        responsibilities: entry.querySelector('textarea[name="responsibilities[]"]').value,
        achievements: entry.querySelector('textarea[name="achievements[]"]').value
    }));

    const degree = document.querySelector('input[name="degree"]').value;
    const major = document.querySelector('input[name="major"]').value;
    const universityName = document.querySelector('input[name="universityName"]').value;
    const universityLocation = document.querySelector('input[name="universityLocation"]').value;
    const educationStartDate = document.querySelector('input[name="educationStartDate"]').value;
    const educationEndDate = document.querySelector('input[name="educationEndDate"]').value;
    const coursework = document.querySelector('textarea[name="coursework"]').value;
    const honors = document.querySelector('textarea[name="honors"]').value;

    const certificationEntries = Array.from(document.querySelectorAll('.certificationEntry')).map(entry => ({
        certificationName: entry.querySelector('input[name="certificationName[]"]').value,
        issuingOrganization: entry.querySelector('input[name="issuingOrganization[]"]').value,
        certificationDate: entry.querySelector('input[name="certificationDate[]"]').value
    }));

    const projectEntries = Array.from(document.querySelectorAll('.projectEntry')).map(entry => ({
        projectTitle: entry.querySelector('input[name="projectTitle[]"]').value,
        projectDescription: entry.querySelector('textarea[name="projectDescription[]"]').value
    }));

    const volunteerEntries = Array.from(document.querySelectorAll('.volunteerEntry')).map(entry => ({
        volunteerRole: entry.querySelector('input[name="volunteerRole[]"]').value,
        volunteerOrganization: entry.querySelector('input[name="volunteerOrganization[]"]').value,
        volunteerLocation: entry.querySelector('input[name="volunteerLocation[]"]').value,
        volunteerStartDate: entry.querySelector('input[name="volunteerStartDate[]"]').value,
        volunteerEndDate: entry.querySelector('input[name="volunteerEndDate[]"]').value,
        volunteerResponsibilities: entry.querySelector('textarea[name="volunteerResponsibilities[]"]').value
    }));

    const languageEntries = Array.from(document.querySelectorAll('.languageEntry')).map(entry => ({
        language: entry.querySelector('input[name="language[]"]').value,
        proficiencyLevel: entry.querySelector('input[name="proficiencyLevel[]"]').value
    }));

    const resumeContent = `
        <html>
        <head>
            <title>Resume - ${name}</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                    line-height: 1.6;
                    color: #333;
                }
                .container {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                h1, h2 {
                    color: #4CAF50;
                }
                h1 {
                    text-align: center;
                    font-size: 36px;
                    margin-bottom: 20px;
                }
                h2 {
                    border-bottom: 1px solid #ccc;
                    padding-bottom: 5px;
                    margin-bottom: 10px;
                }
                .section {
                    margin-bottom: 20px;
                }
                p {
                    margin: 5px 0;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>${name}</h1>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Location:</strong> ${location}</p>
                ${linkedin ? `<p><strong>LinkedIn:</strong> ${linkedin}</p>` : ''}
                ${github ? `<p><strong>GitHub:</strong> ${github}</p>` : ''}
                <div class="section">
                    <h2>Professional Summary</h2>
                    <p>${summary.replace(/\n/g, '<br>')}</p>
                </div>
                <div class="section">
                    <h2>Skills</h2>
                    <p><strong>Technical Skills:</strong><br>${technicalSkills.replace(/\n/g, '<br>')}</p>
                    <p><strong>Soft Skills:</strong><br>${softSkills.replace(/\n/g, '<br>')}</p>
                </div>
                <div class="section">
                    <h2>Experience</h2>
                    ${experienceEntries.map(entry => `
                        <p><strong>${entry.jobTitle}</strong> at <strong>${entry.companyName}</strong>, ${entry.location}</p>
                        <p>${entry.startDate} - ${entry.endDate}</p>
                        <p><strong>Responsibilities:</strong><br>${entry.responsibilities.replace(/\n/g, '<br>')}</p>
                        ${entry.achievements ? `<p><strong>Achievements:</strong><br>${entry.achievements.replace(/\n/g, '<br>')}</p>` : ''}
                    `).join('')}
                </div>
                <div class="section">
                    <h2>Education</h2>
                    <p><strong>${degree} in ${major}</strong><br>${universityName}, ${universityLocation}</p>
                    <p>${educationStartDate} - ${educationEndDate}</p>
                    ${coursework ? `<p><strong>Relevant Coursework:</strong><br>${coursework.replace(/\n/g, '<br>')}</p>` : ''}
                    ${honors ? `<p><strong>Honors and Awards:</strong><br>${honors.replace(/\n/g, '<br>')}</p>` : ''}
                </div>
                <div class="section">
                    <h2>Certifications</h2>
                    ${certificationEntries.map(entry => `
                        <p><strong>${entry.certificationName}</strong> - ${entry.issuingOrganization}</p>
                        <p>${entry.certificationDate}</p>
                    `).join('')}
                </div>
                <div class="section">
                    <h2>Projects</h2>
                    ${projectEntries.map(entry => `
                        <p><strong>${entry.projectTitle}</strong></p>
                        <p>${entry.projectDescription.replace(/\n/g, '<br>')}</p>
                    `).join('')}
                </div>
                ${volunteerEntries.length > 0 ? `
                <div class="section">
                    <h2>Volunteer Experience</h2>
                    ${volunteerEntries.map(entry => `
                        <p><strong>${entry.volunteerRole}</strong> at <strong>${entry.volunteerOrganization}</strong>, ${entry.volunteerLocation}</p>
                        <p>${entry.volunteerStartDate} - ${entry.volunteerEndDate}</p>
                        <p>${entry.volunteerResponsibilities.replace(/\n/g, '<br>')}</p>
                    `).join('')}
                </div>
                ` : ''}
                ${languageEntries.length > 0 ? `
                <div class="section">
                    <h2>Languages</h2>
                    ${languageEntries.map(entry => `
                        <p><strong>${entry.language}:</strong> ${entry.proficiencyLevel}</p>
                    `).join('')}
                </div>
                ` : ''}
                <div class="section">
                    <h2>References</h2>
                    <p>Available upon request.</p>
                </div>
            </div>
        </body>
        </html>
    `;

    const newWindow = window.open();
    newWindow.document.open();
    newWindow.document.write(resumeContent);
    newWindow.document.close();
});
