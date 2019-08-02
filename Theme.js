const themeColors = {
	Nomal: {1:"black",2:"white",3:"gray",4:"skyblue",5:"white",6:"black",7:"#8e8e8e",8:"#2f2f2f",9:"#white",11:"rgba(12, 209, 198, 0.26)",12:"#124a94",13:"#0cd1c6",14:"#3377c6"},
	Black: {1:"#ffcd59",2:"#080302",3:"gray",4:"#f07878",5:"#ed6859",6:"#fff8bd",7:"#8e8e8e",8:"#2f2f2f",9:"#white",10:"#fff8bd",11:"rgba(#fff8bd, 0.4)",12:"rgb(237, 106, 12)"},
	Blue: {1:"#3b4f51",2:"#59c6d1",3:"gray",4:"#ff513f",5:"#d62828",6:"#234d51",7:"#8e8e8e",8:"#2f2f2f",9:"#234d51",10:"#11151c"},
	Orange: {1:"#173648",2:"#e28000",3:"gray",4:"#f02e1b",5:"#ed0000",6:"#082536",7:"#8e8e8e",8:"#2f2f2f",9:"#fad27f"},
	Green: {1:"#f0e7c2",2:"#449455"},
	Ichimatsu_Blue: {1:"black",2:"white",3:"gray",4:"skyblue",5:"white",6:"black",7:"#8e8e8e",8:"#2f2f2f",9:"#white"},
	Ichimatsu_Orange: {1:"black",2:"white",3:"gray",4:"skyblue",5:"white",6:"black",7:"#8e8e8e",8:"#2f2f2f",9:"#white"},
	LikeRainbow: {1:"black",2:"white",3:"gray",4:"skyblue",5:"white",6:"black",7:"#8e8e8e",8:"#2f2f2f",9:"#white"},
	Ink: {1:"white",2:"black",3:"gray",4:"skyblue",5:"white",6:"black",7:"#8e8e8e",8:"#2f2f2f",9:"#white"},
	PlaceYourBet: {1:"white",2:"black",3:"gray",4:"skyblue",5:"white",6:"black",7:"#8e8e8e",8:"#2f2f2f",9:"#white"}
}

const themeName={
	Nomal: "ノーマル",
	Black: "ブラック",
	Blue: "ブルー",
	Orange: "オレンジ",
	Green: "グリーン",
	Ichimatsu_Blue: "市松模様(青)",
	Ichimatsu_Orange: "市松模様(オレンジ)",
	LikeRainbow: "虹みたいな線?",
	Ink: "インク的なの",
	PlaceYourBet: "Place your bet"
}

const themeLogo={
	Nomal: "Black",
	Black: "Black",
	Blue: "White",
	Orange: "White",
	Ichimatsu_Blue: "Black",
	Ichimatsu_Orange: "White",
	LikeRainbow: "White",
	Ink: "White",
	PlaceYourBet: "White"
}

const themeData={
	Nomal: "",
	Black: "",
	Blue: "bold",
	Orange: "",
	Ichimatsu_Blue: "bold",
	Ichimatsu_Orange: 'bold',
	LikeRainbow: "",
	Ink: "",
	PlaceYourBet: ""
}

const themeImg={
	Ichimatsu_Blue: {1:"./Themes/Ichimatsu_Blue.jpg"},
	Ichimatsu_Orange: {1:"./Themes/Ichimatsu_Orange.jpg"},
	LikeRainbow: {1:"./Themes/likeRainbow.png"},
	Ink: {1:"./Themes/Ink.png"},
	PlaceYourBet: {1:"./Themes/Place_your_bet.jpg"},
	Nomal: {1:"none"},
	Black: {1:"none"},
	Blue: {1:"none"},
	Orange: {1:"none"},
}

BoughtTheme = new Array();
BoughtTheme.push('Nomal');

function getColor(themeTemp, n, i) {
	let colors;
	switch (themeData[themeTemp]) {
		case "bold":
			$('body').css('font-weight','bold');
			break;
		default:
			$('body').css('font-weight','normal');
			break;
	}
	try {
		// console.log(themeTemp);
		colors = themeColors[themeTemp];
	} catch (e) {
		// console.log("error loadTheme");
		return "black";
	}
	// colors.push(1);
	// colors[1] = "black";
	// console.log(colors);
	try {
		if(colors[n]){
			return colors[n];
		}else{
			for (k of i) {
				if (colors[k]) {
					return colors[k];
				}
			}
		}
	} catch (e) {
		// console.log("error loadThemeColor");
		// return colors[1];
		return "black";
	}
}

function getImg(theme, n) {
	// console.log(themeImg[theme]);
	if(themeImg[theme][n]!="none"){
		return "url('"+themeImg[theme][n]+"')";
	}else {
		return "";
	}
}

function updateThemeAction() {
	theme=$('#selectTheme').val();
	if(theme!="Nomal" && theme!="Black")achievement.HaveChangedTheme=1;
	if (theme != "customTheme") {
		isCustomTheme="";
		if(BoughtTheme.indexOf(theme)==-1)BoughtTheme.push(theme);console.log(BoughtTheme);
		loadPlayMenu();
		// setCss(theme);
		// console.log(theme);
	}else {
		if(BoughtTheme.indexOf(theme)==-1)BoughtTheme.push(theme);console.log(BoughtTheme);
		if(BoughtTheme.length == Object.keys(themeName).length) achievement.AllTheme = 1;
	}
	// console.log(theme);
}
