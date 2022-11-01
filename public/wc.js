class HTMLDetailsElementExtended extends HTMLDetailsElement {
    resizeObserver;
    constructor() {
      super();
      this.resizeObserver = new ResizeObserver(this._resizeCallback);
      this.firstElementChild.addEventListener("click", (e) => this.onClick(e));
      this.setHeightVariable();
      this.resizeObserver.observe(this);
    }
  
    disconnectedCallback() {
      this.resizeObserver.disconnect();
    }
  
    onClick(e) {
      this.setHeightVariable();
    }
  
    open() {
      this.setAttribute("open", "");
    }
  
    close() {
      this.removeAttribute("open");
    }
  
    toggle() {
      if (this.hasAttribute("open")) {
        this.close();
      } else {
        this.open();
      }
    }
  
    setHeightVariable() {
      const paddingTop = window
        .getComputedStyle(this, null)
        .getPropertyValue("padding-top");
      const paddingBottom = window
        .getComputedStyle(this, null)
        .getPropertyValue("padding-bottom");
      const height =
        this.firstElementChild.clientHeight +
        16 +
        this.lastElementChild.clientHeight +
        "px";
      this.style.setProperty(
        "--accordion-expanded-height",
        "calc(" + height + " + " + paddingTop + " + " + paddingBottom + ")"
      );
    }
  
    _resizeCallback = (entries, observer) => {
      entries.forEach((entry, i) => {
        this.setHeightVariable();
      });
    };
  }
  customElements.define("details-extended", HTMLDetailsElementExtended);
  