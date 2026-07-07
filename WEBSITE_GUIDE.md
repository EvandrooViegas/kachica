# KACHICA Website Guide

Complete guide for managing and updating the KACHICA website content and structure.

## Quick Start

### Managing Website Content

All website content (text, images, branding, client info, testimonials, etc.) is centralized in a single file for easy management:

📄 **Main Config File:** `lib/config.ts`

This is the only file you need to edit to update most website content!

## Content Sections

### 1. **Branding** (`SITE_CONFIG.branding`)

Update your company branding here:

```typescript
branding: {
  brandName: "KACHICA",
  tagline: "Online Solucions, Real Results",
  logo: "/logo/icon-white.png",
  logoPrimary: "/logo/icon-primary.png",
  favicon: "/logo/image-logo.png",
}
```

**Where it appears:**
- Navbar logo
- Page title
- Favicon (browser tab)
- All references across the site

**To change:**
1. Open `lib/config.ts`
2. Update the values in the `branding` object
3. Save the file

---

### 2. **Clients / Companies** (`CLIENTS`)

Add the companies that trust your brand:

```typescript
export const CLIENTS = [
  {
    name: "Client 1",
    logo: "/clients/client-1.svg",
  },
  // Add more clients...
];
```

**To add a new client:**
1. Upload client logo to `/public/clients/`
2. Add object to `CLIENTS` array in `lib/config.ts`
3. Use relative path starting with `/clients/`

**Image format:** SVG recommended (scales perfectly), PNG also works

---

### 3. **Services** (`SERVICES`)

Manage your services with bilingual support:

```typescript
{
  name: "Service Name",
  namePt: "Nome do Serviço",
  icon: "IconName",
  imagePath: "/sections/services/image.jpg",
  description: "English description...",
  descriptionPt: "Descrição em português...",
}
```

**To update:**
1. Edit the SERVICES array in `lib/config.ts`
2. Change both English and Portuguese text
3. Upload new service images to `/public/sections/services/`
4. Update `imagePath` if you change the image

**Current services:**
- Social Media Management
- Facebook Paid Ads
- Website Creation
- AI Automations

---

### 4. **Process Steps** (`PROCESS_STEPS`)

Show how your business works:

```typescript
{
  step: 1,
  title: "Discovery",
  titlePt: "Descoberta",
  description: "We understand your business...",
  descriptionPt: "Entendemos seu negócio...",
}
```

**To update:** Edit PROCESS_STEPS array in `lib/config.ts`

---

### 5. **Portfolio Projects** (`PORTFOLIO`)

Showcase your best work:

```typescript
{
  title: "E-commerce Platform",
  titlePt: "Plataforma de E-commerce",
  category: "Website",
  categoryPt: "Site",
  imagePath: "/portfolio/project-1.jpg",
  description: "Modern e-commerce solution...",
  descriptionPt: "Solução de e-commerce...",
}
```

**To add a project:**
1. Upload project image to `/public/portfolio/`
2. Add object to PORTFOLIO array
3. Include both English and Portuguese text
4. The image will display in the portfolio section

---

### 6. **Testimonials** (`TESTIMONIALS`)

Display client success stories:

```typescript
{
  name: "Client Name",
  role: "CEO",
  company: "Company Name",
  message: "Testimonial message in English...",
  messagePt: "Depoimento em português...",
  imagePath: "/testimonials/profile.jpg",
}
```

**To add testimonial:**
1. Upload profile image to `/public/testimonials/`
2. Add object to TESTIMONIALS array
3. Include message in both languages
4. Keep profile images consistent (ideally square, 200x200px)

---

### 7. **FAQ** (`FAQ`)

Frequently asked questions:

```typescript
{
  question: "What services do you offer?",
  questionPt: "Quais serviços vocês oferecem?",
  answer: "We offer social media...",
  answerPt: "Oferecemos redes sociais...",
}
```

**To update:** Edit FAQ array in `lib/config.ts`

---

### 8. **Contact Information** (`SITE_CONFIG.contact`)

```typescript
contact: {
  title: "Let's Work Together",
  subtitle: "Contact Us",
  email: "hello@kachica.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, Country",
}
```

---

## Website Sections

The website is built with these sections (in order):

1. **Hero** - Main banner with CTA
2. **Clients** - Companies that trust you
3. **Services** - Your core services
4. **Process** - How you work (4 steps)
5. **Portfolio** - Recent projects
6. **Case Studies** - Detailed client work
7. **Testimonials** - Client feedback (carousel)
8. **FAQ** - Frequently asked questions
9. **Mission** - Your company mission
10. **Contact** - Contact form

---

## Language Switcher

The website supports **English and Portuguese**.

- Located in the navbar (top right)
- Users can toggle with EN/PT buttons
- Language preference is saved in localStorage
- The entire website responds to language changes

**To add another language:**
1. Update `useLanguage` context in `app/language.context.tsx`
2. Add translations to all config items
3. Use `language === "pt" ? ptText : enText` pattern

---

## Image Management

