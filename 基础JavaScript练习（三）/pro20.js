function addEvent(element, event, listener) {
				if (element.addEventListener) {
					element.addEventListener(event, listener, false);
				}
				else if (element.attachEvent) {
					element.attachEvent("on" + event, listener);
				}
				else {
					element["on" + event] = listener;
				}
			}
function init() {
	var output = document.getElementById("output") ;
	var input = document.getElementById("input") ;
	var list = document.getElementsByTagName("input") ;
	var check_text = document.getElementById("check_text") ;
	var queue = {
		str : [] ,
		inputIt : function(num) {
			var num1 = num.split(/[^0-9a-zA-Z\u4e00-\u9fa5]/) ;
			for(var i=0 ; i<num1.length ;i++) {
			this.str.push(num1[i]) ;
			}
			this.display() ;
			input.value = "" ;
		},
		checkIt : function(num) {
			for(var i=0 ; i<this.str.length ; i++) {
				for(var j=0 ; j<this.str[i].length ; j++) {
					if(num==this.str[i][j]) {
						var odiv = document.getElementsByClassName("odiv")[i] ;
						var odiv1 = odiv.getElementsByClassName("odiv1")[j] ;
						odiv1.style.backgroundColor = "blue" ;
					}
				}
			}
		},
		display : function() {
			output.innerHTML = "" ;
			for(var i=0 ; i<this.str.length ; i++) {
				output.innerHTML +="<div class='odiv'></div>" ;
				var odiv = document.getElementsByClassName("odiv") ;
				for(var j=0 ; j<this.str[i].length ; j++) {
					odiv[i].innerHTML +="<div class='odiv1'>"+this.str[i][j]+"</div>"
				}
			}
		}
	};
	addEvent(list[0],"click",function() {
		var inputtext = input.value ;
		queue.inputIt(inputtext) ;
	});
	addEvent(list[1],"click",function() {
		var checktext = check_text.value ;
		queue.checkIt(checktext) ;
	});
}
init() ;