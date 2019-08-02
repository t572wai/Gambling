function addSpDoubleDownEventListener() {
	document.getElementById('DoubleDownButton').onclick =function() {
		SpDoubleDownAction();
	};
}

function SpDoubleDownAction() {
	achievement.HavePlayedSBJ = 1;
	achievement.HavePlayedEver = 1;
	console.log("double_down");
	// addMoney(getLatchBJ());
	if(useMoney(2.0*getLatchSBJ(),1)==1){
		setLatchSBJ(2.0);
	// do {
	// 	card = cards.getCard();
	// 	// document.getElementById('MainMenu').innerHTML = baseDisplay + '<img src="' + card + '">';
	// } while (cards.getCardsValue()==11);
	// console.log(cards.getCardsValue());
	// var img = document.getElementById('playerCards').insertAdjacentHTML('beforeend', '<img src="' + card + '">');
	// console.log(img);


//	playerPoint1 += getPlayerCardsValueSBJ(1);
//	playerPoint2 += getPlayerCardsValueSBJ(2);
//	checkSpPlayerPoint();
	// SpStandAction();
	if(willClick==0){
		willClick=1;
		NextCardsSBJ();
		willClick=0;
		NextDealerCards();
	}else {
		NextCardsSBJ();
	}
	checkSpPlayerPoint();
	checkSpDealerPoint();
	if(canDouble==0){
		canDouble = 1;
	}else {
		document.getElementById('DoubleDownButton').disabled = "disabled";
		document.getElementById('SurrenderButton').disabled = "disabled";
	}
}else {
	useMoney(getLatchBJ(),1);
	showDialog('アラート','できません');
}
}
