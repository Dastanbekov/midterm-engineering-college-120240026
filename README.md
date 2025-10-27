# Engineering College — Static Multi‑Page Website

**Duration:** 11:00–13:00 • **Tech:** HTML5, CSS3, Bootstrap 5, vanilla JS

A brochure‑style, responsive, multi‑page website for a fictional **Engineering College**. The site emphasizes accessibility, clear information architecture, and progressive enhancement. It is suitable for deployment on GitHub Pages.

## Page Map
- `index.html` — Home (hero with CTA, featured programs)
- `about-programs.html` — About & Programs (filterable program cards, FAQ accordion)
- `admissions.html` — Admissions steps + Tuition & Fees table
- `student-life.html` — Student Life & News (category filter + search)
- `register.html` — Advanced registration form with validation and success state
- `contact.html` — Contact info + basic contact form with anti‑spam

All pages share a fixed top navbar with active states, usable on mobile (collapsible).

## Features Implemented
- **Accessibility & semantics**: meaningful headings, labels, alt text, focus outlines, skip‑link, proper tables.
- **Responsive Bootstrap 5 layout**: mobile‑first, no horizontal scroll, comfortable spacing & type scale.
- **Forms**:
  - Registration (advanced): validation (HTML5 + custom), matching passwords, terms checkbox gating, inline errors, success feedback, keyboard accessible.
  - Contact (basic): required fields + anti‑spam (math challenge + honeypot), clear status messages.
- **JavaScript Interactions (beyond forms)**:
  1. **Theme toggle (light/dark)** with `localStorage`, uses Bootstrap 5.3 color modes.
  2. **Program filtering** (About) and **News search + category filter** (Student Life).
  3. **Back‑to‑top** button on scroll.
- **Branding**: consistent primary color, type scale, spacing rhythm, card styles, and hero gradient.
- **Performance**: lightweight SVG placeholders for images, minimal custom CSS/JS.

## Live URL
Deploy this repository to GitHub Pages and place your link here, e.g.:
```
https://<your-username>.github.io/<repo-name>/
```

## How to Deploy (GitHub Pages)
1. Create a public repo (e.g., `midterm-engineering-college-<yourID>`).
2. Upload all files (preserve folder structure).
3. In **Settings → Pages**, set **Source** to `Deploy from a branch` and choose `main` branch and `/ (root)`.
4. Wait for the Pages build to finish; copy the live URL above.

## Known Limitations
- Forms are client‑side only (no server). Submissions display confirmation states but do not send email.
- Tuition amounts are sample values for demonstration.

## Credits / Attributions
- **Bootstrap 5.3** via CDN.
- **Inter** font via Google Fonts.
- All images are original SVG placeholders generated for this project (no third‑party attribution required).