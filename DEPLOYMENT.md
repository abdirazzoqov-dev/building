# Vercel Deployment Guide

## Build Configuration

### vercel.json
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Framework**: Vite (auto-detected)

### Build Process
1. Vercel installs dependencies: `npm install`
2. Runs build: `npm run build` (executes `vite build`)
3. Serves static files from `dist` directory
4. All routes rewrite to `index.html` for SPA routing

## Troubleshooting

### Build completes too fast (14ms)
**Problem**: Build command not executing properly

**Solutions**:
1. Check Vercel project settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

2. Check for TypeScript errors:
   ```bash
   npm run type-check
   ```

3. Test build locally:
   ```bash
   npm run build
   ```

4. Check Vercel build logs for errors

### Common Issues

#### 1. TypeScript Errors
If `tsc` fails, the build stops. Use `vite build` which handles TypeScript internally.

**Solution**: Build command is now `vite build` (TypeScript checked by Vite)

#### 2. Missing Dependencies
Ensure all dependencies are in `package.json`, not just `devDependencies`.

#### 3. Path Alias Issues
Vite handles `@/` aliases automatically. No additional config needed.

#### 4. Environment Variables
Add environment variables in Vercel dashboard:
- Settings → Environment Variables

#### 5. Build Output Not Found
Ensure `dist` folder is generated:
```bash
npm run build
ls -la dist
```

## Vercel Settings Checklist

- [ ] Framework: Vite (auto-detected)
- [ ] Build Command: `npm run build`
- [ ] Output Directory: `dist`
- [ ] Install Command: `npm install`
- [ ] Node.js Version: 18.x or 20.x (auto-detected)
- [ ] Environment Variables: Set if needed

## Manual Deployment Steps

1. Push code to GitHub:
   ```bash
   git add .
   git commit -m "Deploy to Vercel"
   git push origin main
   ```

2. Vercel will auto-deploy from GitHub

3. Check deployment logs in Vercel dashboard

## Local Build Test

Before deploying, test build locally:
```bash
# Install dependencies
npm install

# Run type check
npm run type-check

# Build for production
npm run build

# Preview build
npm run preview
```

If local build works, Vercel build should work too.

