function exitSBJ(){
	prize = latch;
	if(parseInt(prize)!=0){
		achievementCount.HavePlayedTen++;
		achievementCount.HavePlayedFif++;
		achievementCount.HavePlayedHundred++;
		achievementCount.HavePlayedThou++;
	}
	if(achievementCount.HavePlayedTen==10){
		achievement.HavePlayedTen=1;
	}
	if(achievementCount.HavePlayedFif==50){
		achievement.HavePlayedFif=1;
	}
	if(achievementCount.HavePlayedHundred==100){
		achievement.HavePlayedHundred=1;
	}
	if(achievementCount.HavePlayedThou==1000){
		achievement.HavePlayedThou=1;
	}
	addPrise(prize,function(){exitGame();});
	// exitGame();
};

function addExitSBJEventListener(){
	//console.log('exit');
	document.getElementById('exitButton').onclick = function(){
		exitSBJ();
	};
};
