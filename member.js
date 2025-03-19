// Initialize members array from localStorage or empty array
let members = JSON.parse(localStorage.getItem('members')) || [];

// Display all members on page load
displayMembers(members);

// Function to display members
function displayMembers(membersList) {
  const membersListElement = document.getElementById('members-list');
  membersListElement.innerHTML = '';
  membersList.forEach(member => {
    const li = document.createElement('li');
    // Add proper spacing and a separator between name and position
    li.innerHTML = `<span class="member-name">${member.name}</span> : <span class="member-position">${member.position}</span>`;
    membersListElement.appendChild(li);
  });
}

// Function to add a member
function addMember() {
  const name = document.getElementById('add-member-name').value.trim();
  const position = document.getElementById('add-member-position').value.trim();
  if (name && position) {
    members.push({ name, position });
    localStorage.setItem('members', JSON.stringify(members));
    displayMembers(members);
    document.getElementById('add-member-name').value = '';
    document.getElementById('add-member-position').value = '';
  } else {
    alert('Please fill in both name and position fields.');
  }
}

// Function to remove a member
function removeMember() {
  const name = document.getElementById('remove-member-name').value.trim();
  if (name) {
    const initialLength = members.length;
    members = members.filter(member => member.name.toLowerCase() !== name.toLowerCase());
    if (members.length < initialLength) {
      localStorage.setItem('members', JSON.stringify(members));
      displayMembers(members);
      alert(`Member "${name}" removed successfully.`);
    } else {
      alert(`Member "${name}" not found.`);
    }
    document.getElementById('remove-member-name').value = '';
  } else {
    alert('Please enter a name to remove.');
  }
}

// Function to search members
function searchMembers() {
  const searchValue = document.getElementById('search-input').value.toLowerCase();
  const filteredMembers = members.filter(member => member.name.toLowerCase().includes(searchValue));
  displayMembers(filteredMembers);
}

// Hide Admin Section on Main Page
function hideAdminSection() {
  const adminSection = document.getElementById('admin-section');
  if (window.location.pathname.includes('index.html')) {
    adminSection.style.display = 'none'; // Hide admin section on the main page
  }
}

// Call the function to hide admin section on page load
hideAdminSection();