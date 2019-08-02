let jokerValueT="";

playMenu = 					'<span class="menuTitle">プレイ画面</span><br>'+
										'●テーマ'+
										'<div id="selectThemeDiv">'+
											'<select id="selectTheme" size="0">'+
											'</select>'+
											'<button type="button" id="updateThemeButton" onclick="updateThemeAction();">テーマ更新</button>'+
										'</div>'+
										'●BGM'+
										'<div id="selectBGMDiv">' +
											'<select id="selectBGM" size="0">' +
											'</select>'+
											'<button type="button" id="updateBGMButton" onclick="updateBGMAction();">BGM更新</button>'+
										'</div>' +
										'●ゲーム' +
										'<div id="selectGambleDiv">' +
											'<select class="selectGamble" name="selectGamble" size="0" id="selectGamble">' +
													// '<option value="BlackJack">ブラックジャック</option>' +
													// '<option value="HighAndLow">ハイ&ロー</option>' +
											'</select>' +
										'</div>' +
										'<div id="joker">' +
											'ジョーカーを使う' +
												'<label id="joker__label">' +
													'<input type="checkbox" id="joker__input" value="joker"/>' +
													'<span id="joker__content"></span>' +
													'<span id="joker__circle"></span>' +
													'<input type="hidden" id="joker__input__hidden" value="a"/>' +
												'</label>' +
										'</div>' +
										'<div id="playButton">' +
														'<button type="button" name="PlayButton" id="PlayButton">遊ぶ</button>' +
										'</div>' +
										'<div id="MainMenu">' +
										'</div>';

let isNow = "";

function loadPlayMenu() {
	// console.log($('#joker__input').prop('checked'));
	// jokerValueT = $('#joker__input').prop("checked");
	let fp = new Date();
		MenuBool = 0;
		let nowGame= $('#selectGamble').val();
	// console.log(boughtGames);
		// console.log(arePlaying);
		if(arePlaying!=1){
			setPlayMenu();
			$('#PlayMenu').html(playMenu);
		}
		// console.log(boughtGames);
		setCss(theme);
		// $('body').css('color', getColor(theme, 1,));
		// $('body').css('background-color', getColor(theme, 2, ));
		// // if(themeData[theme]=="image"){
		// 	$('body').css('background-image', getImg(theme, 1));
		// 	$('')
			// console.log(getImg(theme,1));
		// }else {
		// 	$('body').css('background-image', "");
		// }
		if($('#allBGM').attr('src')!=bgm[BGM]){
			$('#allBGM').attr('src', bgm[BGM]);
		}
		// console.log(getColor(theme, 1,));
		// if(arePlaying!=1){
		var gC = 13;
		var tC = 13;
		var bC = 13;
		let selectGambleT;
		selectGambleT = $('#selectGamble').html();
		for (var disGame of boughtGames) {
				isNow="";
				// $("#buyGambleSelect").children('option[value=' + disGame + ']').remove();
				var gameType = disGame.split(":");
				if(gameType[0] == "game"){
					if(arePlaying!=1){
						selectGambleT += '<option value="'+gameType[1]+'" style="background-color:'+getColor(theme, gC, [4])+'" onclick="$(\'.selectOption\').attr(\'class\',\'noSelectOption\');$(this).attr(\'class\',\'selectOption\')" id="'+gameType[1]+'">'+gameName[gameType[1]]+'</option>'
	//					selectGambleT+=$('<option>').text(gameName[gameType[1]])
		//																		.val(gameType[1])
		//																		.css('background-color',getColor(theme,gC,[4]))
			//																	.attr({'onclick':"$('.selectOption').attr('class','noSelectOption');$(this).attr('class','selectOption')",'id':gameType[1]})
				//															;
					}
					// console.log(selectGambleT);
					if(gameType[1]=='BlackJack')$('#'+gameType[1]).attr('class','selectOption');
					if(gameType[1]==nowGame)isNow="●";
					if(gC==13){
						gC=14;
					}else {
						gC=13;
					};
					var size = parseInt($("#selectGamble").attr('size'));
					size = size+1;
					if(arePlaying!=1)$("#selectGamble").attr('size', size);
					// buyMenuSize++;
					// setBuyMenu(1);
					// document.getElementById('Menu').innerHTML = playMenu;
					// console.log(boughtGames);
					// console.log(gameName[disGame[1]]);
					// console.log(disGame);
				}else if (gameType[0] == "theme") {
					if(gameType[1]==theme){
						isNow = "●";
					}
					if(arePlaying!=1){
						$("#selectTheme").append($('<option>').text(isNow+themeName[gameType[1]]).val(gameType[1]).css('background-color',getColor(theme,tC,[4])));
						if(tC==13){
							tC=14;
						}else {
							tC=13;
						};
					}else {
						$("#"+gameType[1]).text(isNow+themeName[gameType[1]]).css('background-color',getColor(theme,tC,[4])).css('background-color',getColor(theme,tC,[4]));
						if(tC==13){
							tC=14;
						}else {
							tC=13;
						};
						// console.log(isNow+themeName[gameType[1]]);
					}
					var size = parseInt($("#selectTheme").attr('size'));
					size = size+1;
					if(arePlaying!=1)$("#selectTheme").attr('size', size);
					// buyMenuSize++;
					// setBuyMenu(1);
					// document.getElementById('Menu').innerHTML = playMenu;
					// console.log(boughtGames);
					// console.log(themeName[disGame[1]]);
					// console.log(disGame);
				}else if (gameType[0] == "bgm") {
					// if(gameType[1]!="なし"){
					if(gameType[1]==BGM){
						isNow = "●";
					}
					if(arePlaying!=1){
						$("#selectBGM").append($('<option>').text(isNow+bgmName[gameType[1]]).val(gameType[1]).css('background-color',getColor(theme,bC,[4])));
						if(gC==13){
							gC=14;
						}else {
							gC=13;
						};
					}else {
						$("#"+gameType[1]).text(isNow+themeName[gameType[1]]).css('background-color',getColor(theme,bC,[4]));
						if(gC==13){
							gC=14;
						}else {
							gC=13;
						};
					}
					var size = parseInt($("#selectBGM").attr('size'));
					size++;
					// console.log(size);
					if(arePlaying!=1)$("#selectBGM").attr('size', size);
					// buyMenuSize++;
					// setBuyMenu(1);
					// document.getElementById('Menu').innerHTML = playMenu;
					/*}else {
						$("#selectBGM").append($('<option>').text("なし").val("none"));
						var size = parseInt($("#selectBGM").attr('size'));
						size = size+1;
						$("#selectBGM").attr('size', size);
					}*/
				}
		}
		// console.log(selectGambleT);
		$('#selectGamble').html(selectGambleT);
		// }
		// MenuBool = 0;
		if(BGM=="customBGM"){
			$('#selectBGMDiv').append("<input type='file' accept='audio/*' id='customBGMInput'>");
		}
		// console.log(MenuBool);
		if(arePlaying!=1)checkGetAchievement();
		setTimeout(function () {
			console.log(new Date().getTime()-fp.getTime()+'ms');
		},0)
}

