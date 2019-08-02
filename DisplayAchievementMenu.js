achievementMenu = '<div id="achievementMenu">' +
						'<span class="menuTitle">トロフィー画面</span>'+
//						'<div>準備中 coming soon</div>' +
					'</div>';

					var achievementFirst = {
						HavePlayedEver: 0,
						HavePlayedHAL: 0,
						HavePlayedBJ: 0,
						HaveGottenFif: 0,
						HaveGameOver: 0,
						HaveLose: 0,
						// HavePlayedPoker: 0,
						// HavePlayedSBJ: 0,
						// AllBGM: 0,
						// AllTheme: 0,
						HaveChangedTheme: 0,
						HaveChangedBGM: 0
					};

					var achievementWork = JSON.stringify(achievementFirst);
					achievementWork = JSON.parse(achievementWork);

					var achievement = JSON.stringify(achievementFirst);
					achievement = JSON.parse(achievement);

					var achievementName = {
						HavePlayedEver: "はじめてのギャンブル",
						HavePlayedTen: "ギャンブル初心者",
						HavePlayedFif: "ギャンブル上級者",
						HavePlayedHundred: "ギャンブル中毒者",
						HavePlayedThou: "おとなしく、病院へいけ",
						HaveGottenFif: "普通の人",
						HaveGottenTho: "小金持ち",
						HaveGameOver: "ゲームオーバー",
						HaveLose: "敗北をかみしめる",
						FallDownBird: "地に落ちた鳥",
						HaveGottenTwoThoMan: "これで老後も安心？",
						HavePlayedBJ: "はじめてのブラックジャック",
						HavePlayedHAL: "はじめてのハイ＆ロー",
						HavePlayedPoker: "はじめてのポーカー",
						HavePlayedSBJ: "はじめてのスパニッシュブラックジャック",
						HaveChangedTheme: "はじめてのテーマ",
						HaveChangedBGM: "はじめてのBGM",
						AllBGM: "BGMコレクター",
						AllTheme: "テーマコレクター"
					};

					var achievementPrize = {
						HavePlayedEver: "M&A:20,HavePlayedTen",
						HavePlayedTen: "M&A:30,HavePlayedTen",
						HavePlayedFif: "M&A:100,HavePlayedHundred",
						HavePlayedHundred: "money:100",
						HavePlayedThou: "money:99999",
						HaveGottenFif: "M&A:20,HaveGottenTho",
						HaveGottenTho: "money:100",
						HaveGottenTwoThoMan: "money:190603",
						HaveGameOver: "money:50",
						HaveLose: "M&A:40,FallDownBird",
						FallDownBird: "money:100",
						FallDownBird: "money:40",
						HavePlayedHAL: "money:50",
						HavePlayedPoker: "money:50",
						HavePlayedBJ: "money:50",
						HavePlayedSBJ: "money:50",
						HaveChangedTheme: "special",
						HaveChangedBGM: "special",
						AllBGM: "special",
						AllTheme: "special"
					};
					let didAcceptFirst ={};

					const achievementExplains={
						HavePlayedEver : "ギャンブルのゲームを遊んだ",
						HavePlayedTen : "ギャンブルで10回勝つ",
						HavePlayedFif: "ギャンブルで50回勝つ",
						HavePlayedHundred: "ギャンブルで100回勝つ",
						HavePlayedThou: "ギャンブルで1000回勝つ",
						HaveLose: "ギャンブルで負ける",
						FallDownBird: "一度のゲームで1000コイン失う",
						HaveGameOver: "ゲームオーバーになる",
						HaveGottenFif: "500コイン以上所持する",
						HaveGottenTho: "1000コイン以上所持する",
						HaveGottenTwoThoMan: "2000万コイン以上所持する",
						HavePlayedPoker: "ポーカーで遊んだ",
						HavePlayedHAL: "ハイ＆ローで遊んだ",
						HavePlayedBJ: "ブラックジャックで遊んだ",
						HavePlayedSBJ: "スパニッシュブラックジャックで遊んだ",
						HaveChangedTheme: "テーマをノーマル、ブラック以外に設定した",
						HaveChangedBGM: "BGMを設定した",
						AllBGM: "BGMをすべてあつめた",
						AllTheme: "テーマをすべてあつめた"
					}

					let achievementCount = {
						HavePlayedTen: 0,
						HavePlayedFif: 0,
						HavePlayedHundred: 0,
						HavePlayedThou: 0
					}
					/* = {
						HavePlayedEver: 0,
						HavePlayedHAL: 0,
						HavePlayedPoker: 0,
						HavePlayedBJ: 0,
						HavePlayedSBJ: 0,
						HaveChangedTheme: 0,
						HaveChangedBGM: 0,
						AllBGM: 0,
						AllTheme: 0
					};*/

					for (achievementID in achievementName) {
						// console.log(achievementID);
						didAcceptFirst[achievementID]=0;
					}
					// console.log(didAcceptFirst);

					let acceptActions = {
						HaveChangedTheme: function () {
							achievement['AllTheme']=0;
							achievementWork['AllTheme']=0;
							addBuyMenuItem(themeName['LikeRainbow']+'  '+gamble['LikeRainbow'],'theme:LikeRainbow');
							addBuyMenuItem(themeName['Ink']+'  '+gamble['Ink'],'theme:Ink');
							addBuyMenuItem(themeName["PlaceYourBet"]+"  "+gamble["PlaceYourBet"],'theme:PlaceYourBet');
							showDialog('トロフィー','買い物画面にテーマが追加されました');
						},
						HaveChangedBGM: function() {
							achievement['AllBGM']=0;
							achievementWork['AllBGM']=0;
							addBuyMenuItem(bgmName["sniperConflict"]+"  "+gamble["sniperConflict"],'bgm:sniperConflict');
							addBuyMenuItem(bgmName["StableYet"]+"  "+gamble["StableYet"],'bgm:StableYet');
							showDialog('トロフィー','買い物画面にBGMが追加されました');
						},
						customBGM: function() {
							addBuyMenuItem(bgmName["customBGM"]+" "+gamble["customBGM"], 'bgm:customBGM');
							showDialog('トロフィー','買い物画面にカスタムBGMが追加されました');
						},
						customTheme: function () {

						}
					}

					let didAccept = JSON.stringify(didAcceptFirst);
					didAccept = JSON.parse(didAccept);

