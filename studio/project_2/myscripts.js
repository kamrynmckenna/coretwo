document.addEventListener('DOMContentLoaded',function(event){
  window.onload = function() { 
    
// array with text to type
  var dataText = [ 
"Finally, as the sky began to grow light in the morning, I’d feel that I might be drifting off. But this wasn’t sleep. My fingertips were just barely brushing against the outermost edge of sleep."];
  //text input caret
  var caret = "\u258B";
  
  // type a text
  // keep calling itself until the text is finished
  function type(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to text + caret
      document.querySelector("#text").textContent = text.substring(0, i+1) + caret;

      // delay and call this function again for next character
      setTimeout(function() {
        type(text, i + 1, fnCallback)
      }, 70);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 1500);
    }
  }
  // start animation for a text in the dataText array
   function StartAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartAnimation(0);
        }, 1000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      type(dataText[i], 0, function(){
      // after callback (and whole text has been animated), start next text
      StartAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartAnimation(0);
  }
});



