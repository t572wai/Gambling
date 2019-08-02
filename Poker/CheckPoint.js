function checkPlayerPointP() {
	return checkPointP(playerCardsPoker);
}

function checkDealerPointP(i) {
	let dealer='';
	if(i!=1){
	for(card of dealerCardsPoker){
		dealer += '<img src="'+reverseCard(card[0],card[1])+'">';
	}
	$('#DealerCards').html(dealer);
	}
	return checkPointP(dealerCardsPoker);
}

function checkPointP(cards) {
	let cardSuits = new Array();
	let cardValues = new Array();
	let medicine = {
		isFlash: 0,
		isStraight: 0,
		isStraightFlash: 0,
		isRoyalStraightFlash: 0,
		isOnePair: 0,
		isTwoPair: 0,
		isThreeCard: 0,
		isFourCard: 0,
		isFiveCard: 0,
		isFullHouse: 0,
		isBUTA: 0
	}
	for (cardData of cards){
		cardValues.push(cardData[0]);
		cardSuits.push(cardData[1]);
	}
	for (let i=0 ; i<cardValues.length;i++) {
		if(cardValues[i]==1){
			cardValues.splice(i,1,14);
		}
	}
	let max=-1;
	let maxSuit;
	let i=0;
	let IHaveTheJoker=0;
	for (value of cardValues) {
		console.log(value);
		if(max<value && value!=-1){
			max=value;
			maxSuit = cardSuits[i];
		}else if (max==value && maxSuit < cardSuits[i]) {
			maxSuit = cardSuits[i];
		}else if(value==-1){
			IHaveTheJoker=1;
		}
		i++;
	}
	// let ct = reverseCard(max,maxSuit);
	// medicine.isBUTA = parseInt(ct.substring(31,ct.length-4));
	medicine.isBUTA = parseInt(maxSuit+(max-2)*4);
	i=0;
	console.log(cards);
	let cardArray = {
		2:0,
		3:0,
		4:0,
		5:0,
		6:0,
		7:0,
		8:0,
		9:0,
		10:0,
		11:0,
		12:0,
		13:0,
		14:0
	}
	for (value of cardValues) {
			cardArray[value]=parseInt(cardArray[value])+1;
		// }else {
		// 	console.log("error");
		// }
	}
	console.log(cardArray);
	i = 0;

	for (value in cardArray) {
		console.log(value + " " + cardArray[value]);
		if(cardArray[value]==2){
			if(medicine.isOnePair!=0){
				medicine.isTwoPair = [medicine.isOnePair,parseInt(value)];
			}else {
				medicine.isOnePair = parseInt(value);
			}
		}
		if(cardArray[value]==3){
			medicine.isThreeCard = parseInt(value);
		}
		if (cardArray[value]==4) {
			medicine.isFourCard = parseInt(value);
		}
		if (cardArray[value]==5) {
			medicine.isFiveCard = parseInt(value);
		}
		i++;
	}

	if(medicine.isOnePair!=0 && medicine.isThreeCard!=0){
		medicine.isFullHouse=medicine.isThreeCard;
	}

	medicine.isFlash = cardSuits.every(function (i) {
		return i == cardSuits[0] || i == 5;
	});

	if(medicine.isFlash==''){
		medicine.isFlash = 0;
		// console.log("aa");
	}else{
		medicine.isFlash = [cardSuits[0],Math.min.apply(null,cardValues)];
		// console.log("bb");
	}



	let sum = 0;
	cardValues.sort(hikaku);
	console.log(cardValues);
	let valueTemp='';
	let tempStraight = (function(){
													for(value of cardValues){
														if(valueTemp!=''){
															if(parseInt(valueTemp)+1!=parseInt(value)){
																console.log(valueTemp,value);
																return 0;
															}
														}
														valueTemp = value;
													}
													return 1;
												}());
	let min = Math.min.apply(null,cardValues);
	// medicine.isBUTA = Math.max.apply(null,cardValues);
	console.log(tempStraight);
	if(tempStraight==1){
		medicine.isStraight = min;
	}else {
		medicine.isStraight = 0;
	}
	if(medicine.isStraight!=0 && medicine.isFlash!=0){
		medicine.isStraightFlash = [medicine.isStraight,medicine.isFlash];
	}
	if(medicine.isStraightFlash[1]){
		if(medicine.isStraightFlash[0]==10){
			medicine.isRoyalStraightFlash = medicine.isStraightFlash[1];
		}
	}

	if (IHaveTheJoker==1) {
		if(medicine.isFourCard!=0){
			medicine.isFiveCard=medicine.isFourCard;
		}
		if(medicine.isThreeCard!=0){
			medicine.isFourCard=Math.max(medicine.isThreeCard,medicine.isFourCard);
		}
		if(medicine.isTwoPair!=0){
			medicine.isThreeCard=Math.max(medicine.isTwoPair[0],medicine.isTwoPair[1],medicine.isThreeCard);
		}else if (medicine.isOnePair!=0) {
			medicine.isThreeCard=Math.max(medicine.isOnePair,medicine.isThreeCard);
		}
	}
	console.log(medicine);
	return medicine;
}

