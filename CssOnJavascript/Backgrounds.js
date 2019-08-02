function setCssBackGround(themeT) {
	// console.log(getImg(themeT,1));
	$('body').css({'background-color':getColor(themeT,2),'background-image':getImg(themeT,1),'background-size':'cover'});
	$('body').css('background-size','cover');
	$('#logo').css({'background-color':getColor(themeT,11)});
	$('#logo').css({'border-left':'solid 5px '+getColor(themeT,12,)+''})
	$('.achievementOne').css({'background-color':getColor(themeT,9),'color':getColor(themeT,10)});
	$('.tabSelect').css({'background-color':getColor(themeT,4),'border':"0px"});
	$('.tab').css({'background-color':getColor(themeT,2),'border-bottom':"solid 4px "+getColor(themeT,4)});
	let playH = $('#PlayMenu').height();
	let buyH = $('#BuyMenu').height();
	let achievementH = $('#AchievementMenu').height();
	let objectH = $('#ObjectMenu').height();
	let MenuHeight = parseInt(Math.max(playH,buyH,achievementH,objectH)) + 50;
	// console.log(MenuHeight);
	$('#Menu').css('height',MenuHeight);
//	console.log(playH);
	// $('#Menu').css('height','auto');
}

// setCssBackGround(theme);
