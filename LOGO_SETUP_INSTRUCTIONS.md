# 🏝️ Logo Setup Instructions

## 📌 Issue
The logo images in **Header.tsx** and **Footer.tsx** are referencing `/images/logo/asri-logo.svg`, but this directory and file don't exist yet in the `/public` folder.

## ✅ Solution
You need to manually upload your logo file to the correct location.

---

## 🔧 Step-by-Step Instructions

### Option A: Upload in Blink.new (Recommended)

1. **Create the directory structure**
   - In Blink.new terminal or file explorer
   - Navigate to `public/` folder
   - Create new folder: `images`
   - Inside `images/`, create folder: `logo`
   - Final path: `public/images/logo/`

2. **Prepare your logo file**
   - **Format:** SVG (preferred) or PNG with transparent background
   - **Filename:** `asri-logo.svg` (exactly this name)
   - **Recommended dimensions:** 
     - Min width: 200px
     - Max width: 600px
     - Transparent background for flexibility

3. **Upload the file**
   - Drag and drop your logo file into `public/images/logo/`
   - Or use the upload button in Blink.new file explorer
   - Verify final path: `public/images/logo/asri-logo.svg`

4. **Commit the change**
   ```bash
   git add public/images/logo/asri-logo.svg
   git commit -m "feat: add The Asri logo asset"
   ```

### Option B: Using GitHub Web Interface

1. Go to your repository on GitHub: https://github.com/digitalpilipinas/THE-ASRI-v2.1
2. Switch to branch: `fix/navigation-logo-scroll-images`
3. Navigate to `public/` folder
4. Click "Add file" → "Upload files"
5. Upload your logo to create path: `public/images/logo/asri-logo.svg`
6. Commit the file

---

## 🎨 Logo File Requirements

### ✅ Best Format: SVG
```
Filename: asri-logo.svg
Format: SVG (vector)
Background: Transparent
Size: 5-50 KB (vector = small file size)
Scalable: Yes (looks sharp at any size)
```

### ⚠️ Alternative: PNG
```
Filename: asri-logo.png (but update code to .png)
Format: PNG
Background: Transparent
Size: 200-600px width
File size: < 100 KB
```

**Note:** If using PNG instead of SVG, you'll need to update the file extensions in:
- `src/components/Header.tsx` (line 54)
- `src/components/Footer.tsx` (line 13)

Change `asri-logo.svg` to `asri-logo.png`

---

## 📂 Directory Structure After Setup

```
THE-ASRI-v2.1/
├── public/
│   ├── images/
│   │   └── logo/
│   │       └── asri-logo.svg  ← YOUR LOGO HERE
│   ├── _redirects
│   ├── favicon.svg
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx  ✅ Already updated
│   │   └── Footer.tsx  ✅ Already updated
│   └── ...
└── ...
```

---

## 🧪 Testing Checklist

After uploading the logo, test:

- [ ] **Header Logo**
  - [ ] Logo displays on page load
  - [ ] Logo scales properly on mobile (h-10) and desktop (h-14)
  - [ ] Logo has hover effect (scale-105)
  - [ ] Logo loads quickly (check Network tab)

- [ ] **Footer Logo**
  - [ ] Logo displays in footer
  - [ ] Logo size is correct (h-16)
  - [ ] Logo lazy-loads (doesn't block page render)

- [ ] **All Browsers**
  - [ ] Chrome/Edge
  - [ ] Firefox
  - [ ] Safari
  - [ ] Mobile browsers

---

## 🚀 Temporary Placeholder (Optional)

If you want the site to work immediately without the logo, you can temporarily use a text-only version:

**In Header.tsx (line 53-60), replace the `<img>` with:**
```tsx
<div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0D7070] flex items-center justify-center text-white font-bold text-xl md:text-2xl">
  TA
</div>
```

This creates a circular badge with "TA" (The Asri) as a placeholder.

---

## ❓ Need Help?

If you have issues:

1. **Logo not showing?**
   - Check browser console for 404 errors
   - Verify file path is exactly: `public/images/logo/asri-logo.svg`
   - Clear browser cache (Cmd+Shift+R / Ctrl+Shift+R)

2. **Logo wrong size?**
   - SVG will auto-scale (recommended)
   - PNG should be at least 200px width

3. **Logo has white background?**
   - Make sure you exported with transparent background
   - Or convert JPG → SVG/PNG with transparency

---

## 📊 Impact

**BEFORE:** 🚫 Broken image icon in header and footer  
**AFTER:** ✅ Professional logo displayed throughout site

**Priority:** 🔴 **CRITICAL** — Affects first impression and brand identity

---

## ✅ Complete!

Once you've uploaded the logo file and tested it:
1. Mark this file for deletion (no longer needed in production)
2. Continue with testing other fixes in this branch
3. Proceed to merge when ready

---

*This file can be deleted after logo setup is complete.*
