function Currency(){
		y = document.getElementById("converter").value;
		return y;
	}
 
function Calculate(){
	y = Currency();
 
	x = document.getElementById("value1").value;

 	if(x == ""){
		document.getElementById("value2").value = "";
	}else{
		switch(y){
			case "USD":
				document.getElementById("value2").value = x * 23208.50;
			break;
 
			case "Yuan":
				document.getElementById("value2").value = x * 3299.80;
			break;
 
			
			break;
		}
	}
}