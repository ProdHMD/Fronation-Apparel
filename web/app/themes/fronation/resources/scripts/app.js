// Import external dependencies
import domReady from '@roots/sage/client/dom-ready';
import 'jquery';
import 'bootstrap';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faArrowRight, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
library.add(faArrowLeft, faArrowRight, faBagShopping, faFacebook, faTwitter, faInstagram, faYoutube);
dom.watch();

// Import custom modules
import { pages } from './modules/pages.js';
import { locomotive } from './modules/locomotive.js';

/**
 * Application entrypoint
 */
domReady(async () => {
  // Init locomotiveJS
  locomotive();

  // Init pagesJS
  pages();
});

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
if (import.meta.webpackHot) import.meta.webpackHot.accept(console.error);
