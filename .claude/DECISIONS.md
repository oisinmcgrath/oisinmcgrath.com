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

The three share one 3.84s cycle and are offset by `animation-delay`, which is
what guarantees the order can never drift. The delays (0, 1.802s, 3.209s) are
spaced by the band's bright *core*, not by its full width — that took three
attempts to get right. The gradient's outer thirds are nearly transparent, so a
button stops looking lit well before the band has finished leaving it; timing
the delays off the element's own geometry left a visible three-quarter-second
lull that the measurements said was two-tenths. The cycle is exactly the three
core crossings, so it never rests: Projects hands back to GitHub on the same
beat that GitHub hands to LinkedIn, and the faint tails overlap, which is what
makes it read as one light moving down the card rather than three flashes.

**The band is a fixed width and a fixed speed, and that is not free.** The
three buttons are different widths because their labels are, so a band sized as
a fraction of the button was both narrower and slower on the short ones. It is
now 1.5rem of background moved with `background-position-x`: a percentage there
resolves against the button width minus the band width, so `-1.5rem` to
`calc(100% + 1.5rem)` always means "fully off the left edge to fully off the
right" without anyone measuring anything. 1.5rem specifically because a wider
band covers the Projects button entirely and reads as a wash.

What CSS cannot derive is the duration: equal speed over unequal distances
means unequal times, and no CSS value reads a width into a `@keyframes`
percentage. So each button has its own end stop, authored from its measured
width — 328, 256 and 116 CSS pixels — at 182px per second. Only the timing
depends on those measurements; the geometry does not, so a font stack that
shifts the label widths leaves the light still crossing each button exactly,
just a few per cent off the intended pace. Measured off the rendered pixels
afterwards: 185, 178 and 181 px/s, and the same breadth on all three.

The band's travel is tuned to the distance it is *visible* for and no further —
from just off the left edge to just off the right. An earlier version overshot
well past both edges, so a third of each animation was spent off-screen and the
light appeared to dawdle between buttons; trimming the travel closed that to a
quarter of a second without changing how fast the band crosses a button.

It was built four times faster and slowed to this on 2026-08-31, and the band
softened to `opacity:.5` at the same time, so it passes over the label without
washing it out.

The highlight is not a plain white band. On the light theme the buttons are
already near-white, so a white core alone is invisible; what reads as a curved
metal surface is the specular core with a slightly *darker* flank either side,
and that flank has to darken in both themes — so both halves of the gradient
are `light-dark()` pairs, like the rest of the page.

It moves a pseudo-element with `transform` rather than sliding a background
position, so it composites on its own layer and the text underneath is never
repainted. Suppressed under `prefers-reduced-motion`, as the carousels are.

**2026-08-31 — the homepage carousel holds three cards, and the set is carried
three times.**

Cadence joined the campervan and Home Screen. Its card plays
`projects/cadence/demo.mp4` in place of a still — muted, looping, no controls,
no script — because the page already had the recording and a moving card is a
better argument for a dictation tool than a screenshot of one.

The carousel had a visible fault: a card would slide off to the left with
nothing following it, and a moment later the track would snap back. The cause
was arithmetic, not timing. Four slots of 72% of a viewport is 288% of track,
but the drift ran 144% — two slots — from a start of 58%, and 58 + 144 + 100
is 302 against a track only 288 wide. The last 14% of every cycle had nothing
in the right-hand side of the viewport.

The set is now carried **three** times, not twice: nine slots, 675% of track,
each slot three quarters of a viewport, drifting exactly three slots per cycle.
Two copies is enough for the drift alone, but not for the arrows — after a
click the drift resumes from that card's anchor and has to run three more slots
without reaching the end, and from the third anchor it cannot. The Renault
page's carousel had that fault for the same reason; it showed only after an
arrow click, which is why it went unnoticed. It was given the same treatment on
2026-09-04 — nine slides, 675% of track on desktop and 810% on a phone, with
every percentage rescaled at both breakpoints. Nothing about it looks or
behaves differently; there is simply always track left to run.

Each slot is now a `.featslide` whose padding provides the gutter. The gutter
used to be a margin on the card, which does not count inside the slot's
percentage width, so the slots did not quite tile the track — the drift was
approximate even when the arithmetic was right.

