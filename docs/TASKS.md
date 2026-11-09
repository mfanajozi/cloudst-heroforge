# HeroForge task tracker

Updated 9 November 2026. Status: local MVP implemented; production foundation outstanding. Owner is unassigned unless shown. P0 = release blocking; P1 = next release; P2 = later.

| ID | Priority | Task | Status | Dependency / completion evidence |
| --- | --- | --- | --- | --- |
| MVP-01 | P0 | Read catalogue brief and retain Stitch source | Done | Original files retained |
| MVP-02 | P0 | Extract CloudST palette and use logo/favicon | Done | #EACF94 sampled from logo; src/style.css and public/logo.png |
| MVP-03 | P0 | Searchable, filterable 18-template catalogue | Done | src/model.js, src/app.js |
| MVP-04 | P0 | Content/media/CTA/style editor and responsive previews | Done | src/app.js |
| MVP-05 | P0 | Shared preview/export renderer and JSON export | Done | src/hero.js |
| MVP-06 | P0 | Browser-local save/reopen/delete | Done | localStorage workflow; not cloud persistence |
| MVP-07 | P1 | Package estimates and downloadable project brief | Done | No external request or payment submitted |
| MVP-08 | P0 | Build and meaningful model/export tests | Done | npm test and npm run build |
| QA-01 | P0 | Browser QA at desktop/tablet/mobile, keyboard and zoom | To do | Browser environment required; not yet visually verified |
| QA-02 | P0 | Verify exported HTML visually against studio | To do | Include edited content, each archetype and long text |
| QA-03 | P0 | Finalise contrast checks for all user colour combinations | To do | Warn or block inaccessible export settings |
| PROD-01 | P0 | Set up Next.js/React/TypeScript and configuration validation | To do | Follow PRD stack; preserve renderer fidelity |
| PROD-02 | P0 | Supabase migrations, auth, workspace roles and RLS tests | To do | PROD-01; cross-tenant access must fail |
| PROD-03 | P0 | Cloud project saves, revisions and conflict handling | To do | PROD-02 |
| PROD-04 | P0 | Secure uploads, optimised images and video posters | To do | PROD-02; file size/MIME/ownership checks |
| PROD-05 | P0 | Server quote submission, validation and spam controls | To do | PROD-02; persist before success |
| PROD-06 | P0 | Email provider, verified sender, retries and webhook verification | To do | PROD-05; delivery evidence |
| PROD-07 | P0 | Separate quote funnel page and confirmation | To do | PROD-05/06 |
| PROD-08 | P0 | Role-protected catalogue and enquiry administration | To do | PROD-02 |
| PROD-09 | P0 | Pricing approval, VAT treatment and scope terms | To do | Business owner; add-on prices are assumptions |
| PROD-10 | P0 | Privacy notice, retention and consent review | To do | Before collecting customer information |
| PROD-11 | P0 | Real media, testimonials and permissions | To do | Replace CSS/demo placeholders |
| PROD-12 | P0 | End-to-end, accessibility and performance release checks | To do | All production features; include email failures |
| OPS-01 | P0 | Environments, secrets, HTTPS/domain, CI and rollback | To do | Production provider selected |
| OPS-02 | P0 | Monitoring, backups and restore exercise | To do | PROD-02, OPS-01 |
| NEXT-01 | P1 | JSON import, undo/redo, duplicate projects | To do | Schema validation first |
| NEXT-02 | P1 | Rich editable feature callouts and upload UI | To do | Current callouts are fixed demo treatment |
| NEXT-03 | P1 | Bootstrap-specific export adapter and integration tests | To do | Current HTML export uses standalone scoped CSS |
| NEXT-04 | P2 | Authority heroes and additional category variants | To do | Validate demand after launch |
| NEXT-05 | P2 | Billing/payment and care-plan subscriptions | To do | Merchant requirements and provider approval |

Validation commands: `npm test`, `npm run build`, `npm run dev`. No backend service credentials are required for the local MVP. Browser QA remains explicitly open; passing unit tests does not close it.

## Export correction — 9 November 2026

- Done: HTML export now contains only an indented section, scoped style block and template-specific JavaScript when required. Full-document wrappers remain internal to iframe previews.
- Done: image-based templates include a normal `<img>` element even before a URL is supplied, using an embedded SVG placeholder with explicit dimensions and editable alt text.
- Done: regression checks cover absence of document wrappers/global body rules, markup/CSS indentation, placeholder and configured images, and syntax of exported behaviour. Build passes; browser visual verification remains pending.


## Catalogue expansion — 9 November 2026

- Done: six categories with three variations each (18 templates total), including distinct layout treatments.
- Done: removed Lead Capture, Quote Form Hero, form configuration, form renderer, styles and form behaviour.
- Done: catalogue count derives from template data; editor options and filters use the expanded catalogue.
- Done: obsolete saved Lead Capture projects are excluded from active project listings without deleting stored data.
- Done: regression checks enforce three templates per category, unique template IDs, no lead forms and executable video/testimonial exports.
- Pending: browser visual QA of the new variations at all three viewport sizes.


## GitHub / Vercel preparation — 9 November 2026

- Done: explicit runtime-only build allowlist; documentation no longer published.
- Done: Vercel framework/build/output configuration committed as source (`vercel.json`).
- Done: Git and Vercel ignores for generated files, local configuration, temporary files and design references.
- Done: removed public product-documentation link and documented GitHub setup/deployment.
- Pending: initialise/inspect the real Git checkout, create the GitHub remote, push and verify a Vercel deployment. This session's `.git` surface is not a functioning Git repository and is read-only.


## Vercel build correction — 9 November 2026

- Fixed: root-anchored `.vercelignore` entries prevent the duplicate-root-logo exclusion from also excluding `public/logo.png`.
- Fixed: pinned the build engine to Node 22.x rather than allowing automatic major-version upgrades.
- Verified: application tests and runtime-only build; deployed output includes `dist/public/logo.png`.
- Pending: Vercel redeployment confirmation.
