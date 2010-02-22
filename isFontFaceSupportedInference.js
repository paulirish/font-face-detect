

/*!
 * isFontFaceSupported - Inference variant - v0.9 - 02/22/2010
 * 
 * Copyright (c) 2010 Mark G.
 * MIT license
 */

/* This is an object-inference based feature detection.
    It is not sniffing the browser userAgent, nor is it testing the actual feature
    Instead it is testing properties in the target browsers.
    It is also synchronous.
*/


var isFontFaceSupported = function(){
    
    var isNoSupport = false ||
        (('MozOpacity' in document.body.style)&&(!document.body.children)) ||
        ((window.opera)&&(!document.querySelector)) ||
        (m=/*@cc_on!@*/0) ||
        (((/source/.test(/a/.toString+''))||(window.chrome))&&(!window.openDatabase)) ||
        ((/a/.__proto__=='//')&&(!document.querySelector));
          
    return !isNoSupport;

}