Two smaller things: the media rules had to be scoped to direct children
(`.featcard > img`), because the card titles now carry the project's own mark
and an unscoped `.featcard img` sized it to the full width of the card. And the
site-wide note about tracking and free software moved below the footer rule,
where the rest of the small print already sits.

**2026-08-31 — the projects index answers to the OS theme, and everything on it
is a button.**

It was the last page a reader is likely to see early that could only be light,
and it is the page the homepage's Projects button leads to — arriving on white
from a dark homepage was the jolt. It now carries the same three-way switch as
the homepage and the same mechanism behind it, so there is one way this is done
on the site rather than two.

The rows became buttons for the same reason the homepage links did: a page of
bare underlined links reads as an index, and this page is meant to read as a
way in to ten pieces of work. Each project is a pill carrying its own mark; the
four apps that publish policy URLs carry smaller Privacy and Terms pills beside
the description, which also makes it obvious at a glance which projects have
them and which do not.

The campervan row now uses the Renault page's own `favicon.svg` — the van in
profile in saturated orange — rather than the mark in `projects/logos/`. It is
the same drawing the page itself uses in the tab, so the row and the page it
leads to agree.

Note this page does **not** use `.wrap`: it has always been laid out wide with
the list indented from the headings, and that was kept. The indent drops away
under 640px.

**2026-08-31 — the site has a second script, and it is the back button.**

Every page but the homepage now carries a Back button in the top left, and
"back" means the page you actually came from: the campervan page is reachable
from the homepage and from the projects index, and a fixed link up one level
gets that wrong half the time. There is no HTML or CSS equivalent of
`history.back()`, so this was put to Oisin as a trade and he took it.

The shape of it matters. The button's `href` is a real link one level up, so
with the script blocked, broken or absent it still does something sensible —
the script is an upgrade, not the mechanism. It only intercepts when the
referrer is same-origin, so arriving from a search engine leaves the link doing
what it says rather than bouncing the visitor off the site. No storage, no
network, no third party.

That makes the site's rule **two** scripts, not one, and the claim on the
homepage and in the policies had to be updated to match rather than quietly
left standing. Everything else still holds: both carousels, both lightboxes,
the theme switches and the button shimmer are CSS.

**2026-08-31 — a privacy policy for the website itself.**

The footer used to carry "no tracking, no analytics, no advertising cookies" as
a sentence, which is a policy's job done in a footer's space. `/site-privacy.html`
now covers the site as a visitor experiences it — nothing collected, nothing
third-party loaded, what the two scripts do, what Cloudflare necessarily
processes as the host, and what happens if you email — and the footer links to
it. It could not reuse `/privacy.html`: that URL is invoiceNow's, and it is
registered with Google for OAuth verification.

It states plainly that the theme switch does not remember your choice *because*
remembering it would mean storing something. That is worth keeping: it is the
one place where the site's no-storage claim and a visible product decision meet.

**2026-08-31 — the campervan's mark is a handsaw.**

The van in profile was always going to lose at 16px — a thin outline drawing
with no interior mass. It is now a handsaw in cream on the van's own red,
`#d7212b`, sampled from the photograph on the page, on the same rounded-square
tile the app marks use. One file, `renault-master/favicon.svg`, does three
jobs: the page's favicon, the row's mark on the projects index, and the card's
title mark in the homepage carousel. The old `projects/logos/renault-master.png`
was deleted rather than left orphaned.

**2026-08-31 — the carousel arrows come round in both directions.**

Three cards need three anchors, but "the card after Cadence" is Renault *to the
right*, while Renault's own anchor is two slots to the left — so a plain
three-state switch pans backwards across everything, which is exactly what it
did. The fix uses the third copy of the set: stepping off either end lands on
the neighbouring copy of that card, and a zero-length animation with a 0.6s
delay — after the pan has finished — moves the track to that card's canonical
slot. Both positions show the identical three cards, so there is nothing to
see, and every later click starts from the middle copy again. Five radios, no
script.

Taking manual control now stops the drift for good, as it does on the Renault
page. Resuming after five seconds was what allowed the resumed run to reach the
end of the track from the later anchors.

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

---

## The homepage is triaged

