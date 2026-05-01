# Lucidient Landing Page — Design Spec

**Date:** 2026-04-30
**Project:** Lucidient Website
**Type:** Landing Page (Phase 1) → Full Webapp (Future)

---

## 1. Overview

Lucidient is an AI agency that builds complex workflows and agents. The website serves dual purposes:
1. **Landing page** to build trust with potential clients (currently selling on Fiverr)
2. **Foundation** for a full webapp with client dashboard, AI bot, booking, etc.

### Success Criteria
- Professional, trustworthy appearance that converts Fiverr visitors
- Visually distinctive (not "another AI agency with dark mode and neon")
- Expandable architecture — no rebuild needed when adding app features
- Fast load times, fully responsive, SEO-friendly

---

## 2. Visual Design

### Color Palette (Option B — Deepened)
| Role | Hex | Usage |
|------|-----|-------|
| Base | `#F8F7F4` | Page background |
| Charcoal | `#1A1A1A` | Primary text, headings |
| Olive Green | `#3D5A35` | Primary accent, CTAs, links |
| Burnt Orange | `#B85A28` | Secondary accent, highlights, hover states |
| Gradient | `#3D5A35 → #B85A28` | Hero backgrounds, section dividers, decorative lines |
| Light Gray | `#E0DED8` | Borders, dividers, card backgrounds |
| White | `#FFFFFF` | Cards, elevated surfaces |

### Typography
- **Headings:** Inter or Geist (Next.js default) — bold, tight letter-spacing
- **Body:** Inter — regular, 1.6 line-height for readability
- **Scale:** Hero 48-64px, H2 32-40px, H3 24px, Body 16-18px

### Visual Elements
- **Sharp geometric shapes:** Rotated squares, triangles, angular lines
- **Abstract circuit lines:** SVG paths with low opacity (0.1-0.2) as decorative background
- **No rounded corners on accents:** Sharp edges for futuristic feel
- **Cards:** Subtle border (`#E0DED8`), slight shadow, 8px radius (softened for readability)

### Anti-Boring Design Strategies
To avoid looking like every other generic agency website:

1. **Asymmetric Layouts** — Break the grid. Hero text left-aligned with floating geometric shapes on the right. Services section with staggered card heights (not perfectly aligned rows).

2. **Custom Cursor** — Subtle custom cursor that changes color/size when hovering over interactive elements.

3. **Scroll-Triggered Line Animations** — Abstract circuit lines that "draw" themselves as you scroll down the page (SVG stroke-dashoffset animation).

4. **Variable Font Weight on Hover** — Headings that subtly increase font weight on hover using variable fonts.

5. **Micro-Interactions** — Service cards that tilt slightly on mouse move (3D perspective effect). Buttons with magnetic hover effect.

6. **Text Scramble Effect** — On page load, the hero headline "decodes" from random characters to final text.

7. **Split-Screen Hero** — Left side: text content. Right side: abstract 3D geometric composition or custom illustration (not stock photo).

8. **Horizontal Scroll Section** — Portfolio teaser scrolls horizontally while the rest of the page scrolls vertically.

9. **Grain/Noise Texture** — Subtle noise overlay (3-5% opacity) on the background for tactile, print-like quality.

10. **Oversized Typography** — Section numbers ("01", "02", "03") displayed as massive decorative elements behind content.

11. **Custom Scrollbar** — Styled to match the olive/orange palette.

12. **Page Transitions** — Smooth page transitions using Framer Motion when navigating to portfolio page (Phase 2).

---

## 3. Page Structure

### 3.1 Navigation (Sticky)
- **Left:** Lucidient logo (wordmark)
- **Center:** Services | Portfolio | About | Pricing
- **Right:** "Get Started" CTA button (olive green, sharp corners)
- **Mobile:** Hamburger menu, same links

### 3.2 Hero Section
- **Headline:** "AI Workflows That Actually Work"
- **Subheadline:** "Custom agents and automation built for your business — no fluff, just results."
- **Primary CTA:** "View Our Services" → scrolls to Services
- **Secondary CTA:** "See Our Work" → scrolls to Portfolio
- **Background:** Abstract circuit-line SVG pattern (olive + orange, very low opacity)
- **Accent:** Floating geometric shapes (rotated squares, triangles) with gradient fill

