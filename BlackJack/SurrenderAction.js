function SurrenderAction() {
	console.log("surrender");
	setLatchBJ(0.5);
	exitBJ();
}

function addSurrenderEventListener() {
	achievement.HavePlayedBJ = 1;
	achievement.HavePlayedEver = 1;
	document.getElementById('SurrenderButton').onclick = function() {
		SurrenderAction();
	};
}
