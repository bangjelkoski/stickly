import { $id, isLinkToCurrentPage } from './../utils';

class PrettyScrollTo {
  constructor({ links, ...options }) {
    const config = {
      scrollClass: 'is-scrolling',
      callback: () => {}
    };

    this.links = links;
    this.options = { ...config, ...options };

    if (this.links.length) {
      this.init();
    }
  }

  init() {
    this.links.forEach((link) => {
      link.addEventListener('click', (event) => {
        this.onClick(event);
      });
    });
  }

  onClick(event) {
    const link = event.currentTarget;

    if (isLinkToCurrentPage(link)) {
      event.preventDefault();
      this.updateHistory(link.hash);

      if (link.hash) {
        return this.scrollToTarget(link);
      }
    }
  }

  getDomNodeFromHash(hash) {
    const decodedHash = decodeURIComponent(hash);
    const id = decodedHash && decodedHash.slice(1);

    return $id(id);
  }

  updateHistory(hash) {
    window.history.replaceState({}, document.title, hash);
  }

  scrollToTarget(link) {
    const target = this.getDomNodeFromHash(link.hash);

    if (target) {
      const rect = target.getBoundingClientRect();
      const targetTop = rect.top + window.scrollY;

      const offsetTop = this.options.offset
        ? targetTop + this.options.offset
        : targetTop;

      this.scroll(offsetTop).then(() => this.onScrollComplete(link, target));
    }
  }

  getScrollContainer() {
    if (!this.scrollContainer) {
      this.scrollContainer = document.body;
    }

    return this.scrollContainer;
  }

  scroll(offsetTop) {
    const container = this.getScrollContainer();
    container.classList.add(this.options.scrollClass);

    return new Promise((resolve, reject) =>
      resolve(
        window.scrollTo({
          behavior: 'smooth',
          left: 0,
          top: offsetTop
        })
      )
    );
  }

  onScrollComplete(link, target) {
    const container = this.getScrollContainer();
    container.classList.remove(this.options.scrollClass);

    if (typeof this.callback === 'function') {
      this.callback(link, target);
    }
  }
}

export default PrettyScrollTo;
