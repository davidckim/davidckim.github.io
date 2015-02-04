$(document).ready(function() {

  $('.draggable').draggable();
  $('.draggable').mousedown(function() {
  	var $text_box = $(this).find('p');
  	$text_box.fadeOut('slow')
  });
  
});


function bindEvents() {
  bindAbout();
  bindPortfolio();
  bindContact();
  bindBlog();
}

function bindAbout () {
  $('#about').click(function(e) {
  	e.preventDefault();
  });
}

function bindPortfolio () {
  $('#portfolio').click(function(e) {
  	e.preventDefault();
  });
}

function bindContact () {
  $('#contact').click(function(e) {
  	e.preventDefault();
  });
}

function bindBlog () {
  $('#blog').click(function(e) {
  	e.preventDefault();
  });
}