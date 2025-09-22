  const hamburger = document.querySelector('.hamburger');
  const navLink = document.querySelector('.nav-link');

  hamburger.addEventListener('click', () => {
    navLink.classList.toggle('active');
  });
  // get touch btn code
    const email = "crevasolution@gmail.com"; // Replace with your actual email
  const subject = "Let's Collaborate";
  const body = "Hi team, I'm interested in your services.";

  // Function to open email client
  function sendEmail() {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  // Attach event listeners
  document.getElementById("getStartedBtn").addEventListener("click", sendEmail);
  document.getElementById("getInTouchBtn").addEventListener("click", sendEmail);
  document.getElementById("StartYourBtn").addEventListener("click", sendEmail);
  document.getElementById("a").addEventListener("click", sendEmail);
function filterCards(category, event) {
  let cards = document.querySelectorAll('.card');
  let buttons = document.querySelectorAll('.filter-buttons button');

  // reset active button
  buttons.forEach(btn => btn.classList.remove('active'));

  // set active button
  event.target.classList.add('active');

  // filter cards
  cards.forEach(card => {
    if (category === 'all') {
      card.style.display = "block";
    } else {
      card.style.display = card.classList.contains(category) ? "block" : "none";
    }
  });
}

// Show all projects on load
window.onload = () => filterCards('all', {target: document.querySelector('.filter-buttons button')});
