# UK Locations Map - Project Summary

## 📊 Data Overview

Your map displays **3,094 total locations** across the UK:

| Brand | Count | Coverage |
|-------|-------|----------|
| 🚂 National Rail Stations | 483 | Greater London |
| ☕ Pret A Manger | 1,052 | UK-wide |
| 🛒 Sainsbury's | 993 | London |
| 🚇 TfL Stations | 566 | London Transport Network |

## 📁 Project Structure

```
.
├── index.html                          # Main map page
├── data/
│   ├── national-rail-stations.js       # 483 rail stations
│   ├── tfl-stations.js                 # 566 TfL stations
│   ├── pret-locations.json             # 1,052 Pret locations
│   └── sainsburys-locations.json       # 993 Sainsbury's stores
├── README.md                           # Project documentation
├── MAPBOX_TOKEN_INSTRUCTIONS.md        # How to add your token
└── PROJECT_SUMMARY.md                  # This file
```

## 🎨 Map Features

✅ **Interactive Map**
- Powered by Mapbox GL JS
- Centered on London (51.5074°N, 0.1276°W)
- Smooth zoom and pan controls

✅ **Smart Clustering**
- Markers cluster together when zoomed out
- Click clusters to zoom in and expand
- Better performance with thousands of markers

✅ **Color-Coded Markers**
- 🔴 Red: National Rail Stations
- 🟠 Orange: Pret A Manger
- 🔵 Blue: Sainsbury's
- 🟣 Purple: TfL Stations

✅ **Layer Controls**
- Toggle any brand on/off
- Live count of visible locations
- Shows total locations

✅ **Location Details**
- Click any marker for details
- Shows name, address, postcode
- Opening hours (where available)
- Phone numbers (where available)

✅ **Responsive Design**
- Works on desktop and mobile
- Fullscreen mode available
- Touch-friendly controls

## 🚀 Quick Start

1. **Get Mapbox Token** (free, no credit card)
   - Visit [mapbox.com](https://www.mapbox.com/)
   - Sign up for free account
   - Copy your public token

2. **Add Token to Code**
   - Open `index.html`
   - Find line 224
   - Replace `'YOUR_MAPBOX_ACCESS_TOKEN'` with your token

3. **View the Map**
   - The server is already running!
   - Refresh your browser
   - Explore 3,094 locations

## 📍 Data Fields

### National Rail & TfL Stations
- ID, Name, Brand
- Latitude, Longitude
- CRS Code (Rail) / Modes (TfL)

### Pret & Sainsbury's
- ID, Name, Brand
- Address, City, Postcode
- Latitude, Longitude
- Opening Hours
- Phone Number
- Status (open/closed)

## 🛠️ Technology Stack

- **Mapbox GL JS v3.0.1** - Interactive mapping
- **GeoJSON** - Geographic data format
- **Vanilla JavaScript** - No frameworks needed
- **Python HTTP Server** - Simple static file serving

## 💡 Tips

- Use the layer toggles to reduce clutter
- Click on cluster numbers to zoom in
- Try fullscreen mode for better viewing
- Mobile users: use two-finger pinch to zoom

## 📝 Notes

- The free Mapbox tier includes 50,000 map loads/month
- All data is loaded client-side (no backend required)
- Clustering activates at zoom level 14 and below
- Map centered on London but shows all UK locations
