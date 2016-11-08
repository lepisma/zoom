// COntent script

var zoomPanel = document.createElement('div');
zoomPanel.id = 'zoom-panel';

var zoomIn = document.createElement('div');
var zoomInText = document.createElement('div');
zoomInText.innerHTML = '+';
zoomIn.id = 'zoom-btn-in';
zoomIn.className = 'zoom-btn';
zoomIn.appendChild(zoomInText);

var zoomOut = document.createElement('div');
var zoomOutText = document.createElement('div');
zoomOutText.innerHTML = '–';
zoomOut.id = 'zoom-btn-out';
zoomOut.className = 'zoom-btn';
zoomOut.appendChild(zoomOutText);

zoomPanel.appendChild(zoomIn);
zoomPanel.appendChild(zoomOut);

document.body.appendChild(zoomPanel);

// Add actions
zoomIn.addEventListener('click', function() {
  var currentZoom = document.body.style.zoom;
  var zoomSet;
  if (currentZoom === '') {
    zoomSet = 120;
  } else {
    zoomSet = parseInt(currentZoom) + 20;
  }

  document.body.style.zoom = zoomSet + '%';
  zoomPanel.style.zoom = (10000 / zoomSet) + '%';
});

zoomOut.addEventListener('click', function() {
  var currentZoom = document.body.style.zoom;
  var zoomSet;
  if (currentZoom === '') {
    zoomSet = 80;
  } else {
    zoomSet = parseInt(currentZoom) - 20;
  }

  document.body.style.zoom = zoomSet + '%';
  zoomPanel.style.zoom = (10000 / zoomSet) + '%';
});
