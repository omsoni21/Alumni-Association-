// Open RSVP Modal
document.getElementById('rsvpBtn').addEventListener('click', function () {
    document.getElementById('rsvpModal').style.display = 'flex';
});

// Close RSVP Modal
document.querySelector('.close-btn').addEventListener('click', function () {
    document.getElementById('rsvpModal').style.display = 'none';
});

// Handle RSVP Form Submission
document.getElementById('rsvpForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Save RSVP data (you can send this to a server or store it locally)
    console.log('RSVP Submitted:', { name, email });

    // Close the modal
    document.getElementById('rsvpModal').style.display = 'none';

    // Show a success message
    alert('Thank you for RSVPing! We look forward to seeing you at the event.');
});