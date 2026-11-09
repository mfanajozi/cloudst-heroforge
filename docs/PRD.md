# CloudST HeroForge — production product requirements

Version 1.0 · 9 November 2026 · Status: proposed production specification

## Purpose and success

Help South African businesses replace weak homepage headers with responsive, editable hero components that drive enquiries. The primary workflow is browse → customise → preview → save → export or request implementation. Customers buy a stronger first impression; animation is a supporting treatment.

Primary users: CloudST designers implementing website revamps; SME owners choosing a hero and preparing a brief; administrators maintaining the catalogue and handling enquiries.

Initial targets to validate after launch: 30% of catalogue visitors open a template, 50% of editor sessions produce a save or export, and 5% of package visitors submit a qualified brief. These are proposed targets, not measured results.

## Brand system

The supplied logo.png is the source of truth. Pixel sampling of opaque saturated pixels found RGB (234, 207, 148), hex **#EACF94**, as the dominant gold (61,087 pixels). Keep the supplied PNG unchanged for header identity and favicon.

| Token | Value | Purpose |
| --- | --- | --- |
| CloudST gold | #EACF94 | Primary actions, accents, selected controls |
| Black | #000000 | Logo background and deepest contrast |
| Charcoal | #10100F | Application canvas, derived supporting colour |
| Elevated charcoal | #191918 | Panels, derived supporting colour |
| Warm white | #F6F3EB | Primary text, derived supporting colour |
| Warm grey | #A7A59E | Supporting copy, derived supporting colour |
| Ink | #211B10 | Text on gold buttons, derived supporting colour |

Only gold is sampled as the dominant chromatic brand colour; supporting neutrals are design choices. Customer hero colours remain editable. Do not carry the Stitch blue palette into the CloudST application shell. Verify contrast for user-selected colours before production publishing.

## Current implementation

A dependency-free JavaScript/CSS application with a Node development server and static build. It includes 18 templates across six categories, searchable category filters, editable content/CTA/media/proof/style fields, desktop/tablet/mobile iframe previews, browser-local project saves, embeddable section HTML/CSS/JS and JSON downloads, free DIY information and downloadable implementation briefs. Live preview and HTML export use the same renderer.

This is a functional local MVP. It does not implement accounts, cloud storage, payment, actual enquiry delivery, asset uploads, a separate quote-funnel page, administration, or production analytics. Default illustrations are CSS placeholders; users supply image/video URLs. Testimonials are explicitly demo content. Native scoped CSS is used; this build does not claim Bootstrap, React or Tailwind exports.

## Proposed production stack

| Layer | Choice | Rationale and boundary |
| --- | --- | --- |
| Frontend and server | Next.js App Router, React, TypeScript, supported Node LTS | Typed configuration, public catalogue rendering and server API routes; migrate the current UI and shared renderer |
| Styling | CSS custom properties and scoped CSS modules | Preserve CloudST tokens and portable, dependency-free exports |
| Validation | Zod schemas | Validate configuration and submissions on server and client; version the data model |
| Database | Supabase managed PostgreSQL | Durable projects, revisions, templates, quote requests and audit records |
| Identity | Supabase Auth | Designer/customer accounts, workspace membership and admin role enforcement |
| Media | Supabase Storage | Private originals, controlled delivery, signed access and ownership policies |
| Email | Resend through server-side API | Verified-domain notifications, delivery status and retry handling |
| Hosting | Managed Next.js hosting or a Node container behind HTTPS | Preview environments, production deployment, rollback and secret management |
| Testing | Node/Vitest for model/export, Playwright for browser journeys, axe for accessibility | Catch export regressions, responsive issues and broken workflows |
| Operations | Structured server logs, error reporting and privacy-conscious event collection | Detect failures and measure the conversion funnel |

