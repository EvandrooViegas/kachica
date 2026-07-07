# 🚀 START HERE - KACHICA Website Management

Welcome! Your KACHICA website has been completely rebuilt with new features and improved content management. This file will guide you through everything.

---

## What You Have

Your website now includes:

✅ **10+ Professional Sections**
- Hero, Clients, Services, Process, Portfolio, Case Studies, Testimonials, FAQ, Mission, Contact

✅ **Multi-Language Support**
- English + Portuguese with switcher in navbar

✅ **Easy Content Management**
- Everything controlled from one file: `lib/config.ts`

✅ **Organized Image Structure**
- Logical folders: `/public/logo`, `/public/clients`, `/public/portfolio`, etc.

✅ **Production-Ready**
- Fully responsive, tested, and optimized

---

## First Things First

### 1. Update Your Company Information

**Open:** `lib/config.ts`

**Find:** `SITE_CONFIG.branding`

**Update these fields:**
```typescript
branding: {
  brandName: "KACHICA",  // ← Your company name
  tagline: "Online Solucions, Real Results",  // ← Your tagline
  logo: "/logo/icon-white.png",
  logoPrimary: "/logo/icon-primary.png",
  favicon: "/logo/image-logo.png",
}
```

### 2. Update Your Contact Information

**In same file, find:** `SITE_CONFIG.contact`

```typescript
contact: {
  email: "hello@kachica.com",  // ← Your email
  phone: "+1 (555) 123-4567",  // ← Your phone
  location: "Your City, Country",  // ← Your location
}
```

### 3. Add Your Company Logo

**Where:** `/public/logo/`

**Replace:**
- `icon-white.png` - White version for dark backgrounds
- `icon-primary.png` - Colored version for light backgrounds
- `image-logo.png` - Full logo

**Then update paths in `SITE_CONFIG.branding` if filenames changed**

### 4. Add Your Clients

**Where:** `/public/clients/`

**Upload:** Client logos (SVG preferred, PNG works)

**Then update in `lib/config.ts`, in the `CLIENTS` array:

```typescript
export const CLIENTS = [
  {
    name: "Client Name",
    logo: "/clients/logo-file.svg",  // ← Add this
  },
];
```

---

## The 3 Most Important Files

### 📄 #1 - `lib/config.ts` - YOUR CONTENT

This is where you manage:
- All text content (English & Portuguese)
- Company info, branding, contact
- Clients, services, portfolio, testimonials, FAQ

**You'll spend most time here.**

### 📁 #2 - `/public/` - YOUR IMAGES

Organized folders:
- `/logo/` - Company branding
- `/clients/` - Client logos
- `/sections/` - Hero, mission, service images
- `/portfolio/` - Project showcase
- `/testimonials/` - Client profile photos

**Add images here, then reference in config.ts**

### 📖 #3 - Documentation Files

- `QUICK_REFERENCE.md` - Copy-paste solutions
- `WEBSITE_GUIDE.md` - Complete reference
- `WEBSITE_STRUCTURE.md` - How everything works

**Read as needed, bookmark for later.**

---

## Common Tasks (Step by Step)

### Add a New Client

```
1. Save client logo as PNG or SVG
2. Upload to: /public/clients/client-name.svg
3. Open: lib/config.ts
4. Find: CLIENTS array
5. Add:
   {
     name: "Company Name",
     logo: "/clients/client-name.svg",
   }
6. Save file - done! The client appears on the website
```

### Add a New Service

```
1. Prepare service description (English & Portuguese)
2. Upload service image to: /public/sections/services/service-name.jpg
3. Open: lib/config.ts
4. Find: SERVICES array
5. Add:
   {
     name: "Service Name",
     namePt: "Nome do Serviço",
     imagePath: "/sections/services/service-name.jpg",
     description: "English description...",
     descriptionPt: "Descrição em português...",
   }
6. Save file - done! New service appears on website
```

### Add a Portfolio Project

```
1. Prepare project details (English & Portuguese)
2. Upload project image to: /public/portfolio/project-name.jpg
3. Open: lib/config.ts
4. Find: PORTFOLIO array
5. Add:
   {
     title: "Project Name",
     titlePt: "Nome do Projeto",
     category: "Website",  // or "Social Media", "Automation"
     categoryPt: "Site",  // Portuguese category
     imagePath: "/portfolio/project-name.jpg",
     description: "What you did...",
     descriptionPt: "O que você fez...",
   }
6. Save file - done!
```

### Add a Testimonial

```
1. Get client photo and feedback (English & Portuguese)
2. Upload photo to: /public/testimonials/client-name.jpg
3. Open: lib/config.ts
4. Find: TESTIMONIALS array
5. Add:
   {
     name: "Client Name",
     role: "Their Role",
     company: "Their Company",
     message: "Testimonial in English...",
     messagePt: "Depoimento em português...",
     imagePath: "/testimonials/client-name.jpg",
   }
6. Save file - done!
```

### Add an FAQ Item