**2026-09-08 — two feature blocks, then ten equal cards, and no headings.**

The homepage used to present ten projects as ten identical tiles under
*Software projects* and *Technical projects*, with a rotating carousel of three
above them. That gave every project the same visual weight, which is not true:
Cross Market Intelligence and the Renault Master conversion are substantially
larger pieces of work than a browser toolbar button.

So the two lead as full-width blocks — heading, paragraph, one screenshot at
the full column, a link through — each on its own tinted ground in its own
project's accents, and the remaining ten follow as cards in one grid with no
headings over it. invoiceNow and Receipt Manager sit adjacent because they are
two halves of one problem.

`projects/index.html` still keeps its headings and its own order. The two pages
disagreeing is deliberate and predates this; see the section above.

The carousel is not deleted, only unpublished: it is in
`_archive/homepage-carousel/`, which `_redirects` turns away. It was a genuinely
interesting piece of script-free CSS and is worth not losing.

---

## The site uses the whole screen

**2026-09-08 — the column follows the window, but a line of prose does not.**

Every page was pinned to a 42rem column at every resolution, so a 27-inch
monitor got the same narrow ribbon as a laptop and the screenshots were too
small to read. Every stylesheet now ends with a wide-screen block: the root
font size steps 17/18/19px at 1280/1800/2400 CSS pixels and the column becomes
`min(92vw, 68/76/84rem)`.

Prose deliberately does **not** grow with it. Paragraphs, lists and cards hold a
44rem measure and centre; the extra width goes to screenshots, figures and the
project grid. Past about ninety characters a line is harder to read, not easier.
This is the same split the Renault page has always used (`--measure` versus
`--col`), applied to the rest of the site.

If someone asks why the text does not fill the screen, that is the answer — it
is a decision, not an oversight.

---

## The prose is Oisin's, not the agent's

**2026-09-08 — pages are rebuilt from supplied copy, verbatim.**

The project pages are being rewritten one at a time from markdown files Oisin
writes himself, each with square-bracketed markers where images go. That prose
is final. It gets reproduced exactly — heading levels, title case, wording —
and diffed back against the source before shipping.

This matters because the temptation is constant: the copy is deliberately
plainer and more direct than a technical writer would make it, and it reads
like something that could be "improved". It should not be. If something in it
is wrong, say so; do not fix it silently.

What may be added alongside it, and has been: a repository block, a
requirements list, and any limitation the page previously disclosed. Dropping a
limitation while replacing a page is the one thing to be careful of — that is
the honesty rule above, and NitroTune's page lost and regained one already.

---

## The homepage leads with five features

**2026-09-08 — the feature tier grew from two blocks to five.**

The two-block triage undersold three substantial applications, and Oisin asked
for them to be promoted: invoiceNow, Receipt Manager and Home Screen now have
feature blocks too. The shape is a rhythm rather than five identical slabs:
CMI and the Renault Master stay full-width at the top, invoiceNow and Receipt
Manager share one `.featpair` row — they are two halves of one problem, so the
adjacency rule the grid used to carry moved up a tier with them — and Home
Screen runs full-width below the pair. The remaining seven projects stay as
equal cards.

The blocks were also made to earn the ground they sit on: headings carry the
project's own mark, the screenshot is wrapped in a link to the page (the
biggest thing in the block is now also the biggest click target, and it lifts
on hover), and the call-through became a centred pill in the block's own
accent, built from `currentColor` like the nav pills so one rule serves all
five. Blurbs reuse the approved card copy verbatim — no new marketing prose
was written.

Two corrections rode along on the Renault block. Its photograph was the
finished van with its decals, captioned "the day it was bought, still in its
red Australia Post livery" — false, and exactly the kind of slip the accuracy
rule exists for. It now carries the boab-tree trip photograph with the page's
own caption, "Trial by Northern Territory". And its blurb said 4,400 km to the
top of Australia while the page itself says 8,800 km to Darwin and back; the
blurb is now the page tagline's first two sentences verbatim.

Also fixed: the "See 5 more" chip sat at the column's left edge on wide
screens, hundreds of pixels from the centred list it extends, and its label
did not say what the five more *were*. It now reads "See 5 more aims" and
takes the same 44rem measure as the list.

---

