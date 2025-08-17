# Asset Replacement Instructions

## Replacing the Girl Scouts Logo

**Current Status:** The logo is currently using a placeholder image from Unsplash.

**To replace with your actual Girl Scouts logo:**

1. **Prepare your logo file:**
   - Recommended format: PNG with transparent background
   - Recommended size: 100x100 pixels or larger (square ratio works best)
   - Save it as `girl-scouts-logo.png`

2. **Add the logo to your project:**
   - If deploying to GitHub Pages: Put the logo in a `public/images/` folder
   - Update the src path in `/App.tsx` on line 22:
   ```jsx
   src="./images/girl-scouts-logo.png"
   ```

3. **Alternative hosting options:**
   - Upload to a cloud service (Google Drive, Dropbox, etc.) and use the direct image URL
   - Use a service like Imgur for image hosting

---

## Adding Your Instructional Video

**Current Status:** The video section shows a placeholder with instructions.

**To add your actual video:**

1. **Upload your video to a platform:**
   - **YouTube (Recommended):**
     - Upload your video to YouTube
     - Go to your video and click "Share" → "Embed"
     - Copy the URL from the src attribute (format: `https://www.youtube.com/embed/VIDEO_ID`)
   
   - **Vimeo:**
     - Upload to Vimeo
     - Get the embed URL (format: `https://player.vimeo.com/video/VIDEO_ID`)

2. **Update the VideoDemo component:**
   - Open `/components/VideoDemo.tsx`
   - Find line 15: `const videoUrl = "";`
   - Replace the empty string with your embed URL:
   ```jsx
   const videoUrl = "https://www.youtube.com/embed/YOUR_VIDEO_ID";
   ```

3. **Example with a YouTube video:**
   ```jsx
   const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";
   ```

**Video Requirements:**
- Keep videos educational and appropriate for young learners
- Recommended length: 2-5 minutes for optimal engagement
- Ensure good audio quality and clear visuals
- Consider adding captions for accessibility

---

## Testing Your Changes

1. **Logo Testing:**
   - Check that the logo appears in the top-right corner
   - Verify it's properly sized and visible
   - Test on both desktop and mobile devices

2. **Video Testing:**
   - Confirm the video loads and plays properly
   - Test that fullscreen functionality works
   - Verify audio levels are appropriate

---

## GitHub Pages Deployment Notes

- Ensure all image paths are relative to the project root
- Use the `public` folder for static assets like images
- Consider file sizes for optimal loading times
- Test the deployed version to ensure all assets load correctly

---

## Need Help?

If you encounter issues with asset replacement:
1. Check the browser developer console for error messages
2. Verify file paths and URLs are correct
3. Ensure image and video files are accessible
4. Test with different browsers to identify compatibility issues
