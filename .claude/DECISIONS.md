# Decision log — oisinmcgrath.com

Why this site looks and behaves the way it does. `CLAUDE.md` is the working
reference — layout, constraints, conventions, how to deploy. This file is the
reasoning behind it: what we were trying to achieve and why each choice was
made, so someone picking the work up cold does not undo a deliberate decision
thinking it was drift.

Newest sections last. Dates are when the decision was made.

---

## The purpose of the site

**2026-08 — the site is a portfolio that has to argue for its owner.**

Oisin is applying to UWA. The application is being prepared with a separate
agent, and this site is one of the things that application points at. (The
personal circumstances behind the application are not recorded here — they are
not needed to do the work, and this repository is deployed.)

That sets the standard for everything here. The site is not a business card and
it is not a design exercise. It has to **actively and accurately advocate for
the whole portfolio** — every project, technical as well as software, and the
community work alongside them — to a reader who has never met him and is
deciding whether to admit him. Accurately is the operative word: an admissions
reader who finds one inflated claim discounts the rest.

Three things follow, and they run through every decision below.

1. **Nothing is claimed that is not true.** Project pages state their own
   limitations unprompted — NitroTune says the BIOS ignores most of its own
   thermal profiles, YT Downloader says the macOS and Windows paths have never
   been run, the Renault page says which photographs carry burnt-in captions
   from the sale listing. This is deliberate. Someone assessing technical
   judgement learns more from a page that knows what it does not do than from
   one that does not admit to limits.
2. **Breadth is shown, not asserted.** The two card groups on the homepage —
   Software projects and Technical projects — exist so a reader sees at a
   glance that the work is not all of one kind. The community page exists for
   the same reason.
3. **The site is itself part of the evidence.** It is hand-written HTML and
   CSS with no build step, no framework, no package manager, and exactly one
   script on the whole site. A reader who opens the source sees the work. That
   is why the "no JavaScript" rule below is held to even when it costs effort.

**Do not soften the writing into marketing prose.** Plain, specific, and
Australian English. If a sentence could appear on any developer's site, it is
not carrying its weight.

---

## Structure

**2026-08 — two groups of projects, and they are ordered differently on purpose.**

Both the homepage and `projects/index.html` split the list under **Software
projects** and **Technical projects**. Both hold the same entries; the orders
differ. The homepage leads with Home Screen and the Epson scanner because those
are the most immediately legible to a non-specialist. The index still leads
with invoiceNow because it is the most substantial piece of software. This was
raised and left alone deliberately — it is not drift, and a future pass should
not "fix" it.

**2026-08 — the campervan is a project, not a hobby anecdote.**

The Renault Master conversion sits under Technical projects with a large
feature card on the homepage, above the software grid. The reasoning: it is the
clearest available evidence of initiative and self-taught technical ability at
scale — buying an unregistered van, having it inspected and licensed, building
it out, and then driving it 4,400 km to the top of Australia to find out what
was wrong with it. That is a different and harder thing to demonstrate than
another repository.

**2026-08 — the community page is about the club, not about volunteering.**

`community.html` covers the South West Irish Community Group's St Patrick's
Festival in Bunbury. It is written to credit the club and point people at it,
with photographs of the committee and the other volunteers, rather than as a
list of things Oisin did. The three linked marks at the foot — the club's
site, the club's Facebook page, the festival's Facebook page — are there
because the page should be useful to the group, not only to the portfolio.

Note: this page shows identifiable third parties on a public, indexed page.
That was flagged and accepted.

---

## Things deliberately left off the site

- The Western Australian Department of Transport modification permit, the PPSR
  certificate, the registration receipt and the Katherine repair invoice.
  These were offered as evidence for the Renault page and **declined** — they
  carry the VIN, engine number and account numbers.
- Registration and licensing dates for the van. It has been sold; the
  information is no longer relevant and was removed everywhere.

---

## Design decisions

**2026-08 — each project page keeps its own theme.**

