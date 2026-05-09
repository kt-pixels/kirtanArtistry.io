# Kirtan Kaushik Portfolio

An immersive single-page portfolio experience built with `HTML`, `CSS`, and `Vanilla JavaScript`, with motion and 3D powered by `GSAP`, `ScrollTrigger`, `Lenis`, and `Three.js`.

## Files

- `index.html` contains the semantic structure, SEO metadata, and script/style loading.
- `style.css` contains the visual system, theme engine, responsive layouts, and motion styling.
- `script.js` contains the portfolio data, rendering logic, interactions, GitHub integration, and Three.js hero scene.
- `preview-server.js` is a tiny local server for `localhost` previewing.

## Customize The Content

Update the `portfolioData` object in `script.js`.

- Replace the placeholder `github.username` and `github.profileUrl`.
- Replace the placeholder GitHub and LinkedIn social links in `socials`.
- Replace the five sample project cards with your actual project titles, descriptions, stacks, and URLs.
- Update the timeline copy with your verified internships, freelance work, hackathons, certifications, and achievements.

## Local Preview

Run:

```bash
node preview-server.js
```

Then open:

```text
http://127.0.0.1:4173
```

## Deploy To Vercel

1. Push the project to GitHub.
2. Import the repository into [Vercel](https://vercel.com/).
3. Use the default static deployment settings.
4. Set your custom domain in the Vercel dashboard after the first deploy.

## Deploy To Netlify

1. Push the project to GitHub.
2. Import the repository into [Netlify](https://www.netlify.com/).
3. Use:
   - Build command: leave empty
   - Publish directory: `.`
4. Add your custom domain from the site settings panel.

## Deploy To GitHub Pages

1. Push the repository to GitHub.
2. Open repository `Settings`.
3. Go to `Pages`.
4. Set the source to the main branch and root folder.
5. Save and wait for the site URL to go live.

## Performance Notes

- Keep the project thumbnail system SVG-based or compressed if you swap in real media.
- If you add heavier assets, lazy-load them and prefer modern compressed formats.
- If you need extra performance on low-end devices, reduce the particle count in `initThreeHero()`.
- For production hardening, you can self-host the third-party libraries instead of using CDNs.

## SEO Notes

- Update the meta title, description, and Open Graph fields in `index.html`.
- Add a real Open Graph image once you create one for the portfolio.
- Add your production domain to structured data once deployed.
- Create `sitemap.xml` and `robots.txt` after your final production URL is known.

## Custom Domain Setup

- For Vercel or Netlify, add the domain in the dashboard and follow their DNS instructions.
- If using a root domain, you will usually add `A` records.
- If using a subdomain like `www`, you will usually add a `CNAME` record.
- After DNS propagates, enable HTTPS in the hosting dashboard.
