// future JS:
// - announcement loader

// Smooth scroll for navbar links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Load announcement text
fetch('data/announcement.json')
  .then(res => res.json())
  .then(data => {
    const el = document.getElementById('announcement-text');
    if (el) el.textContent = data.text;
  })
  .catch(err => console.log('Announcement error:', err));

// - carousel scroll
// - chili animation
