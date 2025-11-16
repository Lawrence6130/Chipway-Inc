# Chipway-Inc
Official website for Chipway Inc - a transaction processing company 

## Website (static)

A simple static website scaffold was added to this repository to represent Chipway Inc.

Files added:

- `index.html`, `about.html`, `services.html`, `contact.html`
- `assets/css/style.css` — basic responsive styles
- `assets/js/main.js` — small interaction helpers
- `package.json` — includes a `start` script using `http-server` via `npx`

Run locally with:

```bash
# using npm script (recommended)
npm start

# or directly with npx
npx http-server ./ -p 8080
````markdown
# Chipway-Inc
Official website for Chipway Inc - a transaction processing company 

## Website (static)

A simple static website scaffold was added to this repository to represent Chipway Inc.

Files added:

- `index.html`, `about.html`, `services.html`, `contact.html`
- `assets/css/style.css` — basic responsive styles
- `assets/js/main.js` — small interaction helpers
- `package.json` — includes a `start` script using `http-server` via `npx`

Run locally with:

```bash
# using npm script (recommended)
npm start

# or directly with npx
npx http-server ./ -p 8080
```

Then open http://localhost:8080 in your browser.

Additional pages and assets added:

- `team.html` — simple team listing with placeholder SVG headshots
- `assets/img/favicon.svg` — site favicon
- `assets/img/team1.svg`, `team2.svg`, `team3.svg` — placeholder images used on the team page

These are lightweight SVG placeholders so the site is still fully static and fast.

````

Continuous deployment
---------------------

A GitHub Actions workflow (`.github/workflows/deploy-pages.yml`) was added to publish the repository to the `gh-pages` branch using `peaceiris/actions-gh-pages`.

Notes:
- The workflow runs on pushes to `main` and `feature/site-scaffold`, and on pull requests targeting `main`.
- To enable GitHub Pages, set the repository Pages source to the `gh-pages` branch in the repository Settings → Pages.

Contact form
------------

The contact form is preconfigured to use Formspree. Replace the placeholder action URL in `contact.html` with your Formspree form id, for example:

```html
<form action="https://formspree.io/f/your-form-id" method="POST">
```

By default the form is in "demo" mode (so submissions do not leave this repo). After replacing the Formspree ID, remove `data-demo="true"` from the form tag to allow real submissions.

