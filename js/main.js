document.addEventListener("DOMContentLoaded", function() {

  function init() {
  	tabController();
  }

  function tabController() {
  	var tab = document.getElementsByClassName('nav-item');
  	for ( var i = 0; i < 3; i++ ) {
  		(function(i) {
		  	tab[i].addEventListener('click', function(event) {
		  		for ( var n = 0; n < 3; n++ ) {
		  			tab[n].classList.remove('active');
		  		}
		  		event.preventDefault();
		  		tab[i].className += " active";
		  		changeContent(tab[i].getAttribute('id'));
		  	});
  		})(i);
  	}
  }

 	function changeContent(tab) {
 		var content = document.getElementsByTagName('p');
 		if ( tab === 'about' ) {
 			console.log('about tab');
 		} else if ( tab === 'projects' ) {
 			console.log('projects tab');
 		} else if ( tab === 'contact' ) {
 			console.log('contact tab');
 		} else {
 			console.log('uh...')
 		}
 	}

  init();

});