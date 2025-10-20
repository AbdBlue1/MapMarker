function initializeMap({ pretLocations, sainsburysLocations, nationalRailStations, tflStations }) {
    if (typeof CONFIG === 'undefined' || !CONFIG.MAPBOX_TOKEN || CONFIG.MAPBOX_TOKEN === 'YOUR_MAPBOX_ACCESS_TOKEN') {
        document.getElementById('loading').innerHTML = `
            <div style="max-width:500px;">
                <h3 style="color:#E63946;">⚠️ Mapbox Token Required</h3>
                <p>Replace 'YOUR_MAPBOX_ACCESS_TOKEN' in js/config.js with your token.</p>
            </div>
        `;
        return;
    }

    mapboxgl.accessToken = CONFIG.MAPBOX_TOKEN;
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-0.1276, 51.5074],
        zoom: 10
    });

    map.on('load', () => {
        document.getElementById('loading').style.display = 'none';

        addMarkersToMap(map, nationalRailStations, 'rail', '#E63946');
        addMarkersToMap(map, pretLocations, 'pret', '#F77F00');
        addMarkersToMap(map, sainsburysLocations, 'sainsburys', '#06AED5');
        addMarkersToMap(map, tflStations, 'tfl', '#7209B7');

        updateStats();
        setupLayerToggles(map);
    });

    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.FullscreenControl());
}
