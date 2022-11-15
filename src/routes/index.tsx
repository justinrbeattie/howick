import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <builder-component model="page" api-key="f5a098163c3741e19503f02a69360619">
        Loading...
      </builder-component>

      <builder-component model="global-symbols" api-key="f5a098163c3741e19503f02a69360619">
      </builder-component>

    </>

  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
