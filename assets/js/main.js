function loadSection(section) {
  fetch(`_${section}.html`)
    .then(response => response.text())
    .then(data => {
      document.querySelector(section).innerHTML = data;
    });
}

loadSection('header');
loadSection('footer');
