gamble = {
	'BlackJack':0,
	'HighAndLow':0,
	'Nomal':0,
	'Black':0,
	'none':0,
	'SpanishBlackJack': 150,
	'Poker': 100,
	'Blue': 100,
	'Orange': 100,
	'Ichimatsu_Blue': 120,
	'Ichimatsu_Orange': 120,
	'LikeRainbow': 200,
	'Ink': 200,
	'Last_daily_sound': 120,
	'thinkingOfPeace': 120,
	'sniperConflict': 200,
	'StableYet': 200,
	'PlaceYourBet': 200,
	'Casino1': 120,
	'Casino2': 120,
	'customBGM': 1000,
	'StatueOfGamble': 500,
	'Mr.Gamble': 500
};

function Buy(){
	console.log('Bought');
	// var BeBuy = document.getElementById('buyGamble').value;
	// var BeBuy = document.getElementById('buyGamble').value;
	var BeBuy = $('#buyGambleSelect').val();
	console.log(BeBuy);

	/*
	window.addEventListener('DOMContentLoaded', function(e){
		var gambles = {'SpanishBlackJack': 100,	'Poker': 50};
		// var gambles = new Array("SpanishBlackJack", "Poker");
		document.querySelector('#buyGamble select').addEventListenet('change', function(e){
			if (typeof gambles[e.target.value] !== "undefined") {
				BeBuy = gambles[e.target.value];
			}else {
				BeBuy = 0;
			}
		});
	});
	*/
	var gameType = BeBuy.split(":");
	if(useMoney(gamble[gameType[1]], 0) == 1){
		console.log('CanBuy');
		switch (gameType[1]) {
			case 'SpanishBlackJack':achievement['HavePlayedSBJ']=0;
															achievementWork['HavePlayedSBJ']=0;
															break;
			case 'Poker':achievement['HavePlayedPoker']=0;
										achievementWork['HavePlayedPoker']=0;
										break;
			default:
		}
		buyGame();
		SaveData();
		addBuyEventListener();
	}else{
		console.log('Can\'tBuy');
		showDialog('アラート','買えないよ');
	}
	console.log(gamble[gameType[1]]);
	console.log(BeBuy);
	// if(BeBuy == "") alert('aaa');
}

function addBuyEventListener(){
	if(soldout==0){
		document.getElementById('BuyButton').onclick = function(){
			Buy();
		};
	}else {
		console.log("sold out");
	}
};



// var Arraygamble = ['SpanishBlackJack', 'Poker'];

function canBuy(BeBuy){
	if(money >= gamble[BeBuy]){
		return 1;
	}else {
		return 0;
	}
}
