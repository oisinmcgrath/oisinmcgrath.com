# oisinmcgrath.com

Source for [oisinmcgrath.com](https://oisinmcgrath.com) — a personal site and the
public home of my projects' privacy policies and terms.

Hand-written HTML and CSS. No build step, no framework, no package manager, no
dependencies. What is in the repo is exactly what ships. There is one inline
script on the entire site: a button on the Cadence page that unmutes the demo
video, because browsers only autoplay muted video. It makes no network requests
and sets no storage.

No trackers, no analytics, no advertising cookies, no external fonts and no
CDNs. Everything is self-hosted and first-party — the privacy policies published
here depend on that being true.

## Layout

    index.html              homepage — bio, links, project cards
    privacy.html            invoiceNow privacy policy  ─┐ registered with Google
    terms.html              invoiceNow terms of use    ─┘ for OAuth verification
    style.css               stylesheet for the root-level pages
    projects/index.html     project index
    projects/logos/         project marks
    projects/invoicenow/    invoiceNow — page, policies, own stylesheet
    projects/capsule/       Capsule — page, policies, own stylesheet
    projects/cadence/       Cadence — page, policies, demo video, own stylesheet
    projects/n-of-1/        N-of-1 — page, policies, screenshots, own stylesheet
    projects/epson-rr70w-autofeed/  Epson RR-70W scanner — page, own stylesheet
    projects/tagdexer/      tagdexer — page, own stylesheet
    projects/nitrotune/     NitroTune — page, own stylesheet

Each project directory carries its own `style.css`. They are independent copies,
not layers over the root stylesheet, and the themes differ on purpose. The four
apps that publish policy URLs have `privacy.html` and `terms.html`; the three
developer tools are a single page each.

## The two policy pairs

`/privacy.html` and `/terms.html` are the URLs submitted to Google for OAuth
verification of invoiceNow's Gmail integration. **They must not be renamed,
moved or deleted.**

They duplicate `/projects/invoicenow/privacy.html` and `terms.html`, which are
the copies linked from the site's own navigation. The legal text is identical;
only the surrounding page chrome differs. **Both pairs must be kept in sync** —
if you change a policy, change it in both places, or the version Google verified
drifts from the version users actually read.

The other projects' policy URLs (`/projects/capsule/`, `/projects/cadence/`,
`/projects/n-of-1/`) are published from inside their apps and are equally fixed.

## Running it locally

    python3 -m http.server

Then open <http://localhost:8000>. A plain `file://` open works for most pages,
but root-relative links (`/projects/`, `/profile.jpg`) only resolve when served.
Check both desktop and narrow (<480px) widths.

## Deploy

Cloudflare Pages, by direct upload from the repo root:

    npx wrangler pages deploy . --project-name=oisinmcgrath

## Projects linked from here

- **invoiceNow** — desktop invoicing for Australian sole traders, with Gmail send
- **Capsule** — sandboxed dev containers for running AI coding agents safely
- **Cadence** — offline hold-to-talk dictation for Linux
- **N-of-1** — offline health tracker for Android, Linux and Windows
- **Epson RR-70W batch scanner** — driver-free batch scanning on Linux
- **tagdexer** — tag-based code navigation and decision logging for any repo
- **NitroTune** — fan and thermal control for the Acer Nitro AN515-55 on Linux
