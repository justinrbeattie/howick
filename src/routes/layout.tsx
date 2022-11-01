import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>

      <Header />

      <dialog id="bottom-drawer-layer-3" open layer="3" is="bottom-drawer">
        <div
          inert
          placeholder
          onclick="this.parentElement.collapseDrawer()"
        ></div>
        <div content onclick="this.parentElement.expandDrawer()">
          <header>Three</header>
          <main hidden>fskdsfhk dsfjgfdsagjhdf</main>
        </div>
      </dialog>

      <dialog id="bottom-drawer-layer-2" open layer="2" is="bottom-drawer">
        <div
          inert
          placeholder
          onclick="this.parentElement.collapseDrawer()"
        ></div>
        <div content onclick="this.parentElement.expandDrawer()">
          <header>TWO</header>
          <main hidden>fskdsfhk dsfjgfdsagjhdf</main>
        </div>
      </dialog>

      <dialog id="bottom-drawer-layer-1" open layer="1" is="bottom-drawer">
        <div
          inert
          placeholder
          onclick="this.parentElement.collapseDrawer()"
        ></div>
        <div content onclick="this.parentElement.expandDrawer()">
          <header>ONE</header>
          <main hidden>fskdsfhk dsfjgfdsagjhdf</main>
        </div>
      </dialog>

      <div>
        <main>
          <Slot />
        </main>
        <footer>aa</footer>
      </div>
      <footer>
        <a href="https://www.builder.io/" target="_blank">
          Made with ♡ by Builder.io
        </a>
      </footer>
    </>
  );
});
