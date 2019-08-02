$(function(){
	$('#doResetDialog').dialog({
		autoOpen: false,
		width:500,
		modal:true,

		buttons: [
			{
				text:'はい',
				click: function(){
					$('#doResetDialog').dialog('close');
					removeData();
					// LoadData();
				}
			},
			{
				text: 'いいえ',
				click: function(){
					$('#doResetDialog').dialog('close');
				}
			}
		]
	});
});

function removeData() {
	resetData();
	LoadData();
}

function addResetEventListener() {
	$(document).on('click', '#ResetButton', function() {
		if(HavePlayed==1){
				$('#doResetDialog').dialog('open');
			}else {
				showDialog('アラート','データがありません');
			}
	});
}

function resetData(){
	console.log("reset");
	localStorage.removeItem($('#userName').val());
	// boughtGames = new Array();
	// boughtGames.push("game:BlackJack");
	// boughtGames.push("game:HighAndLow");
	// boughtGames.push("theme:Nomal");
	// boughtGames.push("theme:Black");
	// boughtGames.push("bgm:none");
	BoughtBGM = new Array();
	// console.log(boughtGames);
	achievement = JSON.stringify(achievementFirst);
	achievement = JSON.parse(achievement);
	achievementWork = JSON.stringify(achievement);
	achievementWork = JSON.parse(achievementWork);
	BGM = "none";
	didAccept= JSON.stringify(didAcceptFirst);
	didAccept = JSON.parse(didAccept);
	boughtObjects = new Array();
	buyMenuItem = "";
	loan = 0;
	NumGameOver = 0;
	boughtGames = JSON.stringify(boughtGamesFirst);
	boughtGames = JSON.parse(boughtGames);
	// ruleGamesText = ruleGamesTextFirst;

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
	//				'<option value="game:SpanishBlackJack">スパニッシュブラックジャック  150</option>' +
	// 				'<option value="game:Poker">ポーカー  100</option>' +
	// 				'<option value="theme:Blue">ブルー 100</option>' +
	// 				// '<option value="theme:Nomal">ノーマル</option>' +
	// 				// '<option value="theme:Black">ブラック</option>' +
	// 				'<option value="theme:Ichimatsu_Blue">市松模様 120</option>'+
	// 				'<option value="bgm:Last_daily_sound">Last daily sound 120</option>'+
	// 				'<option value="bgm:thinkingOfPeace">安らぎの思い 120</option>';

	buyMenuSize = buyMenuGambles.length + 3;
	buyMenuSizeDefault = buyMenuSize;
	setBuyMenu();
	// buyMenu =     '<div id="buyGamble">' +
	// 				'<select class="buyGamble" name="buyGamble" id="buyGambleSelect" size = "'+buyMenuSize+'" onchange="preview();">' +
	// 				buyMenuItem+
	// 				'</select>' +
	// 				'<button type="button" name="BuyButton" id="BuyButton">買う</button>'+
	// 				'<div id="preObject"></div>'+
	// 				'</div>' ;
	theme = "Nomal";
	buyMenuSizeDefault = buyMenuSize;
	money = 0;
}
