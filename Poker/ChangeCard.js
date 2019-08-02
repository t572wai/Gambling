function changeCard() {
	changePlayerCard();
	// changeDealerCard();
}

function changePlayerCard(i) {
	let changeNum = 0;
	let selectedP = $('.selectedP');
	selectedP.each(function () {
		changeNum++
	});
	if(changeNum==0){
		showDialog('ポーカー','選択してください',);
	}else {
		console.log(changeNum);
		selectedP.each(function () {
			// console.log(card);
			let card = $(this).attr('src');
			card = parseInt(card.substring(31,card.length-4));
			CardsPoker.dropUsingCards(card);
			$(this).remove();
		})
		for(let i=0;i<changeNum;i++){
				let card = CardsPoker.getCard();
				playerCardsPoker = [];
				// dealerCardsPoker.push([CardsPoker.getCardsValue(),CardsPoker.getCardsSuit()]);
				$('#PlayerCards').append('<img class="haveCardsP" src="'+card+'">');
				setCssFunction(theme);
				CardsPoker.setUsingCards(parseInt(card.substring(31,card.length-4)));
				console.log(CardsPoker.usingCards);
				$('#PlayerCards > img').each(function () {
					playerCardsPoker.push(checkCard($(this).attr('src')));
				});
		 }
		 if(i!=1)changeDealerCard();
	 }
}

function changeDealerCard() {
	let HMA=0;
	for(let card of dealerCardsPoker){
		if(card[0]==1||card[0]==13){
			HMA++;
		}
	}
	console.log(dealerCardsPoker);
	if(getStrongPoint(checkDealerPointP(1))<=741){
	changeNum = Math.floor(Math.random()*(5-HMA))+1;
	let removeCard=new Array();
	$('#changeButton').attr('disabled',true);
	$('#finButton').attr('disabled',true);
	for(let i=0;i<changeNum;i++){
		$('.haveCardsD').last().remove();
		let C;
		do {
			C = dealerCardsPoker[dealerCardsPoker.length-1];
			let card = reverseCard(C[0],C[1]);
			console.log(card);
			if(C[0]==1||C[0]==13){
				dealerCardsPoker.pop();
				dealerCardsPoker.unshift(C);
			}else {
				CardsPoker.dropUsingCards(parseInt(card.substring(31,card.length-4)));
				dealerCardsPoker.pop();
			}
		} while (C[0]==1||C[0]==13);
		console.log(C);
		// if(C[0]==1)
	}
	// for(let i=0;i<changeNum;i++){
	// 	 $('#DealerCards > .haveCards:last').remove();
	// 	 $('#changeButton').attr('disabled',true);
	// 	 $('#finButton').attr('disabled',true);
	// }
	setTimeout(function () {
		 setCss(theme);
		 setTimeout(function () {
				for(let i=0;i<changeNum;i++){
					 let card = CardsPoker.getCard();
					 // dealerCardsPoker = [];
					 $('#DealerCards').append('<img class="haveCardsD" src="./cardsPictures/torannpu-illust0.png">');
					 CardsPoker.setUsingCards(parseInt(card.substring(31,card.length-4)));
					 console.log(CardsPoker.usingCards);
					 // $('#DealerCards > img').each(function () {
						//  dealerCardsPoker.push(checkCard());
					 // });
					 dealerCardsPoker.push(checkCard(card));
				}

				setTimeout(function () {
					 $('#changeButton').attr('disabled', false);
					 $('#finButton').attr('disabled', false);
					 setCss(theme);
					 console.log(CardsPoker.usingCards);
				},100)
		 },2000);
	},100);
	}else {
		// $(\'#changeButton\').attr(\'disabled\',true);
		// changeDealerCard();
		// setTimeout(function(){judgePoint(checkPlayerPointP(),checkDealerPointP())},2300);
		showModalDialog('ポーカー','相手がストップしました');
		$('#changeButton').attr('onclick',"changeCard(1);$('#changeButton').attr('disabled',true);$('#finButton').attr('disabled',true);judgePoint(checkPlayerPointP(),checkDealerPointP())");

		$('#finButton').attr('onclick', "$('#changeButton').attr('disabled',true);$('#finButton').attr('disabled',true);judgePoint(checkPlayerPointP(),checkDealerPointP())")
	}
}
