// Incapsulation pattern

var myModule = (function() {
  // Private variable
  var memes = ['cats', 'doge', 'harambe'];
    
  var getMemes = function() {
         return memes;
  };
  
  // Returns variables that only allowed to return
  
  return {
    getMemes: getMemes
  };
})();

console.log(myModule.getMemes()); // массив мемов
console.log(myModule.memes); // undefined
