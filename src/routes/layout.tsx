import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>

      <Header />

      <dialog id="bottom-drawer-layer-3" open data-layer="3" is="bottom-drawer">
        <div
          data-placeholder
        ></div>
        <div data-content>
          <header>Three</header>
          <main hidden>fskdsfhk dsfjgfdsagjhdf</main>
        </div>
      </dialog>

      <dialog id="bottom-drawer-layer-2" open data-layer="2" is="bottom-drawer">
        <div
          data-placeholder
        ></div>
        <div data-content>
          <header>TWO</header>
          <main hidden>fskdsfhk dsfjgfdsagjhdf</main>
        </div>
      </dialog>

      <dialog id="bottom-drawer-layer-1" open data-layer="1" is="bottom-drawer">
        <div
          data-placeholder
        ></div>
        <div data-content>
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
