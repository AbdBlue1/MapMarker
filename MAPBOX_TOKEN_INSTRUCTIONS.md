# How to Add Your Mapbox Access Token

The map needs a Mapbox access token to display properly. Follow these simple steps:

## Step 1: Get a Free Mapbox Token

1. Go to **[https://www.mapbox.com/](https://www.mapbox.com/)**
2. Click **"Sign up"** in the top right (or "Sign in" if you already have an account)
3. Create a free account (no credit card required for basic usage)
4. After signing in, you'll be taken to your account dashboard
5. Look for the **"Access tokens"** section
6. Copy your **default public token** (it starts with `pk.`)

## Step 2: Add Token to the Config File

1. Open the file **`config.js`** in this project
2. Replace `'YOUR_MAPBOX_ACCESS_TOKEN'` with your actual token

**Before:**
```javascript
const CONFIG = {
    MAPBOX_TOKEN: 'YOUR_MAPBOX_ACCESS_TOKEN'
};
```

**After (with your token):**
```javascript
const CONFIG = {
    MAPBOX_TOKEN: 'pk.eyJ1IjoieW91cnVzZXJuYW1lIiwi...' // Your actual token here
};
```

3. Save the file
4. Refresh your browser

**Important:** The `config.js` file is gitignored and will NOT be uploaded to GitHub, keeping your token secure!

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

## 🔒 Security Note (GitHub Upload)

Your Mapbox token is stored in `config.js`, which is listed in `.gitignore`. This means:
- ✅ Your token will **NOT** be uploaded to GitHub
- ✅ The token stays private and secure
- ✅ You can safely push your project to a public repository

When someone clones your GitHub repo:
1. They'll see `config.example.js` (template file)
2. They'll need to create their own `config.js` file
3. They'll add their own Mapbox token

This is the standard way to handle API keys in open-source projects!
