# oisinmcgrath.com

Static site for oisinmcgrath.com. Hand-written HTML + CSS. **No build step, no
framework, no package manager.** What is in the repo is what ships.

There are exactly **two** scripts on the whole site, both first-party, both a
few lines, and neither makes a network request or sets any storage:

1. `back.js` — the back button carried by every page except the homepage. The
   button's `href` is a real link one level up and works without the script;
   what the script adds is `history.back()` when the referrer is same-origin,
   so a visitor is returned to the page they actually came from.
2. An inline `<script>` at the bottom of `projects/cadence/index.html` that
   unmutes the demo video on click (browsers only autoplay muted video, so the
   sound needs a real user gesture).

Treat that as the ceiling: don't add a third, and don't reach for a script
where HTML and CSS will do. Both carousels, both lightboxes, the theme
switches and the shimmer are CSS.

Deployed to Cloudflare Pages by direct upload from the repo root.

**Read `.claude/DECISIONS.md` before changing anything substantive.** This file covers
what the site is; that one covers *why* — what the site is for, and the
reasoning behind the choices that look odd out of context: the per-page themes,
the deliberately differing project orders, the no-script carousel, the things
left off the site on purpose. Several of them have already been undone once by
mistake.

## What this site is for, right now

It backs a **university application to UWA**. The reader you are writing for is
an admissions officer who has never met Oisin, has a stack of applications, and
will give this site a few minutes. Everything below follows from that:

- **It has to advocate for the whole portfolio, accurately.** Every project,
  technical as well as software, plus the community and music work. Accurately
  is the operative word — an admissions reader who finds one inflated claim
  discounts everything else on the page.
- **The pages are being rewritten from Oisin's own copy, one at a time.** He
  supplies a markdown file with the final prose and square-bracketed markers
  where images go. That prose is **final**: reproduce it verbatim, including
  heading levels and their title case, and diff what you rendered back against
  the source before you ship. Do not improve it, reorder it, or merge in
  sentences from the page you are replacing. If something in it looks wrong,
  say so rather than fixing it.
- **The homepage is triaged, not a catalogue.** Five feature blocks lead, in
  one column at the reading measure — Cross Market Intelligence, the Renault
  Master, invoiceNow, Receipt Manager, Home Screen — and the remaining seven
  projects are equal-weight cards. Do not flatten the features back into the
  grid.
- **Recent direction has been toward hooks over specifications.** The card
  blurbs and page openings are being rewritten as questions and consequences
  ("Could you prove you bought your vacuum cleaner?") rather than feature
  lists. Match that register in anything you draft, and keep it plain and
  Australian.
- **Pages state their own limitations unprompted.** This is deliberate and
  named in `DECISIONS.md`. Someone assessing technical judgement learns more
  from a page that knows what it does not do. Do not quietly drop a limitation
  when rewriting a page — ask.

Still open, as of 2026-09-08: Cross Market Intelligence is unreleased and
nothing on the site says so; `figure.plate` and `.specbox` in the Renault
stylesheet are now unused; the corrected Tagdexer artwork exists only in
this repo, not in the tagdexer repo it came from; and two of the van's
photographs (`ext-01-side.jpg`, `trip-03-ranges.jpg`) have never been
published on any page.

