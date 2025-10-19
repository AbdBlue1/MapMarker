function setupLayerToggles(map) {
    const toggles = {
        'rail': document.getElementById('toggle-rail'),
        'pret': document.getElementById('toggle-pret'),
        'sainsburys': document.getElementById('toggle-sainsburys'),
        'tfl': document.getElementById('toggle-tfl')
    };

    Object.keys(toggles).forEach(brand => {
        toggles[brand].addEventListener('change', (e) => {
            const visibility = e.target.checked ? 'visible' : 'none';
            map.setLayoutProperty(`${brand}-clusters`, 'visibility', visibility);
            map.setLayoutProperty(`${brand}-cluster-count`, 'visibility', visibility);
            map.setLayoutProperty(`${brand}-points`, 'visibility', visibility);
            updateStats();
        });
    });
}