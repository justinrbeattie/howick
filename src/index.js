export const webComponentsInit = () => {

  const documentHeight = () => {
    document.body.style.setProperty("--page-height", `${window.innerHeight}px`);
  };
  window.addEventListener("resize", documentHeight);
  documentHeight();

  window.setDeferral = (callback, duration) => {
    const step = (delay, start, req, callback) => {
      const progress = Date.now() - start;
      if (progress < delay) {
        req = window.requestAnimationFrame(() => {
          step(delay, start, req, callback);
        });
      } else {
        window.cancelAnimationFrame(req);
        callback("complete");
      }
    };

    const req = window.requestAnimationFrame(() => {
      step(duration, Date.now(), req, callback);
    });
  };

  class BottomDrawer extends HTMLDialogElement {
    intersectionObserver;
    ratio = 0;
    drawerLayers = this.parentElement.querySelectorAll("[layer]");
    placeholder = this.querySelector("[placeholder]");
    drawerContent = this.querySelector("[content]");
    drawerMain = this.querySelector("main");

    constructor() {
      super();
      this.intersectionObserver = new IntersectionObserver(
        this._intersectionCallback,
        {
          root: this.parentElement,
          threshold: Array(101)
            .fill()
            .map((x, i) => Math.round((i * 0.01 + Number.EPSILON) * 100) / 100),
        }
      );
      this.intersectionObserver.observe(this.drawerMain);
      this.initOpenDrawer();
    }

    disconnectedCallback() {
      this.intersectionObserver.disconnect();
    }

    initOpenDrawer() {
      if (this.hasAttribute("expanded") && this.hasAttribute("open")) {
        this.scrollTop = window.innerHeight;
      }
    }

    openDrawer() {
      this.style.removeProperty("display", "none");
      this.removeAttribute("inert", "");
      window.setDeferral(() => this.setAttribute("open", ""), 250);
    }

    closeDrawer() {
      if (this.hasAttribute("expanded")) {
        this.collapseDrawer();
        window.setDeferral(() => {
          this.removeAttribute("open", "");
          this.setAttribute("inert", "");
        }, 400);
      } else {
        this.removeAttribute("open", "");
        this.setAttribute("inert", "");
      }
      window.setDeferral(() => {
        this.style.setProperty("display", "none")
      }, 400);
    }

    toggleDrawerVisibility() {
      if (this.hasAttribute("open")) {
        this.closeDrawer();
      } else {
        this.openDrawer();
      }
    }

    expandDrawer() {
      this.drawerContent.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    collapseDrawer() {
      this.placeholder.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    toggleDrawerPosition() {
      if (this.hasAttribute("expanded")) {
        this.collapseDrawer();
      } else {
        this.expandDrawer();
      }
    }

    _intersectionCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.25) {
          this.setAttribute("expanded", "");
          this.removeAttribute("collapsed", "");
          this.drawerMain.removeAttribute("hidden");
        } else {
          this.setAttribute("collapsed", "");
          this.removeAttribute("expanded", "");
          this.drawerMain.setAttribute("hidden", "");
        }
        this.ratio = Math.round(entry.intersectionRatio * 1000) / 1000;
        this.setStyles();
      });
    };

    setStyles() {
      let totalRatio = 0;
      for (let i = this.drawerLayers.length - 1; i > 0; i--) {
        totalRatio = totalRatio + this.drawerLayers[i].ratio;
        this.drawerLayers[i - 1].style.setProperty(
          "--bottom-drawer-layer-depth-ratio",
          totalRatio
        );

        this.drawerLayers[i].style.setProperty(
          "--bottom-drawer-intersection-ratio",
          totalRatio
        );

        if (totalRatio >= 1) {
          this.setInertState(this.drawerLayers[i - 1]);
        } else {
          this.unsetInertState(this.drawerLayers[i - 1]);
        }
      }
    }

    setInertState(element) {
      const main = element.querySelector("main");
      if (main) {
        main.setAttribute("hidden", "");
      }
      element.setAttribute("inert", "");
    }

    unsetInertState(element) {
      const main = element.querySelector("main");
      if (main) {
        main.removeAttribute("hidden");
      }
      element.removeAttribute("inert");
    }
  }
  window.customElements.define("bottom-drawer", BottomDrawer, {
    extends: "dialog",
  });

  class SideNav extends HTMLElement {
    intersectionObserver;
    ratio = 0;
    aside = this.querySelector("aside");
    placeholder = this.querySelector("[placeholder]");

    constructor() {
      super();
      this.scrollLeft = 10000;
      this.intersectionObserver = new IntersectionObserver(
        this._intersectionCallback,
        {
          root: this.parentElement,
          threshold: Array(101)
            .fill()
            .map((x, i) => Math.round((i * 0.01 + Number.EPSILON) * 100) / 100),
        }
      );
      this.intersectionObserver.observe(this.aside);
    }

    disconnectedCallback() {
      this.intersectionObserver.disconnect();
    }

    openNav() {
      this.aside.scrollIntoView({ behavior: "smooth" });
    }

    closeNav() {
      this.placeholder.scrollIntoView({ behavior: "smooth" });
    }

    toggleNav() {
      if (this.hasAttribute("open")) {
        this.closeNav();
      } else {
        this.openNav();
      }
    }

    _intersectionCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.25) {
          document.body.setAttribute("nav-open", "");
          this.setAttribute("open", "");
          this.removeAttribute("closed", "");
        } else {
          document.body.removeAttribute("nav-open", "");
          this.setAttribute("closed", "");
          this.removeAttribute("open", "");
        }
        this.ratio = Math.round(entry.intersectionRatio * 1000) / 1000;
        this.setStyles();
      });
    };

    setStyles() {
      document.body.style.setProperty(
        "--side-nav-layer-depth-ratio",
        this.ratio
      );
    }
  }
  window.customElements.define("side-nav", SideNav);
};
