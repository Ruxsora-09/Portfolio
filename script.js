// Smooth scrolling for section links.
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (event) {
    var target = document.querySelector(link.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Light mode is the default. Both sun and moon icons stay visible;
// the active theme is highlighted in the switch.
var themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', function () {
  var isDark = document.body.classList.toggle('dark-mode');
  themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  themeToggle.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
});
