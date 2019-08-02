let korekaraGame = '';
let l=0;

$(function () {
	$('#Really').dialog({
		modal: true,
		autoOpen: false,
		buttons: [
			{
				text: 'はい',
				click: function () {
					// console.log(l);
					$('#joker__input').attr('disabled' , "disabled");
					useMoney(l);
					latched=l;

					// setLatchHAL(0.9);
					switch (korekaraGame) {
						case 'HighAndLow': PlayHighAndLow(l); break;
						case 'BlackJack':	PlayBlackJack(l);	break;
						case 'SpanishBlackJack': PlaySpanishBlackJack(l);break;
						case 'Poker': PlayPoker(l); break;
					}
					$('#Really').dialog('close');
				}
			},
			{
				text: 'いいえ',
				click: function () {
					// console.log('no');
					$('#Really').dialog('close');
				}
			}
		],
		close: function () {
			// console.log('no');
		}
	})
})

function openIsReallyDialog(game,l1) {
	l = l1;
	korekaraGame = game;
	// switch (game) {
	// 	case 'HighAndLow': korekaraGame="ハイアンドロー"; break;
	// 	case 'BlackJack':	korekaraGame="ブラックジャック";	break;
	// 	case 'SpanishBlackJack': korekaraGame="スパニッシュブラックジャック";break;
	// 	case 'Poker': korekaraGame="ポーカー"; break;
	// }
	$('#selectingGame').text(gameName[korekaraGame]);
	// korekaraGame = game;
	setTimeout(function () {
		$('#Really').dialog('open');
	},100);
}
