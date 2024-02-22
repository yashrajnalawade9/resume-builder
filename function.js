document.addEventListener("DOMContentLoaded", function () {
  let full_name = document.querySelector(".full-name");
  let Email_val = document.querySelector(".email-val");
  let phone_val = document.querySelector(".phone-val");
  let position = document.querySelector(".position");
  let about = document.querySelector(".desc");
  let schoolName = document.querySelector(".schoolName");
  let standard = document.querySelector(".standard");
  let schoolCGPA = document.querySelector(".schoolCGPA");
  let collegeName = document.querySelector(".collegeName");
  let course = document.querySelector(".course");
  let collegeCGPA = document.querySelector(".collegeCGPA");
  let Major = document.querySelector(".Project_title-major");
  let majorDesc = document.querySelector(".Project_desc-major");
  let Minor = document.querySelector(".Project_title-minor");
  let MinorDesc = document.querySelector(".Project_desc-minor");
  let skills = document.querySelector(".skills");
  let Interest = document.querySelector(".interest");
  let skill_section = document.getElementById("skill_section");

  const storedData = JSON.parse(localStorage.getItem("resumeData"));

  full_name.textContent = storedData.userName;
  Email_val.textContent = storedData.userEmail;
  phone_val.textContent = storedData.userPhone;
  position.textContent = storedData.userJob;
  about.textContent = storedData.about;

  schoolName.textContent = storedData.schoolName;
  collegeName.textContent = storedData.collegeName;
  standard.textContent = storedData.standard;
  schoolCGPA.textContent = `CGPA ${storedData.schoolCGPA}`;
  collegeCGPA.textContent = `CGPA ${storedData.collegeCGPA}`;
  course.textContent = storedData.course;

  Major.textContent = storedData.Project_title_major;
  majorDesc.textContent = storedData.Project_desc_major;

  Minor.textContent = storedData.Project_title_minor;
  MinorDesc.textContent = storedData.Project_desc_minor;

  // skills.textContent = storedData.skills;
  Interest.textContent = storedData.Interest;

  skill_section.innerHTML = "";

  let skill_array = storedData.skills.split(" ");
  skill_array.forEach((e) => {
    const skill_item = `
    <div class="skill_item">
      <div class="skill_name">${e}</div>
    </div>`;
    skill_section.insertAdjacentHTML("beforeend", skill_item);
  });

  skill_array = storedData.skills.split(" ");

  
  const skillItems = skill_section.querySelectorAll(".skill_item");
  skillItems.forEach((item) => {
    const skillName = item.querySelector(".skill_name").textContent;
    if (!skill_array.includes(skillName)) {
      item.remove();
    }
  });

  // console.log(skill_array);
});

window.onload = function () {
  const download = document.getElementById("download");
  download.addEventListener("click", () => {
    const resume = this.document.getElementById("content");
    html2pdf().from(resume).save();
  });
};
