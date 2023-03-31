/*
 * css-masonry <https://github.com/maliMirkec/css-masonry>
 *
 * Copyright (c) 2022, Silvestar Bistrović.
 * Released under the MIT License.
 */

'use strict';

module.exports = function(){
  window.addEventListener('load', () => {
    const $elem = document.querySelector('.js-page-loaded-in')
    if(!$elem) {
      console.log('Element not found. Please add `.js-page-loaded-in` class to the element.')
      return false
    }

    if ($elem) {
      // Wait for the page to finish loading
      const pageLoadedIn = performance.mark("pageLoadedIn")
      const loadTime = pageLoadedIn.startTime / 1000

      $elem.innerHTML += `Page loaded in ${loadTime}s.</p>`
    }
  })
}()
