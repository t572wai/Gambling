// let latch = 0;
let CardsPoker;
let playerCardsPoker;
let dealerCardsPoker;
let baseDisplayPoker;
let latchP;

let turn;

function PlayPoker(latch1){
	achievement.HavePlayedPoker = 1;
	playerCardsPoker = new Array();
	dealerCardsPoker = new Array();
	latchP = latch1;
	if($("#joker__input").prop("checked")){
		CardsPoker = new Cards(1,1);
		// console.log('joker');
		jokerValueT='checked';
	}else {
		CardsPoker = new Cards(1,0);
		jokerValueT='';
		// console.log('no joker');
	}
	// latch = latchT;
	baseDisplayPoker = '<div id="latch">掛け金:'+latchP+'</div>'+
								'<div id="pokerMain">'+'<span id="turnPoker"></span>'+
									'<button id="changeButton" onclick="changeCard();console.log(playerCardsPoker+\' \'+dealerCardsPoker)">交換</button>'+
									'<button id="finButton" onclick="$(\'#finButton\').attr(\'disabled\',true);$(\'#changeButton\').attr(\'disabled\',true);changeDealerCard();setTimeout(function(){judgePoint(checkPlayerPointP(),checkDealerPointP())},2300);">ストップ</button>'+
								'</div>'+
								'<div id="PlayerCards"></div>'+
								'<div id="DealerCards"></div>';
	StartPoker();
}

function StartPoker() {
	$('#MainMenu').html(baseDisplayPoker);

//	openJanken();

	for(let i=0;i<5;i++){

		let card = CardsPoker.getCard();
		playerCardsPoker.push([CardsPoker.getCardsValue(),CardsPoker.getCardsSuit()]);

		$('#PlayerCards').append('<img class="haveCardsP" src="'+card+'">');
		CardsPoker.setUsingCards(parseInt(card.substring(31,card.length-4)));

		card = CardsPoker.getCard();
		dealerCardsPoker.push([CardsPoker.getCardsValue(),CardsPoker.getCardsSuit()]);
		$('#DealerCards').append('<img class="haveCardsD" src="./cardsPictures/torannpu-illust0.png">');
		CardsPoker.setUsingCards(parseInt(card.substring(31,card.length-4)));
		// console.log(CardsPoker.usingCards);


	}

	setTimeout(function(){
		setCss(theme);
		$('#PlayerCards').sortable();
		console.log(CardsPoker.usingCards);
		// Sortable.create('#PlayerCards',{group:'pokerCards',animation:100});
	},100);
}

function setLatchPoker(d) {
	latchP = Math.ceil(latchP*d);
	$('#latch').text('掛け金:' + latchP);
}
