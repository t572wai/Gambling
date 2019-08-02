var baseDisplay = null;
var cards;
var latch = 0;
var dealerPoint1;
var dealerPoint2;
var playerPoint1;
var playerPoint2;
var willClick;
var isSpanishBlackJack;
var isSpanishBlackJackDealer;
var dealerCards;
var playerCardsV;
var playerCardsS;
var upcardV;
var sdb = 0;
// var playerCardNum;

function PlaySpanishBlackJack(latch1){
	sdb = 0;
	achievement.HavePlayedSBJ = 1;
	dealerCards = new Array();
	playerCardsS = new Array();
	playerCardsV = new Array();
	latch = latch1;
	willClick = 0;
	dealerPoint1 = 0;
	dealerPoint2 = 0;
	playerPoint1 = 0;
	playerPoint2 = 0;
	isSpanishBlackJack = 0;
	isSpanishBlackJackDealer = 0;
	upcardV = 0;
	// playerCardNum = 0;
	if($("#joker__input").prop("checked")){
		cards = new Cards(1,1);
		jokerValueT='checked';
	}else {
		jokerValueT='';
		cards = new Cards(1,0);
	}
	// console.log("jokers:"+$("#joker__input__hidden").val());
	console.log('start SpanishBlackJack');
	baseDisplay = '<span id="latch">掛け金:' + latch + '</span>'+
								'<div id="BlackJackMenu">' +
								// '<button type="button" id="exitButton" name="exit">やめる</button>'+
								'<button type="button" name="high" id="HitButton">ヒット</button>'+
								'<button type="button" name="low" id="StandButton">スタンド</button>'+
								'<button type="button" name="double_down" id="DoubleDownButton">ダブル・ダウン</button>' +
								'<button type="button" name="surrender" id="SurrenderButton">サレンダー</button>' +
								'</div>' +
								'<div id="point">' +
								'</div>' +
								'<div id="playerCards"></div>' +
								'<div id="dealerCards"></div>';
	document.getElementById('MainMenu').innerHTML = baseDisplay;

	StartSBJ();

	// addExitBJEventListener();
	addSpHitEventListener();
	addSpStandEventListener();
	addSpDoubleDownEventListener();
	addSpSurrenderEventListener();
}

function NextCardsSBJ(){
	// console.log(willClick);
	if(willClick==0){
	// alert("");
		card = cards.getCard();
		// document.getElementById('MainMenu').innerHTML = baseDisplay + '<img src="' + card + '">';
		var img = document.getElementById('dealerCards').insertAdjacentHTML('beforeend', '<img src="./cardsPictures/torannpu-illust0.png">');
		// console.log(img);

		// if(cards.getCardsValue()!=10) dealerCards.push(card);
		while (cards.getCardsValue()==10) {
			card = cards.getCard();
		}
		dealerCards.push(card);

		dealerPoint1 += getDealerCardsValueSBJ(1);
		dealerPoint2 += getDealerCardsValueSBJ(2);
		// img.src=card;
	}
		do{
			card = cards.getCard();
			// document.getElementById('MainMenu').innerHTML = baseDisplay + '<img src="' + card + '">';
		}while (cards.getCardsValue()==10);
		var img = document.getElementById('playerCards').insertAdjacentHTML('beforeend', '<img src="' + card + '">');
		// console.log(img);

		playerCardsV.push(cards.getCardsValue());
		playerCardsS.push(cards.getCardsSuit());

		playerPoint1 += getPlayerCardsValueSBJ(1);
		playerPoint2 += getPlayerCardsValueSBJ(2);

		cardValue = getPlayerCardsValueSBJ(2);
		cardSuit = cards.getCardsSuit();

		//console.log(cards.getPlayerCardsValueBJ());

		// console.log("point1" + getPlayerCardsValueSBJ(1));
		// console.log("point2" + getPlayerCardsValueSBJ(2));
		// console.log("pp1:" + playerPoint1);
		// console.log("pp2:" + playerPoint2);

			// document.getElementById('point').innerHTML = "点数:" + playerPoint1;
			if(playerPoint1 == playerPoint2){
				document.getElementById('point').innerHTML = "点数:" + playerPoint1;
			}else {
					document.getElementById('point').innerHTML = "点数:" + playerPoint1 + "--" + playerPoint2;
			}

			checkSpDealerPoint();
			checkSpPlayerPoint();
		// addExitBJEventListener();
		// addHitEventListener();
		// addStandEventListener();
		// addDoubleDownEventListener();

		// console.log(cardValue);
		// console.log(cardSuit);
		setTimeout(function () {
			setCss(theme);
		},100);
}

