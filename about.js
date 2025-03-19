// Toggle extra info
document.getElementById('more-info-btn').addEventListener('click', function () {
  const extraInfo = document.getElementById('extra-info');
  if (extraInfo.style.display === 'none' || extraInfo.style.display === '') {
    extraInfo.style.display = 'block';
    this.textContent = 'Show Less';
  } else {
    extraInfo.style.display = 'none';
    this.textContent = 'Read More';
  }
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('nav ul');

  menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });
});