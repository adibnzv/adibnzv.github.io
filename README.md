# Personal Website – Adi Ben Zvi

A minimal React + Tailwind site deployed with GitHub Pages.

## Quick start

```bash
npm install
npm run dev
```

## Configure your links & photo

- Edit social links and text in `src/App.jsx` (`PROFILE` object).
- Place your photo as `public/your-photo.jpg` or update the path.

## Deploy to GitHub Pages

1. Replace placeholders in:
   - `package.json` → `homepage`: `https://YOUR_GITHUB_USERNAME.github.io/personal-website`
   - `vite.config.js` → `base: '/personal-website/'`
2. Push to GitHub (main branch).
3. Deploy:
   ```bash
   npm run deploy
   ```
4. In GitHub → **Settings** → **Pages**, set branch to `gh-pages`.

## Notes

- If deploying to a custom domain, remove `base` in `vite.config.js` and set up DNS / `CNAME`.