function loadAchievementMenu() {
	MenuBool = 2;
	// setCss(theme);
	// $('body').css('color', getColor(theme, 1,));
	// $('body').css('background-color', getColor(theme, 2, ));
	// if(themeData[theme]=="image"){
		// $('body').css('background-image', getImg(theme,1));
		// console.log(getImg(theme,1));
	// }else {
	// 	$('body').css('background-image', "");
	// }
	if($('#allBGM').attr('src')!=bgm[BGM]){
		$('#allBGM').attr('src', bgm[BGM]);
	}
	let achievementMenu = '<div id="achievementMenuIn"><span id="schiTitle" class="menuTitle">トロフィー画面</span><br>';
	// console.log(achievement);
	for(var achi in achievement){
		// if()
		// console.log(achi);
		// console.log(achievement);
		// console.log(achievement[achi]);
		let src;
		let bColor;
		let br;
		let explain=achievementExplains[achi];
		let acceptAction = "";
		let maru = "";
		// console.log(new String(achievementPrize[achi]).split(":")[0]);
		// console.log(didAccept[achi]);
		// console.log(achi);
		if(didAccept[achi]==0){
			//報酬設定用
			switch (new String(achievementPrize[achi]).split(":")[0]) {
				// console.log();
				case "money" : maru="●";
											acceptAction = "addMoney(parseInt(new String('"+achievementPrize[achi]+"').split(\':\')[1]));"+
											"showDialog(\'トロフィー\',new String(\'"+achievementPrize[achi]+"\').split(\':\')[1]+'コイン取得しました');"+
											"didAccept[\'"+achi+"\']=1;"+
											"loadAchievementMenu();"+
											"SaveData();";
							break;
				case "special" :
					maru='●';acceptAction = "$("+new String(acceptActions[achi]).replace(/'/g,"&#39;").replace(/"/g,"&quot;").replace(/\r\n/g,'').replace(/	/g,'')+");"+
					"didAccept['"+achi+"']=1;"+
					"loadAchievementMenu();"+
					"SaveData();";
					// console.log(acceptAction);
					break;
				case "M&A" : maru="●";
											let MandA = new String(achievementPrize[achi]).split(":")[1].split(',');
											acceptAction = "addMoney(parseInt("+MandA[0]+"));"+
											"showDialog(\'トロフィー\','"+MandA[0]+"'+'コイン取得しました');"+
											"didAccept[\'"+achi+"\']=1;";
											MandA.shift();
											for(let A of MandA){
												acceptAction += 'achievement[&quot;'+A+'&quot;]=0;';
												acceptAction += 'achievementWork[&quot;'+A+'&quot;]=0;';
											}
											acceptAction+="loadAchievementMenu();"+
																		"SaveData();";
				}
				acceptAction += 'SaveData();';
			}else if(didAccept[achi]==1){
				acceptAction = "showDialog('トロフィー','取得済みです');";
			}
			// console.log(achievement);
			if (parseInt(achievement[achi]) == 1) {
				bColor = getColor(theme,2,);
				src = "./Achievement/trophy.jpg";
				canAccept = "";
			}else {
				bColor = getColor(theme,3,);
				src = "./Achievement/chain.png";
				canAccept = "disabled";
				maru = "";
			}
			// console.log(bColor);

			// var acMenu = document.getElementById('Menu');
			achievementMenu += '<span class="achievementOne" id="achi' + achi + '"><div class="achiImg" style="background-color:'+bColor+';">'+
													'<img class="achiPicture" src="' + src + '"></div><div class="achiButtons">'+
													'<hr class="achiPictureToButtons">'+
													'「' + achievementName[achi] + '」<br>';
			if(br!=0){
				for (var i = 0; i < 1-(('「'+achievementName[achi]+'」').length-1)/12; i++) {
					achievementMenu += '<br>';
				}
			}else {
				// console.log(achievementName[achi]);
			}
			// console.log(explain);
			achievementMenu +=	'<button type="button" id="getMoney' + achievementName[achi] +  '" onclick="'+acceptAction+'" '+canAccept+'>'+maru+'受け取り</button>'+
													'<button style="margin-left:10px" type="button" id="help' + achievementName[achi]  + '" onclick=\'showDialog("Help:「'+achievementName[achi]+'」", "'+explain+'")\'>?</button></div>' +
													'</span>';
			// document.getElementById('getMoney').disabled = canAccept;

	}
	achievementMenu += "</div>";
	$('#AchievementMenu').html(achievementMenu);
	// MenuBool = -1;
	// console.log(didAccept);
	setCss(theme);
}

function checkGetAchievement() {
	// console.log(achievement);
	// console.log(achievementWork);
	// console.log(achievementJson);
	// console.log(achievementWorkJson);
	var achievementKJson = JSON.stringify(Object.keys(achievement));
	var achievementWorkKJson = JSON.stringify(Object.keys(achievementWork));
	var achievementJson = JSON.stringify(achievement);
	var achievementWorkJson = JSON.stringify(achievementWork);
	if(achievementWorkKJson!==achievementKJson){
		openCheckGetAchievementDialog(1);

	}else if(achievementWorkJson!==achievementJson){
		openCheckGetAchievementDialog();
		// achievementWork = achievement;
		console.log("get");
	}else {
		console.log("don't get");
	}
	achievementWorkJson = achievementJson;
	achievementWork = JSON.parse(achievementWorkJson);
}

function canAcceptMoney() {
	for (achi in achievement) {
		// console.log(achi);
		if(achievement[achi]==1 && didAccept[achi]==0 && achievementPrize[achi].split(':')[0]=='money' && achievementPrize[achi].split(':')[1]!='0'){
			return 1;
		}
	}
	return 0;
}
