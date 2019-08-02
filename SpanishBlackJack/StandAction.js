function addSpStandEventListener() {
	document.getElementById('StandButton').onclick =function() {
		SpStandAction();
	};
}

let playerPointT;

function SpStandAction() {
	achievement.HavePlayedEver = 1;
	achievement.HavePlayedSBJ = 1;
	console.log("stand");
	playerPointT = playerPoint1;
	while (willClick == 0) {
		card = cards.getCard();
		// document.getElementById('MainMenu').innerHTML = baseDisplay + '<img src="' + card + '">';
		// var img = document.getElementById('dealerCards').insertAdjacentHTML('beforeend', '<img src="./cardsPictures/torannpu-illust0.png">');
		dealerPoint1 += getDealerCardsValueSBJ(1);
		dealerPoint2 += getDealerCardsValueSBJ(2);
		// console.log(img);

		dealerCards.push(card);


		checkSpDealerPoint();
	}
	setTimeout(function () {
			console.log("llll");
			setCss(theme);
		},10);
	var dealerPoint = dealerPoint1;
	document.getElementById('point').insertAdjacentHTML('beforeend',"  ディーラーの得点:" + dealerPoint);
	// document.getElementById('dealerCards').innerText = null;
	var dealerCardsPicture = "";
	for (dealerCard of dealerCards) {
		// dealerCardsPicture.insertAdjacentHTML('beforeend', '<img src="'+ dealerCard +'">')
		dealerCardsPicture += '<img src="'+dealerCard+'">';
	}
	setTimeout(function () {
		console.log("llll");
		setCss(theme);
	},10);
	console.log(dealerCardsPicture);
	document.getElementById('dealerCards').innerHTML = dealerCardsPicture;
	setTimeout(function() {
		if(playerPointT>21){
			// setTimeout(function() {
			if(sdb==0){
				sdb=1;
				showModalDialog('スパニッシュブラックジャック','負けました',function () {

					setLatchSBJ(0.0);
					console.log("bust lose");
					openRetryDialog();
				});

			}
		}else if (dealerPoint>21) {
			// alert('勝ち');
			if(isBlackJack==1){
				// setTimeout(function() {
				showModalDialog('スパニッシュブラックジャック','ブラックジャック!!!!',function () {
					console.log("black jack win");

					setLatchSBJ(2.5);

					exitSBJ();
				});
			}else {
				// setTimeout(function() {
				showModalDialog('スパニッシュブラックジャック','勝ち!',function () {
					console.log("dealer bust win");
					setLatchSBJ(checkPrizeSBJ());
					// exitBJ();
					exitSBJ();
				});
			}
			// setTimeout(function() {
				exitSBJ();
			// },2000)
			// openRetryDialog();
		}else if(dealerPoint == playerPointT){
			if(playerPointT == 21){
				showModalDialog('スパニッシュブラックジャック','勝ち',function () {
					setLatchSBJ(checkPrizeSBJ());
					exitSBJ();

				});
			}else{
				// setTimeout(function() {
					showModalDialog('スパニッシュブラックジャック','ドロー',function () {

						setLatchSBJ(checkPrizeSBJ());
						// setLatchSBJ(2.0);
						console.log("draw jane--");
						exitSBJ();
						// openRetryDialog();
						// },2000);
					});
			}
		}else if (dealerPoint<playerPointT) {
			// setTimeout(function() {
				if(isSpanishBlackJack==1){
					showModalDialog('スパニッシュブラックジャック','ブラックジャック!!!!',function () {
						setLatchSBJ(2.5);
						console.log("win blackjack");
						exitSBJ();
					});
				}else {
					showModalDialog('スパニッシュブラックジャック','勝ち',function () {
						setLatchSBJ(checkPrizeSBJ());
						console.log("win");
						exitSBJ();
					});
				}
			// },2000);
		}else {
			// setTimeout(function() {
			showModalDialog('スパニッシュブラックジャック','負けました',function () {
				setLatchBJ(0.0);
				console.log("lose");
				openRetryDialog();
			});
		}
	},100);
}

function checkPrizeSBJ() {
	if(playerCardsV.length==5&&playerPointT==21){
		return 2.5;
	}else if (playerCardsV.length==6&&playerPointT==21) {
		return 3.0;
	}else if (playerCardsV.length>6&&playerPointT==21) {
		return 4.0;
	}else if (playerCardsV.length==3 && playerPointT==21) {
		for (let playerCardV of playerCardsV) {
			if(playerCardV<6 || playerCardV>8){
				return 2.0;
			}
		}
		let playerCardSTemp = playerCardsS[1];
		for (let playerCardS of playerCardsS) {
			if(playerCardS!=playerCardSTemp){
				return 2.5;
			}
		}
		if(playerCardsV[0]==playerCardsV[1] && upcardV==7) return 51;
		if(playerCardSTemp==4){
			return 4.0;
		}else {
			return 3.0;
		}
	}else {
		return 2.0;
	}
}
