# Quick Asset Replacement Guide

## 🎥 Adding Your Video

**Step 1:** Prepare your video file
- Save your demonstration video as "pad-demonstration-video.mp4"
- Optionally, create a thumbnail image as "video-thumbnail.jpg"
- Place both files in the same folder as your index.html file

**Step 2:** Your video will automatically work
- The website will automatically detect and play your video file
- No code changes needed if you use the exact filename "pad-demonstration-video.mp4"
- Supported formats: MP4 (recommended), WebM

**Alternative:** If you want to use a different filename
- Open `index.html` in a text editor
- Find the video section (around line 50)
- Change `src="./pad-demonstration-video.mp4"` to your filename
- Also update the React component at `/components/VideoDemo.tsx` if using the React version

---

## 📸 Adding Your Anatomy Diagram

**Step 1:** Prepare your anatomy screenshot
- Save your anatomy diagram as "anatomy-diagram.jpg"
- Recommended formats: JPG, PNG
- Place the image in the same folder as your index.html file

**Step 2:** Your diagram will automatically appear
- The website will automatically display your anatomy diagram
- No code changes needed if you use the exact filename "anatomy-diagram.jpg"

**Alternative:** If you want to use a different filename
- Open `index.html` in a text editor
- Find the anatomy section (around line 500)
- Change `src="./anatomy-diagram.jpg"` to your filename
- Also update the React component at `/components/ReproductiveSystem.tsx` if using the React version

---

## 🏃‍♀️ Replacing the Girl Scouts Logo

**Option A: Use a local image file**
1. Save your logo as `girl-scouts-logo.png` in the same folder as `index.html`
2. Open `index.html`
3. Find line 11 and change:
```html
<img src="girl-scouts-logo.png" alt="Girl Scouts Logo" />
```

**Option B: Use an online image**
1. Upload your logo to a free image hosting service like Imgur
2. Copy the direct image URL
3. Replace the src in line 11 of `index.html`

---

## 🚀 Publishing to GitHub Pages

**Quick Steps:**
1. Create a new GitHub repository
2. Upload these files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `pad-demonstration-video.mp4` (your video)
   - `anatomy-diagram.jpg` (your diagram)
   - `girl-scouts-logo.png` (your logo, optional)
3. Go to repository Settings → Pages
4. Select "Deploy from a branch" → "main"
5. Wait 2-3 minutes, then visit your site!

**Your site URL will be:**
`https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME`

---

## ✅ Testing Checklist

Before publishing, make sure:
- [ ] All 6 tabs work correctly
- [ ] Video plays properly (if added)
- [ ] Anatomy diagram displays correctly (if added)
- [ ] Logo displays correctly
- [ ] Website looks good on mobile
- [ ] All text is readable

---

## 🆘 Troubleshooting

**Video not playing?**
- Check that your video file is named exactly "pad-demonstration-video.mp4"
- Make sure the video file is in the same folder as index.html
- Try different video formats (MP4 is most compatible)
- Check browser console for error messages (F12)

**Anatomy diagram not showing?**
- Check that your image file is named exactly "anatomy-diagram.jpg"
- Make sure the image file is in the same folder as index.html
- Try different image formats (JPG and PNG work best)
- Check that the image file isn't corrupted

**Logo not displaying?**
- Check that the file path is correct
- Make sure the image file is in the same folder
- Try using a different image format (PNG recommended)

**GitHub Pages not working?**
- Ensure your repository is public
- Check that GitHub Pages is enabled in settings
- Wait a few minutes after enabling - it takes time to deploy
- Make sure all files are uploaded correctly

**Need help?**
- Check the browser console for error messages (F12)
- Validate your HTML at validator.w3.org
- Make sure all file names match exactly (case-sensitive)
- Ensure all files are in the correct location
