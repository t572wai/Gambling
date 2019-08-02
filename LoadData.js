// $(function () {
// 	openDataLoadDialog();
//})

function LoadData(){
	// achievement.HavePlayedEver = 1;
	// alert('Load');
	// console.log('tabun');
	if(isNaN(money)){
		money=0;
		displayMoney();
//		console.log("jkjdfas;f");
		// console.log(money);
	}
	if(localStorage.getItem($('#userName').val()) != null){
		var getJson = localStorage.getItem($('#userName').val());
		var settingData = JSON.parse(getJson);
		// console.log(settingData);
		// console.log(getJson);
		HavePlayed = 1;
		if(getJson && settingData.value){
			// addMoney(50);
			console.log("error");
		}else{
			// addMoney(100);
			if($('#userName').val()=="takashi") {
				alert('貴貴貴貴貴貴貴貴貴貴');
				addMoney(parseInt(settingData['money']));
			}else{
				addMoney(parseInt(settingData['money'])-money);
			}
			boughtGames = settingData['boughtGames'];
			achievement = settingData['achievement'];
			didAccept = settingData['didAccept'];
			theme = settingData['theme'];
			buyMenuSizeDefault = settingData['buyMenuSizeDefault'];
			buyMenu = settingData['buyMenu'];
			buyMenuItem = settingData['buyMenuItem'];
			achievementWork = JSON.stringify(achievement);
			achievementWork = JSON.parse(achievementWork);
			BGM = settingData['BGM'];
			BoughtBGM = settingData['BoughtBGM'];
			boughtObjects = settingData['boughtObjects'];
			NumGameOver = settingData['NumGameOver'];
			loan = settingData['loan'];
			// ruleGamesText = settingData['ruleGamesText'];

			displayMoney();
			// console.log(settingData['boughtGames']);
			var sinunnjanezo = MenuBool;
			loadPlayMenu();
			loadBuyMenu();
			loadObjectMenu();
			loadAchievementMenu();
			MenuBool = sinunnjanezo;
			SwitchMenu();
			setCss(theme);
			// console.log(settingData['money']);
			$('body').css('color', getColor(theme, 1,));
			$('body').css('background-color', getColor(theme, 2, ));
			// if(themeData[theme]=="image"){
				$('body').css('background-image', "url("+getImg(theme,1)+")");
				// console.log(getImg(theme,1));
			// }else {
			// 	$('body').css('background-image', "");
			// }
			//alert('読み込みました');
			$('#report').html('読み込みました。');
			setTimeout(function () {
				$('#report').html('');
			},3000);

		}
	}else{
		showDialog('GambleHouse','Welcome to the GambleHouse!');
		// console.log(HavePlayed);
		// console.log(localStorage.getItem($('#userName').val()));
		// console.log($('#userName').val());
		HavePlayed = 1;
		addMoney(100-money);
		resetData();
		addMoney(100-money);
	/*	boughtGames = [];
		boughtGames.push("game:BlackJack");
		boughtGames.push("game:HighAndLow");
		boughtGames.push("theme:Nomal");
		boughtGames.push("theme:Black");
		boughtGames.push("bgm:none");
		// console.log(MenuBool);
		sinunnjanezo = MenuBool;*/
		loadPlayMenu();
		loadBuyMenu();
		loadObjectMenu();
		loadAchievementMenu();
		MenuBool = sinunnjanezo;
		SwitchMenu();
		SaveData();
		// console.log('addData');
	}
}

$('#LoadButton').on('click' , function(){
	LoadData();
});
