//addEvent兼容不同的浏览器
function addEvent(element,event,listener) {
	if(element.addEventListener) {
		element.addEventListener(event,listener,true) ;
	}
	else if(element.attachEvent) {
		element.attachEvent("on"+event,listener) ;
	}
	else {
		element["on"+event] = listener ;
	}
}
var hid = false ;
var itra = false ;
var find = false ;
var btn = document.getElementById("go") ;
var search = document.getElementById("search") ;
var output = document.getElementById("output") ;
var num = 0 ;
	
//构建初始化函数
function init() {
	
	reset() ;
	
	btn.onclick = search_Fun ;
	
	
}
//初始化样式
function reset() {
		var label = document.getElementsByTagName("label") ;
	for(var i=0 ; i<label.length ;i++) {
		
		if(label[i].getElementsByClassName("del").length==0) {
			label[i].innerHTML = label[i].innerHTML+"<div class='add'>+</div><div class='del'>X</div>" ;
		}
	if(label[i].getElementsByClassName("triangle").length==0&&label[i].parentNode.getElementsByTagName("ul").length!=0) {
		
		label[i].innerHTML = "<div class='triangle'><div class='triangle-right'></div></div>"+label[i].innerHTML ;
		
	addEvent(label[i].getElementsByClassName("triangle")[0],"click",function(ev){
		 ev.stopPropagation();
		if(hid) {
			this.parentNode.parentNode.getElementsByTagName("ul")[0].style.display = "block" ;
			ev.stopPropagation() ;//阻止冒泡事件
			hid = false ;
		}
		else {
			this.parentNode.parentNode.getElementsByTagName("ul")[0].style.display = "none" ;
			ev.stopPropagation() ;//阻止冒泡事件
			hid = true ;
		}
		
		if(itra) {
			this.innerHTML = "<div class='triangle-bottom'></div>" ;
			ev.stopPropagation() ;//阻止冒泡事件
			itra = false ;
		}
		else {
			this.innerHTML = "<div class='triangle-right'></div>" ;
			ev.stopPropagation() ;//阻止冒泡事件
			itra = true ;
		}
	}) ;
	if(i>0) {
		label[i].parentNode.getElementsByTagName("ul")[0].style.display = "none" ;
		}
	}
	
		}
	addit() ;
	delit() ;
}
//显示、隐藏函数

//搜索函数
function search_Fun() {
	var label = document.getElementsByTagName("label") ;
	output.innerHTML = "" ;
	if(search.value.trim()!="") {
		var olabel = document.getElementsByTagName("label") ;
		for(var i=0 ; i<olabel.length ; i++) {
			olabel[i].style.color = "black" ;
			if((olabel[i].childNodes[1].nodeValue)==search.value.trim()||(olabel[i].childNodes[0].nodeValue)==search.value.trim()) {
				num++ ;
				output.innerHTML = "找到了"+search.value.trim()+"!数量为"+num ;
				olabel[i].style.color = "red" ;
				find = true ;
			}
		}
		if(!find) {
			output.innerHTML = "搜索不到您要找的内容" ;
			
		}
	}
	else {
		output.innerHTML = "不能为空" ;
	}
	find = false ;
	search.value = "" ;
	num = 0 ;
}
//添加函数
function addit() {
	var add = document.getElementsByClassName("add") ;
	for(var j=0 ; j<add.length ; j++ ) {
		
		add[j].removeEventListener("click",addit1) ;
		add[j].addEventListener("click",addit1) ;
	}
}
function addit1(add) {
				var add_Text = prompt("您要添加的内容") ;
				if(add_Text!=null&&add_Text!="") {
					var oUl = document.createElement("ul") ;
					var oLi = document.createElement("li") ;
					var olabel = document.createElement("label") ;
					olabel.innerHTML = add_Text ;
					oLi.appendChild(olabel) ;
					oUl.appendChild(oLi) ;
					this.parentNode.parentNode.appendChild(oUl) ;
					this.parentNode.parentNode.getElementsByTagName("ul")[0].style.display = "block" ;
					reset() ;
				}
				else {
					alert("输入内容不能为空") ;
				}
		}
//删除函数
function delit() {
	var del = document.getElementsByClassName("del") ;
		for(var k=0 ; k<del.length ; k++) {
			del[k].removeEventListener("click",delit1) ;
			del[k].addEventListener("click",delit1) ;
		}
}
function delit1() {
	var r = confirm("是否要删除该内容？") ;
				if(r==true) {
					this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode) ;
					reset() ;
				}
				else {
					alert("还以为你不要我了") ;
				}
}
init() ;

	
	
	