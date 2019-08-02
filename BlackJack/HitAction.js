function addHitEventListener() {
	document.getElementById('HitButton').onclick =function() {
		// $('#DoubleDownButton').disabled = "disabled";
		document.getElementById('DoubleDownButton').disabled = "disabled";
		document.getElementById('SurrenderButton').disabled = "disabled";

		HitAction();
		checkPlayerPoint();
		checkDealerPoint();
	};
}

function HitAction() {
	achievement.HavePlayedBJ = 1;
	achievement.HavePlayedEver = 1;
	console.log("hit");
	NextCardsBJ();
}
