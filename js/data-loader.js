// Load Pret and Sainsbury's JSON data
function loadLocations() {
    return Promise.all([
        fetch('data/pret-locations.json').then(res => res.json()),
        fetch('data/sainsburys-locations.json').then(res => res.json())
    ]).then(([pret, sainsburys]) => {
        return { pretLocations: pret, sainsburysLocations: sainsburys };
    }).catch(err => {
        console.error('Error loading data:', err);
        document.getElementById('loading').textContent = 'Error loading data. Please refresh the page.';
        throw err;
    });
}

// Load data and then initialize map
loadLocations().then(({ pretLocations, sainsburysLocations }) => {
    initializeMap({
        pretLocations,
        sainsburysLocations,
        nationalRailStations,   // from national-rail-stations.js
        tflStations             // from tfl-stations.js
    });
});
