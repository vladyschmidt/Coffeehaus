const setupBookmarks = async (show) => {
  if (show) {
    const container = document.querySelector('section.bookmarks');
    container.classList.remove('hide');
    
    const websites = await browser.topSites.get({ includeFavicon: true, limit: 5 });
    websites.forEach(element => {
      const cell = document.createElement('a');
      cell.href = element.url;
      cell.classList.add('cell');

      const iconContainer = document.createElement('div');
      iconContainer.classList.add('icon');

      const favicon = document.createElement('img');
      favicon.src = element.favicon;
      iconContainer.append(favicon);
      cell.append(iconContainer);

      const title = document.createElement('h4');
      title.innerText = element.title.split(' ')[0];
      cell.append(title);

      container.append(cell);
    });
  }
};