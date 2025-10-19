# UK Locations Map

An interactive map displaying locations across the UK:

- **National Rail Stations**: 483 stations
- **Pret A Manger**: 1,052 locations (UK-wide)
- **Sainsbury's**: 993 locations (London)
- **TfL Stations**: 566 stations

**Total: ~3,094 locations**

## Features

- Interactive Mapbox map with clustering for better performance
- Toggle layers to show/hide different brands
- Click markers for detailed information
- Responsive design for mobile and desktop
- Cluster expansion on click

## Setup

### Get a Mapbox Access Token

1. Go to [mapbox.com](https://www.mapbox.com/) and create a free account
2. Navigate to your [Account Dashboard](https://account.mapbox.com/)
3. Copy your default public access token
4. Open `index.html` and replace `'YOUR_MAPBOX_ACCESS_TOKEN'` with your actual token (around line 222)

### Run the Map

The map is now running on this Replit! Simply click the webview to see it in action.

## Data Sources

- National Rail Stations: Greater London area
- Pret A Manger: All UK locations
- Sainsbury's: London locations only
- TfL Stations: Transport for London network

## Technologies

- Mapbox GL JS v3.0.1
- Vanilla JavaScript
- GeoJSON for data formatting
- Clustering for performance optimization
