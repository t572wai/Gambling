$(function () {
	$('#chooseTurn').dialog({
		autoOpen: false,
		width: 500,
		modal: false,
		buttons: [
			{
				text: '先攻',
				click: function () {
					turn=0;
					$('#chooseTurn').dialog('close');
					if(turn==0){
						$('#turnPoker').text('先攻');
					}else {
						$('#turnPoker').text('後攻');
					}
				}
			},
			{
				text: '後攻',
				click: function () {
					turn=1;
					$('#chooseTurn').dialog('close');
					if(turn==0){
						$('#turnPoker').text('先攻');
					}else {
						$('#turnPoker').text('後攻');
					}
				}
				
			}
		]
	})
})

function OpenChooseTurnDialog() {
	$('#chooseTurn').dialog('open');
}
