

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

/*  
Some other fellows use something along these lines:
var t = {
    ua: function (z) {
        if (z) {
            for (var A = 0; A < this.matchers.length; A++) {
                var C = this.matchers[A][1];
                if (C.call(null, z)) {
                    var B = this.matchers[A][0];
                    return {
                        fonts: ( !! B),
                        format: B
                    }
                }
            }
            return {
                fonts: false
            }
        }
    },
    matchers: [],
    add: function (A, z) {
        this.matchers.push([A, z])
    }
};
t.add("standards", function (B) {
    var A = B.match(/Firefox\/(\d+\.\d+)/);
    if (A) {
        var z = A[1];
        return parseFloat(z) >= 3.5
    }
});
t.add("standards", function (B) {
    if (B.match(/Chrome/)) {
        return false
    }
    if (B.match(/iPhone/)) {
        return false
    }
    var A = B.match(/Safari\/(\d+\.\d+)/);
    if (A) {
        var z = A[1];
        return parseFloat(z) >= 525.13
    }
});
t.add("explorer", function (B) {
    var A = B.match(/MSIE\s(\d+\.\d+)/);
    if (A) {
        var z = A[1];
        return parseFloat(z) >= 6
    }
});
*/
