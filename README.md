# Arisht Jain Portfolio Site

Dark, modern, interactive static portfolio (blacksmith-style inspiration) with responsive layout and animation.

## Local preview

```bash
cd arisht-site
python3 -m http.server 8080
# open http://localhost:8080
```

## Included

- `index.html` main page
- `styles.css` styling + glass/dark UI
- `script.js` scroll reveal interactions
- `assets/Arisht_Jain_CV.jpg` downloadable CV image

## Fastest free hosting options

## 1) Cloudflare Pages (recommended)

1. Push this folder to a GitHub repo.
2. Cloudflare Dashboard → Pages → Create project → Connect Git.
3. Build settings:
   - Framework: None
   - Build command: *(leave empty)*
   - Output directory: `/`
4. Deploy.
5. Optional custom domain from Cloudflare Registrar.

## 2) Netlify

1. Create a GitHub repo with this folder content.
2. Netlify → Add new site → Import from Git.
3. Build command: *(empty)*
4. Publish directory: `/`
5. Deploy.

## 3) GitHub Pages

```bash
cd arisht-site
git init
git add .
git commit -m "init portfolio"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

Then GitHub repo Settings → Pages → Deploy from `main` root.

## Free domain/subdomain ideas

- Native host subdomain (instant):
  - `*.pages.dev` (Cloudflare)
  - `*.netlify.app` (Netlify)
  - `*.github.io` (GitHub)
- Free custom domain providers (availability varies):
  - eu.org (free subdomain request)
  - Freenom-like providers (limited/reliability varies)

## Notes

- For production, replace CV image with a proper PDF (`assets/Arisht_Jain_CV.pdf`) and update button link.
- Add analytics later (Plausible / Cloudflare Web Analytics) if needed.