### Folder Structure

```
public/
├── logo/              # Branding
├── sections/          # Background images & videos
│   ├── services/
│   └── our_mission/
├── clients/           # Client logos
├── portfolio/         # Project images
├── case_studies/      # Case study images
└── testimonials/      # Profile images
```

### File Size Guidelines

| Type | Max Size | Format |
|------|----------|--------|
| Hero video | 5MB | MP4 |
| Section images | 200KB | JPG/PNG |
| Logo files | 50KB | PNG/SVG |
| Client logos | 100KB | SVG |
| Profile images | 100KB | JPG |

### Image Path Format

Always use paths relative to `/public`:
```
✅ Correct: /logo/icon-primary.png
✅ Correct: /sections/services/social.jpg
❌ Wrong: public/logo/icon-primary.png
❌ Wrong: ./logo/icon-primary.png
```

---

## Component Structure

### Key Components

- **Navbar** - Navigation with language switcher
- **Container** - Wrapper for all sections
- **Button** - CTA buttons (multiple variants)
- **Form** - Contact form with validation
- **Carousel** - Testimonials carousel
- **Accordion** - FAQ expandable sections

### Page Files

```
app/
├── page.tsx              # Home page (imports all sections)
├── navbar.tsx            # Top navigation
├── layout.tsx            # Root layout
├── language.context.tsx  # Language state management
└── sections/
    ├── hero.tsx
    ├── clients.tsx
    ├── services.tsx
    ├── process.tsx
    ├── portfolio.tsx
    ├── testimonials.tsx
    ├── case-studies.tsx
    ├── faq.tsx
    ├── mission.tsx
    ├── contact.tsx
    └── form.tsx
```

---

## Colors & Styling

The website uses Tailwind CSS with custom colors defined in `tailwind.config.ts`:

- **Primary Color:** Used for highlights and CTAs
- **Secondary Color:** Background for alternate sections
- **Accent Color:** Emphasis elements

To change colors:
1. Open `tailwind.config.ts`
2. Update color values in the `colors` section
3. All components will update automatically

---

## Navigation Links

The navigation menu is defined in `navbar.tsx`:

```typescript
const links = [
  { text: "HOME", href: "/#home" },
  { text: "CLIENTS", href: "/#clients" },
  { text: "SERVICES", href: "/#services" },
  { text: "PORTFOLIO", href: "/#portfolio" },
  { text: "CONTACT", href: "/#contact" },
];
```

**To update:** Edit the `links` array in `app/navbar.tsx`

---

## SEO & Metadata

Update website metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "KACHICA - Online Solutions, Real Results",
  description: "Your company description here",
};
```

---

## Building & Deployment

### Development

```bash
npm run dev
# Opens at http://localhost:3000
```

### Production Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

---

## Common Tasks

### Change Logo

1. Upload new logo to `/public/logo/`
2. Update `branding.logo` and `branding.logoPrimary` in `lib/config.ts`
3. Navbarlogo will update automatically

### Add New Service

1. Create service description in both English & Portuguese
2. Upload service image to `/public/sections/services/`
3. Add object to `SERVICES` array in `lib/config.ts`
4. Section will automatically display the new service

### Update Client Testimonial

1. Update testimonial text in the `TESTIMONIALS` array
2. To change photo: upload new image to `/public/testimonials/`
3. Update `imagePath` in the testimonial object

### Change Contact Information

1. Open `lib/config.ts`
2. Update `SITE_CONFIG.contact` object
3. Changes appear in contact section and form

### Add FAQ Item

1. Open `lib/config.ts`
2. Add new object to `FAQ` array
3. Include question and answer in both languages
4. Item automatically appears in FAQ section

---

## Troubleshooting

### Images not showing

- Check the path is relative to `/public`: `/sections/services/image.jpg` ✅
- Ensure image file exists in that folder
- Verify image format is supported (JPG, PNG, SVG, WebP)

### Language switcher not working

- Clear browser cache and localStorage
- Check that language context is imported in components
- Verify `useLanguage` hook is used in components

### Layout issues on mobile

- Check responsive classes in components (use `md:` prefix for desktop)
- Test on different screen sizes during development
- Adjust breakpoints in `tailwind.config.ts` if needed

### Form not submitting

- Verify Notion API is configured in `services/notion/index.ts`
- Check browser console for validation errors
- Ensure all required form fields are filled

---

## Performance Tips

1. **Optimize images** before uploading (use TinyPNG)
2. **Use SVG** for logos and icons
3. **Lazy load** images on scroll
4. **Compress videos** for hero section
5. **Monitor bundle size** with Next.js analysis

---

## Additional Resources

- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **React Docs:** https://react.dev

---

## Support

For questions about:
- **Content updates:** Edit `lib/config.ts`
- **Images:** Upload to appropriate folder in `/public`
- **Styling:** Check `tailwind.config.ts` and component classes
- **Sections:** Files in `app/sections/`
- **Languages:** Edit translations in `lib/config.ts`

---

**Last Updated:** July 2, 2026
