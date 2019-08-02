function useMoney(n, i, b){
	if(n<=0) return 0;
	if(money>n){
		if(b!=1)money -= n;
		displayMoney();
		return 1;
	}else if(i==1 && money==n){
		if(b!=1)money -= n;
		displayMoney();
		// if(g==1){
		// 	openGameOverDialog();
		// }
		return 1;
	}else{
		return 0;
	}
}

function addMoney(n,b,func){
	// console.log(money);
	// console.log(b);
	if(b==1){
		if(func!=null && func!=""){
			showDialog('お金',n+'コインゲット',func);
		}else {
			showDialog('お金',n+'コインゲット');
		}
	}
	money += parseInt(n);
	console.log(money);
	if(money>=500){
		achievement.HaveGottenFif=1;
		LoadMenu();
	}
	if(money>=1000)achievement.HaveGottenTho=1;LoadMenu();
	if(money>=20000000)achievement.HaveGottenTwoTho=1;LoadMenu();
	displayMoney();
}

function addPrise(n,func) {
	if(loan>=Math.floor(n*0.2)){
		loan -= Math.floor(n*0.2);
		n -= Math.floor(n*0.2);
	}else if(loan<Math.floor(n*0.2)){
		n -= loan;
		loan = 0;
	}
	addMoney(n,1,func);
}

function displayMoney(){
	if(loan>0){
		$('#moneyDiv').html("所持金:" + money + '&emsp;&emsp;借金:' + loan);
	}else {
		$('#moneyDiv').html("所持金:" + money);
	}
	if(loan>=1000){

	}
	// document.getElementById('moneyDiv').innerHTML = "所持金:" + money;
}
