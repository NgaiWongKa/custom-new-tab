document.getElementById("search").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const query = this.value.trim();
    if (query) {
      window.location.href = `https://www.startpage.com/do/dsearch?q=${encodeURIComponent(query)}&cat=web&language=english`;
    }
  }
});
