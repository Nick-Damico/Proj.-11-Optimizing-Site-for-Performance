var $anchors = $('div.columns > a');

$anchors.each( function () {
	var $this = $(this);
	var data = $this.attr('data-reveal-id');
});

$anchors.on('click', function (e) {	
	$('img.on').remove();
	var parent = $(e.target).parent();
	var src = parent.attr('data-img-url');
	var divId = parent.attr('data-reveal-id');
	var $modalTitle = $('#' + divId + '> h2');
	$newItem = $('<img class="on" src="' + src + '" />');
	
	$modalTitle.after($newItem);
	
});