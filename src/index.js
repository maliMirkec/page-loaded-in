/*
 * css-masonry <https://github.com/maliMirkec/css-masonry>
 *
 * Copyright (c) 2022, Silvestar Bistrović.
 * Released under the MIT License.
 */

'use strict';

const seconds = (selector) => {
  window.addEventListener('load', () => {
    console.log(selector);

    if(!selector) {
      return 'Provide selector.'
    }

    const $elem = document.querySelector(selector)

    console.log($elem);

    if(!selector) {
      return 'Element not found.'
    }

    if ($elem) {
      // Wait for the page to finish loading
      const pageLoadedIn = performance.mark("pageLoadedIn")
      const loadTime = pageLoadedIn.startTime / 1000

      $elem.innerHTML += `Page loaded in ${loadTime}s.</p>`
    }
  })
}

export default seconds
