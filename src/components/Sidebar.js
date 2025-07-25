// sidebar.js
document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.sidebar-nav li');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  const toggleBtn = document.getElementById('toggleMenu');
  toggleBtn.addEventListener('click', () => {
    alert('Menu toggled! (You can add real behavior here.)');
  });
});