function StartSBJ() {
	canDouble = 0;
	do {
		card = cards.getCard();
		// document.getElementById('MainMenu').innerHTML = baseDisplay + '<img src="' + card + '">';
	} while (cards.getCardsValue()==10);

	var img = document.getElementById('dealerCards').insertAdjacentHTML('beforeend', '<img src="' + card + '">');
	// console.log(img);

	upcardV = cards.getCardsValue();
	dealerCards.push(card);

	dealerPoint1 += getDealerCardsValueSBJ(1);
	dealerPoint2 += getDealerCardsValueSBJ(2);
	// img.src=card;

	do {
		card = cards.getCard();
		// document.getElementById('MainMenu').innerHTML = baseDisplay + '<img src="' + card + '">';
	} while (cards.getCardsValue() == 10);
	var img = document.getElementById('playerCards').insertAdjacentHTML('beforeend', '<img src="' + card + '">');
	// console.log(img);

	playerCardsV.push(cards.getCardsValue());
	playerCardsS.push(cards.getCardsSuit());

	playerPoint1 += getPlayerCardsValueSBJ(1);
	playerPoint2 += getPlayerCardsValueSBJ(2);

	do {
		card = cards.getCard();
		// document.getElementById('MainMenu').innerHTML = baseDisplay + '<img src="' + card + '">';
	} while (cards.getCardsValue()==11);
	var img = document.getElementById('dealerCards').insertAdjacentHTML('beforeend', '<img src="./cardsPictures/torannpu-illust0.png">');
	// console.log(img);

	dealerCards.push(card);

	dealerPoint1 += getDealerCardsValueSBJ(1);
	dealerPoint2 += getDealerCardsValueSBJ(2);
	// img.src=card;

	do {
		card = cards.getCard();
		// document.getElementById('MainMenu').innerHTML = baseDisplay + '<img src="' + card + '">';
	} while (cards.getCardsValue()==11);
	var img = document.getElementById('playerCards').insertAdjacentHTML('beforeend', '<img src="' + card + '">');
	// console.log(img);
	playerPoint1 += getPlayerCardsValueSBJ(1);
	playerPoint2 += getPlayerCardsValueSBJ(2);

	playerCardsV.push(cards.getCardsValue());
	playerCardsS.push(cards.getCardsSuit());

	cardValue = getPlayerCardsValueSBJ();
	cardSuit = cards.getCardsSuit();
	if(playerPoint1 == playerPoint2){
		document.getElementById('point').innerHTML = "点数:" + playerPoint1;
	}else {
			document.getElementById('point').innerHTML = "点数:" + playerPoint1 + "--" + playerPoint2;
	}

	if(playerPoint1==21 || playerPoint2 == 21){
		isBlackJack = 1;
	}

	if(dealerPoint1==21 || dealerPoint2==21){
		isBlackJackDealer = 1;
	}

	checkSpPlayerPoint();
	checkSpDealerPoint();
	setTimeout(function () {
			setCss(theme);
	},100);
}

function NextDealerCards() {
	card = cards.getCard();
	// document.getElementById('MainMenu').innerHTML = baseDisplay + '<img src="' + card + '">';
	var img = document.getElementById('dealerCards').insertAdjacentHTML('beforeend', '<img src="./cardsPictures/torannpu-illust0.png">');
	// console.log(img);

	// if(cards.getCardsValue()!=10) dealerCards.push(card);
	while (cards.getCardsValue()==10) {
		card = cards.getCard();
	}
	dealerCards.push(card);

	dealerPoint1 += getDealerCardsValueSBJ(1);
	dealerPoint2 += getDealerCardsValueSBJ(2);
}

function getPlayerCardsValueSBJ(i) {
	var CardValue = cards.getCardsValue();
	// console.log("CardValue:"+CardValue);
	// console.log(i);
	if(CardValue<=10 && CardValue>1){
		return CardValue;
	}else if (CardValue==1) {
		if(playerPoint1 != playerPoint2){
			return 1;
		}else if (CardValue==-1) {
			if(i==1){
				return 21 - playerPoint1;
			}else if (i==2) {
				return 21 - playerPoint2;
			}
		}else {
			if(i==1){
				return 11;
			}else if (i==2) {
				return 1;
			}
		}
	}else {
		return 10;
	}
}

function getDealerCardsValueSBJ(i) {
	var CardValue = cards.getCardsValue();
	// console.log("CardValue:"+CardValue);
	// console.log(i);
	if(CardValue<=10 && CardValue>1){
		return CardValue;
	}else if (CardValue==1) {
		if(dealerPoint1 != dealerPoint2){
			return 1;
		}else if (CardValue==-1) {
			if(i==1){
				return 21 - dealerPoint1;
			}else if (i==2) {
				return 21 - dealerPoint2;
			}
		}else {
			if(i==1){
				return 11;
			}else if (i==2) {
				return 1;
			}
		}
	}else {
		return 10;
	}
}

function checkSpPlayerPoint() {
	if(playerPoint1>21){
		console.log(playerPoint2);
		playerPoint1 = playerPoint2;
		document.getElementById('point').innerHTML = "点数:" + playerPoint1;
	}else if(playerPoint1 == playerPoint2){
		document.getElementById('point').innerHTML = "点数:" + playerPoint1;
	}else{
		document.getElementById('point').innerHTML = "点数:" + playerPoint1 + '--' + playerPoint2;
	}
	if (playerPoint2>21 && playerPoint1>21) {
		console.log("bust");
		// alert('バスト');
		// setLatchSBJ(0,0);
		// openRetryDialog();
		SpStandAction();
	}
}

function checkSpDealerPoint() {
	if(dealerPoint1>21){
		dealerPoint1 = dealerPoint2;
		// document.getElementById('point').innerHTML = "点数:" + playerPoint1;
	}
	if (dealerPoint1>21 && dealerPoint2>21) {
		// console.log("bust");
		willClick = 1;
		// alert('バスト');
		// setLatchBJ(0,0);
		// openRetryDialog();
	}else if (dealerPoint1>16) {
		willClick = 1;
	}
}

function setLatchSBJ(d) {
	latch = Math.ceil(d * latch);
	$('#latch').text('掛け金:' + latch);
}

function getLatchSBJ() {
	return latch;
}
