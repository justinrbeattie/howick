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

      <bottom-drawer open layer="1" >
        <div inert placeholder></div>
        <div content>
          <header>
            <div>
              <span>One</span>
              <button onclick="this.closest('bottom-drawer').toggleDrawerPosition()">
                <i class="las la-angle-up"></i>
              </button>
              <button
                aria-label="Close"
                onclick="this.closest('bottom-drawer').toggleDrawerVisibility()"
              >
                <i class="las la-times"></i>
              </button>
            </div>
          </header>
          <main hidden>fskdsfhk dsfjgfdsagjhdf</main>
        </div>
      </bottom-drawer>

      <bottom-drawer open layer="2" >
        <div inert placeholder></div>
        <div content>
          <header>
            <div>
              <span>Two</span>
              <button onclick="this.closest('bottom-drawer').toggleDrawerPosition()">
                <i class="las la-angle-up"></i>
              </button>
              <button
                aria-label="Close"
                onclick="this.closest('bottom-drawer').toggleDrawerVisibility()"
              >
                <i class="las la-times"></i>
              </button>
            </div>
          </header>
          <main hidden>fskdsfhk dsfjgfdsagjhdf</main>
        </div>
      </bottom-drawer>

      <bottom-drawer open layer="3" >
        <div inert placeholder></div>
        <div content>
          <header>
            <div>
              <span>Three</span>
              <button onclick="this.closest('bottom-drawer').toggleDrawerPosition()">
                <i class="las la-angle-up"></i>
              </button>
              <button
                aria-label="Close"
                onclick="this.closest('bottom-drawer').toggleDrawerVisibility()"
              >
                <i class="las la-times"></i>
              </button>
            </div>
          </header>
          <main hidden>fskdsfhk dsfjgfdsagjhdf</main>
        </div>
      </bottom-drawer>

      <footer>
        <a href="https://www.builder.io/" target="_blank">
          Made with ♡ by Builder.io
        </a>
      </footer>
    </>
  );
});
