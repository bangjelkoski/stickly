import { $id } from './selectors';

export function isLinkToCurrentPage(link) {
  const path = link.pathname.replace(/(^\/?)/, '/');
  return (
    link.host === window.location.host && path === window.location.pathname
  );
}

export function throttle(callback, delay) {
  let shouldCall = true;
  return () => {
    if (shouldCall) {
      callback();
      shouldCall = false;
      setTimeout(() => {
        shouldCall = true;
      }, delay);
    }
  };
}

export function getDomNodeFromHash(hash) {
  const decodedHash = decodeURIComponent(hash);
  const id = decodedHash && decodedHash.slice(1);

  return $id(id);
}

export function updateHistory(hash) {
  window.history.replaceState({}, document.title, hash);
}
