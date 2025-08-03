const rssUrl = 'https://lovisestudios.substack.com/feed';

fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`)
  .then(res => res.json())
  .then(data => {
    const postsContainer = document.getElementById('substack-posts');
    data.items.forEach(item => {
      const post = document.createElement('div');
      post.classList.add('substack-post');

      // Hent første bilde fra innholdet
      const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
      const imageUrl = imgMatch ? imgMatch[1] : null;

      post.innerHTML = `
        ${imageUrl ? `<img src="${imageUrl}" alt="Substack image" class="substack-image">` : ''}
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <a href="${item.link}" target="_blank" class="read-more-button">Les mer</a>
      `;

      postsContainer.appendChild(post);
    });
  })
  .catch(error => {
    console.error('Feil ved henting av RSS:', error);
  });
