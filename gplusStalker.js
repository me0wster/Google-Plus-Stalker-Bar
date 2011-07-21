$(document).ready(function() {
	var $firstDiv = $('.a-Eo-T');
	var $2ndDiv = $('.a-U-T');
	var $content = $('#content');
	
	var $stalkerBar = $(document.createElement('div'));
	
	$stalkerBar.attr({
		'id': 'stalkerbar',
		'name' : 'stalkerbar'
	});
	
	$stalkerBar.css({
		'position' : 'fixed',
		'top' : '0px',
		'width' : '100%',
		'z-index' : 100
	});
	
	$firstDiv.appendTo($stalkerBar);
	$2ndDiv.appendTo($stalkerBar);
	$stalkerBar.insertBefore($content);
	
	$content.css({
		'top' : $stalkerBar.height() + 'px' 
	});
});