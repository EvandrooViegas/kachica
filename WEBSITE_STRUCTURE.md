# KACHICA Website Structure & Flow

## Visual Website Flow

```
┌─────────────────────────────────────────────────────────────┐
│                        NAVBAR (Fixed)                        │
│  Logo  |  HOME  CLIENTS  SERVICES  PORTFOLIO  CONTACT  |  EN/PT │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                                                               │
│                    1. HERO SECTION                            │
│                  (Video Background)                           │
│                                                               │
│         "KACHICA: Online Solutions, Real Results"             │
│     "Growing Brands with Strategic Digital Solutions"         │
│                                                               │
│              [Contact Us] [See our Work]                      │
│                                                               │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                  2. CLIENTS SECTION                           │
│              (Trusted by Leading Companies)                   │
│                                                               │
│   [Logo 1]  [Logo 2]  [Logo 3]  [Logo 4]  [Logo 5]           │
│                                                               │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                  3. SERVICES SECTION                          │
│              (Agency Expertise / Our Skills)                  │
│                                                               │
│   [Service 1]    [Service 2]                                 │
│   (image)        (image)                                      │
│                                                               │
│   [Service 3]    [Service 4]                                 │
│   (image)        (image)                                      │
│                                                               │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                  4. PROCESS SECTION                           │
│              (How We Work / Our Process)                      │
│                                                               │
│   [1. Discovery] → [2. Strategy] → [3. Implementation]       │
│                                           → [4. Optimization] │
│                                                               │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                  5. PORTFOLIO SECTION                         │
│              (Our Portfolio / Recent Projects)                │
│                                                               │
│   [Project 1]    [Project 2]    [Project 3]                  │
│   (image)        (image)        (image)                       │
│                                                               │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                  6. CASE STUDIES SECTION                      │
│              (Existing content maintained)                    │
│                                                               │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                  7. TESTIMONIALS SECTION                      │
│           (What Our Clients Say / Testimonials)               │
│                                                               │
│        ◄  "Great testimonial with client name..." ►          │
│            John Doe - CEO at Company                          │
│                                                               │
│            "Another great testimonial..." ►                  │
│            Jane Smith - Director at Brand                    │
│                                                               │
│        ◄ PREV                                        NEXT ►  │
│                                                               │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                  8. FAQ SECTION                               │
│         (Frequently Asked Questions / Got Questions?)         │
│                                                               │
│  ▼ What services do you offer?                               │
│    → We offer social media, ads, websites, AI...             │
│                                                               │
│  ► How long does a project take?                             │
│                                                               │
│  ► What's your pricing model?                                │
│                                                               │
│  ► Do you provide ongoing support?                           │
│                                                               │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                  9. MISSION SECTION                           │
│            (Your Growth, Our Commitment)                      │
│                                                               │
│   [Text Content]              [Mission Images]                │
│   Our mission is to empower    [Image 1] [Image 2]           │
│   businesses with innovative    in grid layout              │
│   solutions...                                               │
│                                                               │
│   [See How button]                                            │
│                                                               │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                  10. CONTACT SECTION                          │
│            (Let's Work Together / Contact Us)                 │
│                                                               │
│   [Contact Image]     [Contact Form]                          │
│   (left side)         - Full Name                             │
│                       - Email                                 │
│                       - Website? [checkbox]                   │
│                       - Company Name                          │
│                       - Industry [select]                     │
│                       [Submit Button]                         │
│                                                               │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                       FOOTER                                  │
│              (Social Links & Copyright)                       │
└─────────────────────────────────────────────────────────────┘
```

---

## Configuration Flow

```
lib/config.ts (Master Configuration File)
├── SITE_CONFIG
│   ├── branding → Navbar + Hero + Page Title
│   ├── hero → Hero Section
│   ├── clients → Clients Section
│   ├── services → Services Section
│   ├── process → Process Section
│   ├── portfolio → Portfolio Section
│   ├── testimonials → Testimonials Section
│   ├── faq → FAQ Section
│   ├── mission → Mission Section
│   ├── contact → Contact Section
│   └── social → Footer/Contact Links
│
├── CLIENTS (Array) → Clients Section
├── SERVICES (Array) → Services Section
├── PORTFOLIO (Array) → Portfolio Section
├── TESTIMONIALS (Array) → Testimonials Section
├── FAQ (Array) → FAQ Section
└── PROCESS_STEPS (Array) → Process Section
```

