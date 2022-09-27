// see https://stackoverflow.com/a/67982320
try {
  importScripts("serviceWorker.js", "contentPage.js");
} catch (e) {
  console.error(e);
}