## Screenshots open at full size

**2026-09-08 — every project-page screenshot is a link to its own file.**

The application captures are 1400–3400px wide; even the wide-screen column
shows them at a fraction of that, and the fine detail in them — the whole
argument of pages like CMI's — was illegible with no way in. Each `img.shot`
on every project page is now wrapped in an `a.shotlink` pointing at the
original file, with a zoom-in cursor; the browser's Back returns to the page.
This is the same pattern the Renault galleries always used, and still no
script.

CMI's two phone captures had the opposite fault: `flex:1 1 0` let a wide
monitor stretch each one to ~655 CSS pixels from a 794-pixel capture — an
upscale past the capture's own resolution that blurred them on any hidpi
display. They are now capped at 24rem each.

---

## The full-bleed wrappers lost their `100vw`

**2026-09-08 — `width:100vw` includes the scrollbar, and every page paid for it.**

Cadence's `.demo-wrap` and N-of-1's `.shot-wrap` spanned the viewport with
`width:100vw; margin-left:50%; transform:translateX(-50%)`. 100vw includes
the vertical scrollbar, so both pages scrolled sideways by half a scrollbar
at every width. They now bleed with symmetric negative margins,
`margin-inline: calc(50% - 50vw + 8px)` — the +8px backs the bleed off by
about a scrollbar because no CSS unit means "viewport minus scrollbar", and
the wrapper's edges are invisible (its own padding is wider), so the trim
cannot be seen. This also centres the media on the visible area rather than
on viewport-plus-scrollbar, which the old version was half a scrollbar off.

The other sideways scroll was the `git clone` line on Capsule and Cadence:
a `<pre>` neither stylesheet styled, so its unbroken line pushed the whole
page wide on a phone. Both pages now give `pre` the treatment Home Screen,
tagdexer, Epson and YT Downloader already had — the box scrolls, the page
never does.

---

## Dark pages stopped hiding their own screenshots

**2026-09-08 — Cross Market Intelligence and Receipt Manager are light pages now.**

Both pages were dark because their palettes were sampled from the
applications, which are dark. The consequence was only obvious once the
screenshots were opened at full size: a near-black capture on a near-black
page has no edge, and the detail inside it — which is the entire argument
these two pages are making — could not be made out. Card, page and
screenshot were three shades of the same thing.

So the ground goes light on both and the ordering is now explicit: **the page
is the mid tone, cards go up towards white, screenshots are the dark objects
on top.** CMI takes a light blue-grey from its own navy family; Receipt
Manager takes its light column. Screenshot borders are darker than the card
borders on purpose — on a light page a pale edge around a black capture reads
as a gap rather than a frame — and each capture carries a soft drop shadow so
it sits on the page rather than being cut out of it.

Two consequences worth knowing:

- **Receipt Manager no longer follows the operating system.** It was the one
  project page that did, and that is what produced the problem: a visitor in
  dark mode got `#0F1115` behind black screenshots. It is `color-scheme:
  light` with no `light-dark()` pairs now. This supersedes the note in the
  per-page theme section above.
- Its light column had `--bg #E0E3E8` against `--surface #E3E5EA` — three
  points of luminance between a card and the page it sits on, which is no
  separation at all. The surfaces are far apart now (`#DDE2E9` / `#F4F6F9`).

Every colour on both pages was measured afterwards; the lowest ratio is
4.59:1, so all of it clears AA.

---

## Body text sits on a card

**2026-09-08 — `.prose` on the product pages.**

The wide-screen work gave these pages two widths: 44rem for reading and the
full column for pictures. That is right for the pictures and it left the
prose looking abandoned — a narrow ribbon of text down the middle of a much
wider column, with no ground of its own between two full-width screenshots.

Each run of consecutive prose is now wrapped in `<div class="prose">`, a card
one step *lighter* than the page. Cross Market Intelligence, Receipt Manager,
invoiceNow and Home Screen carry it; the Renault page uses the same class for
its introduction. The other project pages are unchanged so far.

The wrapping was done mechanically and the rendered text diffed against the
original on all four pages before anything shipped — the prose is Oisin's and
none of it changed.

---

## The homepage features became single objects

**2026-09-08 — the whole card is the link, and the button is filled.**

