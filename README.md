# oisinmcgrath.com

Static source for oisinmcgrath.com. No build step; deployed to Cloudflare Pages by direct upload.

- `/` — homepage
- `/privacy.html`, `/terms.html` — invoiceNow policies at the URLs registered in the
  Google Cloud console. **Do not rename, move, or delete** — Google verification points
  here. These are duplicates of `/projects/invoicenow/privacy.html` and `terms.html`,
  which are the copies linked from the site's own navigation. **Both pairs must be kept
  in sync**: if you change a policy, change it in both places, or the version Google
  verified will drift from the one users read.
- `/projects/` — project index
- `/projects/capsule/` — Capsule pages and policies
- `/projects/cadence/` — Cadence pages and policies
- `/projects/invoicenow/` — invoiceNow page and policies (current OAuth URLs)

## Deploy

    npx wrangler pages deploy . --project-name=oisinmcgrath
