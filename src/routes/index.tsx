import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div style="width:100%;">
      <builder-component model="page" api-key="f5a098163c3741e19503f02a69360619">
        Loading...
      </builder-component>
      <details is="details-extended">
        <summary>
          <i class="las la-angle-right toggle"></i>
          <div>Will my child's 504 Plan be implementedo?</div>
        </summary>
        <div>
          Yes. Similar to the Spring, case managers will reach out to students.
        </div>
      </details>
    </div>


  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
