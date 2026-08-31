/* The back button, and the whole of what it does.
 *
 * Every page but the homepage carries a back button. Its href is a real link
 * one level up, so it works with this file absent, blocked or broken — that
 * is the fallback, not the feature. What this adds is that a visitor who
 * arrived from somewhere else on the site is returned there instead: you can
 * reach the campervan page from the homepage or from the projects index, and
 * "back" should mean the one you actually came from.
 *
 * The referrer test keeps it inside the site. Arriving from a search engine
 * or another site leaves the link doing what it says, rather than bouncing
 * the visitor off oisinmcgrath.com — which is not what a back button in the
 * corner of a page looks like it will do.
 *
 * No storage, no network, no third party. It is the site's second script.
 */
document.addEventListener('click', function (event) {
  var link = event.target.closest('a[data-back]');
  if (!link) return;
  if (history.length < 2 || !document.referrer) return;

  var from;
  try {
    from = new URL(document.referrer);
  } catch (e) {
    return;
  }
  if (from.origin !== location.origin) return;

  event.preventDefault();
  history.back();
});
