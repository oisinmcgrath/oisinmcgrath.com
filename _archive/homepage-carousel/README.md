# Homepage featured-project carousel

Removed from the live homepage on 2026-09-08, when the page was restructured
around two full-width feature blocks (Cross Market Intelligence and the Renault
Master) instead of a rotating strip of three cards.

Kept here because the construction is worth not losing: it is script-free —
radio inputs plus `:has()` for manual control, a track carrying the three cards
three times over so the drift closes on itself invisibly, and focus done by a
horizontal mask on the viewport rather than by timing, so whatever passes the
centre is the thing in focus. The arrows exist as three author-time pairs
because plain CSS cannot compute "the next slide".

`carousel.html` is the markup as it sat in `index.html`, between the "Technical
projects" and "Software projects" headings. `carousel.css` is the two blocks of
rules it needed from the homepage's inline `<style>`: the layout and animation,
then the per-project theme colours, which lived in the `light-dark()` section.

Not reachable from the site: `_redirects` turns away everything under
`_archive/`.

`media/` holds the three files that were only ever used by this carousel — the
Cadence teaser loop and its poster, and the poster for the van's teaser — moved
here when the live tree was tidied so the archive stands on its own. The paths
in `carousel.html` were rewritten to match, so putting the markup back means
putting those files back too. `teaser.mp4` itself is *not* here: the Renault
page still uses it.
