// boughtGames = new Array();

buyMenuItem = "";

var buyMenuGambles = ["game:SpanishBlackJack",
								"game:Poker",
								"theme:Nomal",
								"theme:Black",
								"theme:Blue",
								"theme:Orange",
								"theme:Ichimatsu_Blue",
								"theme:Ichimatsu_Orange",
								"bgm:Last_daily_sound",
								"bgm:thinkingOfPeace",
								"bgm:Casino1",
								"bgm:Casino2",
								"object:StatueOfGamble",
								"object:Mr.Gamble"];
				/*'<option value="game:SpanishBlackJack">スパニッシュブラックジャック  150</option>' +
				'<option value="game:Poker">ポーカー  100</option>' +
				'<option value="theme:Blue">ブルー 100</option>' +
				// '<option value="theme:Nomal">ノーマル</option>' +
				// '<option value="theme:Black">ブラック</option>' +
				'<option value="theme:Ichimatsu_Blue">市松模様(青) 120</option>'+
				'<option value="bgm:Last_daily_sound">Last daily sound 120</option>'+
				'<option value="bgm:thinkingOfPeace">安らぎの思い 120</option>' +
				'<option value="bgm:Casino1">カジノ1 120</option>';*/

for(let buyMenuGamble of buyMenuGambles){
	// console.log(buyMenuGamble);
	let buyMenuGamblePart = buyMenuGamble.split(":");
	switch(buyMenuGamblePart[0]){
		case "game":
			addBuyMenuItem(gameName[buyMenuGamblePart[1]]+"  "+gamble[buyMenuGamblePart[1]],buyMenuGamble);
			break;
		case "theme":
			addBuyMenuItem(themeName[buyMenuGamblePart[1]]+"  "+gamble[buyMenuGamblePart[1]],buyMenuGamble);
			break;
		case "bgm":
			addBuyMenuItem(bgmName[buyMenuGamblePart[1]]+"  "+gamble[buyMenuGamblePart[1]],buyMenuGamble);
			break;
		case "object":
			addBuyMenuItem(objectName[buyMenuGamblePart[1]]+"  "+gamble[buyMenuGamblePart[1]],buyMenuGamble);
			break;
	}
}

buyMenuSize = buyMenuGambles.length+3;
buyMenuSizeDefault = buyMenuSize;

buyMenu =     '<span class="menuTitle">購入画面</span><div id="buyGamble">' +
				'<select class="buyGamble" name="buyGamble" id="buyGambleSelect" size = "'+buyMenuSize+'" onchange="preview();">' +
				buyMenuItem+
				'</select>' +
				'<button type="button" name="BuyButton" id="BuyButton">買う</button>' +
				'<div id="preObject">' +
				'</div>' +
				'</div>';
function loadBuyMenu() {
	MenuBool = 1;
	setCss(theme);
	buyMenuSize = buyMenuSizeDefault;
	// $('body').css('color', getColor(theme, 1,));
	// $('body').css('background-color', getColor(theme, 2, ));
	// // if(themeData[theme]=="image"){
	// 	$('body').css('background-image', getImg(theme,1));
		// console.log(getImg(theme,1));
	// }else {
	// 	$('body').css('background-image', "");
	// }
	if($('#allBGM').attr('src')!=bgm[BGM]){
		$('#allBGM').attr('src', bgm[BGM]);
	}


		$('#BuyMenu').html(buyMenu);
		// console.log(buyMenu);

		// console.log(boughtGames);
		for (var disGame of boughtGames) {
			// console.log(disGame);
			var gameType = disGame.split(":");
			if(gameType[0] == "game"){
				$("#buyGambleSelect").children('option[value="' + disGame + '"]').remove();
				buyMenu = $('#BuyMenu').html();
				// var size = parseInt($("#buyGambleSelect").attr('size'));
				if(buyMenuSize>1){
					buyMenuSize--;
					$("#buyGambleSelect").attr('size', buyMenuSize);
					// setBuyMenu();
				}else{
					buyMenu = '<p>Sold out</p>';
					// console.log(buyMenuSize);
					soldout = 1;
					$('#BuyMenu').text(buyMenu);
				}
				// console.log(boughtGames);
				// console.log(gameType[1]);
			}else if(gameType[0] == "theme"){
				$("#buyGambleSelect").children('option[value="'+disGame+'"]').remove();
				buyMenu = $('#BuyMenu').html();
				if(buyMenuSize>1){
					buyMenuSize--;
					// setBuyMenu();
					$('#buyGambleSelect').attr('size', buyMenuSize);
				}else{
					buyMenu = '<p>sold out</p>';
					soldout = 1;
					// console.log("sold out");
					document.getElementById('BuyMenu').innerHTML = buyMenu;
				}
			}else if (gameType[0] == "bgm") {
				// console.log("bgm");
				$('#buyGambleSelect').children('option[value="'+disGame+'"]').remove();
				buyMenu = $('#BuyMenu').html();
				// console.log(document.getElementById('buyGambleSelect').innerHTML);
				if(buyMenuSize>1){
					buyMenuSize--;
					// setBuyMenu();
					$('#buyGambleSelect').attr('size', buyMenuSize);
				}else{
					buyMenu = '<p>sold out</p>';
					soldout = 1;
					// console.log("sold out");
					document.getElementById('BuyMenu').innerHTML = buyMenu;
				}
			}else if(gameType[0] == "object"){
				$('#buyGambleSelect').children('option[value="'+disGame+'"]').remove();
				buyMenu = $('#BuyMenu').html();
				if(buyMenuSize>1){
					buyMenuSize--;
					$('#buyGambleSelect').attr('size', buyMenuSize);
				}else {
					buyMenu = '<p>sold out</p>';
					soldout = 1;
					$('#BuyMenu').html(buyMenu);
				}
			}
			// console.log("size"+buyMenuSize);
		}
		// console.log(buyMenu);
		addBuyEventListener();
		// MenuBool = 1;
		checkGetAchievement();
		setTimeout(function () {
			setCss(theme);
		},100);
}


