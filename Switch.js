function SwitchMenuMinus(){
	// alert('aaa');
	MenuBool--;
	if(MenuBool<-1)MenuBool=2;
	SwitchMenu();
}

function SwitchMenuPlus() {
	MenuBool++;
	if(MenuBool>2)MenuBool=-1;
	SwitchMenu();
}

// $(function () {

// })

function addLoadEventListener(){
	/*
	$(document).on('click', '#SwitchButton' , function(){
		 SwitchMenu();
		 $('#SwitchButton').disabled = true;
	 });
	 */

	document.getElementById('SwitchMinusButton').onclick = function(){
		SwitchMenuMinus();
	}

	document.getElementById('SwitchPlusButton').onclick = function(){
		SwitchMenuPlus();
	}
}

function sleep(waitMsec) {
	var startMsec = new Date();

	// 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
	while (new Date() - startMsec < waitMsec);
}

function SwitchMenu() {
	// console.log(MenuBool);
	switch (MenuBool) {
		case -1:
			moveToObjectMenu();
			break;
		case 0:
			moveToPlayMenu();
			break;
		case 1:
			moveToBuyMenu();
			break;
		case 2:
			moveToAchievementMenu();
			break;

	}
}
function LoadMenu() {
	// console.log(MenuBool);
	switch (MenuBool) {
		case -1:
			loadObjectMenu();
			break;
		case 0:
			loadPlayMenu();
			break;
		case 1:
			loadBuyMenu();
			break;
		case 2:
			loadAchievementMenu();
			break;

	}
}

function moveToPlayMenu() {
	$('.tabSelect').attr('class','tab');
	$('#SwitchPlayMenuButton').attr('class','tabSelect');
	$('#Menu').attr('class','moveToPlayMenu');
	loadPlayMenu();
	// $('#Menu').css('height',$('#PlayMenu').height());
}

function moveToBuyMenu() {
	$('.tabSelect').attr('class','tab');
	$('#SwitchBuyMenuButton').attr('class','tabSelect');
	$('#Menu').attr('class','moveToBuyMenu');
	loadBuyMenu();
	// $('#Menu').css('height',$('#BuyMenu').height());
}

function moveToAchievementMenu() {
	$('.tabSelect').attr('class','tab');
	$('#SwitchAchievementMenuButton').attr('class','tabSelect');
	$('#Menu').attr('class','moveToAchievementMenu');
	loadAchievementMenu();
	// $('#Menu').css('height',$('#AchievementMenu').height());
}
function moveToObjectMenu() {
	$('.tabSelect').attr('class','tab');
	$('#SwitchObjectMenuButton').attr('class','tabSelect');
	$('#Menu').attr('class','moveToObjectMenu');
	loadObjectMenu();
	// $('#Menu').css('height',$('#ObjectMenu').height());
}
