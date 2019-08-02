$(function(){
	// ダイアログ設定
	$("#retryDialog").dialog({
		autoOpen: false,
		width:500,
		modal:true,

	buttons: [
		{
			text: 'リトライ',
			click: function(){
				$("#retryDialog").dialog("close");
				StartGame();
			}
		},
		{
			text: 'キャンセル',
			click: function(){
				$("#retryDialog").dialog("close");
				exitGame();
			}
		}
	]
	});
})



function openRetryDialog(){
	if(latched>=1000){
		achievement.FallDownBird=1;
	}
	console.log(latch);
	achievement.HaveLose=1;
	if(money!=0){
		$("#retryDialog").dialog("open");
	}else {
		exitGame();
	}
}