A feature block had three separate links in it — the screenshot, the
call-through, and nothing tying the rest of the card to either. It is one
link now: the call-through anchor carries a transparent `::after` stretched
over the whole card, so a click anywhere on it — heading, prose, screenshot,
background — goes to the project page. The screenshot's own anchor was
removed rather than kept, because nested anchors are invalid and because one
link per card is what a screen reader wants to be told. The card lifts as a
whole on hover so it reads as a single object; the focus ring is drawn on
`:focus-within`, since focus lands on the button while the card is what
activates.

The call-through is now filled in the project's accent with white ink, from a
`--cta` token defined once per block. It is deliberately *not* a
`light-dark()` pair: white ink needs a fill dark enough for it in either
scheme, and a brand colour that shifted between themes would stop reading as
the project's own. All five fills clear 4.5:1 against white.

`.featmore` takes `margin: auto auto .25rem`. The `auto` on top pins it to
the foot of the card, so in the invoiceNow / Receipt Manager pair — where the
grid stretches both cards to one height — the two buttons sit exactly the
same distance from the bottom whatever the prose above them does. Measured:
27px on both, and on all five blocks. The inline `auto` matters just as much:
a `margin: auto 0 …` shorthand reset `margin-inline` to 0 and pinned the
button's box to the card's left edge, so the two full-width blocks' buttons
were visibly off centre. That is the same margin-shorthand trap the
wide-screen note at the foot of the homepage warns about, and it has now
caught us twice.

The dark grounds were all lightened well clear of the page (`#14171b`) for
the same reason the two product pages went light — these cards carry
near-black screenshots, and CMI's card in particular was `#161d29` behind a
black capture. Rules (`hr.featrule`) now separate the blocks, and Home Screen
is held to the reading measure rather than the full column, so its card and
screenshot are exactly as wide as the body text above them.

Thumbnails changed with it: CMI shows the comparison page rather than the
inventory, the van shows the interior through the open side door, and Receipt
Manager has its own thumbnail. The van's blurb went back to Oisin's earlier
"Perhaps my most ambitious and educational undertaking…" — the paragraph that
was briefly doing that job moved onto the Renault page itself, below the
carousel and in ordinary body type, which is where it always belonged: it is
an opening paragraph, not a header tagline.

---

## Policy links moved to the footer

**2026-09-08 — no more "Privacy policy" and "Terms of use" pills under the logo.**

Five app pages carried their policies as nav pills beside Home, which gave
two pieces of legal boilerplate the same weight as the page's own navigation.
They are footer hyperlinks now, where the rest of the small print already
sits.

**The URLs themselves have not moved and must not** — they are registered
with Google and, for Home Screen, the Chrome Web Store. Only the link to them
changed. Home Screen had no footer policy link at all before this, so it
gained one *before* its nav pill was removed; every page was checked to still
link its own policies afterwards.

---

## One width per feature block

**2026-09-08 — the full-width feature blocks were a mistake, and are undone.**

Promoting the features gave them the full column while their prose kept the
44rem measure. The result had three different left edges inside one card: the
heading hard against the padding, the prose inset and centred, the screenshot
running the full width. Oisin called it out on sight, and he was right — it
read as three unrelated things stacked rather than one block.

Every feature block now holds the reading measure at every width, and
everything inside shares that width: heading, prose and screenshot start and
end on the same two lines. Measured aligned at 375, 768, 1280, 1707 and
2560px, with all five cards the same width and the card exactly as wide as
the body list above it. The screenshots are smaller for it; they link through
to their pages, where they open at full resolution.

The invoiceNow / Receipt Manager pair went with it. Two cards side by side is
a second width, and a second width is the thing being removed — they are
ordinary siblings now, still adjacent because they are still two halves of
one problem, with a rule between them like every other pair of blocks.

**A flex trap worth remembering.** With the card as a column flex container,
`main p`'s `margin-inline: auto` stopped the blurbs stretching: a flex item
with auto cross-axis margins is sized to fit its content, not stretched to
the cross axis. Each blurb came out as wide as its own longest line — a few
pixels narrower than the card, and a different few on every block, which is
the same misalignment in miniature. `.feature p:not(.featmore)` now sets
`max-width:none; margin-inline:0`. `.featmore` keeps its autos deliberately:
they are what pin it to the foot of the card.

