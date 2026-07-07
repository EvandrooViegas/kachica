# Quick Reference - KACHICA Website

## The Most Important File

📄 **`lib/config.ts`** - This is where you update EVERYTHING

---

## Common Updates (Copy & Paste)

### Update Company Name
```typescript
// In lib/config.ts
branding: {
  brandName: "YOUR_COMPANY_NAME",  // ← Change this
  tagline: "Your tagline here",
  // ...
}
```

### Update Hero Section Text
```typescript
hero: {
  pt: "Your primary text",
  title: "Your main headline",
  highlight: "Highlighted part",
  cta: "Button text",
  secondary: "Secondary button",
}
```

### Add New Client
```typescript
// 1. Upload logo to: /public/clients/your-logo.svg

// 2. Add to CLIENTS array in lib/config.ts:
export const CLIENTS = [
  // ... existing clients
  {
    name: "New Company Name",
    logo: "/clients/your-logo.svg",  // ← Use this path
  },
];
```

### Add New Service
```typescript
// 1. Upload image to: /public/sections/services/service-name.jpg

// 2. Add to SERVICES array:
{
  name: "Service Name",
  namePt: "Nome do Serviço",
  icon: "IconName",
  imagePath: "/sections/services/service-name.jpg",  // ← Correct path
  description: "English description here...",
  descriptionPt: "Descrição em português aqui...",
}
```

### Add Testimonial
```typescript
// 1. Upload photo to: /public/testimonials/person-name.jpg

// 2. Add to TESTIMONIALS array:
{
  name: "John Doe",
  role: "CEO",
  company: "Amazing Corp",
  message: "Great testimonial in English...",
  messagePt: "Depoimento ótimo em português...",
  imagePath: "/testimonials/person-name.jpg",
}
```

### Add Portfolio Project
```typescript
// 1. Upload image to: /public/portfolio/project-name.jpg

// 2. Add to PORTFOLIO array:
{
  title: "Project Title",
  titlePt: "Título do Projeto",
  category: "Website",
  categoryPt: "Site",
  imagePath: "/portfolio/project-name.jpg",
  description: "Project description in English...",
  descriptionPt: "Descrição do projeto em português...",
}
```

### Add FAQ Item
```typescript
// Just add to FAQ array in lib/config.ts:
{
  question: "Your question here?",
  questionPt: "Sua pergunta aqui?",
  answer: "Your answer here...",
  answerPt: "Sua resposta aqui...",
}
```

### Update Contact Info
```typescript
contact: {
  title: "Let's Work Together",
  email: "your@email.com",  // ← Update email
  phone: "+1 (555) 000-0000",  // ← Update phone
  location: "Your City, Country",  // ← Update location
}
```

---

## Image Path Reference

**Always start with forward slash `/` and be relative to `/public` folder:**

```
✅ /logo/icon-primary.png
✅ /sections/services/social.jpg
✅ /clients/company-logo.svg
✅ /portfolio/project-1.jpg
✅ /testimonials/person.jpg

❌ public/logo/icon.png
❌ ./logo/icon.png
❌ logo/icon.png
❌ /public/logo/icon.png
```

---

## Folder Structure Quick Guide

```
public/
├── logo/              → Upload logos here
├── sections/
│   ├── services/      → Upload service images here
│   └── our_mission/   → Mission section images
├── clients/           → Upload client logos here
├── portfolio/         → Upload project images here
└── testimonials/      → Upload profile pictures here
```

---

## Component Names

Use in hero and service configs:

```typescript
// Available icons:
icon: "TbSpeakerphone"      // For social media
icon: "HiOutlineGlobeAlt"   // For websites
```

---

## Language System

### Both Languages Required

Every item must have both English AND Portuguese:

```typescript
❌ Wrong - Missing Portuguese:
{
  name: "Service",
  description: "Only English..."
}

✅ Correct - Both languages:
{
  name: "Service",
  namePt: "Serviço",
  description: "English...",
  descriptionPt: "Português..."
}
```

