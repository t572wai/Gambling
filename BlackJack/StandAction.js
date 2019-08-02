function addStandEventListener() {
	document.getElementById('StandButton').onclick =function() {
		StandAction();
	};
}

function StandAction() {
	achievement.HavePlayedEver = 1;
	achievement.HavePlayedBJ = 1;
	console.log("stand");
	var playerPoint = playerPoint1;
	while (willClick == 0) {
		card = cards.getCard();
		// document.getElementById('MainMenu').innerHTML = baseDisplay + '<img src="' + card + '">';
		// var img = document.getElementById('dealerCards').insertAdjacentHTML('beforeend', '<img src="./cardsPictures/torannpu-illust0.png">');
		dealerPoint1 += getDealerCardsValueBJ(1);
		dealerPoint2 += getDealerCardsValueBJ(2);
		console.log(cards.getCardsValue());
		// console.log(img);
		dealerCards.push(card);


		checkDealerPoint();


	}
	setTimeout(function () {
		console.log("llll");
		setCss(theme);
	},100);
	var dealerPoint = dealerPoint1;
	document.getElementById('point').insertAdjacentHTML('beforeend',"  ディーラーの得点:" + dealerPoint);
	// document.getElementById('dealerCards').innerText = null;
	// var dealerCardsPicture = document.getElementById('dealerCards');
	var dealerCardsPicture = "";
	for (dealerCard of dealerCards) {
		// dealerCardsPicture.insertAdjacentHTML('beforeend', '<img src="'+ dealerCard +'">')
		dealerCardsPicture += '<img src="'+dealerCard+'">';
	}
	setTimeout(function () {
		console.log("llll");
		setCss(theme);
	},100);
	console.log(dealerCardsPicture);
	$('#dealerCards').html(dealerCardsPicture);
	console.log("8a8a8a8a8a8a8a8a8a");
	setTimeout(function() {
		console.log("8989898989898989898989");
		if(playerPoint>21){
			// setTimeout(function() {
			if(db==0){
				db=1;
				showModalDialog('ブラックジャック','負けました',function () {
					console.log("llose");
					// latched=getLatchBJ();
					setLatchBJ(0.0);
					openRetryDialog();
				});
			}
			console.log('888888888888888888888888');

			// },0);
		}else if(dealerPoint>21) {
			// alert('勝ち');
			if(isBlackJack==1){
				// setTimeout(function() {
					showModalDialog('ブラックジャック','ブラックジャック!!!!',function () {
						console.log("black jack win");

						setLatchBJ(2.5);

						exitBJ();
					});
				// },0);
			}else {
				// setTimeout(function() {
					// alert('勝ち');
					showModalDialog('ブラックジャック','勝ち!',function () {
						console.log("dealer bust win");
						setLatchBJ(2.0);
						// exitBJ();
						exitBJ();
					});
				// },0);
			}
			// setTimeout(function() {
				// exitBJ();
			// },0)
			// openRetryDialog();
		}else if(dealerPoint == playerPoint){
			if(isBlackJackDealer==1 && isBlackJack == 1){
					showModalDialog('ブラックジャック','ドロー',function () {
						setLatchBJ(1.0);
						console.log("draw");
						// openRetryDialog();
						exitBJ();
					});
				// },0);
			}else if(isBlackJack==1) {
				// setTimeout(function() {
					// alert('勝ち');
					showModalDialog('ブラックジャック','ブラックジャック',function () {
						setLatchBJ(2.5);
						console.log("win");
						exitBJ();
					})
				// },0);
			}else if(isBlackJackDealer==1) {
				// setTimeout(function() {
// 					alert('負け');
// 					var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
// $(document).off(scroll_event);
					showModalDialog('ブラックジャック','負けました',function () {
						console.log("lose");
						// latched=getLatchBJ();

						setLatchBJ(0.0);
						openRetryDialog();
					});
				// },0);
			}else {
				// setTimeout(function() {
					// alert('ドロー');
					showModalDialog('ブラックジャック','ドロー',function () {
						console.log("draw");
						setLatchBJ(1.0);
						// openRetryDialog();
						exitBJ();
					});
				// },0);
			}
		}else if (dealerPoint<playerPoint) {
			// setTimeout(function() {]
				if(isBlackJack==1){
					// alert('ブラックジャック');
					showModalDialog('ブラックジャック','ブラックジャック!!!!',function () {
						setLatchBJ(2.5);
						console.log("win blackjack");
						exitBJ();
					});
				}else {
					showModalDialog('ブラックジャック','勝ち',function () {
						setLatchBJ(2.0);
						console.log("win");
						exitBJ();
					});
				}
			// },0);
		}else{
			// setTimeout(function() {
				showModalDialog('ブラックジャック','負け',function () {
					// latched=getLatchBJ();

					setLatchBJ(0.0);
					console.log("lose");
					openRetryDialog();
				});

				// setLatchBJ(0.0);
				// console.log("lose");
				// openRetryDialog();
			// },0);
		}

	},200)
}
