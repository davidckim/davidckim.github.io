document.addEventListener("DOMContentLoaded", function() {

  function init() {
  	tabController();
  }

  function tabController() {
  	var tab = document.getElementsByClassName('nav-item');
  	for ( var i = 0; i < 3; i++ ) {
  		(function(i) {
		  	tab[i].addEventListener('click', function(event) {
		  		event.preventDefault();
		  		tab[i].className += " active";
		  		console.log(tab[i].className);
		  	});
  		})(i);
  	}
  }

  init();

});