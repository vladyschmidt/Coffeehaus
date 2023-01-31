const setupSearch = async (show) => {
  if (show) {
    const container = document.querySelector('section.search');
    const inputControl = container.querySelector('div.input-control');
    const input = document.querySelector('#search-input');
    container.classList.remove('hide');

    const engines = await browser.search.get();
    engines.forEach(engine => {
      if (engine.isDefault) {
        const icon = document.createElement('img');
        icon.src = engine.favIconUrl;
        container.insertBefore(icon, inputControl);
      }
    });

    const tab = await browser.tabs.getCurrent();

    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        browser.search.search({ query: input.value, tabId: tab.id});
      }
    });
  }
};