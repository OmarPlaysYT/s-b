const container = document.getElementById('scroll-container');
let isDown = false; // Flag to check if mouse is down
let startX; // Starting X coordinate of the mouse
let scrollLeft; // Starting scroll position

container.addEventListener('mousedown', (e) => {
  isDown = true;
  container.classList.add('active');
  startX = e.pageX - container.offsetLeft; // Get the initial X position
  scrollLeft = container.scrollLeft; // Get the initial scroll position
});

container.addEventListener('mouseleave', () => {
  isDown = false; // Reset when mouse leaves
  container.classList.remove('active');
});

container.addEventListener('mouseup', () => {
  isDown = false; // Reset when mouse is released
  container.classList.remove('active');
});

container.addEventListener('mousemove', (e) => {
  if (!isDown) return; // Only scroll when the mouse is held down
  e.preventDefault(); // Prevent text selection while dragging
  const x = e.pageX - container.offsetLeft; // Current X position
  const walk = (x - startX) * 1; // Distance moved; 2x for faster scroll
  container.scrollLeft = scrollLeft - walk; // Scroll the container
});