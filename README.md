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
4. Open `config.js` and replace `'YOUR_MAPBOX_ACCESS_TOKEN'` with your actual token

### Run the Map

The map is now running on this Replit! Simply click the webview to see it in action.

## 🔒 Security (GitHub Upload)

Your API token is protected! The project is configured to keep your Mapbox token secure:

- ✅ Token stored in `config.js` (gitignored, won't be uploaded)
- ✅ Template file `config.example.js` (safe to upload)
- ✅ `.gitignore` configured properly

**You can safely upload this project to GitHub!** See `GITHUB_UPLOAD_GUIDE.md` for detailed instructions.

### For People Cloning This Repo

If you clone this repository:

1. Copy the config template:
   ```bash
   cp config.example.js config.js
   ```

2. Get a free Mapbox token from [mapbox.com](https://www.mapbox.com/)

3. Open `config.js` and add your token:
   ```javascript
   const CONFIG = {
       MAPBOX_TOKEN: 'your_token_here'
   };
   ```

4. Open `index.html` in your browser or run a local server

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
