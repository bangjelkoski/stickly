export function $(selector, scope = document) {
  return scope.querySelector(selector);
}

export function $id(selector, scope = document) {
  return scope.getElementById(selector);
}

export function $$(selector, scope = document) {
  return Array.from(scope.querySelectorAll(selector));
}