---

## The project mark moved into the heading

**2026-09-08 — the logo is a prefix to the `h1`, not a block beneath it.**

Every project page opened with the title, then the mark at 130–160px, then
the nav, then a rule — roughly 160px of vertical space spent before the page
said anything, which on several pages pushed the first screenshot below the
fold. For a site a reader gives a few minutes, that is the most expensive
space on it.

The mark now sits inside the heading at `1.5em`, so it scales with the title
at every breakpoint, and carries `alt=""` because the heading already names
the project. Eleven pages, one rule, appended near the foot of each
stylesheet so it overrides the older `img.logo` block rather than needing that
block rewritten. N-of-1 needed one extra line: its own rule set
`border-radius: 22px`, which is a circle once the mark is 24px, so it takes a
proportional 18% instead.


---

## Music and Community joined the features

**2026-09-08 — they are feature blocks now, two abreast, above the grid.**

They sat at the foot of the page as `.topiccard` sections — a heading, a
paragraph with a "see more" link in it, and a photograph — which put the
music and the community work after ten project tiles, at the point a reader
has already decided whether to keep going. They now sit directly under Home
Screen, built exactly like the project features, with the project grid below
them.

They were first built two abreast, and that lasted one round. Holding the
pair to the same 44rem measure a single block uses — which the one-width rule
requires — made each card about half width, and the photographs came out
smaller than they had been as topic cards. Oisin asked for their old size
back, and since two 44rem cards cannot sit side by side inside a 44rem
measure, restoring the size means stacking them. The upshot is better than
the pair was: **seven identical blocks**, which is what holding one width was
for in the first place. The photographs are now a little larger than they
ever were as topic cards (692px against 612px at 1707).

Both photographs take a shared 3:2 frame — the proportion the van's
photograph on this page already has. The community shot is natively 3:2, so
nothing is cropped from it at all. The music shot is anchored at `50% 8%`
rather than centred: it is nearly square (1100x1163) with both players' heads
in the upper half, and a centred crop takes the heads off. That is the same
fact that kept it uncropped when it stood on its own. The rendered crop was
checked rather than assumed — the band is y=34..767 of 1163, which clears the
higher head by about 20px and is a tighter composition than the full frame.

Their blurbs lost their inline "see more" links. The card is the link now,
and an anchor inside an anchor is invalid — the community blurb also lost the
trailing "— see more about that here", so it ends on the year instead. Worth
knowing that is a copy change, small as it is.

The dead CSS went with them: `.topiccard`, `.musiccard`, `.commcard`,
`.commshot`, `.hicon.micon`, `.shamrock` and `hr.rule.soft` are all gone, and
the wide-screen block no longer mentions `.topiccard` or `.commshot`.

---

## The `margin` shorthand has broken centring four times

**2026-09-08 — and there is now a sweep that finds it.**

Every stylesheet's wide-screen block gives prose a 44rem measure and centres
it with `margin-inline: auto`. Any *other* rule that then sets `margin` as a
shorthand on the same element resets that to 0 and pins the element to the
left edge of a much wider column. A class selector beats `main p` on
specificity, so putting the wide-screen block last does not save you — which
is the part that keeps catching us.

Four confirmed so far: the homepage cards (noted long ago), `.featmore` on
the feature blocks, N-of-1's `.beats p`, and community.html's `.photos` and
`.support`. The last two were both 183px off centre — the N-of-1 opening,
which is the first thing on that page, and the community photo grid, which
sat well to the left of the paragraph directly above it.

The community pair had a second fault underneath the first: they are media,
not prose, so they should never have been taking the reading measure at all.
They are `max-width: none` now and use the whole column, which puts them back
on the same median as the prose.

**Write `margin: X auto Y`, or set `margin-inline` separately.** And the check
worth re-running after any layout work: load every page in an iframe, walk
`main` for `p, ul, ol, .beats, .card, .notice`, skip anything whose computed
`max-width` is `none`, and flag any element whose centre differs from its
parent's centre by more than 4px. Two false positives to expect, both fine:
`projects/index.html` is left-aligned by design, so its `h1`, tagline and
`h2` all share x=68 and the narrower tagline box is correct.


