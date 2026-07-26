# oisinmcgrath.com

Static source for oisinmcgrath.com. No build step; deployed to Cloudflare Pages by direct upload.

- `/` — homepage
- `/privacy.html`, `/terms.html` — **superseded** invoiceNow policies. These were the
  URLs originally submitted for Google OAuth verification. The live copies now live at
  `/projects/invoicenow/`. Keep these two files until the Google Cloud console links are
  updated and re-verification is approved — if Google re-checks them and they 404,
  verification fails. Safe to delete after that.
- `/projects/` — project index
- `/projects/capsule/` — Capsule pages and policies
- `/projects/cadence/` — Cadence pages and policies
- `/projects/invoicenow/` — invoiceNow page and policies (current OAuth URLs)

## Deploy

    npx wrangler pages deploy . --project-name=oisinmcgrath