## Layout

    .claude/DECISIONS.md    why the site is the way it is — read this first.
                            Kept under a dot-directory on purpose: deploying
                            uploads the whole repo root, and this file is not
                            for the public.
    index.html              homepage — bio, links, project card grids
    community.html          the South West Irish Community Group and the
                            St Patrick's Festival in Bunbury (root page: it
                            links the root style.css and then retints it green
                            in its own inline <style>)
    community/              nine photographs, the club icon, the club and
                            festival badges, shamrock.svg and facebook.svg
    privacy.html            invoiceNow privacy policy (Google OAuth URL)
    terms.html              invoiceNow terms of use (Google OAuth URL)
    contact.html            the three ways to reach him, and why there is no
                            contact form (no server to send one to)
    music.html              the Oisín Mac Craith YouTube channel — Irish and
                            Scottish folk covers. Linked from the Music
                            feature block on the homepage. **Everything on it
                            is left aligned AND takes the full column**: its
                            inline <style> sets `margin-inline:0` to undo the
                            root stylesheet's centring and `main p{max-width:
                            none}` to drop the 44rem measure, so the prose
                            shares both edges with the channel screenshot.
                            This is the one page on the site whose text is not
                            held to a reading measure — asked for
                            deliberately, and the reason its long paragraph
                            was broken into four. Lines run ~110-130
                            characters at 1707px and ~170 at 2560px, well past
                            the comfortable 60-90. If that ever reads as too
                            wide, the other way to make text and picture agree
                            is to cap `.shot` at 44rem instead.
    music/                  channel.jpg (the channel page) and youtube.png
    site-privacy.html       privacy policy for the website itself (linked from
                            the homepage footer; distinct from the app policies
                            and from the reserved /privacy.html)
    site-terms.html         terms of use for the website itself — deliberately
                            short: the software is licensed separately in each
                            repository — some GPL-2.0-only, some MIT — and that
                            licence is what disclaims warranty
    back.js                 the back button, one of the site's two scripts
    .well-known/security.txt  where to report a security issue. `Expires` must
                            stay in the future — the file is invalid past that
                            date — so bump it when it comes round.
    style.css               shared stylesheet for the root-level pages
    projects/index.html     project index (its own inline layout, theme and
                            button rules — it links the root style.css and then
                            overrides the palette with light-dark())
    projects/logos/         small marks used by the index and homepage cards
    projects/invoicenow/    index/privacy/terms + its own style.css, screenshots
    projects/capsule/       index/privacy/terms + its own style.css, screenshots
    projects/cadence/       index/privacy/terms + its own style.css, demo video
    projects/n-of-1/        index/privacy/terms + its own style.css, screenshots
    projects/epson-rr70w-autofeed/  index only + its own style.css, logo,
                            screenshots
    projects/cross-market-intelligence/  index only + its own style.css, logo,
                            screenshots. Unreleased, so the page carries no
                            download, no repository link and no call to
                            action of any kind — don't add one.
    projects/receipt-manager/  index only + its own style.css, logo, screenshots.
                            Its palette came as a dark and a light column, so
                            every colour is a token — but the page is now
                            **light only** (`color-scheme: light`, no
                            `light-dark()` pairs). It used to follow the OS;
                            in dark mode that put near-black screenshots on a
                            near-black page. See DECISIONS.md, 2026-09-08.
    projects/tagdexer/      index only + its own style.css, logo, screenshots
    projects/nitrotune/     index only + its own style.css, logo, screenshots
    projects/homescreen/    index + privacy + its own style.css, logo, screenshots
    projects/yt-downloader/ index only + its own style.css, logo, screenshots
    projects/renault-master/  index only + its own style.css, favicon.svg and
                            favicon.png, desert.svg (the ground texture),
                            photos/, video/, thumb.jpg — a campervan build,
                            not software
    _archive/               superseded pages and removed features, kept for
                            reference, not published
                            (turned away by `_redirects`). Holds the first
                            tagdexer page, replaced 2026-09.
    _redirects              turns away the working notes listed above, and
                            `_archive/`
    favicon.ico, favicon-512.png, apple-touch-icon.png, profile.jpg

The first four projects publish policy URLs because their apps link to them.
tagdexer, NitroTune, the Epson scanner, Receipt Manager, Cross Market
Intelligence and YT Downloader are tools
with no app-store or OAuth submission behind them, so they are a single index
page each — no privacy.html, no terms.html. The Renault Master page is a build
write-up with no software behind it at all, so the same applies to it.
Home Screen is the exception among the tools: it has a privacy.html because the
Chrome Web Store requires a policy URL for a listing. It has no terms.html,
which the store does not require.
Don't add policy pages to them on the assumption that uniformity is required.

Every directory under `projects/` carries its **own** `style.css`, `favicon.png`
and `logo/logo.png`, plus a mark in `projects/logos/`. Those stylesheets are
independent
copies, not layers over the root one — editing the root `style.css` changes
nothing under `projects/*/`, and vice versa. Check which stylesheet a page links
to before changing styles, and if a change should apply everywhere, make it in
each file deliberately.

Each project theme is different on purpose: the root pages, Capsule, the
Epson scanner, Cross Market Intelligence and Receipt Manager are light;
invoiceNow, N-of-1, NitroTune, Home Screen and
Tagdexer are dark (Tagdexer is navy, accented with the cyan sampled from its
own logo); Cadence has its own palette; Renault Master is light, tinted toward
community.html is light, tinted toward the club's green; Renault Master runs a
Pilbara/Goldfields theme, sampled from one photograph of the red centre. Its
whole sky-to-ground descent is a single gradient painted on `body`, sized to
`--descent` and ending on exactly `--bg`, so scrolling reads as travelling down
the landscape with no seam and no hard edge anywhere. The header paints no
background of its own — it sits in the top of that descent. There are two
descents: the light one runs to bright orange dust, the `prefers-color-scheme:
dark` one to ember on night. A gradient that long bands visibly on an 8-bit
display, so `body::before` lays `--dither` (an inline feTurbulence SVG) over it
at about 5%; remove that and the steps come back. Below the descent the page
does not return to paper: it settles on `--floor`, the vivid dust desaturated
and darkened, and everything on it is set in cream (`--text`, `--heading`), not
ink. `--descent` is tuned so body text begins below the vivid band — raise it
and the prose lands on bright orange with no contrast.

`desert.svg` is the ground: a 1200px tile of spinifex hummocks drawn as bursts
of fine spikes, with darker shrubs and dead grass, placed by dart-throwing with
a minimum separation. Every element is drawn nine times on a 3x3 lattice and
clipped to the tile, so shapes crossing an edge return on the far side and it
repeats seamlessly. Tiled radial-gradient dots were tried first and read as a
regular matrix of specks — don't go back to them.

Prose and headings take `--measure` and are centred, so they share a left edge
and a median; the carousel, video and galleries take the
full `--col` but are centred on the same axis. Note `main p` must set
`margin-block`, not the `margin` shorthand, or it resets `margin-inline: auto`
and the images stop lining up with the text.

The Renault page also carries the site's only carousel, and it is still
**script-free**: radio inputs plus `:has()` for manual control (checking any
radio stops the CSS animation for good), and `:target` for the lightbox, whose
back link points at `#gallery` so dismissing it leaves the rotation running.
The arrows exist as three author-time pairs because plain CSS cannot compute
"the next slide"; only the pair for the current slide is displayed. It drifts at
one constant rate: the track carries the three photographs **three** times over
— nine slides — and slides exactly three slots per cycle on linear timing, so
the loop closes on itself invisibly. Three copies rather than two because the
drift resumes from an arrow's anchor five seconds after a click and has to run
three more slots without reaching the end of the track; with two copies the
later anchors ran off and the right-hand side of the viewport emptied. Focus is positional, not timed — a horizontal mask on `.carviewport`
that is opaque in the middle and 18% at the edges — so whatever passes the
centre is in focus and nothing ever vanishes. The drift starts at -8.3333% (the
second slide centred) rather than at the first, or the left gutter is empty. Apart from the homepage and the projects
index, whose switches default to System, it is the only page that answers to
the OS theme, and it is the only one with a display/body/mono type split (all local stacks — the theme
names Bitter/Inter/IBM Plex Mono, but nothing external may be loaded).
Don't "unify" them.

The page was cut back on 2026-09-08 to the pictures and a long tagline: the
"Where it started", "Getting started", "Collecting the pieces" and "Afterwards"
sections are gone, along with the specifications disclosure, and the four
photographs they carried moved into one gallery headed "The build". "Testing
it" became "On the road" and lost its prose. Only the note about burnt-in sale
captions survives from the old copy. The `figure.plate` and `.specbox` rules in
its stylesheet are consequently unused — left in place rather than pruned, so
say if they should go.

community.html is the one page that overrides a whole palette from an inline
`<style>` rather than from its own stylesheet. Note that the root rules it
overrides need matching specificity — `footer.site-footer a`, not
`.site-footer a` — or the root's blue wins.

## Hard constraints

- **Do not rename or move `/privacy.html` or `/terms.html`.** Those exact URLs
  were submitted to Google for OAuth verification of invoiceNow's Gmail
  integration. Breaking them breaks the verification.
- `/privacy.html` and `/terms.html` are **duplicates** of
  `/projects/invoicenow/privacy.html` and `terms.html`. The legal text is
  identical; only the chrome differs (the root copies use the light root
  `style.css` and root nav; the invoiceNow copies use the dark project
  stylesheet, a back-nav link, and an extra nav entry). **Change a policy in
  both places or not at all** — otherwise the version Google verified drifts
  from the one users read.
- Same "don't move it" rule applies to `/projects/capsule/privacy.html`,
  `/projects/cadence/privacy.html`, `/projects/n-of-1/privacy.html` and their
  `terms.html` siblings — each is a published policy URL for its app. Once the
  Home Screen listing is submitted, `/projects/homescreen/privacy.html` joins
  them: the Chrome Web Store holds that exact URL.
- **No trackers, analytics, ad cookies, external fonts, or CDNs.** The homepage
  states this explicitly ("no tracking, no analytics, and no advertising
  cookies"), and the privacy policies rely on it. Everything must be self-hosted
  and first-party.
- Policy pages make specific legal claims about each app (local-only data, no
  backend server, Google Limited Use compliance for invoiceNow, GPL licensing,
  and for Cadence the keyboard-reading and virtual-input permissions). Don't
  reword those claims for style; they need to stay true and consistent with the
  actual applications.

## Conventions

- `lang="en-AU"` almost everywhere; the Capsule and Cadence index pages use
  `lang="en"`. Their policy pages are still `en-AU`.
- Page skeleton: `.wrap` > `header.site-header` (h1 + `.tagline` + `nav.site-nav`)
  > `main` > `footer.site-footer`. The current page's nav link gets
  `aria-current="page"`.
- Every page except the homepage puts a back **button** above the header — a
  `nav.backnav` containing `a.backbtn[data-back]` with an inline SVG left-arrow
  and the word Back. Its `href` is a genuine link one level up; `back.js`
  upgrades it to `history.back()` when you arrived from elsewhere on the site.
  The `.backbtn` block sits at the foot of every stylesheet and derives its
  colours from `currentColor`, like the nav pills, so one block serves all
  eleven themes. Keep the SVG inline; no icon fonts or sprite files.
- The links in `nav.site-nav` render as pill buttons, each prefixed with an
  inline SVG mark: a house for Home, the GitHub octocat, a book-spine glyph for
  Projects. The pill's border and background are `color-mix()` on
  `currentColor`, so the identical CSS block sits at the foot of every project
  stylesheet and picks up whatever palette that page has — don't restate it per
  theme. The one exception is the GitHub mark, which keeps its own ink
  (`nav.site-nav .ico-gh`): `#24292f` on the light themes, `#eef1f5` on the dark
  ones, per GitHub's own guidance. The homepage repeats the pattern in its own
  `<style>` for the three `.links` buttons, where LinkedIn keeps `#2b65ab`, and
  suffixes its headings with marks of their own (`.hicon`): a spanner on
  Technical projects, a CPU on Software projects, a chain link on Links.
  Those three homepage buttons also carry a shimmer: a raked highlight on
  `.links a::after` crosses GitHub, then LinkedIn, then Projects, and hands
  straight back to GitHub. The band is a fixed 1.5rem of background moved with
  `background-position-x` rather than a fraction of the button, so it is the
  same breadth on all three; a percentage there resolves against the button
  width minus the band, so `-1.5rem` to `calc(100% + 1.5rem)` always crosses
  the button exactly, whatever the label measures. Equal speed over unequal
  widths means unequal times, which CSS cannot derive, so the three share one
  3.84s cycle and each has its own end stop (50.4%, 40.1%, 20%) authored from
  its measured width at 182px per second. Delays (0, 1.802s, 3.209s) are
  spaced by the time the bright core takes to cross each button, not the whole
  sweep, so the handover has nothing dead in it. The band sits at `opacity:.5`. It is
  suppressed under `prefers-reduced-motion`.
- Class vocabulary in the root `style.css`: `.wrap`, `.lead`, `.card`, `.links`,
  `.meta`, `.notice`, `.mono`. Project stylesheets share most of that and add a
  few of their own (`.shot`, `.figure`, `.demo-*`, `.beats`). Reuse what is
  there rather than inventing new names.
- Small page-specific tweaks are done with an inline `<style>` block in `<head>`
  (see `index.html`'s avatar and `.projcard` rules, `projects/index.html`'s
  layout overrides, and the `.backnav` rules on project pages). That's the
  established pattern for one-off adjustments — keep genuinely shared rules in
  the relevant stylesheet.
- Australian English, plain prose, sentence-style headings.
- Accessibility matters here: keep `alt` text, `aria-labelledby` on cards,
  `aria-label` on nav, `aria-hidden` on decorative SVGs, and the
  `:focus-visible` outlines intact.
- Adding a project means several things, not one: the directory with its own
  stylesheet (and policies, if the app publishes policy URLs), a `favicon.png`
  and `logo/logo.png`, a mark in `projects/logos/`, a row in
  `projects/index.html`, and a `.projcard` in the homepage grid.
- `projects/index.html` lists twelve projects under two headings: **Software
  projects** (eleven) and **Technical projects** (the campervan), leading with
  invoiceNow. Every link on it is a button: each project is a `.projbtn` pill
  carrying its own mark, and the four apps that publish policies carry
  `.ptbtn` pills for Privacy and Terms beside the description. The campervan
  row uses `renault-master/favicon.svg` as its mark rather than the mark in
  `projects/logos/`. It carries the same three-way theme switch as the
  homepage, built the same way (`color-scheme` plus `light-dark()` under an
  `@supports` guard), and defaults to System.
- **The homepage is triaged, not a uniform grid.** Five `.feature` blocks come
  first, in one column, in this order: Cross Market Intelligence, the Renault
  Master, invoiceNow, Receipt Manager, Home Screen. invoiceNow and Receipt
  Manager stay adjacent because they are two halves of one problem. Each has
  a heading carrying the
  project's own mark, a paragraph, one screenshot with a caption, and a pill
  CTA; the screenshot itself links through to the page and lifts on hover.
  They sit on their own tinted ground in their project's accents (CMI's blue
  and orange, the van's red, invoiceNow's teal, Receipt Manager's blue, Home
  Screen's steel blue) so a reader can see they are not one of the equal
  things below. Note `.feature figure img`, scoped on purpose: unscoped, it
  also matches the mark in the heading and blows it up to the full width of
  the block.
- **Five feature thumbnails cross-fade.** `.fader` stacks two or three
  captures absolutely in one frame; the **first is the base and never
  animates**, and the layers above fade in over it in turn. That is what makes
  the loop close: the topmost fades out at the end of the cycle onto a base
  that is always fully opaque, so there is never a frame with nothing behind
  it. Each layer also holds `opacity:1` until the layer above has finished
  fading in, then drops to 0 while hidden behind it — fading a lower layer out
  while it is still visible would show the base mid-transition. Both keyframe
  sets are hand-authored; check the arithmetic against the cycle before
  changing either. The van is weighted deliberately: the side-door interior
  holds 3s and the other two about 1.5s each, on a 6s cycle. CMI uses the same
  6s weighting; invoiceNow has two on a 4.5s cycle, same weighting; Music and
  Community each run five on a 9s cycle, base 3s then 1.5s each (keyframes
  `m2`-`m5`; Music runs six on a 10.5s cycle, keyframes `n2`-`n6`). Community
  keeps the 3:2 frame it had as a static card and uses
  `contain`: its lead photograph ("Colours on.") is natively 3:2 so it fills
  the frame exactly and the card looks unchanged, while the other four run
  0.75 to 2.22 and would lose half a height or a third of a width to `cover`.
  Its four extra photographs are the same files the community page shows, and
  **the captions stay on that page only** — the card carries none.
  **Every layer paints `var(--cardbg)` behind itself.** Without that a
  `contain` layer is transparent wherever it is letterboxed and the image
  *below it in the stack* shows through down the edges — it happened on the
  Upcoming Auctions and BAS captures and is not obvious until you look. Each
  feature exposes its own ground as `--cardbg` for this. Suppressed under
  `prefers-reduced-motion`, which leaves the base showing — a still, not a
  blank frame. The van's three share a 3:2 frame with `object-fit:cover`; the
  two screenshot faders use `contain` against their own near-black, because
  cropping a UI capture loses content and a letterbox bar in the same
  near-black cannot be seen. Music's five photographs run 0.75 to 1.42, so it
  takes a 5:4 frame with `cover` and a per-image `object-position` — every
  anchor was picked against a rendered crop sheet, and every face sits in the
  upper half of every shot. Its sixth layer, a 16:9 multitrack still, is the
  exception and uses `contain` — `cover` would cut 15% off each side and take
  two of the montage's four panels with it.
  **Scope the whole `animation` shorthand, not just `animation-name`, when
  adding a layer count.** `.fade4` and `.fade5` take their duration from a
  `.five`-scoped rule, so the first `.six` pass set only a name on them and
  they sat at the initial 0s duration — two of the six images never appeared
  at all, and nothing else looked wrong. Step the cycle and check each layer
  actually runs. The fader rules are scoped through `.feature` so
  they out-specify `.feature figure img`.
- **A feature block IS an anchor** — with one exception, Music. `<a class="feature f-x" href="…"
  aria-label="…">` wrapping the heading, prose, figure and pill — the same
  construction `.projcard` uses. The pill inside is a `<span class="featbtn">`,
  not a link, so there is nothing to nest. An earlier version kept `<section>`
  and stretched a transparent `::after` from the button over the card; it
  hit-tested correctly everywhere it was measured and still did not behave as
  a link for Oisin, so it was replaced with the construction that has never
  been in doubt. **Do not put a second anchor inside a feature block** — the
  screenshot must not be wrapped in one.
- **Music is the exception and is a `<section>`.** It carries two destinations
  — the music page and the YouTube channel — so a card-wide click would have
  no single answer. Both pills are real `<a class="featbtn">` links there,
  stacked and centred by `.featmore` (a flex column). The consequence, and it
  was flagged: that one card is not clickable as a whole. Every other card is.
  `.featbtn` styles a `<span>` and an `<a>` identically. The focus ring is on
  `.feature:focus-visible`, and `body a.feature{color:inherit;
  text-decoration:none}` stops the card taking link ink.
- The call-through is a **filled** pill: `--cta`, defined once per block, with
  white ink. It is a single value rather than a `light-dark()` pair — white
  ink needs a dark enough fill in either scheme, and a brand colour that
  shifted between themes would stop reading as the project's own. `.featmore`
  takes `margin:auto auto .25rem` — `auto` on top pins it to the foot of the
  card so the pair's two buttons line up, and `auto` inline keeps it centred.
  **A `margin: auto 0 …` shorthand there silently un-centres it**, because the
  wide-screen block gives `.feature p` a 44rem measure and `.featmore` is a
  `<p>`. That has already been wrong once.
- **Every feature block holds the 44rem reading measure, at every width, and
  everything inside it shares that width.** The blocks used to take the full
  column while their prose kept the measure, which gave each card three
  different left edges — heading against the padding, prose inset and centred,
  screenshot running the full width. It looked wrong and was called out. Now
  heading, prose and screenshot start and end on the same two lines; measured
  aligned at 375, 768, 1280, 1707 and 2560px. The extra width on a wide screen
  goes to the project grid and to the project pages' pictures, not to these.
- Note `.feature p:not(.featmore){max-width:none;margin-inline:0}`. The card is
  a column flex container, and **a flex item with auto inline margins is sized
  to fit its content rather than stretched** — so `main p`'s `margin-inline:
  auto` made every blurb as wide as its own longest line, a few pixels
  narrower than the card and a different few on each block. `.featmore` keeps
  its autos: they are what pin it to the foot of the card.
- `hr.featrule` separates the showcase blocks, including between invoiceNow and
  Receipt Manager.
- Feature thumbnails, all deliberate: CMI takes `auction-target.png` (the
  comparison page, not the inventory), the van takes `hero-gopro.jpg` —
  "Looking inside through the side door." — and Receipt Manager takes its own
  `screenshots/thumbnail.png`.
- The Music card is **deep red** (`--cta:#b71c1c`), not the golden brown it
  started as — a YouTube register rather than a folk one. Both photographs
  keep their green outlines, which was asked for separately and now reads as
  a deliberate contrast rather than a match.
- Pill labels are **"See more about X"** across every feature card, and the
  van's is simply "See more" — its `aria-label` still names the project, so
  the accessible name is not a run of identical links. The `.projcard` tiles
  in the grid below still say "Read more"; they were not part of that change.
- Music outlines its slideshow in the card's own red
  (`light-dark(#b71c1c,#d4544c)`) and Community keeps the club's green. They
  were briefly both green, from when Music was brown and the pair matched.
- **No feature card carries a `figcaption` any more** — they came off one at a
  time, Cross Market Intelligence last. The heading and blurb already say what
  the picture is, and the three cards whose thumbnails cycle were describing a
  frame that had already changed. The project pages keep all of theirs.
- `.moreaims summary` carries `margin-left:2.75rem` (1.6rem below 480px) so
  the disclosure pill sits on the list's own content edge, under the bullets
  it extends rather than under the line introducing them. Set on the summary,
  not the `<details>`, or the nested list indents twice.
- The last `hr.featrule` carries `.wide` (`max-width:none`): it is the break
  between the feature column and the project grid, not a divider between two
  like things, so it spans the whole column.
- **Music and Community are feature blocks too.** They were `.topiccard`
  sections at the foot of the page; they are now `.feature f-music` and
  `.feature f-comm`, full width like the other five, sitting directly under
  Home Screen with the project grid below them. So the page carries **seven
  identical blocks**. They were briefly set two abreast and that was reverted:
  half-width cards shrank the photographs below the size they had as topic
  cards, and two 44rem cards cannot sit side by side inside a 44rem measure.
  Both photographs take a shared 3:2 frame, the proportion the van's
  photograph already has — the community shot is natively 3:2 so nothing is
  cropped from it, and the music shot is anchored at `50% 8%` because it is
  nearly square and a centred crop takes the players' heads off, which is why
  it was left uncropped when it stood alone. Their blurbs lost their inline
  "see more" links — the card is the link now, and an anchor inside an anchor
  is invalid.
- The seven remaining projects are `.projcard` tiles in one grid under a
  single **"Other Projects"** heading (`.gridheading`). It takes the column
  rather than the reading measure, so it shares a left edge with the grid it
  introduces rather than with the feature cards above. The old
  Software/Technical split is still gone — this is one heading, not two.
  The order is deliberate: Tagdexer, Cadence, Capsule, Epson RR-70W,
  NitroTune, N-of-1, YT Downloader. `projects/index.html` still carries its
  own headings and its own order; the difference is deliberate.
- The bio shows two bullets and folds the other five into a `<details>` labelled
  "See 5 more" — no script, like the specifications box on the Renault
  page. On wide screens the chip takes the same 44rem measure as the list it
  extends, so the two share a left edge. `.moreaims[open] > summary` is
  `display:none`, so once opened the pill goes rather than sitting between the
  two bullets and the other five and cutting one list in half. **The trade:
  there is then nothing to click to close it, so opening is one-way until a
  reload.** That was asked for explicitly.
- **Body text on the product pages sits on a `.prose` card.** Cross Market
  Intelligence, Receipt Manager, invoiceNow and Home Screen wrap each run of
  consecutive prose in `<div class="prose">`; the Renault page uses the same
  class for its introduction. The card is *lighter* than the page on every
  theme — the page is the mid tone, cards go up, screenshots go down. The
  reason is that the reading measure is far narrower than the screenshots
  either side of it, and unhoused the prose read as a stranded ribbon down
  the middle of a wide column. In the wide-screen block `.prose` takes 47rem
  (44rem of text plus its own padding) and `.prose p` has its 44rem cap
  removed, or the paragraph would overflow the card's padding.
- **Policy links live in the footer, not the nav.** invoiceNow, Capsule,
  Cadence, N-of-1 and Home Screen used to carry "Privacy policy" and "Terms
  of use" as nav pills under the logo; they are footer hyperlinks now. The
  URLs themselves have not moved and must not — see the hard constraints.
  Home Screen had no footer policy link before this and gained one, because
  the Chrome Web Store holds that exact URL.
- **The project mark is a prefix to the `h1`, not a block under it.** All
  eleven project pages that carry a logo put it inside the heading at `1.5em`,
  with `alt=""` since the heading names the project. Standing on its own it
  cost roughly 160px at the top of every page and pushed the first screenshot
  below the fold. The rule sits near the foot of each project stylesheet and
  overrides the older `header.site-header img.logo` block further up; N-of-1
  additionally restores a proportional `border-radius:18%`, because its own
  rule set 22px, which on a 24px mark is a circle.
- **Screenshots open at full size.** On every project page, each `img.shot` is
  wrapped in an `a.shotlink` pointing at its own file — the captures are
  denser than any column can show them, so the image is the way in and the
  browser's Back returns to the page. `.shotlink` sits near the foot of each
  project stylesheet (zoom-in cursor, accent border on hover). The Renault
  galleries already worked this way. CMI's two phone captures are capped at
  24rem each so a wide monitor cannot blow them up past the capture's own
  resolution and blur them.
- The Links card sits at the **foot** of the page, after the project grid.
- **The `margin` shorthand has now silently broken centring four times on this
  site.** Any rule that sets `margin` on an element the wide-screen block gives
  a measure to — `main p`, `main ul`, `main ol` — resets `margin-inline` to 0
  and pins that element to the left edge, and a class selector beats `main p`
  on specificity so ordering does not save you. Confirmed victims: the
  homepage cards, `.featmore`, N-of-1's `.beats p` (183px off centre) and
  community.html's `.photos` / `.support` (183px, and they should have been
  full-width media anyway). Write `margin: X auto Y`, or set `margin-inline`
  separately. There is a browser sweep for this in the decision log's entry.
- The featured-project carousel that used to sit under a Technical projects
  heading is gone from the live page. Its markup and CSS are kept in
  `_archive/homepage-carousel/`, which `_redirects` turns away.
- `.commshot` is the linked photograph under the Community subheading. The
  carousel, `.featcard` and `.commshot` are all defined in the homepage's own
  inline `<style>`.
- The homepage carries a three-way theme switch — Dark, System, Light — as
  three radio buttons in the nav row, with System checked by default. It is
  still script-free. `color-scheme` on `<html>` is `light dark` for System and
  is pinned by `html:has(#t-dark:checked)` / `html:has(#t-light:checked)` for
  the other two, and every colour on the page is written once as
  `light-dark(light, dark)` rather than as a light rule plus a parallel dark
  override. Those declarations sit inside an `@supports (color:light-dark(...))`
  guard and carry a `body` prefix so they out-specify `style.css` and the card
  rules further down the file; on a browser without `light-dark()` they are
  dropped and the light theme shows through. Everything is scoped to this
  page's own markup, so community, privacy and terms — which share the root
  stylesheet — are unaffected. The radios carry `autocomplete="off"`, because
  a browser otherwise restores the checked one on reload and the choice looks
  persistent while nothing is stored. It does not persist; making it persist
  needs JavaScript.

- **Every stylesheet ends with a wide-screen block, and they must stay in
  step.** `.wrap` is 42rem by default, which on a 27-inch monitor left the
  whole site in a narrow ribbon down the middle. Above 1280 CSS pixels the root
  font size rises to 17px and the column to `min(92vw, 68rem)`; above 1800px,
  18px and 76rem; above 2400px, 19px and 84rem. Everything is sized in rem, so
  one number moves type, spacing, column and screenshots together, and the
  `92vw` term means the column tracks the window rather than stopping at a
  fixed size. Prose does not grow all the way with it: `main p`, `main ul`,
  `main ol`, `.card` and `.notice` all take a 44rem measure and centre, so the
  page has two widths — one for reading, one for pictures — and the extra
  width goes to screenshots, figures and the project grid.
  The Renault page gets only the root-size part: it already splits `--measure`
  from `--col` and needs no column work.
- **The homepage repeats those measure rules for its own classes, and that
  block must stay at the very end of the last inline `<style>`.** `.linkcard`,
  `.topiccard` and `.leadlist` set `margin` as a shorthand, which resets
  `margin-inline` to 0. At equal specificity the later declaration wins, so a
  wide-screen block placed above them is silently undone and every card sits
  hard against the left edge. This has already happened once.
- The homepage avatar is 140px and absolutely positioned to the right of the
  header on desktop. Below 600px it becomes 96px, static, centred, and ordered
  after the name — and it must also set `transform: none`. The desktop rule
  centres it vertically with `top:50%` plus `translateY(-50%)`; `position:
  static` cancels the `top` but **not** the transform, which then hauls the
  photograph half its own height off the top of the page and crops it. The
  header also drops its 160px `min-height` there, which exists only to make
  room for the absolute avatar.

## Media

`projects/renault-master/video/walkthrough.mp4` is an 8.6 MB self-hosted
walkthrough with a `<p>` download fallback. It has controls, does **not**
autoplay and carries no `muted` attribute, so it plays with sound the moment
the viewer presses play — and it needs no script. Its `poster.jpg` has a large
play button composited into the image, because Chrome draws only the small
control-bar button over a poster and nothing but a script could add one.

`video/teaser.mp4` is a 205 kB silent loop that autoplays in the same frame and
is swapped out for the walkthrough by a `:target` on `.stage`. The walkthrough itself carries
**neither** `autoplay` nor `muted`, and must not: `autoplay` alone let Chrome's
media engagement score start it aloud on page load, and `muted` would start it
silently behind the loop. The visitor presses play. Cloudflare Pages
caps a single asset at 25 MB, which is the ceiling for anything added here.

`projects/cadence/demo.mp4` is a ~2 MB self-hosted screen recording with a
`demo-poster.jpg` still and a `<p>` fallback offering the file for download. It
autoplays muted and loops; the unmute button described above is the only
JavaScript on the site. N-of-1 ships PNG screenshots in
`projects/n-of-1/screenshots/`. The Renault Master page carries 31 JPEGs in
`photos/` (7.6 MB total) and `community/` holds nine photographs plus four
marks. Keep media self-hosted, compressed, and modest — there is no CDN behind this.

## Making a change, start to finish

There is no branch workflow and no PR: **work on `main` and commit every
change.** The standing instruction is to push and deploy each change without
asking, and to report only once both are done.

    # 1. make the edit

    # 2. serve and check it — never judge a layout by eye alone
    python3 -m http.server 8000
    # then measure: element widths, whether things are centred, contrast
    # ratios, and that nothing overflows at 375px. Several faults on this site
    # were invisible until measured, and one was invisible because the browser
    # was serving cached CSS.

    # 3. commit
    git add -A && git commit -m "…"

    # 4. push
    git push

    # 5. deploy
    npx wrangler pages deploy . --project-name=oisinmcgrath

    # 6. verify the live site, not the local copy
    curl -s -o /dev/null -w '%{http_code}\n' https://oisinmcgrath.com/the/page/

Cloudflare serves `/foo.html` as a 308 redirect to `/foo`, so `curl` without
`-L` on an `.html` URL returns 308, not 404 — follow the redirect before
concluding a page is missing.

**Commit messages**: no `Co-Authored-By:` trailer, no "Generated with Claude
Code" line, no attribution of any kind. Say what changed and why, in prose.

## Deploy

    npx wrangler pages deploy . --project-name=oisinmcgrath

`.wrangler/` and `node_modules/` are local scratch and are gitignored. Deploying
uploads the whole repo root — don't leave stray files lying around that
shouldn't be public. `_redirects` turns away this file, `.claude/`, `README.md`
and everything under `_archive/`, so those are in the repo but not reachable on
the live site.

## Checking changes

No test suite, and no framework to lean on — so **measure, don't eyeball**.
Serve the directory (`python3 -m http.server`) rather than opening `file://`:
root-relative links (`/projects/`, `/profile.jpg`) only resolve when served.

Check every page at **375px and at 1707px or wider**. The site is responsive in
both directions now: below 480px there are padding and h1 breakpoints, at 600px
the homepage avatar changes, and above 1280px the root font size and the column
both step up (see the wide-screen block at the foot of every stylesheet). A
change that looks right at one width is routinely wrong at the other.

Worth measuring specifically, because each of these has been wrong at least
once here:

- **Widths and centring** — `getBoundingClientRect()` on the element and on
  `.wrap`, compared against `document.documentElement.clientWidth` (not
  `innerWidth`, which includes the scrollbar).
- **Horizontal overflow** — `document.documentElement.scrollWidth <=
  clientWidth`. Elements inside the Renault carousel legitimately extend past
  the viewport; it clips them.
- **Contrast** — compute the ratio rather than trusting a palette. AA wants
  4.5:1 for body text.
- **Verbatim prose** — extract the rendered `<p>`/`<h2>` text and diff it
  against the markdown source, block by block.
- **Images actually loading** — a `getBoundingClientRect()` of 2x2 means the
  image has not decoded yet, not that the CSS is wrong.

For the Cadence page, also click the unmute button and confirm it hides itself.

**Cached CSS will lie to you.** After deploying, a browser that already has the
old stylesheet will render the old layout, which looks exactly like a bug you
did not fix. Compare `curl`'s copy of the stylesheet against the local file
before believing a report that a fix did not work.
