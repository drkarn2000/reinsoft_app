# Genesis – AI Agent SaaS Template
#### Preview

 - [Demo](https://themewagon.github.io/genesis-nextjs/)

#### Download
 - [Download from ThemeWagon](https://themewagon.com/themes/genesis-nextjs/)

## Getting Started

1. Clone Repository
```
git clone https://github.com/themewagon/genesis-nextjs.git
```
2. Install Dependencies
```
npm i
```
3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Case-study image uploads

Admin case-study images are uploaded server-side to Cloudinary and the returned
HTTPS URL is stored in the existing `CaseStudy.heroImage` field. Existing
`/assets/...` image paths continue to work.

Configure these variables in `.env.local` for local development and in Vercel
Project Settings → Environment Variables for the Production environment:

```text
# Alternatively, use one server-only Cloudinary connection string:
# CLOUDINARY_URL=cloudinary://<api-key>:<api-secret>@<cloud-name>
CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
CLOUDINARY_CASE_STUDY_FOLDER (optional; defaults to reinsoft/case-studies)
```

Never commit `CLOUDINARY_URL` or `CLOUDINARY_API_SECRET`. If credentials are
accidentally shared, revoke or regenerate the Cloudinary API secret before
using it in local development or Vercel.

After adding the variables, deploy the application normally. No Prisma schema
migration is required. In the Admin Panel, create or edit a case study, choose
**Upload Image**, wait for the preview and progress indicator to finish, then
save the case study. Verify the resulting image on `/our-work` and the
corresponding `/case-studies/<slug>` page.

## Populate the CMS

The CMS ingestion script is idempotent and uses upserts; it does not delete
existing content or admin users. To populate the local database:

```bash
npm run cms:ingest
```

To populate the Vercel Production database, first pull the Production
environment into `.env.production.local`, then run:

```bash
npx vercel env pull .env.production.local --environment=production
npm run cms:ingest:production
```

This registers the existing public pages and sections, service pages,
navigation, case studies, testimonials, FAQs, brand logos, team members, and
global settings for editing in the Admin Panel.

## Author 
```
Design and code is completely written by PrebuiltUI and development team. 
```

## License

 - Design and Code is Copyright &copy; <a href="https://prebuiltui.com/?utm_source=genesis" target="_blank">PrebuiltUI</a>
 - Licensed cover under [MIT]
 - Distributed by <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
