const setupTasks = (show) => {
  if (show) {
    const listElement = document.querySelector('div.task-list');
    const input = document.querySelector('#task-input');

    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const p = document.createElement('p');
        p.innerText = input.value;
        input.value = '';
        listElement.append(p);
      }

      if (event.key === 'Escape') {
        input.value = '';
        input.blur();
      }
    });
  }
};