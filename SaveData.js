function SaveData(){
	if(HavePlayed == 1){
	console.log("saved");
	// alert('保存しました');
	/*
	var Stream = new Uint8Array(AsciiToUint8Array(FileName));
	var FileName = document.getElementById('userName');
	alert('Save');
	if (window.navigator.msSaveBlob) {
		window.navigator.msSaveBlob(new Blob([Stream], { type: "text/plain" }), FileName);
		alert('aaaa');
	} else {
		var a = document.createElement("a");
		a.href = URL.createObjectURL(new Blob([Stream], { type: "text/plain" }));
		//a.target   = '_blank';
		a.download = FileName;
		document.body.appendChild(a) //  FireFox specification
		a.click();
		document.body.removeChild(a) //  FireFox specification
		alert('bbbb');
	}
	*/
	var settingData = new Array();
	// console.log(achievement);
	// console.log(buyMenu);
	var obj = {
		'userName' : $('#userName').val(),
		'money': money,
		'boughtGames': boughtGames,
		'achievement': achievement,
		'didAccept': didAccept,
		'theme': theme,
		'buyMenuSizeDefault': buyMenuSizeDefault,
		'buyMenu': buyMenu,
		'buyMenuItem': buyMenuItem,
		'BGM': BGM,
		'BoughtBGM': BoughtBGM,
		'boughtObjects' : boughtObjects,
		'NumGameOver': NumGameOver,
		'loan': loan,
		// 'ruleGamesText': ruleGamesText
	};
	settingData.push(obj);

	// console.log(obj);

	var setJson = JSON.stringify(obj);

	localStorage.setItem($('#userName').val(), setJson);
	$('#report').html('保存しました');
	setTimeout(function () {
		$('#report').html('');
	},3000)
	}else {
		console.log("not save");
		showDialog('アラート','保存できません');
	}
}

function AsciiToUint8Array(S) {
	var len = S.length;
	var P = new Uint8Array(len);
	for (var i = 0; i < len; i++) {
		P[i] = S[i].charCodeAt(0);
	}
	return P;
}

$(document).on('click', '#saveButton', function(){
	SaveData();
});
