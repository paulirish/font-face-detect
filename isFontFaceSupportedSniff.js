

/*!
 * isFontFaceSupported - Sniff variant - v0.9 - 12/19/2009
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


var isFontFaceSupported = function(){

  var ua = navigator.userAgent, parsed;

  if (/*@cc_on@if(@_jscript_version>=5)!@end@*/0) 
      return true;
  if (parsed = ua.match(/Chrome\/(\d+\.\d+\.\d+\.\d+)/))
      return parsed[1] >= '4.0.249.4';
  if ((parsed = ua.match(/Safari\/(\d+\.\d+)/)) && !/iPhone/.test(ua))
      return parsed[1] >= '525.13';
  if (/Opera/.test({}.toString.call(window.opera)))
      return opera.version() >= '10.00';
  if (parsed = ua.match(/rv:(\d+\.\d+\.\d+)[^b].*Gecko\//))
      return parsed[1] >= '1.9.1';    
              
  return false;

}