function buyGame() {
		var BoughtGame = $('#buyGambleSelect').val();
		// console.log(BoughtGame);
		boughtGames.push(BoughtGame);
		if(BoughtGame.split(':')[0]=="object")boughtObjects.push(BoughtGame.split(':')[1]);
		preview();
		loadBuyMenu();
}

function setBuyMenu() {
	buyMenu =     '<span class="menuTitle">購入画面</span><div id="buyGamble">' +
					'<select class="buyGamble" name="buyGamble" id="buyGambleSelect" size = "'+buyMenuSize+'" onchange="preview();">' +
					buyMenuItem+
					'</select>' +
					'<button type="button" name="BuyButton" id="BuyButton">買う</button>' +
					'<div id="preObject">' +
					'</div>' +
					'</div>';
	// console.log(buyMenuItem);
	// document.getElementById("Menu").innerHTML = buyMenu;
	$('#BuyMenu').html(buyMenu);
}

function addBuyMenuItem(text, value) {
	buyMenuItem += 				'<option value="'+value+'">'+text+'</option>';
	buyMenuSizeDefault++;
	buyMenuSize++;
	setBuyMenu();
	// var size = parseInt($("#buyGambleSelect").attr('size'));
	// size++;
	// $("#buyGambleSelect").attr('size', size);
	//
}

function preview() {
	var nowPre = $("#buyGambleSelect").val();
	let nowPres = nowPre.split(":")
	if(nowPres[0]=="theme"){
		// $('body').css('color', getColor(nowPres[1], 1,));
		// $('body').css('background-color', getColor(nowPres[1], 2, ));
		// // if(themeData[nowPres[1]]=="image"){
		// 	$('body').css('background-image', getImg(nowPres[1],1));
			// console.log(getImg(nowPres[1],1));
			setCss(nowPres[1]);
		// }else {
		// 	$('body').css('background-image', "");
		// }
	}else {
		setCss(theme);
		// $('body').css('color', getColor(theme, 1,));
		// $('body').css('background-color', getColor(theme, 2, ));
		// // if(themeData[theme]=="image"){
		// 	$('body').css('background-image', getImg(theme,1));
			// console.log(getImg(theme,1));
		// }else {
		// 	$('body').css('background-image', "");
		// }
	}
	if(nowPres[0]=="bgm"){
		$('#allBGM').attr('src', bgm[nowPres[1]]);
	}else {
		if($('#allBGM').attr('src')!=bgm[BGM]){
			$('#allBGM').attr('src', bgm[BGM]);
		}
	}
	if(nowPres[0]=='object'){
		$('#preObject').html('<img src="'+objectImg[nowPres[1]]+'" style="'+setObjectSize(nowPres[1])+'">');
		setTimeout(function () {
			setCss(theme);
		},0);
	}else {
		$('#preObject').html('');
	}
	// console.log(BGM);
}