---

## Component Hierarchy

```
app/layout.tsx (Root Layout)
├── ProvidersWrapper
│   ├── LanguageProvider (Language Context)
│   └── HeroIntersectionContextProvider
│       └── app/page.tsx (Home Page)
│           ├── Hero Component
│           ├── Clients Component
│           ├── Services Component
│           ├── Process Component
│           ├── Portfolio Component
│           ├── CaseStudies Component
│           ├── Testimonials Component
│           ├── FAQ Component
│           ├── Mission Component
│           └── Contact Component
│               ├── Form Component
│               └── Image Component
├── Navbar (Fixed Header)
│   ├── Logo
│   ├── Navigation Links
│   └── Language Switcher (EN/PT)
├── Footer
└── Toaster (Toast Notifications)
```

---

## Data Flow for Language Support

```
Language Context (language.context.tsx)
├── State: language ("en" or "pt")
├── Function: setLanguage(lang)
├── Function: t(en, pt) - translation helper
└── Storage: localStorage.language

↓

Components use useLanguage()
├── Access: language, setLanguage, t()
├── Render based on language
└── Update all content dynamically

↓

UI Updates
└── Text changes instantly when language is switched
```

---

## File Organization

```
d:\Projects\kachica\
│
├── app/
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Home page (main component tree)
│   ├── navbar.tsx                    # Navigation with language switcher
│   ├── footer.tsx                    # Footer
│   ├── language.context.tsx          # Language state management
│   ├── ProvidersWrapper.tsx          # Context providers
│   ├── heroIntersection.context.tsx  # Hero visibility tracking
│   │
│   └── sections/
│       ├── hero.tsx                  # Hero banner
│       ├── clients.tsx               # Clients showcase
│       ├── services.tsx              # Services grid
│       ├── process.tsx               # How we work
│       ├── portfolio.tsx             # Portfolio grid
│       ├── case-studies.tsx          # Case studies
│       ├── testimonials.tsx          # Testimonials carousel
│       ├── faq.tsx                   # FAQ accordion
│       ├── mission.tsx               # Mission section
│       ├── contact.tsx               # Contact wrapper
│       ├── form.tsx                  # Contact form
│       └── banner.tsx                # Other sections
│
├── components/
│   ├── Container.tsx                 # Section wrapper
│   ├── AnimatedElement.tsx           # Animation wrapper
│   └── ui/
│       ├── button.tsx
│       ├── accordion.tsx
│       ├── carousel.tsx
│       ├── form.tsx
│       ├── input.tsx
│       └── ... (other UI components)
│
├── lib/
│   ├── config.ts                     # ★ MASTER CONFIG FILE ★
│   ├── utils.ts
│   └── notion.ts
│
├── services/
│   └── notion/
│       └── index.ts                  # Notion API integration
│
├── public/
│   ├── logo/                         # Brand logos
│   ├── sections/                     # Section images & video
│   │   ├── services/
│   │   └── our_mission/
│   ├── clients/                      # Client logos
│   ├── portfolio/                    # Project images
│   ├── testimonials/                 # Profile photos
│   ├── case_studies/                 # Case study images
│   └── README.md                     # Image organization guide
│
├── WEBSITE_GUIDE.md                  # Complete management guide
├── QUICK_REFERENCE.md                # Quick copy-paste guide
├── IMPLEMENTATION_SUMMARY.md         # What was built
├── WEBSITE_STRUCTURE.md              # This file
├── README.md                         # Project readme
└── ... (config files)
```

---

## Update Workflow

### Updating Text Content

