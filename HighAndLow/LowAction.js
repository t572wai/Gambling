function LowAction(){
	// alert('chose Low');
	achievement.HavePlayedHAL = 1;
	achievement.HavePlayedEver = 1;
	var NowCardsValue = getCardsHAL().getCardsValue();
	var NowCardsSuit = getCardsHAL().getCardsSuit();
	// console.log("value=" + NowCardsValue);
	// console.log(getCardsHAL());
	// console.log("suit=" + NowCardsSuit);
	NextCardsHAL();
	var NextCardsHALValue = getCardsHAL().getCardsValue();
	var NextCardsHALSuit = getCardsHAL().getCardsSuit();
	var NowCard = getNowCardHAL();
	// console.log("value=" + NextCardsHALValue);
	// console.log(getCardsHAL());
	// console.log("suit=" + NextCardsHALSuit);

	if(NowCardsValue > NextCardsHALValue || NextCardsHALValue == -1 || NowCardsValue==-1){
		// setTimeout(function(){alert("あたり")},0);
		showModalDialog('ハイ&ロー','あたり');
		setLatchHAL(1.5, getNowCardHAL());
		// addMoney(Math.floor(getLatch * 1.5));
	}else if (NowCardsSuit > NextCardsHALSuit && NowCardsValue == NextCardsHALValue) {
		// setTimeout(function(){alert("あたり")},0);
		showModalDialog('ハイ&ロー','あたり');
		// console.log(NowCardsSuit);
		// console.log(NowCardsValue);
		setLatchHAL(1.5, getNowCardHAL());
		// addMoney(Math.floor(getLatch * 1.5));
	}else {
		// setTimeout(function(){alert("はずれ")},0);
		// alert('0.0');
		// console.log("0.0");
		showModalDialog('ハイ&ロー','はずれ',function () {
			// latched=getLatch();

			setLatchHAL(0, NowCard);
			openRetryDialog();

		});
		// exitHAL();
	}
};

function addLowEventListener(){
	document.getElementById('LowButton').onclick = function() {
		LowAction();
	};
};
