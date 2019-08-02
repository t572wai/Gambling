const objectName={
	'StatueOfGamble':"ギャンブルの女神像",
	'Mr.Gamble':"ギャンブル博士像"
}

const objectImg={
	'StatueOfGamble':"./Objects/StatueOfGamble.png",
	'Mr.Gamble':"./Objects/Mr.Gamble.png"
}

let boughtObjects = new Array();


function loadObjectMenu() {
	MenuBool = -1;
	setCss(theme);
	objectMenu = "<span class='menuTitle'>オブジェクト画面</h2><div id='objects'>";
	// console.log(objectMenu);
	if(boughtObjects.length != 0){
		for (boughtObject of boughtObjects) {
			// console.log(objectImg[boughtObject]);
			objectMenu += '<span class="objectOne" style="width:250px;" id="objectOf'+boughtObject+'">'+
												'<img src="'+objectImg[boughtObject]+'" style="'+setObjectSize(boughtObject)+'">'+
												'<hr>'+
												'<p>「'+objectName[boughtObject]+'」</p>'+
										'</span>';
		}
	}else {
		objectMenu += "ありません";
	}
	objectMenu += "</div>";
	$('#ObjectMenu').html(objectMenu);
	// $('#Menu').text(objectMenu);
}

function setObjectSize(object) {
	let imgWidth = $('#objectOf'+object).width();
	let imgHeight = $('#objectOf'+object).height();
	if(imgWidth>=imgHeight){
		return "width:250px";
	}else {
		return "height:250px";
	}
}
