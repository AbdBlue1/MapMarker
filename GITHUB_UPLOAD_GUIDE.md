# How to Upload This Project to GitHub Safely

Your Mapbox API token is now protected! Here's how the security works and how to upload to GitHub.

## 🔒 Security Setup (Already Done!)

I've configured your project to keep the API token secure:

### What's Protected:
- **`config.js`** - Contains your actual Mapbox token (gitignored ✅)
- This file will **NEVER** be uploaded to GitHub

### What Gets Uploaded:
- **`config.example.js`** - Template file without your token (safe to upload ✅)
- **`index.html`** - Main map page (no token hardcoded ✅)
- **All data files** - Station and location data (safe to upload ✅)
- **Documentation** - README and guides (safe to upload ✅)

## 📤 How to Upload to GitHub

### Step 1: Initialize Git (if not already done)
```bash
git init
```

### Step 2: Add Your Files
```bash
git add .
```

The `.gitignore` file will automatically exclude `config.js` from being added.

### Step 3: Commit Your Changes
```bash
git commit -m "Initial commit - UK Locations Map"
```

### Step 4: Create a GitHub Repository
1. Go to [github.com](https://github.com)
2. Click the **+** icon → **New repository**
3. Name it (e.g., "uk-locations-map")
4. Choose **Public** or **Private**
5. Don't initialize with README (you already have one)
6. Click **Create repository**

### Step 5: Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## ✅ Verify Your Token is Protected

Before pushing, you can verify what will be uploaded:

```bash
git status
```

You should **NOT** see `config.js` in the list. If you do see it:
```bash
git rm --cached config.js
git commit -m "Remove config.js from git"
```

## 👥 For People Who Clone Your Repo

When someone clones your repository, they'll need to:

1. Copy the example config:
   ```bash
   cp config.example.js config.js
   ```

2. Edit `config.js` and add their own Mapbox token

3. Refresh the browser

Include this in your README so others know what to do!

## 📋 Recommended README Section

Add this to your README.md:

```markdown
## Setup for Developers

If you clone this repository:

1. Copy the config template:
   \`\`\`bash
   cp config.example.js config.js
   \`\`\`

2. Get a free Mapbox token from [mapbox.com](https://www.mapbox.com/)

3. Open `config.js` and add your token:
   \`\`\`javascript
   const CONFIG = {
       MAPBOX_TOKEN: 'your_token_here'
   };
   \`\`\`

4. Open `index.html` in your browser
```

## 🎯 What's in .gitignore

Your `.gitignore` file already includes:

```
# Mapbox token configuration (keep this secret!)
config.js

# OS files
.DS_Store
Thumbs.db

# Editor files
.vscode/
.idea/
*.swp
*.swo
*~

# Logs
*.log
```

## 🔐 Best Practices

✅ **DO:**
- Keep `config.js` in `.gitignore`
- Provide `config.example.js` as a template
- Document setup steps in README
- Use environment variables for production

❌ **DON'T:**
- Hardcode tokens in HTML/JavaScript files
- Commit `config.js` to the repository
- Share your token publicly
- Use the same token for different projects

## 🆘 What If I Accidentally Committed My Token?

If you already committed `config.js` with your token:

1. **Revoke the token immediately** in your Mapbox account
2. Create a new token
3. Remove the file from git history:
   ```bash
   git rm --cached config.js
   git commit -m "Remove config.js from version control"
   ```
4. Force push (if already pushed):
   ```bash
   git push -f origin main
   ```
5. Consider the old token compromised and don't reuse it

## 🌐 Using on GitHub Pages

If you want to host this on GitHub Pages:

1. You can't use environment variables on GitHub Pages
2. Consider using a **restricted** Mapbox token with URL restrictions
3. In your Mapbox account, create a token restricted to your GitHub Pages domain
4. For example: `https://yourusername.github.io/uk-locations-map/*`

This way, even if someone sees your token, they can't use it on other domains.