### 3.3 Services Section
- **Heading:** "What We Build"
- **Layout:** 3-column grid (2 on tablet, 1 on mobile)
- **Cards:**
  1. **AI Agents** — "Intelligent agents that handle tasks, answer questions, and integrate with your tools."
  2. **Workflow Automation** — "Complex multi-step workflows that connect your apps and eliminate manual work."
  3. **Web Design** — "Beautiful, fast websites built with modern tech — from landing pages to full webapps."
  4. **3D & Creative** — "Interactive 3D experiences, visualizations, and creative tech solutions."
- **Card design:** Icon (lucide-react), title, description, "Learn more →" link

### 3.4 Portfolio Teaser
- **Heading:** "Selected Work"
- **Layout:** 3-project grid (2 on tablet, 1 on mobile)
- **Each project:** Thumbnail image, project name, short tagline
- **CTA:** "View Full Portfolio →" (links to `/portfolio` — placeholder for Phase 2)

### 3.5 About / Team Section
- **Heading:** "Meet The Team"
- **Layout:** 3-column grid
- **Cards:**
  - Placeholder avatar (geometric pattern)
  - Name
  - Role (e.g., "Founder & AI Engineer", "Workflow Architect", "Creative Developer")
  - Short bio (1-2 sentences)
- **Purpose:** Build trust by showing there are real people behind the agency

### 3.6 Pricing Section
- **Heading:** "Choose Your Plan"
- **Layout:** 3-tier comparison
- **Tiers:**
  1. **Starter** — "Perfect for simple automations and single agents"
  2. **Professional** — "For businesses needing complex workflows and integrations"
  3. **Enterprise** — "Custom solutions, priority support, dedicated team"
- **Each tier:** Feature list, "View on Fiverr" button linking to specific gig
- **No prices shown** — direct to Fiverr for pricing

### 3.7 Footer CTA
- **Heading:** "Ready to Automate Your Workflow?"
- **CTA:** "Get Started" button → links to Fiverr or contact (future: AI bot)

### 3.8 Footer
- **Left:** Logo + short tagline
- **Center:** Nav links (Services, Portfolio, About, Pricing)
- **Right:** Social links (GitHub, LinkedIn, Fiverr)
- **Bottom:** Copyright 2026 Lucidient

---

## 4. Technical Architecture

### Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** lucide-react
- **Animation:** Framer Motion (subtle entrance animations)
- **Deployment:** Vercel

