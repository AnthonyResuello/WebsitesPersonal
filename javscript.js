// Toggle mobile menu function
// toggle the visibility of a navigation menu
function toggleMenu() {
  const menu = document.querySelector('nav ul');
  if (menu) {
    menu.classList.toggle('showmenu');
  }
}
//event listener listens for a click event on the #menu element
const menuButton = document.querySelector('#menu');
if (menuButton) {
  menuButton.addEventListener('click', toggleMenu);
}

const form = document.querySelector('#contact-form');
const popup = document.querySelector('#popup');
const closePopup = document.querySelector('#close-popup');

//listens for a submit event on a form element with the ID of "contact-form"
//retrieves the input values from various form elements using document.querySelector() and it assigns them to corresponding variables.
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const projectName = document.querySelector('#project-name').value;
    const details = document.querySelector('#details').value;
    const startDate = new Date(document.querySelector('#start-date').value);
    const duration = parseInt(document.querySelector('#duration').value);
    const email = document.querySelector('#email').value;
    const confirmEmail = document.querySelector('#confirm-email').value;
    const contactMethod = document.querySelector('#contact-method').value;

    /* Date Section */
    // Check if start date is at least 1 day in the future
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate());
    if (startDate < currentDate) {
      alert('Start date must be at least 1 day in the future');
      return;
    }

    /* Email Confirmation */
    // Check if email and confirm email match
    if (email !== confirmEmail) {
      alert('Email and confirm email must match');
      return;
    }

    /*Pop up Section */
    // Display popup with summarized data
    if (popup) {
      document.querySelector('#popup-project-name').textContent = projectName;
      document.querySelector('#popup-details').textContent = details;
      document.querySelector('#popup-start-date').textContent = startDate.toDateString();
      document.querySelector('#popup-duration').textContent = duration;
      document.querySelector('#popup-email').textContent = email;
      document.querySelector('#popup-contact-method').textContent = contactMethod;
      popup.style.display = 'block';
    }
  });
}

// Close popup 
if (closePopup) {
  closePopup.addEventListener('click', function() {
    if (popup) {
      popup.style.display = 'none';
    }
  });
}
