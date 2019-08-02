let dealerJanken;
let playerJanken;

function openJanken() {
	$('#jankenDialog').dialog('open');
}

$(function () {
	$('#jankenDialog').dialog({
		autoOpen: false,
		width: 500,
		modal: false,

		buttons: [
			{
				text: "",
				id: "gu-Button",
				click: function () {
					$('#jankenDialog').dialog('close');
					playerJanken=0;
					dealerJanken=Math.floor(Math.random()*3);
					if(dealerJanken==0)openResultJanken('ドロー');
					if(dealerJanken==1)openResultJanken('勝ち');
					if(dealerJanken==2)openResultJanken('負け');
				}
			},
			{
				text: "",
				id: "tyokiButton",
				click: function () {
					$('#jankenDialog').dialog('close');
					playerJanken=1;
					dealerJanken=Math.floor(Math.random()*3);
					if(dealerJanken==0)openResultJanken('負け');
					if(dealerJanken==1)openResultJanken('ドロー');
					if(dealerJanken==2)openResultJanken('勝ち');
				}
			},
			{
				text: "",
				id: "pa-Button",
				click: function () {
					$('#jankenDialog').dialog('close');
					playerJanken=2;
					dealerJanken=Math.floor(Math.random()*3);
					if(dealerJanken==0)openResultJanken('勝ち');
					if(dealerJanken==1)openResultJanken('負け');
					if(dealerJanken==2)openResultJanken('ドロー');
				}
			}
		]

	});
	$('#gu-Button').append('<img src="./JankenPictures/Janken0.png">');
	$('#pa-Button').append('<img src="./JankenPictures/Janken2.png">');
	$('#tyokiButton').append('<img src="./JankenPictures/Janken1.png">');
})
