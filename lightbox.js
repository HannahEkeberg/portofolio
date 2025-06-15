let currentIndex = 0;
let imageList = [];

// Åpner lightbox med valgt bilde
function openLightbox(index, images) {
  imageList = images;
  currentIndex = index;

  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  lightboxImage.src = imageList[currentIndex];
  lightbox.classList.remove('hidden');

// Lukkeknapp
document.getElementById('closeBtn').addEventListener('click', () => {
  document.getElementById('lightbox').classList.add('hidden');

  const content = document.querySelector('.content');
  if (content) content.classList.remove('hidden');
});

// Forrige bilde
document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    document.getElementById('lightboxImage').src = imageList[currentIndex];
  }
});

// Neste bilde
document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentIndex < imageList.length - 1) {
    currentIndex++;
    document.getElementById('lightboxImage').src = imageList[currentIndex];
  }
});

// Støtte for piltaster
document.addEventListener('keydown', (e) => {
  const lightbox = document.getElementById('lightbox');
  if (lightbox.classList.contains('hidden')) return;

  if (e.key === 'ArrowRight' && currentIndex < imageList.length - 1) {
    currentIndex++;
    document.getElementById('lightboxImage').src = imageList[currentIndex];
  } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
    currentIndex--;
    document.getElementById('lightboxImage').src = imageList[currentIndex];
  } else if (e.key === 'Escape') {
    lightbox.classList.add('hidden');
    const content = document.querySelector('.content');
    if (content) content.classList.remove('hidden');
  }
});
