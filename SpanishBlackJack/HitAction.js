let canDouble = 0;

function addSpHitEventListener() {
	document.getElementById('HitButton').onclick =function() {
		// $('#DoubleDownButton').disabled = "disabled";
		if(canDouble==0) {
			canDouble=1;
		}else {
			document.getElementById('DoubleDownButton').disabled = "disabled";
		}
		document.getElementById('SurrenderButton').disabled = "disabled";



		SpHitAction();
		checkSpPlayerPoint();
		checkSpDealerPoint();
	};
}

function SpHitAction() {
	achievement.HavePlayedSBJ = 1;
	achievement.HavePlayedEver = 1;
	console.log("hit");
	NextCardsSBJ();
}
