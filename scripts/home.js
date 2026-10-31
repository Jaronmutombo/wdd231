// Course Data Array
const courses = [
    { subject: 'WDD', number: 130, credits: 2, completed: true },
    { subject: 'WDD', number: 131, credits: 2, completed: true },
    { subject: 'WDD', number: 231, credits: 2, completed: false },
    { subject: 'CSE', number: 110, credits: 2, completed: true },
    { subject: 'CSE', number: 111, credits: 2, completed: false },
    { subject: 'CSE', number: 210, credits: 2, completed: false }
];

// 1. Hamburger Menu Toggle
const hamButton = document.querySelector('#ham-btn');
const mainNav = document.querySelector('#nav-bar');

hamButton.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    hamButton.classList.toggle('show');
});

// 2. Render Courses & Calculate Total Credits
function renderCourses(filteredList) {
    const container = document.querySelector('#courses-container');
    container.innerHTML = '';

    filteredList.forEach(course => {
        const card = document.createElement('div');
        card.className = `course-card ${course.completed ? 'completed' : ''}`;
        card.textContent = `${course.subject} ${course.number}`;
        container.appendChild(card);
    });

    // Sum credits dynamically
    const totalCredits = filteredList.reduce((sum, course) => sum + course.credits, 0);
    document.querySelector('#total-credits').textContent = totalCredits;
}

// 3. Filter Buttons Handler
const filterBtns = document.querySelectorAll('.filter-btn');

function setActiveButton(clickedBtn) {
    filterBtns.forEach(btn => btn.classList.remove('active'));
    clickedBtn.classList.add('active');
}

document.querySelector('#btn-all').addEventListener('click', (e) => {
    setActiveButton(e.target);
    renderCourses(courses);
});

document.querySelector('#btn-cse').addEventListener('click', (e) => {
    setActiveButton(e.target);
    renderCourses(courses.filter(c => c.subject === 'CSE'));
});

document.querySelector('#btn-wdd').addEventListener('click', (e) => {
    setActiveButton(e.target);
    renderCourses(courses.filter(c => c.subject === 'WDD'));
});

// 4. Dynamic Footer Dates
document.querySelector('#currentyear').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;

// Initial Render on Page Load
renderCourses(courses);