import {
  getDomNodeFromHash,
  updateHistory,
  isLinkToCurrentPage
} from '../utils';

class ScrollTo {
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

  // eslint-disable-next-line consistent-return
  onClick(event) {
    const link = event.currentTarget;

    if (isLinkToCurrentPage(link)) {
      event.preventDefault();
      updateHistory(link.hash);

      if (link.hash) {
        return this.scrollToTarget(link);
      }
    }
  }

  scrollToTarget(link) {
    const target = getDomNodeFromHash(link.hash);

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

    return new Promise(
      // eslint-disable-next-line no-unused-vars
      (resolve, reject) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        resolve(
          window.scrollTo({
            behavior: 'smooth',
            left: 0,
            top: offsetTop
          })
        )
      // eslint-disable-next-line function-paren-newline
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

export default ScrollTo;
