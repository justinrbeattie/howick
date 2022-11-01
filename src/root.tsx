import { component$, useStyles$ } from '@builder.io/qwik';
import { QwikCity, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { QwikPartytown } from './components/partytown/partytown';
import { RouterHead } from './components/router-head/router-head';

import globalStyles from './global.css?inline';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCity> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  useStyles$(globalStyles);

  return (
    <QwikCity>
      <head>
        <meta charSet="utf-8" />
        <QwikPartytown forward={["dataLayer.push"]} />;
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <builder-component model="page" api-key="f5a098163c3741e19503f02a69360619">
          Loading...
        </builder-component>
        <ServiceWorkerRegister />
        <script async src="https://cdn.builder.io/js/webcomponents"></script>
      </body>
    </QwikCity>
  );
});
