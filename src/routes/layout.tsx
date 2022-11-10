// @ts-nocheck
import { component$, Slot } from '@builder.io/qwik';


export default component$(() => {
  return (
    <>

<header onclick="this.nextElementSibling.toggleNav()"></header>

      <side-nav side-nav>
        <aside></aside>
        <div placeholder></div>
      </side-nav>
 
      <div content layer="0">
        <main>
          <Slot />
        </main>
        <footer>aa</footer>
      </div>

      <dialog open layer="1" is="bottom-drawer">
        <div inert placeholder></div>
        <div content onmouseover="this.parentElement.setAttribute('touched','')" onmouseout="this.parentElement.removeAttribute('touched','')">
          <header>
            <div>
              <span>One</span>
              <button onclick="this.closest('dialog').toggleDrawerPosition()">
                <i class="las la-angle-up"></i>
              </button>
              <button
                aria-label="Close"
                onclick="this.closest('dialog').toggleDrawerVisibility()"
              >
                <i class="las la-times"></i>
              </button>
            </div>
          </header>
          <main hidden>fskdsfhk dsfjgfdsagjhdf</main>
        </div>
      </dialog>

      <dialog open layer="2" is="bottom-drawer">
        <div inert placeholder></div>
        <div content onmouseover="this.parentElement.setAttribute('touched','')" onmouseout="this.parentElement.removeAttribute('touched','')">
          <header>
            <div>
              <span>Two</span>
              <button onclick="this.closest('dialog').toggleDrawerPosition()">
                <i class="las la-angle-up"></i>
              </button>
              <button
                aria-label="Close"
                onclick="this.closest('dialog').toggleDrawerVisibility()"
              >
                <i class="las la-times"></i>
              </button>
            </div>
          </header>
          <main hidden>fskdsfhk dsfjgfdsagjhdf</main>
        </div>
      </dialog>

      <dialog open layer="3" is="bottom-drawer">
        <div inert placeholder></div>
        <div content onmouseover="this.parentElement.setAttribute('touched','')" onmouseout="this.parentElement.removeAttribute('touched','')">
          <header>
            <div>
              <span>Three</span>
              <button onclick="this.closest('dialog').toggleDrawerPosition()">
                <i class="las la-angle-up"></i>
              </button>
              <button
                aria-label="Close"
                onclick="this.closest('dialog').toggleDrawerVisibility()"
              >
                <i class="las la-times"></i>
              </button>
            </div>
          </header>
          <main hidden>fskdsfhk dsfjgfdsagjhdf</main>
        </div>
      </dialog>

      <footer>
        <a href="https://www.builder.io/" target="_blank">
          Made with ♡ by Builder.io
        </a>
      </footer>
    </>
  );
});
