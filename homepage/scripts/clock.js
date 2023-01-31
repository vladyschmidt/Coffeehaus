const setupClock = (show, militaryStyle) => {
  if (show) {
    const container = document.querySelector('section.clock');
    container.classList.remove('hide');

    const timeElement = document.createElement('h1');
    timeElement.innerText = new Date().toLocaleTimeString([], { hour12: !militaryStyle, hour: '2-digit', minute: '2-digit' });
    container.append(timeElement);
  }
};