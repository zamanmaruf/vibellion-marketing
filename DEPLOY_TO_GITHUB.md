# Deploy to GitHub - Instructions

Follow these steps to upload your project to GitHub:

## Step 1: Initialize Git Repository

```bash
cd /Users/mdmarufuzzaman/Vibellion_Marketing
git init
```

## Step 2: Add All Files

```bash
git add .
```

## Step 3: Make Initial Commit

```bash
git commit -m "Initial commit: Vibellion Marketing website with research-backed pricing"
```

## Step 4: Set Main Branch

```bash
git branch -M main
```

## Step 5: Add Remote Repository

```bash
git remote add origin https://github.com/zamanmaruf/vibellion-marketing.git
```

## Step 6: Push to GitHub

```bash
git push -u origin main
```

## Alternative: If you get permission errors

If you encounter permission errors, try:

1. **Check directory permissions:**
   ```bash
   ls -la /Users/mdmarufuzzaman/Vibellion_Marketing
   ```

2. **Initialize git in a different location and move files:**
   - Or use GitHub Desktop app
   - Or use VS Code's built-in Git features

3. **Use SSH instead of HTTPS:**
   ```bash
   git remote add origin git@github.com:zamanmaruf/vibellion-marketing.git
   ```

## Important Notes

- ✅ `.env.local` is already in `.gitignore` - your API keys won't be committed
- ✅ `node_modules` is ignored - dependencies won't be uploaded
- ✅ `.next` build folder is ignored

## After Pushing

1. Go to https://github.com/zamanmaruf/vibellion-marketing to verify files are uploaded
2. Add a README.md if needed (optional)
3. Set up deployment (Vercel, Netlify, etc.)
