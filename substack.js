document.addEventListener("DOMContentLoaded", function () {
    const feedUrl = "https://api.rss2json.com/v1/api.json?rss_url=https://lovisestudios.substack.com/feed";
  
    fetch(feedUrl)
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById("substack-posts");
        if (!container) return;
  
        data.items.slice(0, 5).forEach(post => {
          const article = document.createElement("article");
          article.classList.add("substack-article");
  
          // Ekstraher første bilde
          const imgMatch = post.description.match(/<img[^>]+src="([^">]+)"/);
          const imageUrl = imgMatch ? imgMatch[1] : null;
  
          // Ekstraher ren tekst fra beskrivelsen
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = post.description;
          const textContent = tempDiv.textContent || tempDiv.innerText || "";
          const shortText = textContent.slice(0, 250) + "...";
  
          article.innerHTML = `
            ${imageUrl ? `<img src="${imageUrl}" alt="Substack image">` : ""}
            <h2>${post.title}</h2>
            <p class="date">${new Date(post.pubDate).toLocaleDateString()}</p>
            <p class="excerpt">${shortText}</p>
            <a class="read-more" href="${post.link}" target="_blank">Les mer på Substack</a>
          `;
  
          container.appendChild(article);
        });
      })
      .catch(err => {
        console.error("Kunne ikke hente Substack-feed:", err);
      });
  });
  