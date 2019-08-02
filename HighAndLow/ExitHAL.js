let didHit=0;

function exitHAL(){
	prize = latch;
	// console.log(prize);
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

let b=0;

function addExitHALEventListener(){
	//console.log('exit');
	if(b==0){
		$('#exitButton').attr('disabled',true);
		document.getElementById('exitButton').onclick = function(){
				// showDialogSelectable('ま？','今やめると、1割減額されます。それでも本当にやめますか？',['はい','いいえ'],[function(){setLatchHAL(getLatch()*0.9);exitHAL()},function(){console.log('no');}])
				// openIsReallyDialog();
			};
		b=1;
	}else {
		$('#exitButton').attr('disabled',false);
		document.getElementById('exitButton').onclick = function () {
			exitHAL();
		}
	}
};

function DontHAL() {
	prize = latch*0.9;
	addMoney(prize,0);
	exitHAL();
}