function setPlayMenu() {
	playMenu = 					'<span class="menuTitle">プレイ画面</span><br>'+
											'●テーマ'+
											'<div id="selectThemeDiv">'+
												'<select id="selectTheme" size="0">'+
												'</select>'+
												'<button type="button" id="updateThemeButton" onclick="updateThemeAction();">テーマ更新</button>'+
											'</div>'+
											'●BGM'+
											'<div id="selectBGMDiv">' +
												'<select id="selectBGM" size="0">' +
												'</select>'+
												'<button type="button" id="updateBGMButton" onclick="updateBGMAction();">BGM更新</button>'+isCustomBGM+
											'</div>' +
											'●ゲーム' +
											'<div id="selectGambleDiv">' +
												'<select class="selectGamble" name="selectGamble" size="0" id="selectGamble">' +
														// '<option value="BlackJack">ブラックジャック</option>' +
														// '<option value="HighAndLow">ハイ&ロー</option>' +
												'</select>' +
											'</div>' +
											'<div id="joker">' +
												'ジョーカーを使う' +
													'<label id="joker__label">' +
														'<input type="checkbox" id="joker__input" value="joker" '+jokerValueT+'/>' +
														'<span id="joker__content"></span>' +
														'<span id="joker__circle"></span>' +
														'<input type="hidden" id="joker__input__hidden" value="a"/>' +
													'</label>' +
											'</div>' +
											'<div id="playButton">' +
															'<button type="button" name="PlayButton" id="PlayButton">遊ぶ</button>' +
											'</div>' +
											'<div id="MainMenu">' +
											'</div>';
		$('#PlayMenu').html(playMenu);
}