---

## The feature cards became real anchors

**2026-09-08 — the stretched-overlay link was replaced with an `<a>`.**

The blocks were `<section>`s with a transparent `::after` on the call-through
anchor, stretched over the whole card — the standard "stretched link" pattern,
chosen so the card stayed one link without nesting anchors.

Oisin reported the cards were not clickable, only the buttons. It could not be
reproduced: `elementFromPoint` at the heading, the prose, the image centre and
the far corner of all seven cards, at 375, 1280 and 1707px, every one resolved
to the call-through anchor, and the anchor navigated. So the overlay was doing
its job in the browser it was measured in.

It was replaced anyway. When the person looking at the site says a control does
not work, the measurement is not the thing that matters — and there was a
construction available with no ambiguity in it at all: make the card itself the
`<a>`, exactly as `.projcard` does further down the same page, and demote the
pill to a `<span>`. No overlay, no pseudo-element in the paint order, no
stacking context to reason about, and nothing to nest.

What that costs, and it is worth knowing: the card's accessible name would be
the whole of its text, so each carries an `aria-label` instead ("Read about
Cross Market Intelligence"). Selecting the prose inside a card is awkward, as
it was with the overlay. `body a.feature{color:inherit;text-decoration:none}`
stops the card taking link ink now that it is genuinely a link, and the focus
ring moved from `:focus-within` to `:focus-visible` on the card itself.

**Do not add a second anchor inside a feature block.** The screenshot in
particular must stay an unwrapped `<img>`.

---

## The disclosure pill disappears once it is open

**2026-09-08 — and that makes opening one-way.**

"See 5 more" sat between the first two aims and the other five once opened,
cutting what reads as one list in half. `.moreaims[open] > summary` is
`display:none` now, so the seven aims read as a single list.

The trade is real and was accepted: with the summary hidden there is nothing
left to click to close it again, so opening the list is one-way until the page
is reloaded. A `<details>` has no other closing affordance without script, and
the script budget is spent.

The label also lost the word "aims" it had briefly gained — it was doing no
work, since the list it opens is plainly the same list.


---

## Three thumbnails cross-fade, and the Music card gained a second door

**2026-09-08 — animated feature thumbnails, still without a script.**

The van, Cross Market Intelligence and invoiceNow each had more than one
capture worth showing, so their thumbnails now fade between them. The
construction is worth writing down because the obvious version does not work:

**The first image is the base and never animates.** Everything above it fades
in over it. That is what lets the loop close — the topmost layer fades out at
the end of the cycle onto a base that is always fully opaque, so there is
never a frame with nothing behind it. And each layer holds `opacity:1` until
the layer above has finished fading in, then drops to 0 while hidden behind
it. Fading a lower layer out while it is still visible would show the base
through the middle of a transition, which reads as a flicker.

The keyframes are hand-authored percentages, verified by pausing the animation
and stepping `animation-delay` across the cycle in 0.25s steps rather than by
eye. The van is weighted as asked: the side-door interior holds three seconds,
the front view and the boab about a second and a half each, on a six-second
cycle. CMI takes the same weighting; invoiceNow has two images and splits
evenly.

Frames differ by material. The van's three photographs share a 3:2 frame with
`object-fit:cover` — two of them are 4:3 and give up 11% of their height
rather than the frame changing shape mid-cycle. The two screenshot faders use
`contain` against their own near-black instead: cropping a UI capture loses
content, and a letterbox bar in the same near-black the capture is drawn on
cannot be seen. Suppressed under `prefers-reduced-motion`, which leaves the
base image showing — a still, not a blank frame.

**The Music card is now the one feature block that is not an anchor.** It has
two destinations — the music page and the YouTube channel — and a card-wide
click has no honest answer when there are two. So it is a `<section>` with two
real link pills, stacked and centred, and the card as a whole is not
clickable. That is a genuine regression against the rule set the day before,
taken deliberately and flagged: the alternative was either a nested anchor,
which is invalid, or the stretched overlay that had just been removed for not
behaving as a link. If whole-card clicking matters more than the second
button, the button moves out of the card.

The Home Screen and van captions came off at the same time, and both
photographs on the Music and Community cards took a green outline.
