document.addEventListener('DOMContentLoaded', (event) => {
  const toggleSwitch = document.getElementById('dark-mode-toggle');
  const body = document.body;

  // Check for saved user preference, if any, on load of the website
  const currentMode = localStorage.getItem('darkMode');
  if (currentMode === 'enabled') {
    body.classList.add('dark-mode');
    toggleSwitch.checked = true;
  }

  // Toggle dark mode on switch change
  toggleSwitch.addEventListener('change', () => {
    body.classList.toggle('dark-mode');

    // Save the user's preference in localStorage
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  });
});
