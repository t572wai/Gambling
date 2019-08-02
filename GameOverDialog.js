function openGameOverDialog() {
	console.log(NumGameOver);
	NumGameOver++;
	console.log('<br>'+String(NumGameOver)+'回目のゲームオーバー<br>合計'+String(loan+NumGameOver*100-100)+'コインになるまで、ギャンブルの賞金のうち2割が引かれます');
	if(NumGameOver==1){
		$('#gameover').append('<br>はじめてのゲームオーバー<br>次からはペナルティーがあるよ');
	}else {
		$('#gameover').append('<br>'+String(NumGameOver)+'回目のゲームオーバー<br>合計'+String(loan+NumGameOver*100-100)+'コインになるまで、ギャンブルの賞金のうち2割が引かれます');
	}
	setTimeout(function () {
		$('#gameover').dialog('open');
	},100);
}

$(function () {
	$('#gameover').dialog({
		close: function () {
			$('#gameover').dialog('close');
			continueGame();
		},
		modal: true,
		width: 500,
		autoOpen: false,
		buttons: [
			{
				text: 'コンティニュー',
				click: function () {
					$('#gameover').dialog('close');
					continueGame();
				}
			}
		]
	})
})

function continueGame() {
	console.log(loan);
	// loan += NumGameOver*100-100;
	addMoney(100-money);
	if (NumGameOver==1) {
		achievement.HaveGameOver=1;
	}
	SaveData();
	LoadMenu();
}
