# oisinmcgrath.com

Static source for oisinmcgrath.com. No build step; deployed to Cloudflare Pages by direct upload.

- `/` — homepage
- `/privacy.html`, `/terms.html` — invoiceNow policies (URLs submitted for Google OAuth verification; do not rename or move)
- `/projects/` — project index
- `/projects/capsule/` — Capsule pages and policies

## Deploy

    npx wrangler pages deploy . --project-name=oisinmcgrath
