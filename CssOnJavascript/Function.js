function setCssFunction(themeT) {
	$('.haveCardsP').click(function () {
		$(this).attr('class','selectedP');
		// $(this).sortable();
		setCssFunction(themeT);
	});
	$('.selectedP').click(function () {
		$(this).attr('class','haveCardsP');
		// $(this).sortable();
		setCssFunction(themeT);
	});
	// $('#PlayerCards').sortable();
}
