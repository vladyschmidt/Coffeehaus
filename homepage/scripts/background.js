const setupBackground = async (show) => {
  if (show) {
    const body = document.querySelector('body');

    const lastUpdateDate = localStorage.getItem('lastPexelsRequestDate');
    if (!lastUpdateDate) {
      const response = await fetch('https://api.pexels.com/v1/search?query=nature', {
        method: 'GET',
        headers: {
          'Authorization': '563492ad6f91700001000001860853cf9a3f47f7905de3589d144227'
        }
      });

    }
  }
};