### Project Structure
```
lucidient/
├── app/
│   ├── page.tsx              # Landing page (all sections)
│   ├── layout.tsx            # Root layout (fonts, metadata)
│   ├── globals.css           # Global styles + Tailwind
│   ├── portfolio/            # Portfolio page (Phase 2)
│   │   └── page.tsx
│   └── api/                  # API routes (future: contact form, bot)
│       └── route.ts
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── navigation.tsx        # Sticky nav
│   ├── hero.tsx              # Hero section
│   ├── services.tsx          # Services section
│   ├── portfolio-teaser.tsx  # Portfolio preview
│   ├── team.tsx              # About/team section
│   ├── pricing.tsx           # Pricing section
│   ├── footer-cta.tsx        # Footer CTA
│   ├── footer.tsx            # Site footer
│   └── geometric-bg.tsx      # Reusable SVG background
├── lib/
│   └── utils.ts              # Utility functions
├── public/
│   ├── images/               # Portfolio images, team avatars
│   └── favicon.ico
├── docs/
│   └── superpowers/
│       └── specs/            # This design doc
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### Tailwind Config Extensions
```js
colors: {
  base: '#F8F7F4',
  charcoal: '#1A1A1A',
  olive: {
    DEFAULT: '#3D5A35',
    light: '#4a6b40',
    dark: '#2d4526',
  },
  orange: {
    DEFAULT: '#B85A28',
    light: '#d46b35',
    dark: '#964a20',
  },
}
```

---

## 5. Animation & Interaction

### Entrance Animations (Framer Motion)
- **Hero:** Fade in + slight translateY (staggered: headline → subheadline → CTAs)
- **Sections:** Fade in on scroll intersection (subtle, not flashy)
- **Cards:** Staggered fade-in (0.1s delay between each)

### Hover States
- **Buttons:** Background darkens slightly, subtle scale(1.02)
- **Cards:** Subtle lift (translateY -4px), shadow increase
- **Links:** Color shift to orange, underline animation

### Geometric Background
- **Hero:** Static SVG pattern (low performance cost)
- **Other sections:** Optional subtle line accents
- **No continuous animations** — keep it performant

---

## 6. Content Strategy

### Copy Tone
- Professional but approachable
- Confident, not arrogant
- Focus on outcomes, not buzzwords
- Avoid: "leverage AI", "synergy", "disrupt" — use: "build", "automate", "solve"

### Placeholder Content (to be refined)
- Team names/bios: Use realistic placeholders (e.g., "Alex Chen — AI Engineer")
- Portfolio projects: Use 3 fictional but realistic project names
- Service descriptions: Already drafted in section 3.3

### Image Requirements & AI Prompts

**Hero Background/Illustration:**
- Prompt: "Abstract 3D geometric composition, olive green and burnt orange color palette, sharp angular shapes, floating cubes and triangles, circuit board patterns, minimal, futuristic, clean white background, high resolution, no text"

**Portfolio Project 1 — AI Agent Dashboard:**
- Prompt: "Modern dashboard UI mockup, dark mode interface with data visualization, chat bubbles, workflow nodes connected by lines, olive green accent color, minimal design, floating in 3D space, soft shadows, clean background"

**Portfolio Project 2 — Workflow Automation:**
- Prompt: "Abstract visualization of automated workflow, interconnected nodes and pathways, data flowing through pipes, olive green and burnt orange gradient accents, geometric shapes, minimal futuristic style, clean white background"

**Portfolio Project 3 — Creative Web Design:**
- Prompt: "Modern website design mockup floating in 3D space, multiple browser windows showing responsive design, abstract geometric shapes in background, olive green and burnt orange color accents, minimal clean aesthetic, soft lighting"

**Team Member Avatars (3 needed):**
- Prompt 1: "Professional headshot portrait, confident person looking at camera, neutral background, soft studio lighting, modern corporate style, high quality"
- Prompt 2: "Creative professional portrait, person with slight smile, minimal background, natural lighting, contemporary style, high resolution"
- Prompt 3: "Tech professional headshot, person with thoughtful expression, clean background, professional lighting, modern aesthetic, high quality"

**Service Icons (4 needed, or use Lucide icons):**
- Consider using Lucide React icons instead: `Bot`, `Workflow`, `Globe`, `Box` (3D)

**Note:** Save all generated images to `/home/ubuntu/lucidient/public/images/` with descriptive filenames.

---

## 7. Future Expansion (Phase 2+)

### Planned Features
1. **Portfolio Page** — Full case studies with images, tech stack, results
2. **AI Chat Bot** — Embedded chat for visitor questions and booking
3. **Contact Form** — With email integration (Resend/Loops)
4. **Blog** — Content marketing, SEO
5. **Client Dashboard** — Project tracking, deliverables, communication
6. **Auth** — Client login for dashboard access

### Architecture Readiness
- Next.js App Router supports all of these natively
- API routes ready for bot, form handling, auth
- Database can be added (Supabase/Neon)
- Current static pages won't need changes when adding dynamic features

---

## 8. Out of Scope (Phase 1)

- ❌ Testimonials (no client work yet)
- ❌ Dedicated contact page (CTAs → Fiverr for now)
- ❌ Full portfolio page (placeholder link only)
- ❌ AI chat bot (Phase 2)
- ❌ Client dashboard (Phase 3)
- ❌ Blog (Phase 2)
- ❌ Payment processing (Fiverr handles this)

---

## 9. Open Questions

None — all decisions made during brainstorming session on 2026-04-30.

---

## 10. Approval

**Design approved by:** _______________  
**Date:** _______________  
**Notes:** _______________
