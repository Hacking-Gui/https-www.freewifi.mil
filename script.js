// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  const isDarkTheme = body.classList.contains('dark-theme');
  themeToggle.textContent = isDarkTheme ? '☀️' : '🌙';
  localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-theme');
  themeToggle.textContent = '☀️';
} else {
  body.classList.remove('dark-theme');
  themeToggle.textContent = '🌙';
}
