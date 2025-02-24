// Lightbox functionality
function openLightbox(imageUrl, caption) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  
  lightboxImg.src = imageUrl;
  lightboxCaption.textContent = caption;
  lightbox.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.add('hidden');
  document.body.style.overflow = '';
}

// Share functionality
function sharePost() {
  if (navigator.share) {
    navigator.share({
      title: document.title,
      url: window.location.href
    });
  } else {
    // Fallback - copy to clipboard
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  }
}

// Smooth scroll progress indicator
document.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.createElement('div');
  progressBar.className = 'fixed top-0 left-0 h-1 bg-purple-600 transition-all duration-300';
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
  });
});