### Use the Helper

```typescript
const { language, t } = useLanguage();

// Option 1: Use t helper
t("English text", "Portuguese text")

// Option 2: Check language directly
language === "pt" ? ptValue : enValue
```

---

## Deployment Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Check for errors
npm run lint
```

---

## File Locations Summary

| What You Want to Change | Where to Go |
|---|---|
| Company name, branding | `lib/config.ts` |
| Any text content | `lib/config.ts` |
| Clients list | `lib/config.ts` + `/public/clients/` |
| Services | `lib/config.ts` + `/public/sections/services/` |
| Portfolio | `lib/config.ts` + `/public/portfolio/` |
| Testimonials | `lib/config.ts` + `/public/testimonials/` |
| FAQ | `lib/config.ts` |
| Colors/Styling | `tailwind.config.ts` |
| Navigation links | `app/navbar.tsx` |
| Add/remove sections | `app/page.tsx` + `app/sections/` |

---

## Config File Structure

```typescript
export const SITE_CONFIG = {
  branding: { },
  hero: { },
  clients: { },
  services: { },
  process: { },
  portfolio: { },
  testimonials: { },
  faq: { },
  mission: { },
  contact: { },
}

export const CLIENTS = [ ]
export const SERVICES = [ ]
export const PORTFOLIO = [ ]
export const TESTIMONIALS = [ ]
export const FAQ = [ ]
export const PROCESS_STEPS = [ ]
```

---

## Troubleshooting Quick Fixes

| Problem | Solution |
|---------|----------|
| Image not showing | Check path format (should start with `/`) |
| Page won't load | Check for missing `namePt` or `descriptionPt` fields |
| Language not switching | Clear browser cache, check localStorage |
| Styles broken | Make sure Tailwind class names are spelled correctly |
| Form not submitting | Check Notion API configuration |

---

## Field Checklist for New Items

### New Client
- [ ] Name
- [ ] Logo file (in `/public/clients/`)
- [ ] Logo path in config

### New Service
- [ ] English name
- [ ] Portuguese name
- [ ] English description
- [ ] Portuguese description
- [ ] Image file (in `/public/sections/services/`)
- [ ] Image path in config

### New Testimonial
- [ ] Name
- [ ] Role
- [ ] Company
- [ ] English message
- [ ] Portuguese message
- [ ] Profile photo (in `/public/testimonials/`)
- [ ] Photo path in config

### New Portfolio Project
- [ ] English title
- [ ] Portuguese title
- [ ] English category
- [ ] Portuguese category
- [ ] English description
- [ ] Portuguese description
- [ ] Project image (in `/public/portfolio/`)
- [ ] Image path in config

---

## For Developers

### Key Files
- **Config:** `lib/config.ts`
- **Language Context:** `app/language.context.tsx`
- **Main Page:** `app/page.tsx`
- **Sections:** `app/sections/*.tsx`
- **Styling:** `tailwind.config.ts`

### Key Hooks
```typescript
import { useLanguage } from "@/app/language.context";
const { language, setLanguage, t } = useLanguage();
```

### Import Config
```typescript
import { SITE_CONFIG, SERVICES, CLIENTS, PORTFOLIO, TESTIMONIALS, FAQ, PROCESS_STEPS } from "@/lib/config";
```

---

## Remember!

✨ **Most edits = `lib/config.ts`**

📁 **Images = Upload to `/public/` folders, update paths in config**

🌍 **Always add both English AND Portuguese**

✅ **Keep image paths relative to `/public`, starting with `/`**

🚀 **Deploy with `npm run build && npm run start`**

---

**That's it! You now know everything you need to manage the website.**

For detailed guides, see:
- `WEBSITE_GUIDE.md` - Full reference
- `public/README.md` - Image organization
- `IMPLEMENTATION_SUMMARY.md` - What was built
