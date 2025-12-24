# Personal Website & Blog

A modern, responsive personal website and blog built with Next.js, TypeScript, and Tailwind CSS. Features include projects showcase, experiences timeline, blog posts (especially C++ content), and a full-site search engine.

## Features

- 🏠 **Homepage**: Introduction and overview
- 📁 **Projects**: Portfolio of software projects
- 💼 **Experiences**: Professional journey timeline
- ✍️ **Blog**: C++ learnings and insights with markdown support
- 🔍 **Search**: Full-site search across all content
- 🌓 **Dark Mode**: Toggle between light and dark themes
- 📱 **Responsive**: Mobile-first design that works on all devices

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository (or use this directory)
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Customization

### Update Personal Information

1. **Homepage**: Edit `app/page.tsx` to update the about section
2. **Projects**: Add/edit projects in `data/projects.ts`
3. **Experiences**: Add/edit experiences in `data/experiences.ts`
4. **Blog Posts**: Add/edit blog posts in `data/blogPosts.ts`

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component-specific styles use Tailwind utility classes

## Deployment & Hosting

This Next.js application can be deployed to various platforms. Here are the most popular options:

### Option 1: Vercel (Recommended - Free & Easy)

Vercel is made by the creators of Next.js and offers the best integration:

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure everything
   - Click "Deploy"
   - Your site will be live at `your-project.vercel.app`

3. **Custom Domain**
   - In Vercel dashboard, go to your project → Settings → Domains
   - Add your custom domain (e.g., `yourname.com`)
   - Follow DNS instructions to point your domain to Vercel
   - SSL certificates are automatically provisioned

**Vercel Free Tier Includes:**
- Unlimited deployments
- 100GB bandwidth/month
- Automatic SSL
- Global CDN
- Perfect for personal websites

### Option 2: Netlify (Free Alternative)

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

3. **Custom Domain**
   - Site settings → Domain management
   - Add custom domain
   - Configure DNS as instructed

### Option 3: AWS Amplify

1. **Push to GitHub**

2. **Deploy to AWS Amplify**
   - Go to AWS Amplify Console
   - Click "New app" → "Host web app"
   - Connect to GitHub and select your repository
   - Build settings are auto-detected
   - Review and deploy

3. **Custom Domain**
   - App settings → Domain management
   - Add custom domain and configure DNS

**Cost**: AWS Amplify has a free tier with 15GB storage and 125GB bandwidth/month

### Option 4: Google Cloud Run

1. **Build Docker image** (Dockerfile provided)
2. Push to Google Container Registry
3. Deploy to Cloud Run
4. Configure custom domain

**Cost**: Pay-per-use, very affordable for low traffic sites

### Option 5: AWS S3 + CloudFront (Static Hosting)

For static export:

1. Update `next.config.js`:
   ```js
   module.exports = {
     output: 'export',
     images: {
       unoptimized: true
     }
   }
   ```

2. Build:
   ```bash
   npm run build
   ```

3. Upload `out/` directory to S3
4. Configure CloudFront distribution
5. Point domain to CloudFront

**Cost**: Very cheap, ~$1-5/month for low traffic

## Getting a Custom Domain

### Option 1: Namecheap (Recommended)

1. Go to [namecheap.com](https://namecheap.com)
2. Search for your desired domain name
3. Add to cart and checkout (typically $10-15/year for .com domains)
4. In domain management, configure DNS:
   - For Vercel/Netlify: Follow their DNS setup instructions
   - Usually involves adding CNAME or A records

### Option 2: Google Domains

1. Go to [domains.google](https://domains.google)
2. Search and purchase domain
3. Configure DNS similarly

### Option 3: Cloudflare

1. Purchase domain through Cloudflare
2. Automatic DNS management
3. Free SSL and CDN included

### DNS Configuration

When you get a domain, you'll need to configure DNS records:

- **For Vercel**: Add a CNAME record pointing to `cname.vercel-dns.com` or A records
- **For Netlify**: Add a CNAME record pointing to your Netlify site URL
- **For AWS/CloudFront**: Add CNAME pointing to your CloudFront distribution

## Recommended Setup (Easiest)

1. **Hosting**: Vercel (free, automatic deployments, zero config)
2. **Domain**: Namecheap (~$12/year for .com)
3. **Total Cost**: ~$12/year (just the domain)

## Adding New Blog Posts

1. Open `data/blogPosts.ts`
2. Add a new entry to the `blogPosts` array:
   ```typescript
   {
     id: '4',
     title: 'Your Post Title',
     excerpt: 'Brief description...',
     content: `# Your Markdown Content`,
     date: '2024-01-20',
     tags: ['C++', 'Other Tag'],
     readTime: 5,
   }
   ```
3. The post will automatically appear on the blog page

## Project Structure

```
personal_website/
├── app/
│   ├── blog/
│   │   ├── [id]/
│   │   │   └── page.tsx    # Individual blog post
│   │   └── page.tsx        # Blog listing
│   ├── experiences/
│   │   └── page.tsx        # Experiences page
│   ├── projects/
│   │   └── page.tsx        # Projects page
│   ├── search/
│   │   └── page.tsx        # Search page
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── SearchComponent.tsx # Search functionality
│   └── ThemeProvider.tsx   # Dark mode provider
├── data/
│   ├── projects.ts         # Project data
│   ├── experiences.ts      # Experience data
│   └── blogPosts.ts        # Blog post data
└── public/                 # Static assets
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Fuse.js**: Fuzzy search library
- **React Markdown**: Markdown rendering for blog posts
- **Lucide React**: Icon library

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please open an issue on GitHub or reach out directly.

