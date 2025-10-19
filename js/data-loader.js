let pretLocations = [];
let sainsburysLocations = [];

Promise.all([
    fetch('data/pret-locations.json').then(r => r.json()),
    fetch('data/sainsburys-locations.json').then(r => r.json())
]).then(([pret, sainsburys]) => {
    pretLocations = pret;
    sainsburysLocations = sainsburys;
    initializeMap();
}).catch(err => {
    console.error('Error loading data:', err);
    document.getElementById('loading').textContent = 'Error loading data. Please refresh the page.';
});