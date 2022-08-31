function oddOrEven(prm){
	let deger	=	0;
	let conToStr	=	prm.toString();
	for(i = 0; i < conToStr.length; i++){
		deger	+=	parseInt(conToStr[i]);
	}
	if(deger % 2 == 0){
		console.log("EVEN!");
	}else if(deger % 2 == 1){
		console.log("ODD!");
	}
}