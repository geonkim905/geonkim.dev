# Troubleshooting Guide

## If Pages Aren't Showing Up

### Step 1: Check if the server is running

Open your terminal and make sure you see:
```
> next dev

   ▲ Next.js 14.x.x
   - Local:        http://localhost:3000
   - ready started server on 0.0.0.0:3000, url: http://localhost:3000
```

If not, start it:
```bash
cd /Users/geonkim/Desktop/personal_website
npm run dev
```

### Step 2: Check your browser

1. Open http://localhost:3000 in your browser
2. **Open Developer Tools** (F12 or Right-click → Inspect)
3. Check the **Console** tab for any red error messages
4. Check the **Network** tab to see if files are loading (look for 404 or 500 errors)

### Step 3: Common Issues and Solutions

#### Issue: Blank white page
- **Check browser console** for JavaScript errors
- Try **hard refresh**: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Clear browser cache

#### Issue: 500 Internal Server Error
- Check the terminal where `npm run dev` is running - it will show the error
- Common causes:
  - Missing dependencies: Run `npm install`
  - Syntax errors in code files
  - Import errors

#### Issue: Pages load but look broken
- Check if CSS is loading (Network tab → look for CSS files)
- Make sure Tailwind is configured correctly
- Try clearing `.next` folder: `rm -rf .next` then restart `npm run dev`

#### Issue: "Module not found" errors
- Run `npm install` to ensure all dependencies are installed
- Check that `node_modules` folder exists

### Step 4: Restart the development server

Sometimes a clean restart fixes issues:

```bash
# Stop the server (Ctrl+C in the terminal)
# Then:
cd /Users/geonkim/Desktop/personal_website
rm -rf .next
npm run dev
```

### Step 5: Verify Installation

Make sure everything is installed:

```bash
cd /Users/geonkim/Desktop/personal_website
node --version    # Should show v18 or higher
npm --version     # Should show version number
npm list          # Should show all packages installed
```

### Step 6: Check File Structure

Make sure all these files exist:
- `app/page.tsx` (homepage)
- `app/layout.tsx` (root layout)
- `components/Navbar.tsx`
- `components/ThemeProvider.tsx`
- `data/projects.ts`
- `data/experiences.ts`
- `data/blogPosts.ts`

### Still Having Issues?

1. **Check the terminal output** - Next.js shows errors in the terminal where you ran `npm run dev`
2. **Check browser console** - Open Developer Tools (F12) and look at the Console tab
3. **Try a different browser** - Sometimes browser extensions can cause issues
4. **Check port 3000** - Make sure nothing else is using port 3000:
   ```bash
   lsof -ti:3000
   ```
   If something is running, you can kill it or use a different port:
   ```bash
   npm run dev -- -p 3001
   ```
