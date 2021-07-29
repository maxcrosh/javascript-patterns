// Facade helps to create easy intarfaces like jQuery

var $ = function (target) {
  return new MemeQuery(target);
};

function MemeQuery (target) {
  this.target = document.querySelector(target);
}

MemeQuery.prototype.html = function(html) {
  this.target.innerHTML = html;
  return this;
};

// Now it's possible to access DOM elements via $
$('#myParagraph').html('Meeemee').html('Some JS design patterns');
