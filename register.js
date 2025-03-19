// Event data (can be fetched from a server in a real-world scenario)
const events = {
  "annual-meet": {
    title: "Annual Alumni Meet",
    date: "June 15, 2024",
    time: "10:00 AM - 2:00 PM",
    venue: "Alumni Association Hall",
  },
  "career-webinar": {
    title: "Webinar on Career Growth",
    date: "October 22, 2024",
    time: "10:00 AM - 12:00 PM",
    venue: "Zoom",
  },
  "achievement-awards": {
    title: "Alumni Achievement Awards",
    date: "December 5, 2024",
    time: "6:00 PM - 9:00 PM",
    venue: "Main Auditorium",
  },
};

// Get the event ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const eventId = urlParams.get("event");

// Display event details
if (eventId && events[eventId]) {
  const event = events[eventId];
  document.getElementById("event-title").textContent = `Register for ${event.title}`;
  document.getElementById("event-details").innerHTML = `
    <p><strong>Date:</strong> ${event.date}</p>
    <p><strong>Time:</strong> ${event.time}</p>
    <p><strong>Venue:</strong> ${event.venue}</p>
  `;
} else {
  document.getElementById("event-title").textContent = "Event Not Found";
  document.getElementById("event-details").innerHTML = "<p>This event does not exist.</p>";
}

// Handle form submission
document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  // Save registration data (you can send this to a server or store it locally)
  console.log("Registration Details:", { name, email, phone, eventId });

  // Show a success message
  alert("Thank you for registering! We will send you the event details shortly.");
});