function hikaku(a,b) {
	return a-b;
}

function judgePoint(pPoint,dPoint) {
	if(getStrongPoint(pPoint)>getStrongPoint(dPoint)){
		setLatchPoker(2.0);
		let myMedicine;
		let yourMedicine;

		setTimeout(function () {
			showModalDialog('ポーカー','勝ち<br>自分:'+getMyMedicine(getStrongPoint(pPoint))+'<br>相手:'+getMyMedicine(getStrongPoint(dPoint)),function () {
				exitPoker();
			})
		},100);
	}else if (getStrongPoint(pPoint)==getStrongPoint(dPoint)) {
		setLatchPoker(1.0);
		setTimeout(function () {
			showModalDialog('ポーカー','ドロー',function () {
				exitPoker();
			})
		},100);
	}else if (getStrongPoint(pPoint)<getStrongPoint(dPoint)) {
		setLatchPoker(0.0);
		setTimeout(function () {
			showModalDialog('ポーカー','負け<br>自分:'+getMyMedicine(getStrongPoint(pPoint))+'<br>相手:'+getMyMedicine(getStrongPoint(dPoint)),function () {
				openRetryDialog();
			})
		},100);
	}

}

function getStrongPoint(medicine1) {
	let medicineTemp = medicine1;
	let strong = 0;
	// console.log(medicineTemp);
	for (medicineP in medicineTemp) {
		if(medicineTemp[medicineP]!=0){
			let t = medicineTemp[medicineP];
			console.log(t);
			switch (medicineP) {
				case 'isBUTA': strong+=t-1;break;
				case 'isOnePair': strong+=(t-1)*53;break;
				case 'isTwoPair': strong+=742*(Math.max(t[0],t[1])-1);break;
				case 'isThreeCard': strong+=(t-1)*10388;break;
				case 'isStraight': strong+=(t-1)*145432;break;
				case 'isFlash': strong+=((t[0]-1)*10+t[1]-1)*1599752;break;
				case 'isFullHouse': strong+=(t-1)*65589832;break;
				case 'isFourCard': strong+=(t-1)*918257648;break;
				case 'isStraightFlash': strong+=((t[0]-2)*4+t[1])*12855607072;break;
				case 'isFiveCard': strong+=(t-1)*527079889952;break;
				// case 'isStraightFlash': strong+=
			}
		}
	}
	console.log(strong);
	return strong;
}

function getMyMedicine(point) {
	if (1<=point && point<=52) {
		return 'ぶた';
	}else if(53<=point && point<=741){
		return 'ワンペア';
	}else if (742<=point && point<=10387) {
		return 'ツーペア';
	}else if (10388<=point && point<=145431) {
		return 'スリーカード';
	}else if (145432<=point && point<=1599751) {
		return 'ストレート';
	}else if (1599752<=point && point<=65589831) {
		return 'フラッシュ';
	}else if (65589832<=point && point<=918257647) {
		return 'フルハウス';
	}else if (918257648<=point && point<=12855607071) {
		return 'フォーカード';
	}else if (12855607072<=point && 33*12855607072-1<=point) {
		return 'ストレートフラッシュ';
	}else if (33*12855607072<=point && point<=527079889951) {
		return 'ロイヤルストレートフラッシュ';
	}else if (527079889952<=point) {
		return 'ファイブカード';
	}
}
