function StartGame(){
	// if($('#selectGamble').val() != null){
	//ひとまずハイ＆ロウ
	// alert('aaaaaaaaaaaaaaaaa');
	// console.log($('#selectGamble').val());
	if($('#selectGamble').val() == ""){
		document.getElementById('MainMenu').innerHTML = '準備中　 coming soon <button type="button" id="returnButton">戻る</button>';
		document.getElementById('returnButton').onclick = function() {
			exitGame();
		}
		setCss(theme);
	}else{
		document.getElementById('MainMenu').innerHTML = '掛け金設定:<input type="text" id="latchInput" name="latchInput" value="">'+
																										'<button type="button" name="Start" id="StartButton">スタート</button>'+
																										'<button type="button" id="ExitButton">やめる</button>';
		setCss(theme);
		/*
		$(document).on('click', '#StartButton', function(){
			var game = PlayHighAndLow();
				document.getElementById('MainMenu').innerHTML = game;
				/*
				var Img = document.getElementById("imgOfCard");
				Img.width = Img.naturalWidth * 0.5;
				Img.height = Img.naturalHeight * 0.5;
		});
		*/
		document.getElementById('ExitButton').onclick = function () {
			exitGame();
			setCss(theme);
		}
		document.getElementById('StartButton').onclick = function(){
			if($('#selectGamble').val()!=null){
				var latch = document.getElementById('latchInput').value;
				setCss(theme);

				if(useMoney(latch, 1, 1)==1){
					// console.log($('#selectGamble').val());
					if($('#selectGamble').val() == 'HighAndLow' && latch > 10000){
						showDialog('アラート','掛け金の上限を超えています');
					}else {
						console.log('start game');
					// achievement.HavePlayedEver = 1;

						document.getElementById('PlayButton').disabled = "disabled";
						document.getElementById('SwitchMinusButton').disabled = "disabled";
						document.getElementById('SwitchPlusButton').disabled = "disabled";
						document.getElementById('LoadButton').disabled = "disabled";
						arePlaying = 1;
					// document.getElementById('updateThemeButton').disabled = "disabled";
					// document.getElementById('updateBGMButton').disabled = "disabled";
					// var inner = document.getElementById('joker__input').value;
					// console.log(inner);
					// document.getElementById('joker__input__hidden').value = inner;
					// console.log($('#joker__input__hidden').val());

						setCss(theme);

					/*
					$('#PlayButton').prop('disabled', true);
					$('#SwitchButton').prop('disabled', true);*/

		/*			switch ($('#selectGamble').val()) {
						case 'HighAndLow': PlayHighAndLow(latch); break;
						case 'BlackJack':	PlayBlackJack(latch);	break;
						case 'SpanishBlackJack': PlaySpanishBlackJack(latch);break;
						case 'Poker': PlayPoker(latch); break;
					}*/
						openIsReallyDialog($('#selectGamble').val(),latch);

				}
			}else{
				showDialog('アラート','そんなんじゃ勝負にならない');
			}
		}else {
			showDialog('アラート','遊ぶゲームを選んでください');
		}
		}
		setCss(theme);
		/*
		var game = PlayHighAndLow();
			document.getElementById('MainMenu').innerHTML = game;
			*/
	}
// }else {
// }


};

$(document).on('click', '#PlayButton' , function(){
	StartGame();
});

function exitGame() {
	console.log(achievementCount.HavePlayedTen);
	arePlaying = 0;
	document.getElementById('PlayButton').disabled = "";
	document.getElementById('SwitchMinusButton').disabled = "";
	document.getElementById('SwitchPlusButton').disabled = "";
	document.getElementById('MainMenu').innerHTML = null;
	document.getElementById('LoadButton').disabled = "";
	document.getElementById('joker__input').disabled = "";
	document.getElementById('joker__input__hidden').innerHTML = "<input type='hidden' id='joker__input__hidden'>"
	console.log("exit game");
	SaveData();
	loadPlayMenu();
	setCss();
	if(money == 0 && canAcceptMoney()==0){
		openGameOverDialog();
	}
}
