# CloudST HeroForge

A working local hero library and editor based on the supplied catalogue and Stitch references, branded with the supplied CloudST logo and its sampled gold (#EACF94).

## Run

Requires Node.js 22 or newer. No installation or external dependencies needed.

```sh
npm run dev
```

Open http://localhost:5173. Browse 18 templates across six categories (three variations each), customise a hero in the studio, save projects in this browser, download embeddable section HTML/CSS/JS or JSON, or build a package estimate and download a project brief.

```sh
npm test
npm run build
```

Build output is `dist/`; deploy its contents to a static host. The development server serves the repository and is intended for local development only, not public production hosting.

## Documents

- [Production PRD](docs/PRD.md): proposed stack, acceptance criteria, data model and release requirements.
- [Task tracker](docs/TASKS.md): completed local work and outstanding production tasks.

Original Stitch files in `cloudst-heroforge/` are retained as references. App code is in `src/`; logo and favicon use `public/logo.png`.

This MVP has no accounts, cloud persistence, payment or built-in enquiry delivery. Browser storage is device-specific and may be cleared. Quote briefs are downloaded, not submitted. Supply your own image/video URLs, real testimonials before publishing exported components. Bootstrap-specific exports and richer feature-callout editing remain tracked production work.

Lead Capture is removed from the catalogue and editor. Existing saved Lead Capture projects are excluded from the active project list without deleting browser data.


## GitHub and Vercel

Push the repository root, including `src/`, `public/`, `scripts/`, `tests/`, `docs/`, `index.html`, `package.json`, `vercel.json` and the ignore files. The original Markdown catalogue is excluded from GitHub and deployment. Generated `dist/`, credentials, editor files, duplicate root logo and original Stitch exports are ignored. The deployed logo is `public/logo.png`.

`vercel.json` configures the **Other** framework preset, `npm run build`, and `dist` output. Import this repository in Vercel with the repository root as the Root Directory. No environment variables are needed. Do not configure `npm run dev` as the production command.

Only six explicitly listed runtime files are copied into `dist/`. Documentation, tests, development scripts and design references are not published. `.vercelignore` also excludes unnecessary local uploads for CLI deployment; the build allowlist controls the actual deployed output for both Git and CLI deployments.

If Git has not been initialised on your machine, run these commands in this directory:

```sh
git init -b main
git add .
git status --short
# Review the staged files before committing.
git commit -m "Initial CloudST HeroForge MVP"
git remote add origin https://github.com/YOUR-ACCOUNT/YOUR-REPOSITORY.git
git push -u origin main
```

If a Git repository or remote already exists, use it instead of repeating `git init` or `git remote add`. Files already tracked by Git remain tracked even when added to `.gitignore`; review `git ls-files` before pushing. Keep the original Stitch exports backed up separately if you need their design provenance.

Edit `docs/TASKS.md` and `docs/PRD.md` directly. Files under `dist/` are disposable build output and documentation is no longer copied there.
