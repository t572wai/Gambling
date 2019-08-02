function SpSurrenderAction() {
	console.log("surrender");
	setLatchSBJ(0.5);
	exitSBJ();
}

function addSpSurrenderEventListener() {
	achievement.HavePlayedSBJ = 1;
	achievement.HavePlayedEver = 1;
	document.getElementById('SurrenderButton').onclick = function() {
		SpSurrenderAction();
	};
}
