//事件绑定函数，兼容浏览器差异
function addEvent(element,event,listener) {
	if(element.addEventListener) {
		element.addEventListener(event,listener) ;
	}
	else if(element.attachEvent) {
		element.attachEvent("on"+event,listener) ;
	} 
	else {
		element["on"+event] = listener ;
	}
}
//建造初始化函数
function init() {
	var btn = document.getElementById("confirm") ;
	var tag = document.getElementById("tag") ;
	var output_Tag = document.getElementById("output_Tag") ;
	var interest = document.getElementById("interest") ;
	var output = document.getElementsByClassName("output") ;
	var output_Interest = document.getElementById("output_Interest") ;
	var the_Tag = {
		str : [] ,
		display : function() {
			output_Tag.innerHTML ="" ;
			for(var i = 0 ; i<this.str.length ; i++) {
				output_Tag.innerHTML += "<span>"+this.str[i]+"</span>";
			}
			addSpanEvent() ;
		},
		deleteIt : function(num) {
			alert(this.str[num]) ;
			this.str.splice(num,1) ;
			this.display() ;
		}
	};
	var the_Interest = {
		str : [] ,
		display : function() {
			output_Interest.innerHTML ="" ;
			for(var i = 0 ; i<this.str.length ; i++) {
				output_Interest.innerHTML += "<span>"+this.str[i]+"</span>";
			}
			addSpanEvent() ;
		},
		deleteIt : function(num) {
			alert(this.str[num]) ;
			this.str.splice(num,1) ;
			this.display() ;
		}
		
	};
	addEvent(tag,"keyup",function(event) {
		var ev = event.keyCode ;
		if(ev==13||ev==32||ev==188) {
			var str1 = tag.value ;
			if(ev!=13) {
				 str1 = str1.substring(0,str1.length-1)
			}
			if(the_Tag.str.indexOf(str1)==(-1)&&str1!="") {
				the_Tag.str.push(str1) ;
				the_Tag.display() ;
			}
			tag.value = "" ;
		}
	});
	addEvent(btn,"click",function() {
		if(the_Interest.str.indexOf(interest.value)==(-1)&&interest.value!=""&&!(interest.value.match(/[^\w&\u4e00-\u9fa5]/))) {
			the_Interest.str.push(interest.value) ;
			the_Interest.display() ;
		}
		interest.value = "" ;
	}) ;
	function addSpanEvent() {
		for(var j = 0 ; j<output_Interest.childNodes.length ; j++) {
			output_Interest.childNodes[j].j = j ;
			addEvent(output_Interest.childNodes[j],"click",function() {
				the_Interest.deleteIt(this.j) ;
			}) ;
			addEvent(output_Interest.childNodes[j],"mouseover",function() {
				output_Interest.childNodes[this.j].innerHTML = "删除元素："+the_Interest.str[this.j] ;
			}) ;
			addEvent(output_Interest.childNodes[j],"mouseout",function() {
				output_Interest.childNodes[this.j].innerHTML = the_Interest.str[this.j] ;
			}) ;
		}
		for(var j = 0 ; j<output_Tag.childNodes.length ; j++) {
			output_Tag.childNodes[j].j = j ;
			addEvent(output_Tag.childNodes[j],"click",function() {
				the_Tag.deleteIt(this.j) ;
			}) ;
			addEvent(output_Tag.childNodes[j],"mouseover",function() {
				output_Tag.childNodes[this.j].innerHTML = "删除元素："+the_Tag.str[this.j] ;
			}) ;
			addEvent(output_Tag.childNodes[j],"mouseout",function() {
				output_Tag.childNodes[this.j].innerHTML = the_Tag.str[this.j] ;
			}) ;
		}
	} 
}
init() ;