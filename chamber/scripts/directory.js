// File paths and DOM element selectors
const url = 'data/members.json';
const display = document.querySelector('#members');
const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');
const hamburgerBtn = document.querySelector('#hamburger-btn');
const primaryNav = document.querySelector('#primary-nav');

// 1. Navigation Menu Toggle (Mobile View)
if (hamburgerBtn && primaryNav) {
  hamburgerBtn.addEventListener('click', () => {
    primaryNav.classList.toggle('show');
    hamburgerBtn.classList.toggle('show');
  });
}

// 2. Fetch Member Data from JSON
async function getMembersData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    displayMembers(data);
  } catch (error) {
    console.error('Error fetching member data:', error);
  }
}

// 3. Loop through your 7 companies and build HTML cards
const displayMembers = (members) => {
  display.innerHTML = ''; // Clear container

  members.forEach((member) => {
    // Create card container
    const card = document.createElement('section');
    card.classList.add('member-card');

    // Header section: Company Name & Category/Tagline
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('card-header');
    
    const name = document.createElement('h3');
    name.textContent = member.name; // Displays: "Tesla Motors Inc", "Google", etc.
    
    const tagline = document.createElement('p');
    tagline.classList.add('tagline');
    tagline.textContent = member.category; // Displays category (e.g. "Automotive")

    headerDiv.appendChild(name);
    headerDiv.appendChild(tagline);

    // Body section: Image on left, Details on right
    const bodyDiv = document.createElement('div');
    bodyDiv.classList.add('card-body');

    // Logo Image tag
    const image = document.createElement('img');
    image.setAttribute('src', `images/${member.image}`); // Loads: "images/tesla-logo.jpg", etc.
    image.setAttribute('alt', `Logo for ${member.name}`);
    image.setAttribute('loading', 'lazy');

    // Details container
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('card-details');

    const address = document.createElement('p');
    address.innerHTML = `<strong>ADDRESS:</strong> ${member.address}`;

    const phone = document.createElement('p');
    phone.innerHTML = `<strong>PHONE:</strong> ${member.phone}`;

    const website = document.createElement('p');
    // Clean up domain for link display (e.g., "www.tesla.com")
    const cleanUrl = member.website.replace('https://', '');
    website.innerHTML = `<strong>URL:</strong> <a href="${member.website}" target="_blank" rel="noopener">${cleanUrl}</a>`;

    detailsDiv.appendChild(address);
    detailsDiv.appendChild(phone);
    detailsDiv.appendChild(website);

    bodyDiv.appendChild(image);
    bodyDiv.appendChild(detailsDiv);

    card.appendChild(headerDiv);
    card.appendChild(bodyDiv);

    display.appendChild(card);
  });
};

// 4. View Toggles (Grid vs List)
gridButton.addEventListener('click', () => {
  display.classList.add('grid');
  display.classList.remove('list');
  gridButton.classList.add('active-view');
  listButton.classList.remove('active-view');
});

listButton.addEventListener('click', () => {
  display.classList.add('list');
  display.classList.remove('grid');
  listButton.classList.add('active-view');
  gridButton.classList.remove('active-view');
});

// 5. Dynamic Footer Updates
const yearSpan = document.querySelector('#year');
const lastModifiedSpan = document.querySelector('#lastModified');

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
if (lastModifiedSpan) {
  lastModifiedSpan.textContent = `Last Modification: ${document.lastModified}`;
}

// Execute data fetch on page load
getMembersData();