# Deploy Lucidient to Vercel with Custom Domain

## Quick Deploy

Since you're already set up, here's the fastest path:

### Option 1: Vercel Dashboard (Recommended)

1. **Push to GitHub** (if not already):
   ```bash
   cd /home/ubuntu/lucidient
   git remote add origin https://github.com/YOUR_USERNAME/lucidient.git
   git push -u origin master
   ```

2. **Import in Vercel**:
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click Deploy

### Option 2: Vercel CLI

```bash
cd /home/ubuntu/lucidient
vercel login
vercel --prod
```

## Connect Custom Domain (lucidient.agency)

### Step 1: Add Domain in Vercel

After deployment:

1. Go to your project in Vercel Dashboard
2. Click **Settings** → **Domains**
3. Enter: `lucidient.agency`
4. Click **Add**

### Step 2: Configure DNS in Hostinger

Vercel will show you DNS records to add. Typically:

**For root domain (lucidient.agency):**
- Type: A Record
- Name: @
- Value: 76.76.21.21 (Vercel's IP)

**For www (www.lucidient.agency):**
- Type: CNAME
- Name: www
- Value: cname.vercel-dns.com

**In Hostinger:**
1. Log into Hostinger control panel
2. Go to **Domains** → **DNS Zone Editor**
3. Add the A record and CNAME shown above
4. Remove any conflicting A/CNAME records
5. Save changes

### Step 3: Wait for Propagation

- DNS changes can take 24-48 hours (usually much faster)
- Vercel dashboard will show when domain is configured
- You'll see a green checkmark when ready

### Step 4: Enable HTTPS

Vercel automatically provisions SSL certificates
- Wait for "Certificate Active" status
- Your site will be accessible via https://lucidient.agency

## Troubleshooting

**"Domain already in use" error:**
- Remove domain from other Vercel projects first
- Or verify domain ownership via TXT record

**DNS not resolving:**
- Check DNS propagation: https://whatsmydns.net
- Ensure no conflicting records in Hostinger
- Clear local DNS cache: `sudo systemd-resolve --flush-caches`

**Build errors:**
- Check build logs in Vercel dashboard
- Ensure `next.config.ts` has `output: "export"`
- Verify all images are in `public/images/`

## Alternative: Use Vercel Nameservers

If DNS setup is tricky, you can use Vercel's nameservers:

1. In Hostinger, change nameservers to:
   - ns1.vercel-dns.com
   - ns2.vercel-dns.com

2. Vercel will handle all DNS automatically

3. This is easier but gives Vercel full DNS control

## Verify Setup

Once configured, test:
```bash
curl -I https://lucidient.agency
```

Should return HTTP 200 with Vercel headers.

## Need Help?

- Vercel docs: https://vercel.com/docs/concepts/projects/custom-domains
- Hostinger DNS guide: https://www.hostinger.com/tutorials/dns/
