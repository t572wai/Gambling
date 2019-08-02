var bgmName={
	Last_daily_sound:"Last daily sound",
	thinkingOfPeace:"安らぎの思い",
	sniperConflict:"狙撃手の葛藤",
	StableYet:"Stable yet",
	Casino1:"カジノ1",
	Casino2:"カジノ2",
	customBGM:"カスタムBGM",
	none:"なし"
}

var bgm={
	Last_daily_sound:"./BGMs/Last_daily_sound.mp3",
	thinkingOfPeace:"./BGMs/安らぎの思い.mp3",
	sniperConflict:"./BGMs/狙撃手の葛藤.mp3",
	StableYet:"./BGMs/Stable yet.mp3",
	Casino1:"./BGMs/カジノ1.mp3",
	Casino2:"./BGMs/カジノ2.mp3",
	customBGM:"",
	none:""
}

BoughtBGM = new Array();
BoughtBGM.push('none');

function updateBGMAction() {
	console.log("update bgm");
	console.log($('#selectBGM').val());
	BGM = $('#selectBGM').val();
	if(BGM!="customBGM"){
		$('#allBGM').attr('src',bgm[BGM]);
		isCustomBGM = "";
		if(BGM!="none") achievement.HaveChangedBGM=1;
		if(BoughtBGM.indexOf(BGM)==-1)BoughtBGM.push(BGM);console.log(BoughtBGM);
		console.log(achievement);
		console.log(achievement.AllBGM);
		if(BoughtBGM.length == Object.keys(bgmName).length && achievement.AllBGM==0) {
			achievement.AllBGM = 1;
			console.log(achievement);
		}
		console.log(Object.keys(bgmName).length);
		loadPlayMenu();
		// setCss(theme);
	}else {
		// isCustomBGM = "<input type='file' accept='audio/*' id='customBGMInput'>";
		console.log("<input type='file' accept='audio/*' id='customBGMInput'>");
		if(BGM!="none") achievement.HaveChangedBGM=1;
		if(BoughtBGM.indexOf(BGM)==-1)BoughtBGM.push(BGM);
		if(BoughtBGM.length == Object.keys(bgmName).length) achievement.AllBGM = 1;
		loadPlayMenu();
		// setCss(theme);
		BGM = "customBGM";
		// setPlayMenu();
		$('#customBGMInput').on('input', function (e) {
			// let file = document.getElementById('customBGMInput').files[0];
			//
			// let reader = new FileReader();
			//
			// let upData = "";
			//
			// reader.readAsText(file);
			// reader.onload = function () {
			// 	upData = reader.result;
			// }
			// bgm[BGM]=$('#customBGMInput').val();
			let reader = new FileReader();
			reader.onload = function (e) {
			}
			let files = document.getElementById('customBGMInput').files;
			console.log(files);
			// console.log(reader.readAsDataURL(files[0]));
			bgm["customBGM"] =  getAbsolutePath(files[0]);
			console.log(bgm);


			$('#allBGM').attr('src',bgm[BGM]);
			console.log(bgm[BGM]);
			// $('#allBGM').attr('src',bgm[BGM]);
			setTimeout(function () {
				// console.log(upData);
				$('#customBGMInput').remove();
			},100);
		});
	}
}
