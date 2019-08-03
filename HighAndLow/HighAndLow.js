
var latch = 0;
prize = 1*latch;
var card = null;
var baseDisplay = null;
var cards;
var cardValue = 0;

	function init() {
		// achievement.HavePlayedHAL = 1;

		latch = 0;
		prize = 1*latch;

		card = null;

		baseDisplay = null;

		// cards = new Cards(1,0);
		if($("#joker__input").prop("checked")){
			cards = new Cards(1,1);
			// console.log('joker');
			jokerValueT='checked';
		}else {
			// console.log('not joker');
			cards = new Cards(1,0);
			jokerValueT='';
		}
		// console.log("joker:"+$("#joker__input").prop('checked'));

		cardValue = 0;
	}



function PlayHighAndLow(latch1){
	init();
	// alert('aaaaa');

	latch = latch1;
	prize = 1*latch;

	baseDisplay = '<span id="latch">掛け金:' + latch + '</sapn>'+
								'<button type="button" id="exitButton" name="exit">やめる</button>'+
								'<button type="button" name="high" id="HighButton">High</button>'+
								'<button type="button" name="low" id="LowButton">Low</button>'+
								'<img id="cardImg" src="torannpu-illust11.png">';

	document.getElementById('MainMenu').innerHTML = baseDisplay;

	NextCardsHAL();

	addLowEventListener();
	addHighEventListener();
	addExitHALEventListener();

	// console.log(card);
	// console.log(cards.getUsedCards());


	setTimeout(function () {
		// console.log("llll");
		setCss(theme);
	},100);
	// return '<img src="' + card + '" id="imgOfCard"/>'

};

function getNowCardHAL() {
	return card;
}


function NextCardsHAL(){
	// alert("");
		// console.log(getNowCardHAL());
		if(getNowCardHAL()!=null){
			cards.dropUsingCards(parseInt(getNowCardHAL().substring(31,getNowCardHAL().length-4)));
		}
		card = cards.getCard();
		cards.setUsingCards(parseInt(card.substring(31,card.length-4)));
		// console.log(cards.usingCards);
		// document.getElementById('MainMenu').innerHTML = baseDisplay + '<img src="' + card + '">';
		var img = document.getElementById('cardImg');
		img.src=card;
		cardValue = cards.getCardsValue();
		cardSuit = cards.getCardsSuit();
		// console.log(cardValue);
		// console.log(cardSuit);

		// setTimeout(function () {
		// 	console.log("llll");
		// 	setCss(theme);
		// },10);

		setTimeout(function () {
			setCss(theme);
		},1000);
}
/*
function getNowCardsValue(){
	return cardValue;
}

function getNowCardsSuit(){
	return cardSuit;
}*/

function getLatch() {
	return latch;
}

function setLatchHAL(d, card){
	// console.log(card);
	latch = Math.ceil(latch * d);
//	var myLatch = document.getElementById('latch').innerHTML;
//	myLatch = "掛け金:" + latch;
//  	document.getElementById('latch').innerHTML = myLatch;
//	console.log(myLatch);
	baseDisplay = '掛け金:' + latch + '<button type="button" id="exitButton" name="exit">やめる</button><button type="button" name="high" id="HighButton">High</button><button type="button" name="low" id="LowButton">Low</button><img id="cardImg" src="">';
	document.getElementById('MainMenu').innerHTML = baseDisplay;

	var img = document.getElementById('cardImg');
	img.src=card;

	addLowEventListener();
	addHighEventListener();
	addExitHALEventListener();


}

function getPrize(){
	return prize;
}


function getCardsHAL() {
	return cards;
}

/*
function addPlayEventListener(){
	document.getElementById('PlayButton').onclick = PlayHighAndLow();
};
*/
