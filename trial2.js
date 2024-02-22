document.addEventListener('DOMContentLoaded', function () {
    const resumeData = JSON.parse(localStorage.getItem('resumeData'));

    if (resumeData) {
        const fields = [
            'userName', 'userEmail', 'userPhone', 'userJob', 'about',
            'schoolName', 'standard', 'schoolCGPA', 'collegeName', 'course', 'collegeCGPA',
            'Project_title_major', 'Project_desc_major', 'Project_title_minor', 'Project_desc_minor',
            'skills', 'Interest'
        ];

        fields.forEach(field => {
            if (resumeData[field]) {
                document.getElementById(field).value = resumeData[field];
            }
        });
    }

    const submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', function () {
        const fields = [
            'userName', 'userEmail', 'userPhone', 'userJob', 'about',
            'schoolName', 'standard', 'schoolCGPA', 'collegeName', 'course', 'collegeCGPA',
            'Project_title_major', 'Project_desc_major', 'Project_title_minor', 'Project_desc_minor',
            'skills', 'Interest'
        ];

        const data = {};

        fields.forEach(field => {
            data[field] = document.getElementById(field).value;
        });

        localStorage.setItem('resumeData', JSON.stringify(data));
        // alert('Data saved to local storage.');
    });

    const preview = document.getElementById('preview');
    preview.addEventListener('click', function () {
        const resumeTemplate = "template.html";
        window.location.href = resumeTemplate;
    });
});
