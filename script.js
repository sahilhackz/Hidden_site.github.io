
document.addEventListener("DOMContentLoaded", () => {
  fetch('https://api.jsonbin.io/v3/b/6834bca48a456b7966a5ab58/latest', {
    headers: {
      'X-Master-Key': '$2a$10$1rieU4zOzfdBEV1Od.ulAutSiF.VeSHq6M8NvZYNdffMP7r/WJ/he'
    }
  })
  .then(response => response.json())
  .then(data => {
    const contentArea = document.getElementById('content-area');
    data.record.videos.forEach(video => {
      const videoBox = document.createElement('div');
      videoBox.innerHTML = `
        <iframe width="100%" height="200" src="${video.link}" frameborder="0" allowfullscreen></iframe>
        <p>${video.description}</p>
        <a href="${video.download}" class="btn" target="_blank">Visit Website</a>
      `;
      contentArea.appendChild(videoBox);
    });
  });
});
