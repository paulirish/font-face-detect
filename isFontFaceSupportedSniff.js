

/*!
 * isFontFaceSupported - Sniff variant - v0.8 - 11/30/2009
 * http://paulirish.com/2009/font-face-feature-detection/
 * 
 * Copyright (c) 2009 Paul Irish
 * MIT license
 */

/* Browser sniffing is bad. You should use feature detection.
   Sadly the only feature detect for @font-face is 
   asynchronous. So for those that *need* a synchronous solution,
   here is a sniff-based result:
*/


var isFontFaceSupported = (function(){
  // sniff specifics courtesy of prototype.js
  var ua = navigator.userAgent,
      isOpera = Object.prototype.toString.call(window.opera) == '[object Opera]',
      is = {
        IE:             !!window.attachEvent && !isOpera,
        Opera:          isOpera,
        WebKit:         ua.indexOf('AppleWebKit/') > -1,
        Gecko:          ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') === -1,
        MobileSafari:   /Apple.*Mobile.*Safari/.test(ua),
        
        Chrome:         /Chrome\b/.test(ua) // captital and word boundary to avoid chromeframe
      };
})();

// ie v 5.5 +
// gecko 1.9+
// webkit (unsure.. it was in saf 3.2)
// opera 10
// chrome version 4.0.249.4 +

