const rssUrl = 'https://lovisestudios.substack.com/feed';

fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`)
  .then(res => res.json())
  .then(data => {
    const postsContainer = document.getElementById('substack-posts');
    if (!data || !data.items) {
      console.error('Ingen innlegg funnet i RSS-feed.');
      return;
    }

    data.items.forEach(item => {
      const post = document.createElement('div');
      post.classList.add('substack-article');

      const rawContent = item.content || item.description || "";
      const imgMatch = rawContent.match(/<img[^>]+src="([^">]+)"/);
      const imageUrl = imgMatch ? imgMatch[1] : null;

      // Fjern første <img> fra innholdet
      const cleanedContent = rawContent.replace(/<img[^>]+src="([^">]+)"[^>]*>/i, '');

      const date = new Date(item.pubDate).toLocaleDateString('no-NO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      post.innerHTML = `
        <h2>${item.title}</h2>
        <p class="date">${date}</p>
        ${imageUrl ? `<img src="${imageUrl}" alt="Substack image" class="substack-image">` : ''}
        <p class="excerpt">${item.description}</p>
        <div class="full-content" style="display: none;">${cleanedContent}</div>
        <button class="toggle-button">Vis mer</button>
        <a href="${item.link}" target="_blank" class="read-more">Original Substack-post</a>
      `;

      const toggleButton = post.querySelector('.toggle-button');
      const fullContent = post.querySelector('.full-content');

      toggleButton.addEventListener('click', () => {
        const isVisible = fullContent.style.display === 'block';
        fullContent.style.display = isVisible ? 'none' : 'block';
        toggleButton.textContent = isVisible ? 'Vis mer' : 'Vis mindre';
      });

      postsContainer.appendChild(post);
    });
  })
  .catch(error => {
    console.error('Feil ved henting av RSS:', error);
  });
