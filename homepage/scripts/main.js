const getUserSettings = () => {
  let settings = JSON.parse(localStorage.getItem('settings'));

  if (!settings) {
    // setup default settings
    settings = {
      showPexelsBackgrounds: true,
      showQuotes: true,
      showClock: true,
      militaryStyleClock: false,
      showSearch: true,
      showBookmarks: true,
      showTasks: true,
    };
  }

  return settings;
};

document.addEventListener('DOMContentLoaded', (event) => {
  const settings = getUserSettings();

  setupClock(settings.showClock, settings.militaryStyleClock);
  setupSearch(settings.showSearch);
  setupBookmarks(settings.showBookmarks);
  setupTasks(settings.showTasks);
});