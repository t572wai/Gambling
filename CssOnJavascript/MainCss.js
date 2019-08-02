function setCss(themeTemp) {
	if(themeTemp==''){
		themeTemp = theme;
	}
	// console.log(themeTemp);
	if(!themeName[themeTemp])themeTemp="Nomal";
	setCssButton(themeTemp);
	setCssBackGround(themeTemp);
	setColor(themeTemp);
	setCssFunction(themeTemp);
}

setCss(theme);

$(window).resize(function () {
	setCss(theme);
});

$('#playMenu').resize(function () {
	setCss(theme);
});

// $('#playMenu').addEventListener('afterRewrite',function () {
// 	console.log("lalala");
// 	setCss(theme);
// })