The root pages, Capsule, tagdexer and the Epson scanner are light; invoiceNow,
N-of-1, NitroTune, Home Screen and YT Downloader are dark; Cadence has its own
palette; community.html is tinted to the club's green; Renault Master runs a
Pilbara/Goldfields theme. This is not inconsistency. Each page should feel like
the thing it describes, and a reader moving between them should notice that
each was designed rather than templated. **Do not unify them.**

**2026-08 — navigation links are pill buttons with their own marks.**

Every page's `nav.site-nav` renders as buttons — a house for Home, the GitHub
octocat, a book-spine glyph for Projects. The whole nav became buttons rather
than only the Home link, because one button beside plain text links looks
broken. Colours derive from `currentColor` via `color-mix()`, so one identical
CSS block works on all eleven themes. GitHub's mark is the exception and keeps
its own ink — black on light themes, near-white on dark — which is what GitHub
asks for.

LinkedIn's source SVG was 21 kB of redundant path data. It was redrawn as a
handful of shapes, about 330 bytes, and checked against the original
side-by-side before being committed.

**2026-08 — the Renault page is a landscape you scroll down.**

The theme came from one photograph of the red centre, taken on the trip the van
was built for. The whole sky-to-ground descent is a single gradient painted on
`body`, sized to `--descent` and ending on exactly the page background, so
scrolling reads as travelling down that landscape with no seam and no hard edge
anywhere. Earlier versions had a hard horizon line and an abrupt return to
paper; both were rejected. The ground carries the rest of the page — the vivid
dust desaturated and darkened enough to hold a page of reading — and everything
on it is set in cream, not ink.

Two details that were arrived at the hard way and should not be undone:

- A gradient that long **bands visibly** on an 8-bit display. `body::before`
  lays a fine feTurbulence dither over it at about 5%. Remove it and the steps
  come back.
- Tiled radial-gradient dots were tried for the spinifex and read as a regular
  matrix of specks. `desert.svg` replaced them: real clumps drawn as bursts of
  fine spikes, in six golds and olives with darker shrubs among them, placed by
  dart-throwing with a minimum separation. Don't go back to gradients.

**2026-08 — one median.**

Everything on the Renault page is centred on a single axis, so the layout holds
at any screen width rather than drifting with the viewport. Prose, headings and
the photographs set into the narrative all take one shared width; the carousel,
video and galleries take the full column but are centred on the same axis. An
earlier version had paragraphs capped at `68ch` and left-aligned while images
were centred, which put their medians about 90 px apart.

**2026-08 — the carousel has no JavaScript, and that was the point.**

The site's rule is one script sitewide (the Cadence unmute button). The Renault
carousel could have been twenty lines of JS. It is instead radio inputs,
`:has()` and `:target`: constant-rate drift on a track carrying the three
photographs twice over, focus done positionally with a mask rather than by
timing, a `:target` lightbox whose back link leaves the drift running. This
costs more effort than the script would have. It is worth it, because the point
of the site is partly that it is hand-built, and a reader who opens the source
should find that claim holds.

**2026-08 — the text column is wider than the media it contains.**

Three widths on the Renault page, all centred on one axis, and the order is
deliberate: prose and headings take `--measure`, everything visual takes the
narrower `--media`. A heading's first character therefore always sits further
left than the left edge of any photograph or the video, and the media reads as
inset within the reading column rather than bursting out of it. The video was
briefly narrowed to sit *inside* the prose instead; that was reverted — it
made the heading look like a label stuck to something smaller than itself.
The longer line got a slightly larger type size to stay comfortable.

Narrative photographs carry a faint warm glow rather than a drop shadow. On
ground this saturated a shadow reads as weight; the glow separates the
photograph as though it were lit from behind by the earth it sits on.

**2026-08 — the specification table is a card, and it moves slowly.**

The one block of hard numbers on the page, so it is lifted onto its own card
with an outline and a slightly deeper ground. On hover it brightens and rises
six pixels over 0.55 seconds. The duration is the point: fast enough to feel
responsive, slow enough to read as a considered movement rather than a flinch.
Nothing else on the page animates on hover at that length, and it should stay
that way — one moving element is an accent, several are noise.

