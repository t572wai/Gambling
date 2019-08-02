function showDialog(title, message, func) {
	var html_dialog = '<div>' + message + '</div>';
	// $(html_dialog).keypress(function(event){
	// 	let key = event.keyCode;
	// 	console.log(key);
	// 	if(key==13){
	// 		// $(function() {
	// 			if(func!=null)func();
	// 			$(this).dialog("close");
	// 			$(this).remove();
	// 		// })
	// 	}
	//
	// })
	$(html_dialog).dialog({
		title: title,
		open: function () {
			setCss(theme);
		},
		close: function() {
			if(func!=null)func();
			$(this).remove();
			// $(this).off();
		}
	});
}

function showModalDialog(title, message, func) {
	var html_dialog = '<div>' + message + '</div>';
	// $(html_dialog).keypress(function(event){
	// 	let key = event.keyCode;
	// 	console.log(key);
	// 	if(key==13){
	// 		// $(function() {
	// 			if(func!=null)func();
	// 			$(this).dialog("close");
	// 			$(this).remove();
	// 		// })
	// 	}
	//
	// });
	$(html_dialog).dialog({
		title: title,
		modal: true,
		open: function () {
			setCss(theme);
		},
		close: function() {
			if(func!=null)func();
			// $(this).blur();
			$(this).remove();
		}
	});
}

// function showDialogSelectable(title, message, buttonNames, funcs, funcClose) {
// 	var html_dialog = '<div>' + message + '</div>';
// 	$(html_dialog).dialog({
// 		title: title,
// 		close: function() {
// 			if(func!=null)func();
// 			$(this).remove();
// 		}
// 	});
// 	let buttons = '{buttons:[';
// 	let i=0;
// 	for (let buttonName of buttonNames) {
// 		buttons += '{title:' + buttonName + ',click:function(){' + funcs[i] + '}]}';
// 		i++;
// 	}
// 	$(html_dialog).dialog(buttons);
// }
