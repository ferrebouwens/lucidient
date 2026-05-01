# Lucidient — Deploy to Vercel with Custom Domain

## Your Site is Ready!

All components are built and tested. Build succeeds with zero errors.

## Next Steps

### 1. Push to GitHub (Required for Vercel)

```bash
cd /home/ubuntu/lucidient

# Create GitHub repo first at https://github.com/new
# Then:
git remote add origin https://github.com/YOUR_USERNAME/lucidient.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

**Option A: Dashboard (Easiest)**
1. Go to https://vercel.com/new
2. Import your `lucidient` repo
3. Click Deploy

**Option B: CLI**
```bash
vercel login
vercel --prod
```

### 3. Add Your Domain

**In Vercel Dashboard:**
1. Go to Project → Settings → Domains
2. Add: `lucidient.agency`
3. Vercel shows DNS records

**In Hostinger:**
1. Go to DNS Zone Editor
2. Add A Record:
   - Name: `@`
   - Value: `76.76.21.21`
3. Add CNAME:
   - Name: `www`
   - Value: `cname.vercel-dns.com`
4. Remove old A/CNAME records
5. Save

### 4. Wait & Verify

- DNS propagation: up to 48 hours (usually 5-30 min)
- Check: https://whatsmydns.net
- Vercel dashboard shows green checkmark when ready

## Domain Configuration Guide

Full details: `CUSTOM_DOMAIN_SETUP.md`

## Your Images

I renamed your uploaded images:
- Portfolio: `portfolio-1.jpg`, `portfolio-2.jpg`, `portfolio-3.jpg`
- Team: `team-1.jpg`, `team-2.jpg`, `team-3.jpg`
- Hero background: `hero-bg.png` (ready to use)

## Quick Test

Build output is in `out/` directory. You can preview locally:
```bash
cd /home/ubuntu/lucidient/out
npx serve
```

## Need Help?

- Full deploy guide: `DEPLOY.md`
- Domain setup: `CUSTOM_DOMAIN_SETUP.md`
- Design spec: `docs/superpowers/specs/2026-04-30-lucidient-landing-design.md`

Your site will be live at **https://lucidient.agency** once DNS propagates!
