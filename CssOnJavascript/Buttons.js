function setCssButton(themeT) {
	$('button').css({'background-color': getColor(themeT,4),'border-color': getColor(themeT,6)});
	$('button').hover(function () {
		$(this).css('background-color',getColor(themeT,5));
	},
	function () {
		$(this).css('background-color',getColor(themeT,4));
	});
	isOpacityRule();
	// $('.SwitchButton').css({'background-color':getColor(themeT,7),'border-color':getColor(themeT,8)});
	// $('.SwitchButton').hover(function () {
	// 	$(this).css({'background-color':getColor(themeT,7),'border-color':getColor(themeT,8)});
	// },function () {
	// 	$(this).css({'background-color':getColor(themeT,7),'border-color':getColor(themeT,8)});
	// });
}

window.addEventListener('scroll', () => {
	isOpacityRule();
}, false);

// console.log("css button");
// setCssButton(theme);

function isOpacityRule() {
	let ruleButton = document.querySelector('#RuleButton');
	let ruleRect = createBoundingClientRect(ruleButton);
	let all = $('#SwitchButtonDiv > *');
	let Menu = $('#Menu');
	// for()
	// console.log(all);
	$(ruleButton).css('opacity',1)
	for (element of all) {
		if(element != ruleButton && element != Menu && detectCollision(createBoundingClientRect(element),ruleRect)){
			$(ruleButton).css('opacity',0.5);
		}
	}
	switch (MenuBool) {
		case -1:
			all=$('#ObjectMenu');
			break;
		case 0:
			all=$('#PlayMenu');
			break;
		case 1:
			all=$('#BuyMenu');
			break;
		case 2:
			all=$('#AchievementMenu');
			break;
	}
	for (element of all) {
		if(element != ruleButton && element != Menu && detectCollision(createBoundingClientRect(element),ruleRect)){
			$(ruleButton).css('opacity',0.5);
		}
	}
}
