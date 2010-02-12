
// by harold kyle, based off of paul irish's work.

//call the function to Firebug Console
//isThisFontLoaded("Greta Text","Times New Roman",function(bool){console.debug('here');})



var isThisFontLoaded = (function(font,fallback,fn){
 
    var fontret,
        fontfaceCheckDelay = 5000;

		// IE supports EOT and has had EOT support since IE 5.
		// This is a proprietary standard (ATOW) and thus this off-spec,
		// proprietary test for it is acceptable. 
    if (!(!/*@cc_on@if(@_jscript_version>=5)!@end@*/0)) fontret = true;
 
    else {
    // Create variables for dedicated @font-face test
      var doc = document, docElement = doc.documentElement, 
          st  = doc.createElement('style'),
          spn = doc.createElement('span'),
          wid, nwid, body = doc.body,
          callback, isCallbackCalled;

      // The following is a font, only containing the - character. Thanks Ethan Dunham.
      doc.getElementsByTagName('head')[0].appendChild(st);
 
      spn.setAttribute('style','font:99px _,'+fallback+';position:absolute;visibility:hidden'); 
      if  (!body){
        body = docElement.appendChild(doc.createElement('fontface'));
      } 
 
      // the data-uri'd font only has the - character
      spn.innerHTML = '-------';
      spn.id        = 'fonttest';
 
      body.appendChild(spn);
      wid = spn.offsetWidth*spn.offsetHeight;

      spn.style.font = '99px '+font+',_,'+fallback;

      // needed for the CSSFontFaceRule false positives (ff3, chrome, op9)
      fontret = wid !== spn.offsetWidth*spn.offsetHeight;

      var delayedCheck = function(){
        if (isCallbackCalled) return;
        fontret = wid !== spn.offsetWidth*spn.offsetHeight;
        callback && (isCallbackCalled = true) && callback(fontret);
      }
 
      addEventListener('load',delayedCheck,false);
      setTimeout(delayedCheck,fontfaceCheckDelay);
    }
    function ret(){  return fontret || wid !== spn.offsetWidth*spn.offsetHeight; };
   // allow for a callback
    if(ret()&&(typeof fn === 'function')){
      (isCallbackCalled || fontret) ? fn(fontret) : (callback = fn);
    }
 
    return ret();
});

/* end font_face */

