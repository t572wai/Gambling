var baseDisplay = null;
var cards;
var latch = 0;
var dealerPoint1;
var dealerPoint2;
var playerPoint1;
var playerPoint2;
var willClick;
var isBlackJack;
var isBlackJackDealer;
var dealerCards;
var db = 0;

function PlayBlackJack(latch1){
	db = 0;
	didHit=0;
	achievement.HavePlayedBJ = 1;
	dealerCards = new Array();
	latch = latch1;
	willClick = 0;
	dealerPoint1 = 0;
	dealerPoint2 = 0;
	playerPoint1 = 0;
	playerPoint2 = 0;
	isBlackJack = 0;
	isBlackJackDealer = 0;
	if($("#joker__input").prop("checked")){
		cards = new Cards(1,1);
		jokerValueT='checked';
	}else {
		cards = new Cards(1,0);
		jokerValueT='';
	}
	console.log("jokers:"+$("#joker__input__hidden").val());
	console.log('start BlackJack');
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

	StartBJ();

	// addExitBJEventListener();
	addHitEventListener();
	addStandEventListener();
	addDoubleDownEventListener();
	addSurrenderEventListener();
}

function NextCardsBJ(){
	didHit=1;
	if(willClick==0){
	// alert("");
		card = cards.getCard();
		// document.getElementById('MainMenu').innerHTML = baseDisplay + '<img src="' + card + '">';
		var img = document.getElementById('dealerCards').insertAdjacentHTML('beforeend', '<img src="./cardsPictures/torannpu-illust0.png">');
		console.log(img);

		dealerCards.push(card);

		dealerPoint1 += getDealerCardsValueBJ(1);
		dealerPoint2 += getDealerCardsValueBJ(2);
		// img.src=card;
	}
		card = cards.getCard();
		// document.getElementById('MainMenu').innerHTML = baseDisplay + '<img src="' + card + '">';
		var img = document.getElementById('playerCards').insertAdjacentHTML('beforeend', '<img src="' + card + '">');
		console.log(img);

		playerPoint1 += getPlayerCardsValueBJ(1);
		playerPoint2 += getPlayerCardsValueBJ(2);

		cardValue = getPlayerCardsValueBJ(2);
		cardSuit = cards.getCardsSuit();

		//console.log(cards.getPlayerCardsValueBJ());

		console.log("point1" + getPlayerCardsValueBJ(1));
		console.log("point2" + getPlayerCardsValueBJ(2));
		console.log("pp1:" + playerPoint1);
		console.log("pp2:" + playerPoint2);

			// document.getElementById('point').innerHTML = "点数:" + playerPoint1;
			if(playerPoint1 == playerPoint2){
				document.getElementById('point').innerHTML = "点数:" + playerPoint1;
			}else {
					document.getElementById('point').innerHTML = "点数:" + playerPoint1 + "--" + playerPoint2;
			}

			checkDealerPoint();
			checkPlayerPoint();

		// addExitBJEventListener();
		// addHitEventListener();
		// addStandEventListener();
		// addDoubleDownEventListener();

		console.log(cardValue);
		console.log(cardSuit);
		setTimeout(function () {
			setCss(theme);
		},100);
}

function StartBJ() {
	card = cards.getCard();
	// document.getElementById('MainMenu').innerHTML = baseDisplay + '<img src="' + card + '">';
	var img = document.getElementById('dealerCards').insertAdjacentHTML('beforeend', '<img src="' + card + '">');
	console.log(img);

	dealerCards.push(card);

	dealerPoint1 += getDealerCardsValueBJ(1);
	dealerPoint2 += getDealerCardsValueBJ(2);
	// img.src=card;


	card = cards.getCard();
	// document.getElementById('MainMenu').innerHTML = baseDisplay + '<img src="' + card + '">';
	var img = document.getElementById('playerCards').insertAdjacentHTML('beforeend', '<img src="' + card + '">');
	console.log(img);
	playerPoint1 += getPlayerCardsValueBJ(1);
	playerPoint2 += getPlayerCardsValueBJ(2);

	card = cards.getCard();
	// document.getElementById('MainMenu').innerHTML = baseDisplay + '<img src="' + card + '">';
	var img = document.getElementById('dealerCards').insertAdjacentHTML('beforeend', '<img src="./cardsPictures/torannpu-illust0.png">');
	console.log(img);

	dealerCards.push(card);

	dealerPoint1 += getDealerCardsValueBJ(1);
	dealerPoint2 += getDealerCardsValueBJ(2);
	// img.src=card;


	card = cards.getCard();
	// document.getElementById('MainMenu').innerHTML = baseDisplay + '<img src="' + card + '">';
	var img = document.getElementById('playerCards').insertAdjacentHTML('beforeend', '<img src="' + card + '">');
	console.log(img);
	playerPoint1 += getPlayerCardsValueBJ(1);
	playerPoint2 += getPlayerCardsValueBJ(2);

	cardValue = getPlayerCardsValueBJ();
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

	checkPlayerPoint();
	checkDealerPoint();
	setTimeout(function () {
		setCss(theme);
	},100);
}

function getPlayerCardsValueBJ(i) {
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

function getDealerCardsValueBJ(i) {
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

function checkPlayerPoint() {
	if(playerPoint1>21){
		playerPoint1 = playerPoint2;
		document.getElementById('point').innerHTML = "点数:" + playerPoint1;
	}else if(playerPoint1 == playerPoint2){
		document.getElementById('point').innerHTML = "点数:" + playerPoint1;
	}else{
		document.getElementById('point').innerHTML = "点数:" + playerPoint1 + '--' + playerPoint2;
	}
	if (playerPoint2>21 && playerPoint1>21) {
		console.log("bust");
		StandAction();
		// alert('バスト');
		// setLatchBJ(0,0);
		// openRetryDialog();
	}
}

function checkDealerPoint() {
	if(dealerPoint1>21){
		dealerPoint1 = dealerPoint2;
		// document.getElementById('point').innerHTML = "点数:" + playerPoint1;
	}
	if (dealerPoint1>21 && dealerPoint2>21) {
		console.log("bust");
		willClick = 1;
		// alert('バスト');
		// setLatchBJ(0,0);
		// openRetryDialog();
	}else if (dealerPoint1>16) {
		willClick = 1;
	}
}

function setLatchBJ(d) {
	latch = Math.ceil(d * latch);
	$('#latch').text('掛け金:' + latch);
}

function getLatchBJ(){
	return latch;
}
