$(function () {
	$("#DataLoad").dialog({
		modal: true,
		// autoOpen: false,
		closeOnExcape: false,
		open: function (event,ui) {
			$('.ui-dialog-titlebar-close').hide();
		},
		close:function (event,ui) {
			$('.ui-dialog-titlebar-close').show();
			// $('#DataLoad').blur();
		},
		buttons: [
			{
				text: 'データ作成または読み込み',
				click: function () {
						$('#userName').attr('value',$('#FirstDataLoad').val());
						LoadData();
						// $('#DataLoad').blur();
						$('#DataLoad').dialog('close');
						$(document).keydown(function (e) {
							// console.log(e);
							if(e.keyCode==37){
								SwitchMenuMinus();
							}else if (e.keyCode==39) {
								SwitchMenuPlus();
							}
						});
					}
			}
		]
	})
});

function openDataLoadDialog() {
	$('#DataLoad').dialog("open");
}
