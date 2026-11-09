export function setTitle(course) {
  document.querySelector("#courseName").textContent = course.name;
  document.querySelector("#courseCode").textContent = course.code;
}

export function setSectionSelection(sections) {
  const sectionSelect = document.querySelector("#sectionNumber");
  sections.forEach((section) => {
    const option = document.createElement("option");
    option.value = section.sectionNumber;
    option.textContent = `${section.sectionNumber}`;
    sectionSelect.appendChild(option);
  });
}