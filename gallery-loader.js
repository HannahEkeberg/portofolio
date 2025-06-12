function loadGallery(jsonFile) {
    fetch(jsonFile)
      .then(res => res.json())
      .then(images => {
        const container = document.getElementById('gallery-container');
        const section = document.createElement('section');
        section.className = 'gallery';
  
        images.forEach((src, index) => {
          const div = document.createElement('div');
          div.className = 'gallery-item';
  
          const img = document.createElement('img');
          img.src = src;
          img.alt = 'Bilde';
          img.dataset.index = index;
  
          img.addEventListener('click', () => {
            openLightbox(index, images);
          });
  
          div.appendChild(img);
          section.appendChild(div);
        });
  
        container.innerHTML = '';
        container.appendChild(section);
  
        // 👇 eneste nødvendige endring:
        window.scrollTo(0, 0);
      })
      .catch(err => console.error('Kunne ikke laste bilder:', err));
  }
  