# Public Folder Structure

This folder contains all static assets for the KACHICA website. The structure is organized for easy maintenance and scalability.

## Folder Organization

```
public/
├── logo/                    # Branding assets
│   ├── icon-primary.png    # Primary brand icon
│   ├── icon-white.png      # White brand icon for dark backgrounds
│   └── image-logo.png      # Full logo image
│
├── sections/               # Section background images and videos
│   ├── bg.mp4             # Hero section video background
│   ├── banner.jpg         # Banner image
│   ├── contact.jpg        # Contact section image
│   ├── decorator.webp     # Decorative elements
│   ├── services/          # Service section images
│   │   ├── social.jpg
│   │   ├── ads.jpg
│   │   ├── website.jpg
│   │   └── ai.jpg
│   └── our_mission/       # Mission section images
│       ├── 1.jpg
│       └── 3.jpg
│
├── case_studies/          # Case study images
│   ├── eliana.jpg
│   └── sonia.jpg
│
├── clients/               # Client logo images
│   ├── client-1.svg
│   ├── client-2.svg
│   ├── client-3.svg
│   ├── client-4.svg
│   └── client-5.svg
│
├── portfolio/             # Portfolio project images
│   ├── project-1.jpg      # E-commerce Platform
│   ├── project-2.jpg      # Social Media Campaign
│   └── project-3.jpg      # Automation System
│
└── testimonials/          # Testimonial profile images
    ├── eliana.jpg
    └── sonia.jpg
```

## How to Update Images

### Update through Config File

All content including images is managed through `/lib/config.ts`. To change an image:

1. **Open** `lib/config.ts`
2. **Find** the section you want to update (e.g., `SERVICES`, `PORTFOLIO`, `TESTIMONIALS`)
3. **Update** the `imagePath` field with the new path
4. **Save** and the changes will reflect across the site

### Image Path Format

All image paths are relative to the `/public` folder:
- Correct: `/sections/services/social.jpg`
- Correct: `/logo/icon-primary.png`
- Incorrect: `public/sections/services/social.jpg` ❌

### Adding New Images

1. **Create** a new folder in the appropriate category (or use existing)
2. **Upload** your image to that folder
3. **Update** the path in `lib/config.ts`

### Image Optimization Tips

- Use JPG for photographs (smaller file size)
- Use PNG for images with transparency or logos
- Use WebP for better compression (with fallbacks)
- Use SVG for scalable graphics and logos
- Optimize file sizes using tools like TinyPNG or ImageOptim

## File Size Recommendations

- Hero background: < 5MB (video) or < 500KB (image)
- Section images: < 200KB each
- Logo files: < 50KB each
- Client logos: < 100KB each (prefer SVG)

## Quick Reference

### To update a client logo:
```
1. Place logo in /public/clients/
2. Update CLIENTS array in /lib/config.ts
3. Change the logo path
```

### To add a new service:
```
1. Upload image to /public/sections/services/
2. Add new object to SERVICES array in /lib/config.ts
3. Include all translations (English and Portuguese)
```

### To add a testimonial:
```
1. Upload profile image to /public/testimonials/
2. Add new object to TESTIMONIALS array in /lib/config.ts
3. Include message in both languages
```
