$(function () {
	$('#jankenResultDialog').dialog({
		autoOpen: false,
		width: 500,
		modal: false

	})
})

function openResultJanken(result){
	$('#jankenResult').html(result);
	$('#jankenResultTe').html('<img src="./JankenPictures/Janken'+playerJanken+'.png">'+'<img src="./JankenPictures/Janken'+dealerJanken+'.png">');
	switch (result) {
		case '勝ち':$("#jankenResultDialog").dialog({buttons:[{text:"OK",click:function(){$('#jankenResultDialog').dialog('close');OpenChooseTurnDialog();}}]});

		break;
		case 'ドロー':$("#jankenResultDialog").dialog({buttons:[{text:"OK",click:function(){$('#jankenResultDialog').dialog('close');openJanken();}}]});

		break;
		case '負け':$("#jankenResultDialog").dialog({buttons:[{text:"OK",click:function(){$('#jankenResultDialog').dialog('close');turn=Math.floor(Math.random()*2);
			if(turn==0){
				$('#turnPoker').text('先攻');
			}else {
				$('#turnPoker').text('後攻');
			}
		}}]});

		break;

	}
	// alert('aaa');
	$('#jankenResultDialog').dialog('open');
}
