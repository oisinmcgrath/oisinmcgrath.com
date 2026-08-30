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

The full set of colours sampled from the photograph is recorded as custom
properties at the top of the stylesheet. Not all of them are referenced by a
rule; they are kept as the record of what was sampled.

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
and ordinary links; still no script. The strip shows every photograph with the
current one marked rather than hiding it, so the row does not reflow as you
move through the set.

**2026-08 — hover animation is done with `filter`, not `background-color`.**

The Van card stalled on first hover and then snapped. Swapping the background
colour forces a repaint the browser cannot start until it has one; `filter:
brightness()` composites on its own, and `will-change` promotes the layer up
front. With both, the movement starts the moment the pointer arrives. It runs
0.9s in each direction.

**Known limitation — arrow clicks jump.** The drift is a CSS animation and CSS
cannot read its phase, so the arrows are anchored to fixed slides rather than
to whatever is centred. A click made after the drift has moved on lands
somewhere other than "one along". This applies to both carousels. Fixing it
properly needs JavaScript, and that trade has been declined — see the carousel
note above.

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

**2026-08 — the homepage theme switch is a checkbox.**

Light and dark on `index.html`, from an `<input type="checkbox">` and
`body:has(#theme:checked)`. No script, in keeping with the rest of the site.
Every override is scoped to that `:has()` so the other pages sharing the root
stylesheet — community, privacy, terms — are untouched.

**The trade this makes: the choice does not persist.** A reload returns to
light, and it does not carry to the project pages. Making it stick needs
`localStorage` and therefore JavaScript, which would be the site's second
script. That has been raised and left as is for now; if it is ever wanted, note
that the honest version also reads `prefers-color-scheme` for its default.

Default is light because that is what the page has always been; the toggle
means "give me the dark one", not "invert whatever the OS says", which keeps
the sun and moon labels truthful.

**2026-08 — `autoplay` came off the walkthrough, and must stay off.**

The video briefly carried `autoplay` without `muted`, on the reasoning that an
unmuted autoplay needs a user gesture and therefore could not fire on page
load. That reasoning was wrong in practice: Chrome's media engagement score
grants exactly that permission on a site the visitor has used before, and the
walkthrough started playing aloud the moment the page opened for anyone who
had been to the site.

So the teaser hands over to a video that is simply sitting there with its
poster and controls, and the visitor presses play. That is one extra click,
and it is the right price. **Do not put `autoplay` back on that element**, and
do not "fix" the extra click by adding `muted` either — that starts it playing
silently behind the loop.

**2026-08 (superseded below) — the favicon is a side profile on a filled tile.**

The front-view van was measured at 16 px and found to collapse into noise: a
front view is mostly fine horizontal lines, and those die first. A side profile
drawn as one solid silhouette survives, because the proportions do the
identifying — tall box, short nose, two wheels — and there is no interior
detail to blur. The filled tile is what gives it mass in a tab strip; it also
makes the icon legible on a light or a dark browser chrome without needing a
`prefers-color-scheme` block inside the SVG.

**2026-08 — the video swap is a checkbox, not `:target`.**

Clicking the loop used to set a `#watch` fragment. A fragment stays in the
address bar, so reloading the page came back with the loop already swapped out
and the walkthrough's poster showing — it looked as though the loop had
stopped working. It is now a checkbox with `autocomplete="off"`, which the
browser does not restore either. Every load starts on the loop.

**2026-08 — the carousel keeps moving, and comes back on its own.**

(The Renault carousel held five photographs when this was written; it holds
three now, and the geometry in the stylesheet is sized for three.)

Hovering no longer pauses it: only an arrow click stops it, and then only for
five seconds, after which the drift picks up again from exactly where that
photograph sits. There is no timer and no script — the resumed drift is an
animation with a five-second delay, and during a delay an element keeps its own
transform. Each slide needs its own `@keyframes` because the resumed drift has
to begin at that slide's offset.

The consequence, accepted: because it always returns to drifting, the arrows
are always anchored to a fixed slide rather than to whatever is centred, so a
click after the drift has moved on will jump. That is the same limitation noted
above and still needs JavaScript to fix properly.

**2026-08 — the specifications fold away.**

A native `<details>`, closed by default, reading "Van Specifications", moved up
next to the paragraph about buying the van. Closed it is a button and carries
the card's brighten-and-rise; open it is the card it always was. The chevron is
two CSS borders rotated, so one arrow costs no icon file.

