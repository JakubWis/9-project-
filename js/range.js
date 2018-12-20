const rangeInput = document.querySelector('#rangein');
const output = document.querySelector('#rangeout');

function setDefaultState() {
  output.value = rangeInput.value;
}

rangeInput.addEventListener('input', function(){
  output.value = this.value;
});

document.addEventListener('DOMContentLoaded', function(){
  setDefaultState();
});

/////////////////////////////////////////////////////////////////////////

// .firefox
var isFF = true;
var addRule = (function (style) {
  var sheet = document.head.appendChild(style).sheet;
  return function (selector, css) {
    if ( isFF ) {
      if ( sheet.cssRules.length > 0 ) {
        sheet.deleteRule( 0 );
      }
    
      try {
        sheet.insertRule(selector + "{" + css + "}", 0);
      } catch ( ex ) {
        isFF = false;
      }
    }    
  };
})(document.createElement("style"));


// .chrome styling
$( 'input' ).on( 'input', function( ) {
  $( this ).css( 'background', 'linear-gradient(to right, #f58220 0%, #f58220 '+(this.value/168)*100 +'%, #ddd ' +(this.value/168)*100 + '%, #ddd 100%)' );
  		console.log((this.value/168)*100 );
} );