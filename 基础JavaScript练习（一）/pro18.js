var arrData = [] ;

	function left_In() {
		var word = document.getElementById("input_num").value.trim() ;
		if(word_transform()) {
			alert("要求输入应为数字") ;
			return ;
		}
		else {
		arrData.unshift(word) ;
		display() ;
		}
	}
	function right_In() {
		var word = document.getElementById("input_num").value.trim() ;
		if(word_transform()) {
			alert("要求输入应为数字") ;
			return ;
		}
		else {
		arrData.push(word) ;
		display() ;
		}
	}
	function left_Out() {
		 if(arrData=="") { 
			alert("数组为空");  
			return ;
		}
		else {
		var left_out=arrData.shift() ;
		display() ;
		alert(left_out) ;
		}
	}
	function right_Out() {
		
		if(arrData=="") { 
			alert("数组为空"); 
			return ;
		}
		else {
		var right_out=arrData.pop() ;
		display() ;
		alert(right_out) ;
		}
	}
		function word_transform() {
			var word = document.getElementById("input_num").value.trim() ;
			var word_num = parseFloat(word) ;
			var word_str = word_num.toString() ;
			var isNum=(word_str!=word)||isNaN(word_num);
			return isNum ;
		}
function display() {
	var output = document.getElementById("output") ;
	output.innerHTML = "" ;
	for (i=0 ; i<arrData.length ; i++) {
		output.innerHTML += "<div height='900px'>"+arrData[i]+"</div>" ;
	}
}