```
1. Open lib/config.ts
2. Find relevant section (SITE_CONFIG, CLIENTS, SERVICES, etc.)
3. Edit text/values
4. Save file
5. Browser hot-reloads automatically
6. Changes appear instantly
```

### Updating Images

```
1. Create new image
2. Optimize (compress, resize)
3. Upload to appropriate /public/ subfolder
4. Copy the path (e.g., /clients/new-logo.svg)
5. Open lib/config.ts
6. Update imagePath in relevant array/object
7. Save file
8. Browser updates instantly
```

### Adding New Item

```
1. Prepare content (text in EN & PT, image file)
2. Upload image to correct /public/ folder
3. Open lib/config.ts
4. Copy similar item structure
5. Update all fields (EN, PT, paths)
6. Add to relevant array (CLIENTS, SERVICES, PORTFOLIO, etc.)
7. Save file
8. Section automatically displays new item
```

---

## Key Dependencies

| Package | Purpose | Used In |
|---------|---------|---------|
| **next** | Framework | Entire app |
| **react** | UI Library | All components |
| **tailwindcss** | Styling | All components |
| **framer-motion** | Animations | AnimatedElement |
| **@radix-ui/** | UI Components | Accordion, carousel, form, etc. |
| **react-hook-form** | Form state | Contact form |
| **zod** | Validation | Form validation |
| **@notionhq/client** | Notion API | Form submissions |
| **embla-carousel** | Carousel | Testimonials carousel |
| **react-intersection-observer** | Scroll detection | Hero visibility |
| **lucide-react** | Icons | Components |
| **react-icons** | Icons | Components |

---

## Styling System

```
Tailwind CSS Configuration (tailwind.config.ts)
├── Colors
│   ├── Primary (highlights, CTAs)
│   ├── Secondary (backgrounds)
│   └── Accent (emphasis)
├── Typography
│   └── Oswald font family
├── Breakpoints
│   ├── Mobile (default)
│   ├── Tablet (md:)
│   ├── Desktop (lg:)
│   └── 2XL (2xl:)
└── Animations
    └── Custom animations + Framer Motion
```

---

## Performance Optimization

```
Images:
├── Use /public folder (served statically)
├── Compress before uploading
├── Use appropriate format (JPG for photos, SVG for logos)
└── Lazy load with Next.js Image component

Code:
├── Components are split across sections/
├── Language context prevents re-renders
├── Config is imported once, not fetched
└── Tailwind purges unused styles

Build:
├── Next.js automatic code splitting
├── Dynamic imports where needed
└── Optimized for production with npm run build
```

---

## Troubleshooting Quick Map

```
Problem → Check → Fix Location
├── Text not showing → Config values → lib/config.ts
├── Image not loading → Image path format → lib/config.ts path field
├── Missing translation → Translation field → lib/config.ts (add Pt version)
├── Layout broken → CSS classes → Check component JSX
├── Language not switching → Context import → Check useLanguage() in component
└── Form not working → Notion config → services/notion/index.ts
```

---

## Next.js Features Used

- **App Router** - File-based routing in `/app`
- **Server Components** - Default behavior
- **Client Components** - With "use client" where needed
- **Image Optimization** - Automatic with `<Image>` component
- **Font Optimization** - Google Fonts with `next/font`
- **ESLint** - Code quality checks
- **TypeScript** - Type safety throughout

---

## Version Info

- **Next.js:** 14.2.5
- **React:** 18
- **Tailwind:** 3.4.1
- **TypeScript:** 5

---

## Documentation Map

| Need Help With... | Read This File |
|-------------------|----------------|
| Basic content updates | QUICK_REFERENCE.md |
| Complete guide | WEBSITE_GUIDE.md |
| What was built | IMPLEMENTATION_SUMMARY.md |
| How things are organized | WEBSITE_STRUCTURE.md (this file) |
| Image management | public/README.md |
| Deployment | WEBSITE_GUIDE.md → Building & Deployment |
| Development | Read source files in app/sections/ |

---

That's the complete structure! Everything flows from `lib/config.ts` and connects through the component hierarchy. Update the config, and the entire website updates automatically.
