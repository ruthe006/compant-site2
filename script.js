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
function filterCards(category) {
    const cards = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-buttons button');

    // Remove "active" class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));

    // Add "active" class to clicked button
    event.target.classList.add('active');

    // Show/hide cards based on category
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

