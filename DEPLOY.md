# Lucidient Deployment Guide

## Vercel Deployment

### Prerequisites
- Vercel account (https://vercel.com)
- Vercel CLI installed (`npm i -g vercel`)

### Steps

1. **Login to Vercel**
   ```bash
   vercel login
   ```

2. **Deploy to production**
   ```bash
   cd /home/ubuntu/lucidient
   vercel --prod
   ```

   Or use the npm script:
   ```bash
   npm run deploy
   ```

3. **Follow the prompts**
   - Link to existing project or create new one
   - Confirm build settings
   - Wait for deployment to complete

### Build Configuration

The project is configured for static export:
- `output: "export"` in `next.config.ts`
- Images are unoptimized for static hosting
- Output directory: `out/`

### Environment Variables

If you need environment variables (for future API integrations):
```bash
vercel env add VARIABLE_NAME
```

### Custom Domain

After deployment, you can add a custom domain in the Vercel dashboard:
1. Go to Project Settings
2. Click "Domains"
3. Add your domain and follow DNS configuration

### Continuous Deployment

Vercel automatically deploys when you push to GitHub. To set up:
1. Push this repository to GitHub
2. Import the project in Vercel dashboard
3. Vercel will auto-deploy on every push to main

## Local Development

```bash
npm run dev
```

Open http://localhost:3000

## Building Locally

```bash
npm run build
```

Static files will be in `out/` directory.
