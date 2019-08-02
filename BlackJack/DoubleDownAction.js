function addDoubleDownEventListener() {
	document.getElementById('DoubleDownButton').onclick =function() {
		DoubleDownAction();
	};
}

function DoubleDownAction() {
	achievement.HavePlayedBJ = 1;
	achievement.HavePlayedEver = 1;
	console.log("double_down");
	if(useMoney(getLatchBJ())==1){
		setLatchBJ(2.0);
		card = cards.getCard();
		// document.getElementById('MainMenu').innerHTML = baseDisplay + '<img src="' + card + '">';
		var img = document.getElementById('playerCards').insertAdjacentHTML('beforeend', '<img src="' + card + '">');
		console.log(img);

		playerPoint1 += getPlayerCardsValueBJ(1);
		playerPoint2 += getPlayerCardsValueBJ(2);
		checkPlayerPoint();
		StandAction();
	}else {
		showDialog('アラート','できません');
	}
}
