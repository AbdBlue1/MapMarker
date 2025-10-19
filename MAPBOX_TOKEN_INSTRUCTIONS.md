# How to Add Your Mapbox Access Token

The map needs a Mapbox access token to display properly. Follow these simple steps:

## Step 1: Get a Free Mapbox Token

1. Go to **[https://www.mapbox.com/](https://www.mapbox.com/)**
2. Click **"Sign up"** in the top right (or "Sign in" if you already have an account)
3. Create a free account (no credit card required for basic usage)
4. After signing in, you'll be taken to your account dashboard
5. Look for the **"Access tokens"** section
6. Copy your **default public token** (it starts with `pk.`)

## Step 2: Add Token to the Map

1. Open the file **`index.html`** in this project
2. Find line 222 (or search for `YOUR_MAPBOX_ACCESS_TOKEN`)
3. Replace `'YOUR_MAPBOX_ACCESS_TOKEN'` with your actual token

**Before:**
```javascript
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
```

**After (with your token):**
```javascript
mapboxgl.accessToken = 'pk.eyJ1IjoieW91cnVzZXJuYW1lIiwi...'; // Your actual token
```

4. Save the file
5. Refresh your browser

## Step 3: Enjoy Your Map!

Once the token is added, the map will load and display all **3,094 locations**:
- 483 National Rail Stations
- 1,052 Pret A Manger locations
- 993 Sainsbury's stores
- 566 TfL Stations

## Troubleshooting

- **Map not loading?** Make sure you copied the entire token (it's quite long!)
- **"Access token invalid" error?** Double-check that you copied the correct token from your Mapbox account
- **Still having issues?** Make sure you're using the **public token** (starts with `pk.`), not a secret token

## Mapbox Free Tier

The free tier includes:
- 50,000 map loads per month
- Perfect for personal projects and testing
- No credit card required
