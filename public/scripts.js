document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  // Function to set theme
  const setTheme = (isDark) => {
    if (isDark) {
      html.setAttribute('data-bs-theme', 'dark');
      themeToggle.checked = true;
      localStorage.setItem('theme', 'dark');
    } else {
      html.setAttribute('data-bs-theme', 'light');
      themeToggle.checked = false;
      localStorage.setItem('theme', 'light');
    }
  };
  
  // Check for saved theme preference or system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial theme
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    setTheme(true);
  }

  // Theme toggle handler
  themeToggle.addEventListener('change', (e) => {
    setTheme(e.target.checked);
  });
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches);
    }
  });
});