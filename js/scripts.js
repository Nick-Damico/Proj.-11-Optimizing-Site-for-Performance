//	Get all image grid anchor elements
var $anchors = $('div.columns > a');

//	Add on 'click' event to anchor elements
$anchors.on('click', function (e) {	
	//Remove any image loaded into modal on click.
	  // This stops from multiple images showing up in modal display.
	$('img.on').remove();
	var parent = $(e.target).parent();
	//	Get <img> src path for photo, url path stored in custom attr data-img-url.
	var src = parent.attr('data-img-url');
	//	Get modal id for cliked element stored in data-reaveal-id attr.
	var divId = parent.attr('data-reveal-id');
	//	jQuery Object from divId, used to select modal.
	var $modalTitle = $('#' + divId + '> h2');
	//	Create <img> element
	$newItem = $('<img class="on" src="' + src + '" />');
	//	Append <img> element to selected modal for display of full size photo.
	$modalTitle.after($newItem);
	
});
