// future JS:
// - announcement loader
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
