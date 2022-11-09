import { component$, useClientEffect$, useStyles$ } from '@builder.io/qwik';
import { QwikCity, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { QwikPartytown } from './components/partytown/partytown';
import { RouterHead } from './components/router-head/router-head';

import globalStyles from './global.css?inline';
import {webComponentsInit} from '../public/index.js';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCity> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  useStyles$(globalStyles);
  useClientEffect$(() => {
    webComponentsInit();
  }, {eagerness:'load'});
  return (
    <QwikCity>
      <head>
        <meta charSet="utf-8" />
        <QwikPartytown forward={["dataLayer.push"]} />
        <script async src="https://cdn.builder.io/js/webcomponents"></script>
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <script src="//unpkg.com/@ungap/custom-elements/es.js"></script>
      </head>

      <body lang="en" style="--side-nav-layer-depth-ratio:0;" onscroll="">
        <RouterOutlet />
        <ServiceWorkerRegister />
        <script src="./custom-elements.min.js"></script>
      </body>
    </QwikCity>
  );
});



