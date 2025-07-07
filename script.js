const searchInput = document.getElementById('search');

searchInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const query = searchInput.value.trim();
    if (query) {
      // Search DuckDuckGo
      const url = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
      window.open(url, '_self');
    }
  }
});
