import { throttle } from 'lodash';
import { $, $$ } from './../utils';
import ScrollTo from './scroll';

class Stickly {
  constructor(options) {
    const config = {
      mainContainer: '.sticky-menu-container',
      menuContainer: '.sticky-menu',
      linkContainer: '.sticky-menu-link',
      waypointContainer: '.is-waypoint',
      classFixed: 'is-sticky',
      classAbs: 'is-abs',
      classLinkActive: 'is-active',
      scrollLinkClass: 'is-scrolling',
      pageTopMargin: 0,
      scrollOffset: 0
    };

    this.options = { ...config, ...options };

    if (this.options.mainContainer) {
      this.options.container = $(this.options.mainContainer);
    }

    if (this.options.container) {
      const {
        container,
        linkContainer,
        menuContainer,
        waypointContainer
      } = this.options;

      this.menu = $(menuContainer, container);
      this.links = $$(linkContainer, container);
      this.waypoints = $$(waypointContainer, container);
      this.init();
    }
  }

  init() {
    const { links, menu, waypoints } = this;
    const { container, scrollOffset } = this.options;

    const domElementsExist = menu && links.length > 0 && waypoints.length > 0;

    if (domElementsExist) {
      this.getScrollLimits();
      this.scrollTo = new ScrollTo({
        links,
        offset: scrollOffset,
        scrollClass: this.options.scrollLinkClass,
        callback: (link) => {
          this.updateActiveLink(link);
        }
      });

      if (this.doesMenuFit()) {
        container.classList.add('is-sticky-init');
        this.bindSticky();
        this.bindWaypoints();
      }
    }
  }

  updateActiveLink(element) {
    const { links } = this;
    const { classLinkActive } = this.options;

    links.forEach((element) => element.classList.remove(classLinkActive));

    if (element) {
      element.classList.add(classLinkActive);
    }
  }

  getScrollLimits() {
    const { menu } = this;
    const { container, pageTopMargin } = this.options;

    const rect = container.getBoundingClientRect();
    const targetTop = rect.top + window.scrollY;

    this.scrollLimits = {
      menuTop: targetTop - pageTopMargin,
      menuHeight: Math.round(menu.offsetHeight),
      viewHeight: document.body.scrollHeight
    };

    return this.scrollLimits;
  }

  doesMenuFit() {
    const { menuHeight, viewHeight } = this.scrollLimits;

    return menuHeight <= viewHeight;
  }

  getContainerHeight() {
    return Math.round(this.options.container.offsetHeight);
  }

  getPageOffsetTop() {
    return this.scrollLimits.menuTop;
  }

  getPageOffsetBottom() {
    const { menuTop, menuHeight } = this.scrollLimits;
    const containerHeight = this.getContainerHeight();

    return containerHeight + menuTop - menuHeight;
  }

  updateStickyNav() {
    const { menu } = this;
    const { classFixed, classAbs } = this.options;

    const scrollTop = window.scrollY;

    if (scrollTop > this.getPageOffsetBottom()) {
      return menu.classList.add(classAbs);
    }

    if (scrollTop > this.getPageOffsetTop()) {
      menu.classList.add(classFixed);
      return menu.classList.remove(classAbs);
    }

    menu.classList.remove(classFixed);
    menu.classList.remove(classAbs);
  }

  bindSticky() {
    const throttledUpdateNav = throttle(() => {
      this.getScrollLimits();
      this.updateStickyNav();
    }, 500);

    window.addEventListener('scroll', this.updateStickyNav.bind(this));
    window.addEventListener('resize', throttledUpdateNav);
    window.addEventListener('load', throttledUpdateNav);
  }

  bindWaypoints() {
    const { container } = this.options;
    const intersectionObserverIsEnabled = 'IntersectionObserver' in window;

    if (intersectionObserverIsEnabled) {
      const handler = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeLink = $(`a[href="#${entry.target.id}"]`, container);
            this.updateActiveLink(activeLink);
          }
        });
      };

      const observer = new IntersectionObserver(handler, {
        threshold: 0.4
      });

      this.waypoints.forEach((waypoint) => observer.observe(waypoint));
    }
  }
}

export default Stickly;
