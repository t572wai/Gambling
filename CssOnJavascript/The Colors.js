function setColor(themeT) {
	$('body').css('color',getColor(themeT,1));
	$('a').css('color',getColor(themeT,1));
	$('h1 > img').attr('src','./Setting/Logo'+themeLogo[themeT]+'.png');
	$('.helpDialog a').css('color', 'black');
}