**2026-08 — the sky is the four sampled tones and nothing else.**

`--sky-zenith` `#0f64d0`, `--sky-mid` `#49a0ff`, `--sky-haze` `#acdcff`,
`--horizon` `#b8dbfe`, in that order down the descent. Intermediate blues had
been invented to smooth the ramp; they made the sky paler and less like the
photograph. The gradient interpolates between the four on its own. Don't add
stops between them.

**2026-08 — glows outward, and no black frames.**

Every photograph and the video carry a warm glow instead of an outline, and
every layer of it has a positive spread, so the light starts at the frame and
falls away into the ground rather than the blur creeping back over the picture.
Black borders were tried on both and read as heavy cut-outs against ground this
saturated.

**2026-08 — the lightbox is a viewer, not a still.**

Opening a carousel photograph now gives arrows either side, the caption, and
the whole set as a strip along the bottom — darkened until hovered, when each
lifts and lights, with the one being viewed left lit. All of it is `:target`
and ordinary links; still no script. The strip shows all five with the current
one marked rather than hiding it, so the row does not reflow as you move
through the set.

**2026-08 — hover animation is done with `filter`, not `background-color`.**

The Van card stalled on first hover and then snapped. Swapping the background
colour forces a repaint the browser cannot start until it has one; `filter:
brightness()` composites on its own, and `will-change` promotes the layer up
front. With both, the movement starts the moment the pointer arrives. It runs
0.9s in each direction.

**Known limitation — the carousel's first arrow click jumps.** The drift is a
CSS animation and CSS cannot read its phase, so the arrows are positioned
relative to a fixed slide, not to whatever happens to be centred. The first
click therefore lands somewhere other than "one along"; every click after it is
correct in both directions. Hovering pauses the drift, which takes the edge off
it. Fixing it properly needs JavaScript, and that trade has been declined —
see the carousel note above.

**2026-08 — the walkthrough previews itself, still without a script.**

`video/teaser.mp4` is a two-second silent loop cut from the walkthrough
(frames 136–156, forward, held, reversed, held), 205 kB. It autoplays muted so
the block reads as film rather than as a still. A link over it targets the
stage, which swaps the loop out for the walkthrough proper.

The handover works because of an autoplay rule rather than in spite of one: the
real video carries `autoplay` but **no** `muted`, so the browser refuses to
start it on page load — an unmuted autoplay needs a user gesture — and permits
it once the click has supplied one. If a browser declines anyway, its poster
and controls are already on screen. **Never add `muted` to that element**: it
would start playing silently behind the loop the moment the page opened.

A GIF was asked about and argued against: three seconds at this size is 5–15 MB
and 256 colours, against ~200 kB for the same clip as H.264.

**2026-08 — the favicon has a ground.**

Asked to crop empty space out of the van mark to make it larger in the tab.
There was none — the artwork already reached all four edges. What it lacked was
mass: a thin outline drawing on transparency disappears at 16 px. It now sits
on a filled sand tile, which is what actually made it read bigger.

**2026-08 — the fit-out sections were stripped back to photographs.**

Everything between the Fit-out heading and Testing it — six section headings and
their descriptive copy — was removed and the galleries merged into one grid,
keeping only the captions. This is a cleared deck, not a finished state: new
narrative is coming for it. Note the Fit-out heading now sits above photographs
that run well past the fit-out (the heater, the alarms, the cab, the service
book); it should be renamed or re-split when that copy arrives.

---

## Working notes

- **Never state anything on a page that is not known to be true.** This has
  gone wrong twice — invented narrative about who did the van's wiring and
  plumbing, and invented colour about what festival setup is like. Both were
  removed. If a fact is not in the source material or has not been confirmed,
  leave it out; do not reason your way to a plausible sentence.
- Copy is the owner's. Fix spelling, apostrophes and clear grammatical errors,
  keep the voice. Do not smooth it into something more conventional.
- Deploying uploads the whole repo root, so nothing that should stay private
  can live in the working tree.
