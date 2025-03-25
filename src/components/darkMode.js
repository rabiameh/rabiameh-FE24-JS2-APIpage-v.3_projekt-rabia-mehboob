const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

const applyDarkMode = () => {
  body.classList.add('dark-mode');
  if (darkModeToggle) darkModeToggle.textContent = '☀️'; 
};

const removeDarkMode = () => {
  body.classList.remove('dark-mode');
  if (darkModeToggle) darkModeToggle.textContent = '🌙';
};
if (!localStorage.getItem('theme')) {
  localStorage.setItem('theme', 'light');
}
if (localStorage.getItem('theme') === 'dark') {
  applyDarkMode();
} else {
  removeDarkMode();
}
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
      removeDarkMode();
      localStorage.setItem('theme', 'light');
    } else {
      applyDarkMode();
      localStorage.setItem('theme', 'dark');
    }
  });
}