**Note on favicons:** browsers cache them harder than anything else on a page,
and a hard refresh does not always clear them. The `<link>` hrefs carry a `?v=`
query for that reason — bump it when the icon changes.

**2026-08 — the favicon lost its tile.**

Supersedes the tile decision above. The van is now drawn in saturated
`#fb6231` on transparency, with the viewBox cropped to the artwork's measured
bounding box. It is more legible than the tile version because the drawing
itself is bigger and nothing competes with it, and the saturated orange reads
on light and on dark browser chrome without a backdrop.

The trade, and it is a real one: the van is roughly 2:1, so cropped tight it
can only ever fill about half a square favicon box — 16 px wide by about 8 tall.
The tile filled the whole square but made the drawing smaller. If the full
square is ever wanted back, the answer is not a tile but a squarer crop of the
van — the cab and front wheel — rather than the whole vehicle.

**2026-08 — the homepage feature card became a carousel.**

Same construction as the Renault page's: a track carrying the cards twice over,
one constant rate, focus by mask, five-second hold on a radio then the drift
resumes. It holds the Renault build and Home Screen for now.

Note the mismatch this creates: the carousel sits under the **Technical
projects** heading but Home Screen is software. That heading wants rethinking
as more cards go in — it is a featured-work carousel now, not a category.

Community moved under a new **What else drives me** heading as an `h3`
subsection. Music is to join it there; it has not been built.

**2026-08-31 — the homepage switch became three-way, and System is the default.**

Dark, System and Light, as three radio buttons in the nav row, replacing the
two-state checkbox. System is checked on arrival, so a visitor whose machine is
in dark mode now lands on a dark page instead of a bright one.

This resolves the awkwardness the checkbox had: a two-state switch that also
followed the operating system could only mean "invert whatever my system says",
which makes the sun and moon labels lie half the time. A third position states
the default outright, so all three labels stay truthful.

The mechanism is `color-scheme` plus `light-dark()`, and it is still script-free.
`<html>` carries `color-scheme: light dark`, which is what makes System follow
the OS; `html:has(#t-dark:checked)` and `html:has(#t-light:checked)` pin it the
other two ways. Every colour on the page is then written once as
`light-dark(light, dark)` and resolves against whichever scheme is in force.
That replaced thirty-nine parallel dark overrides with one declaration per
colour — the alternative was to write all thirty-nine a second time inside a
`prefers-color-scheme` query and keep the two sets in step by hand.

Two details worth keeping:

- The whole palette sits inside `@supports (color: light-dark(#000,#fff))` and
  each rule carries a `body` prefix to out-specify `style.css`. On a browser
  without `light-dark()` the declarations are dropped and the light theme shows
  through, which is exactly the old behaviour rather than a broken page.
- The radios carry `autocomplete="off"` for the same reason the video swap does:
  a browser restores the checked one on reload, which would make the choice look
  persistent while nothing is stored. It still does not persist — that needs
  localStorage and a second script.

Fixed in passing: the Home link carries `aria-current="page"`, and
`nav.site-nav a[aria-current="page"]` hard-codes near-black ink, so in the dark
theme it had been sitting almost invisible on its own pill.

Homepage only. The project pages each own their stylesheet and their own theme,
and pointing them at the OS would undo the per-page palettes recorded above.

**2026-08-31 — the three homepage link buttons shimmer, in sequence.**

A narrow raked highlight crosses GitHub, then LinkedIn, then Projects, pauses,
and returns to GitHub — a torch drawn across brushed metal. Still no script.

It is deliberately *one* `@keyframes` shared by the three buttons and offset by
`animation-delay` rather than three animations of their own: sharing the cycle
is what guarantees the order can never drift, and the delays (0, 0.9s, 1.8s
against a 4.8s cycle, with the sweep occupying 0.86s of it) are spaced so one
band has left a button before the next begins.

The highlight is not a plain white band. On the light theme the buttons are
already near-white, so a white core alone is invisible; what reads as a curved
metal surface is the specular core with a slightly *darker* flank either side,
and that flank has to darken in both themes — so both halves of the gradient
are `light-dark()` pairs, like the rest of the page.

It moves a pseudo-element with `transform` rather than sliding a background
position, so it composites on its own layer and the text underneath is never
repainted. Suppressed under `prefers-reduced-motion`, as the carousels are.

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
