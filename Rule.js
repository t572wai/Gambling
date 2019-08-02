/*const ruleGamesTextFirst = '<li><a class="ToMainRuleHelp">ゲーム全体のルール</a></li>'+
										'<li><a class="ToBlackJackHelp">ブラックジャックについて</a></li>'+
										'<li><a class="ToHighAndLowHelp">ハイ&ローについて</a></li>';

let ruleGamesText = ruleGamesTextFirst;*/


function addRuleEventListener() {
	$('#RuleButton').on('click',function () {
		setCss(theme);
		$('#RuleMenu').dialog('open');
		// addRuleEventListener();
	});
	$('.ToMainHelp').on('click',function () {
		$('.helpDialog').dialog('close');
		$('#RuleMenu').dialog('open');
	})
	$('.ToSiteHelp').on('click',function () {
		$('.helpDialog').dialog('close');
		$('#SiteHelp').dialog('open');
	});
	$('.ToPlayHelp').on('click',function () {
		$('.helpDialog').dialog('close');
		$('#PlayHelp').dialog('open');
	})
	$('.ToBuyHelp').on('click',function () {
		$('.helpDialog').dialog('close');
		$('#BuyHelp').dialog('open');
	})
	$('.ToAchievementHelp').on('click',function () {
		$('.helpDialog').dialog('close');
		$('#AchievementHelp').dialog('open');
	})
	$('.ToObjectHelp').on('click',function () {
		$('.helpDialog').dialog('close');
		$('#ObjectHelp').dialog('open');
	});
	$('.ToGameHelp').on('click',function() {
		$('.helpDialog').dialog('close');
		$('#GameHelp').dialog('open');
	})
	$('.ToBlackJackHelp').on('click', function () {
		$('.helpDialog').dialog('close');
		$('#BlackJackHelp').dialog('open');
	});
	$('.ToBJMainHelp').on('click', function () {
		$('.helpDialog').dialog('close');
		$('#BJMainHelp').dialog('open');
	})
	$('.ToBJHitHelp').on('click', function () {
		$('.helpDialog').dialog('close');
		$('#BJHitHelp').dialog('open');
	})
	$('.ToBJStandHelp').on('click', function () {
		$('.helpDialog').dialog('close');
		$('#BJStandHelp').dialog('open');
	})
	$('.ToBJDoubleDownHelp').on('click', function () {
		$('.helpDialog').dialog('close');
		$('#BJDoubleDownHelp').dialog('open');
	})
	$('.ToBJSurrenderHelp').on('click', function () {
		$('.helpDialog').dialog('close');
		$('#BJSurrenderHelp').dialog('open');
	})
	$('.ToBJJokerHelp').on('click', function () {
		$('.helpDialog').dialog('close');
		$('#BJJokerHelp').dialog('open');
	})
	$('.ToHighAndLowHelp').on('click', function () {
		$('.helpDialog').dialog('close');
		$('#HighAndLowHelp').dialog('open');
	});
	$('.ToHALHighHelp').on('click', function () {
		$('.helpDialog').dialog('close');
		$('#HALHighHelp').dialog('open');
	})
	$('.ToHALLowHelp').on('click', function () {
		$('.helpDialog').dialog('close');
		$('#HALLowHelp').dialog('open');
	})
	$('.ToHALJokerHelp').on('click', function () {
		$('.helpDialog').dialog('close');
		$('#HALJokerHelp').dialog('open');
	})
	$('.ToMainRuleHelp').on('click', function () {
		$('.helpDialog').dialog('close');
		$('#MainRuleHelp').dialog('open');
	});
	$('.ToPokerHelp').on('click', function () {
		$('.helpDialog').dialog('close');
		$('#PokerHelp').dialog('open');
	});
	$('.ToPMedicineHelp').on('click' ,function () {
		$('.helpDialog').dialog('close');
		$('#PMedicineHelp').dialog('open');
	});
	$('.ToPChangeHelp').on('click' ,function () {
		$('.helpDialog').dialog('close');
		$('#PChangeHelp').dialog('open');
	});
	$('.ToPStopHelp').on('click' ,function () {
		$('.helpDialog').dialog('close');
		$('#PStopHelp').dialog('open');
	});
	$('.ToPJokerHelp').on('click' ,function () {
		$('.helpDialog').dialog('close');
		$('#PJokerHelp').dialog('open');
	});
	$('.ToFiveCardHelp').on('click' ,function () {
		$('.helpDialog').dialog('close');
		$('#FiveCardHelp').dialog('open');
	})
	$('.ToRoyalStraightFlashHelp').on('click' ,function () {
		$('.helpDialog').dialog('close');
		$('#RoyalStraightFlashHelp').dialog('open');
	})
	$('.ToStraightFlashHelp').on('click' ,function () {
		$('.helpDialog').dialog('close');
		$('#StraightFlashHelp').dialog('open');
	})
	$('.ToFourCardHelp').on('click' ,function () {
		$('.helpDialog').dialog('close');
		$('#FourCardHelp').dialog('open');
	})
	$('.ToFullHouseHelp').on('click' ,function () {
		$('.helpDialog').dialog('close');
		$('#FullHouseHelp').dialog('open');
	})
	$('.ToFlashHelp').on('click' ,function () {
		$('.helpDialog').dialog('close');
		$('#FlashHelp').dialog('open');
	})
	$('.ToStraightHelp').on('click' ,function () {
		$('.helpDialog').dialog('close');
		$('#StraightHelp').dialog('open');
	})
	$('.ToThreeCardHelp').on('click' ,function () {
		$('.helpDialog').dialog('close');
		$('#ThreeCardHelp').dialog('open');
	})
	$('.ToTwoPairHelp').on('click' ,function () {
		$('.helpDialog').dialog('close');
		$('#TwoPairHelp').dialog('open');
	})
	$('.ToOnePairHelp').on('click' ,function () {
		$('.helpDialog').dialog('close');
		$('#OnePairHelp').dialog('open');
	})
	$('.ToBUTAHelp').on('click' ,function () {
		$('.helpDialog').dialog('close');
		$('#BUTAHelp').dialog('open');
	})
}

$('.helpDialog').dialog({
	title: 'ヘルプ',
	autoOpen: false,
	width: 560
})

/**
 * @param rect1
 * @param rect2
 * @return boolean
 */
function detectCollision(rect1, rect2) {
		if( ( ( rect1.xStart <= rect2.xStart && rect2.xStart <= rect1.xEnd ) ||
					( rect1.xStart <= rect2.xEnd && rect2.xEnd <= rect1.xEnd ) ) &&
				( ( rect1.yStart <= rect2.yStart && rect2.yStart <= rect1.yEnd ) ||
					( rect1.yStart <= rect2.yEnd && rect2.yEnd <= rect1.yEnd ) )
		) {
				return true;
		} else {
				return false;
		}
}
/**
 * @param e Element
 * @return Object
 */
function createBoundingClientRect(e) {
		var x = (window.pageXOffset !== undefined)
				? window.pageXOffset
				: (document.documentElement || document.body.parentNode || document.body).scrollLeft;
		var y = (window.pageYOffset !== undefined)
				? window.pageYOffset
				: (document.documentElement || document.body.parentNode || document.body).scrollTop;
		var rect = e.getBoundingClientRect();
		var width = rect.width;
		var height = rect.height;
		var xStart = rect.left + x;
		var xEnd = xStart + width;
		var yStart = rect.top + y;
		var yEnd = yStart + height;
		return {
				rect: rect,
				width: width,
				height: height,
				xStart: xStart,
				xEnd: xEnd,
				yStart: yStart,
				yEnd: yEnd
		};
}
