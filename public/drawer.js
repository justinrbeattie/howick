class BottomDrawer extends HTMLDialogElement {
  intersectionObserver;
  placeholder = this.firstElementChild;
  drawerContent = this.lastElementChild;
  drawerMain = this.lastElementChild.lastElementChild;
  inertElementsWhileExpanded = this.parentElement.querySelectorAll(
    "#" + this.id + " ~ dialog, #" + this.id + " ~ div > *"
  );
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
  }

  connectedCallback() {}

  disconnectedCallback() {
    this.intersectionObserver.disconnect();
  }

  initOpenDrawer() {
    if (this.setAttribute("expanded",'') && this.setAttribute("open",'')) {
      this.scrollTop = window.innerHeight;
    }
  }

  openDrawer() {
    this.style.removeProperty("display", "none");
    this.removeAttribute("inert", "");
    setTimeout(() => this.setAttribute("open", ""), 250);
  }

  closeDrawer() {
    this.removeAttribute("open", "");
    this.setAttribute("inert", "");
    setTimeout(() => this.style.setProperty("display", "none"), 500);
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

  disableDrawer() {
    this.setAttribute("disable", "");
  }

  enableDrawer() {
    this.removeAttribute("disable", "");
  }

  toggleDrawerDisabled() {
    if (this.hasAttribute("disabled")) {
      this.enableDrawer();
    } else {
      this.disableDrawer();
    }
  }

  _intersectionCallback = (entries, observer) => {
    entries.forEach((entry, i) => {
      if (entry.intersectionRatio > 0.1) {
        this.setAttribute("expanded", "");
        this.removeAttribute("collapsed", "");
        this.setInertState();
        this.drawerMain.removeAttribute("hidden");
      } else {
        this.setAttribute("collapsed", "");
        this.removeAttribute("expanded", "");
        this.unsetInertState();
        this.drawerMain.setAttribute("hidden", "");
      }
      const ratio = Math.round(entry.intersectionRatio * 1000) / 1000;
      document.body.style.setProperty(
        "--bottom-drawer-" + this.getAttribute("data-layer") + "-intersection-ratio",
        ratio
      );

      this.style.setProperty(
        "--bottom-drawer-current-intersection-ratio",
        ratio
      );
    });
  };

  setInertState() {
    for (let element of this.inertElementsWhileExpanded) {
      if (element.tagName === "MAIN") {
        element.setAttribute("hidden", "");
      }
      element.setAttribute("inert", "");
    }
  }

  unsetInertState() {
    for (let element of this.inertElementsWhileExpanded) {
      if (element.tagName === "MAIN") {
        element.removeAttribute("hidden", "");
      }
      element.removeAttribute("inert", "");
    }
  }
}
customElements.define("bottom-drawer", BottomDrawer, { extends: "dialog" });