```
1. Open: lib/config.ts
2. Find: FAQ array
3. Add:
   {
     question: "Your question?",
     questionPt: "Sua pergunta?",
     answer: "Your answer here...",
     answerPt: "Sua resposta aqui...",
   }
4. Save - done!
```

---

## Image Upload Checklist

Before uploading images:

- [ ] Image is correctly sized (larger is better, will be compressed)
- [ ] Image is compressed (use TinyPNG for JPG/PNG)
- [ ] File format is appropriate:
  - JPG for photos (smaller)
  - PNG for logos with transparency
  - SVG for scalable graphics (logos)
- [ ] File name is descriptive: `client-name.svg` not `image1.svg`

---

## Testing Your Changes

After you make updates:

1. **Save the file**
2. **Check the website** - it should update automatically (hot reload)
3. **Test on mobile** - make sure layout looks good
4. **Test language** - toggle EN/PT and see translations
5. **Check images** - make sure they load correctly

If something doesn't work:
- Clear browser cache (Ctrl+Shift+Del)
- Check file paths in config (should start with `/`)
- Make sure you added both English and Portuguese text
- Look in browser console for error messages

---

## Language System

**Important:** Every item must have BOTH English and Portuguese

```typescript
✅ Correct:
{
  name: "Service",
  namePt: "Serviço",
  description: "English...",
  descriptionPt: "Português...",
}

❌ Wrong - Missing Portuguese:
{
  name: "Service",
  description: "English..."
}
```

The website automatically switches between languages when users click EN/PT in the navbar.

---

## Customization Options

### Change Colors

Open: `tailwind.config.ts`

Find the `colors` section - update primary, secondary colors

All components will automatically use new colors

### Change Fonts

Open: `app/layout.tsx`

Current font: Oswald (from Google Fonts)

To change, see Next.js Font documentation

### Add/Remove Sections

Open: `app/page.tsx`

Add/remove imports for sections from `app/sections/`

This controls which sections appear and in what order

### Update Navigation Links

Open: `app/navbar.tsx`

Find `const links = [...]`

Update the navigation menu items

---

## Production Deployment

When ready to deploy:

```bash
# Build the website
npm run build

# Start production server
npm run start
```

Then deploy using your hosting platform (Vercel, Netlify, etc.)

---

## Project Structure

```
Your Website
├── Content         → lib/config.ts
├── Sections        → app/sections/
├── Images          → public/
├── Components      → components/
├── Styling         → tailwind.config.ts
└── Documentation   → QUICK_REFERENCE.md, WEBSITE_GUIDE.md, etc.
```

---

## Documentation Guide

📖 **Use these files for reference:**

| File | Best For |
|------|----------|
| **QUICK_REFERENCE.md** | Copy-paste solutions, quick examples |
| **WEBSITE_GUIDE.md** | Complete detailed reference |
| **WEBSITE_STRUCTURE.md** | Understanding how things work |
| **public/README.md** | Image folder organization |
| **IMPLEMENTATION_SUMMARY.md** | What was built and why |

---

## Support Resources

- **Website Issues:** Check browser console for errors
- **Image Problems:** Verify path format and file exists
- **Language Issues:** Check that both EN and PT text exist
- **Styling Issues:** Review Tailwind classes in components

---

## Quick Reference Commands

```bash
# Start development
npm run dev
# Opens at http://localhost:3000

# Build for production
npm run build

# Check for errors
npm run lint

# Run production server
npm run start
```

---

## What's Next?

### Immediate (Right Now)

- [ ] Update branding in `lib/config.ts`
- [ ] Update contact info in `lib/config.ts`
- [ ] Replace logos in `/public/logo/`
- [ ] Add your clients in `lib/config.ts`
- [ ] Add your services in `lib/config.ts`

### Short Term (This Week)

- [ ] Add portfolio projects
- [ ] Add client testimonials
- [ ] Update mission/about content
- [ ] Add FAQ items
- [ ] Upload product images

### Medium Term (This Month)

- [ ] Set up email for contact form
- [ ] Configure Notion integration (if using)
- [ ] Test everything on mobile
- [ ] Deploy to production
- [ ] Set up analytics

### Long Term (Ongoing)

- [ ] Add new portfolio items
- [ ] Collect more testimonials
- [ ] Update FAQ based on inquiries
- [ ] Monitor performance
- [ ] A/B test content

---

## You're Ready! 🎉

Your website is:
- ✅ Built and ready
- ✅ Mobile responsive
- ✅ Multi-language enabled
- ✅ Easy to update
- ✅ Production-ready

**Next step:** Open `lib/config.ts` and start updating your content!

---

## Need More Help?

1. **Quick answer?** → See `QUICK_REFERENCE.md`
2. **Detailed explanation?** → See `WEBSITE_GUIDE.md`
3. **How things work?** → See `WEBSITE_STRUCTURE.md`
4. **Image issues?** → See `public/README.md`
5. **What was built?** → See `IMPLEMENTATION_SUMMARY.md`

---

**Remember:** Most of your time will be spent updating `lib/config.ts`. Keep it open and update away! 🚀

---

**Questions?** Everything you need is in the documentation files. Happy building!
