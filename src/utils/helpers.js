export function isLinkToCurrentPage(link) {
  const path = link.pathname.replace(/(^\/?)/, '/');
  return (
    link.host === window.location.host && path === window.location.pathname
  );
}
