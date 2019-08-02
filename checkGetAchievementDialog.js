function setCheckGetAchievementDialog() {
	$('#checkGetAchievementDialog').dialog({
		autoOpen: false,
		width: 400,
		modal: false,

		buttons: [
			{
				text: "はい",
				click: function () {
					$('#checkGetAchievementDialog').dialog('close');
					moveToAchievementMenu();
					loadAchievementMenu();
				}
			},
			{
				text: "いいえ",
				click: function () {
					$('#checkGetAchievementDialog').dialog('close');
				}
			}
		]
	});
}

function openCheckGetAchievementDialog(i) {
	console.log("open");
	try {
		if(i!=1){
			$('#checkGetAchievementDialog').html('新しいトロフィーを獲得しました<br>トロフィー画面に移動しますか？');
			setTimeout(function () {
				$('#checkGetAchievementDialog').dialog('open');
			},0);
		}else {
			$('#checkGetAchievementDialog').html('新しいトロフィーが増えました<br>トロフィー画面に移動しますか？');
			setTimeout(function () {
				$('#checkGetAchievementDialog').dialog('open');
			},0);
		}
	} catch (e) {
		// console.log();
	} finally {

	}
}