These are architectural recommendations, not services already provisioned. Pin supported versions and review provider plans, South African latency and data residency during implementation. Next.js supports managed and self-hosted deployment ([official deployment guidance](https://nextjs.org/docs/app/guides/self-hosting)). Supabase recommends row level security for browser-accessible tables and supports policies on storage ([database policies](https://supabase.com/docs/guides/database/postgres/row-level-security), [storage access control](https://supabase.com/docs/guides/storage/security/access-control)). Resend provides an official Node SDK for transactional email ([SDK](https://github.com/resend/resend-node)).

No payment service is necessary for the quote-first MVP. Introduce a locally appropriate payment provider only after checkout requirements and merchant eligibility are confirmed.

## Functional requirements and acceptance

| ID | Requirement | Acceptance |
| --- | --- | --- |
| FR1 | Curated launch catalogue | 18 components across six categories, with three variations in each; search and categories combine; empty state visible |
| FR2 | Consistent editing | Content, primary/secondary CTA, media/alt, proof, colours, typography, spacing, radius and motion persist in versioned configuration |
| FR3 | Responsive previews | Same component at desktop fluid width, 768px and 375px; no clipped controls on small screens |
| FR4 | Portable export | Downloaded HTML renders outside the app and matches configured content; scoped CSS; escaped user content; JSON includes schema version |
| FR5 | Durable projects | Authenticated users create, reopen, duplicate and delete projects; changes do not cross workspace boundaries; revision recovery supported |
| FR6 | Media management | Validate MIME and actual file content, enforce size limits, optimise images, provide alt text and video poster; enforce ownership |
| FR7 | Motion accessibility | Reduced-motion handling; rotating proof changes no faster than five seconds; manual play/pause and pause on hover/focus; keep headline and CTA fixed |
| FR8 | Lead capture | Short labelled form, validation, explicit consent and privacy link; server persistence before success; failure/retry states; notification delivery tracked |
| FR9 | Package builder | ZAR estimate, explicit scope/exclusions and editable brief; final quote reviewed by CloudST; no implied payment |
| FR10 | Administration | Role-protected template publishing, draft preview, package pricing management and enquiry status tracking |
| FR11 | Quote funnel | Separate accessible quote page, submission confirmation, notification and conversion event |

Current catalogue (three variations per category):

- Split Image: Split Image Right, Split Image Left, Floating Image Card.
- Background: Centred Background Image, Left-Aligned Background, Bottom-Left Background.
- Product & SaaS: Image Below Headline, Product Showcase Split, Product Feature Callouts.
- Social Proof: Static Testimonial Strip, Rotating Testimonial Strip, Featured Client Quote.
- Creative: Animated Gradient Hero, Mesh Gradient, Minimal Typography.
- Video: Full-Background Video, Split Video Panel, Cinematic Video.

Lead Capture and Quote Form Hero are removed from the component catalogue, configuration model, renderer and editor. The separate commercial quote-funnel workflow remains a future production capability. Original supplied catalogue documents are retained as historical source references.

## Data and API design

Core entities: profiles; workspaces; memberships (workspace_id, user_id, role); templates (slug, category, schema_version, default_config, publication_status); projects (workspace_id, template_id, config JSONB, version, timestamps); project_revisions (project_id, config, created_by); assets (workspace_id, storage_key, type, dimensions, alt, poster_key); quote_requests (workspace_id optional, contact, package, add_ons, estimate, consent_timestamp, status); email_deliveries (quote_id, provider_id, status); audit_events.

Store prices in integer ZAR cents and compute totals on the server. Never accept browser totals as authoritative. Unique submission keys prevent duplicate leads and notifications. Foreign keys, owner policies and authenticated API checks apply on every write. Optimistic revision checks prevent silent overwrites.

Proposed routes: GET /api/templates; GET/POST /api/projects; GET/PATCH/DELETE /api/projects/:id; POST /api/projects/:id/export; POST /api/assets/upload-url; POST /api/quote-requests; POST /api/email/webhook. Validate all payloads, reject unsafe protocols and CSS values, apply body limits, verify webhooks and use generic public error messages. Export generation must never execute user HTML or fetch arbitrary private-network URLs.

## Quality and operations

Target WCAG 2.2 AA, complete keyboard operation, visible focus, labelled controls and meaningful image alternatives. Test at 375/768/1440px and 200% zoom. Target p75 LCP ≤2.5 seconds, INP ≤200ms and CLS ≤0.1 on representative mobile connections. Lazy-load catalogue previews and avoid loading twelve videos. Video requires poster, mute, playback control and mobile fallback. Real testimonials and their permissions must replace sample copy.

Secrets remain server-side. Rate-limit lead submission and uploads; protect against spam and malicious media. Define retention, export/deletion procedures, cookie/analytics consent requirements and review privacy obligations with appropriate advisers before accepting personal data. Backups and restoration must be exercised. Set up domain/DNS/TLS, sender verification, deployment environments, rollback and operational alerts.

## Commercial scope

The entire library is available at no cost for DIY use, including customisation and section-code/JSON exports. Alternatively, CloudST can apply the chosen section to the client’s existing website. CloudST needs access to the relevant website files and agrees access arrangements directly with the client. Implementation scope and cost are quoted after reviewing the website; no fixed installation fee or add-on pricing is published.

The current implementation page lets visitors download a brief containing their business, website URL, chosen hero and notes. It does not send a request or collect credentials. Earlier paid catalogue packages, add-ons and care-plan prices are superseded by this model. Production submission and notification capabilities elsewhere in this document remain future work.

## Delivery phases

1. Local MVP and brand alignment: implemented; browser QA still pending.
2. Production foundation: typed migration, database migrations, authentication, ownership policies, cloud saves and uploads.
3. Lead workflow: quote page, validated server submissions, email delivery and administration.
4. Release readiness: responsive/accessibility/performance QA, real media, monitoring, backups and deployment.

Production release requires all P0 tasks in TASKS.md complete. The local build alone is not a production launch.
