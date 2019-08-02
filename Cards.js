/*
	新しくデックわ作るときはdeck=new Cards();
	そこからカードを一枚引くなら、deck.getCard();
	そして、deck.setUsingCards()に追加

	カード仕様->./cardsPictures/torannpu-illust11.pngといった、ソースが返される。
	checkCard()に渡すと、[value,suit]が返される。
	value->ジョーカーなら-1,
	suit->クラブ=1,ダイヤ=2,ハート=3,スペード=4,ジョーカー=5

 */

class Cards {
	// var cards;
	// var usedCard;
	// var bool;
	// var joker;
	constructor(bool, joker) {
		this.cards = new Array();
		this.usingCards = new Array();
		for(var i=1; i<54; i++){
			// console.log();
			this.cards.push('./cardsPictures/torannpu-illust' + i + '.png');
		}
		this.usedCard = new Array();
		this.usedCard = [];
		this.bool = bool;
		this.joker = joker;
		// if(joker==1){
		// 	this.numOfCards = 53;
		// }else {
		// 	this.numOfCards = 52;
		// }
		this.value = 0;
	}

	didUse(num){
		for(var i of this.usedCard){
			// console.log(i);
			if(num == i){
				return 1;
			}
		}
		return 0;
	}

	getCard(){
		if(this.bool==1){
			do{
					 var random = Math.floor(Math.random() * 53) + 1;
					 if(this.joker == 0 && random == 53) {
						 console.log("pick joker");

					 }
					 if(this.usedCard.length==53){
						 this.usedCard = this.usingCards;
						 showDialog('アラート','シャッフルしました');
					 }else if (this.usedCard.length == 52 && this.joker == 0) {
						 this.usedCard = this.usingCards;
						 showDialog('アラート','シャッフルしました');
					 }
				 }while(this.didUse(random) == 1 || (this.joker == 0 && random == 53));
			this.usedCard.push(random);
			this.value = random;
			// console.log(random);
			// console.log(this.joker);
			return this.cards[random-1];
		}else {
			var random = Math.floor(Math.random() * 53) + 1;
			this.usedCard.push(random);
			this.card = this.cards[random];
			this.value = random + 1;
			// console.log(random);
			return this.cards[random];
		}
		// console.log(random);

	}

	setUsingCards(card){
		this.usingCards.push(card);
	}

	dropUsingCards(RCard){
		// console.log(RCard);
		// console.log(this.usingCards);
		let i = 0;
		this.usingCards=this.usingCards.filter(function (card) {
																														return card!==RCard;
																													});
		// console.log(this.usingCards);
	}

	getUsedCards(){
		return this.usedCard;
	}

	getCardsValue(){
		// alert(this.value);
		// console.log("value="+this.value);
		if(this.value<=13){
			return this.value;
		}else if (this.value<=26) {
			return this.value-13;
		}else if (this.value<=39) {
			return this.value-26;
		}else if(this.value<=52){
			return this.value-39;
		}else{
			return -1;
		}
	}

	getCardsSuit(){
		if(this.value<=13){
			return 4;  //スペード
		}else if (this.value<=26) {
			return 1;  //クラブ
		}else if (this.value<=39) {
			return 2;  //だいや
		}else if(this.value<=52){
			return 3;  //ハート
		}else {
					return 5; //ジョーカー
		}

	}

	reset(){
		usedCard = [];
	}


}

function checkCard(url) {
	if(url.substring(0,31)=='./cardsPictures/torannpu-illust' && url.substring(url.length-4,url.length)=='.png'){
		let card = parseInt(url.substring(31,url.length-4));
		// console.log(url.charAt(31)+':'+url.charAt(url.length-5)+":"+card);
		let value;
		let suit;
		// console.log("value="+this.value);
		if(card<=13){
			value = card;
		}else if (card<=26) {
			value = card-13;
		}else if (card<=39) {
			value = card-26;
		}else if(card<=52){
			value = card-39;
		}else{
			value = -1;
		}

		if(card<=13){
			suit = 4;  //繧ｹ繝壹�ｼ繝�
		}else if (card<=26) {
			suit = 1;  //繧ｯ繝ｩ繝�
		}else if (card<=39) {
			suit = 2;  //繝繧､繝､
		}else if(card<=52){
			suit = 3;  //繝上�ｼ繝�
		}else {
			suit = 5; //繧ｸ繝ｧ繝ｼ繧ｫ繝ｼ
		}
		return [value,suit];
	}else {
		// console.log(url.substring(0,31) + url.substring(33,36));
		return 'error';
	}
}

function reverseCard(value1,suit1) {
	let suit=suit1;
	let value;
	switch (parseInt(suit1)) {
		case 4: suit=1;break;
		case 1: suit=2;break;
		case 2: suit=3;break;
		case 3: suit=4;break;
		case 5: suit=5;break;
	}
	if(value1==-1){value=1}else{value=value1};
	// console.log(value1,suit1);
	let card = parseInt(value) + 13*(parseInt(suit)-1)
	// console.log(card);
	return "./cardsPictures/torannpu-illust"+card+".png";
}
