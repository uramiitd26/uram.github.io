<script>
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  menuToggle.addEventListener('click', () => {
    // This toggles the visibility of the menu
    nav.classList.toggle('active');
    
    // This animates the hamburger lines into an 'X'
    menuToggle.classList.toggle('open');
  });

  // Close menu when a link is clicked (useful for one-page scrolling)
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      menuToggle.classList.remove('open');
    });
  });
</script>
