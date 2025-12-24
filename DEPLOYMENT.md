# Quick Deployment Guide

## Fastest Way to Deploy (Recommended)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel (Free)

1. Go to [vercel.com](https://vercel.com) and sign up (use GitHub)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel auto-detects Next.js - just click "Deploy"
5. Your site is live! (e.g., `your-project.vercel.app`)

### Step 3: Add Custom Domain (Optional)

1. Buy a domain from [Namecheap](https://namecheap.com) (~$12/year)
2. In Vercel dashboard → Your Project → Settings → Domains
3. Add your domain (e.g., `yourname.com`)
4. Follow DNS instructions:
   - Add a CNAME record: `www` → `cname.vercel-dns.com`
   - Or add A records as shown in Vercel dashboard
5. Wait 5-10 minutes for DNS to propagate
6. SSL certificate is automatically issued (free)

**Total Cost: $12/year (just the domain)**

---

## Alternative: Netlify

1. Push to GitHub (same as above)
2. Go to [netlify.com](https://netlify.com) and sign up
3. "Add new site" → "Import an existing project"
4. Connect GitHub and select your repo
5. Build settings (auto-filled):
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"
7. Add custom domain in Site settings

---

## Alternative: AWS Amplify

1. Push to GitHub
2. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
3. "New app" → "Host web app"
4. Connect to GitHub and select repo
5. Review build settings and deploy
6. Add custom domain in App settings

**Cost**: Free tier includes 15GB storage, 125GB bandwidth/month

---

## Updating Your Site

After deploying, every time you push to GitHub:
- **Vercel**: Automatically redeploys (no action needed)
- **Netlify**: Automatically redeploys (no action needed)
- **AWS Amplify**: Automatically redeploys (no action needed)

---

## Customization Before Deploying

1. Update your name in `app/page.tsx` and `app/layout.tsx`
2. Add your projects in `data/projects.ts`
3. Add your experiences in `data/experiences.ts`
4. Add blog posts in `data/blogPosts.ts`

Then commit and push!

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Next.js Deployment: https://nextjs.org/docs/deployment

