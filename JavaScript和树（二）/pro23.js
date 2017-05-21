var btns = document.getElementsByClassName("btns") ;
var container = document.getElementById("container") ;
var odiv = document.getElementsByTagName("div") ;
var input = document.getElementById("search") ;
var show = document.getElementById("show") ;
var complete = true ;
var divlist = [] ;
var q = 0 ;
var timer = null ;
//构造初始化函数
function init() {
	btns[0].onclick = depthshow ;
	btns[1].onclick = rangeshow ;
	btns[2].onclick = depthsearch ;
	btns[3].onclick = rangesearch ;
}
//点击深度遍历函数
function depthshow() {
	if(complete) {
		show.innerHTML = "您选择的是深度遍历" ;
		reset() ;
		preOrder(container) ;
		display(divlist) ;
	}
	else {
		show.innerHTML = "还在遍历啊兄弟！" ;
	}
}
//点击广度遍历函数
function rangeshow() {
	if(complete) {
		show.innerHTML = "您选择的是广度遍历" ;
		reset() ;
		rangeOrder(container) ;
		display(divlist) ;
	}
	else {
		show.innerHTML = "还在遍历啊兄弟！" ;
	}
}
//点击深度搜索函数
function depthsearch() {
	if(input.value.trim()!="") {
		if(complete) {
			show.innerHTML = "您选择的是广度搜索" ;
			reset() ;
			preOrder(container) ;
			displaysearch(divlist) ;
		}
	
		else {
			show.innerHTML = "还在遍历啊兄弟！" ;
		}
	}
	else {
		show.innerHTML = "搜索内容不能为空" ;
	}
}
//点击广度搜索函数
function rangesearch() {
	if(input.value.trim()!="") {
		if(complete) {
			show.innerHTML = "您选择的是广度搜索" ;
			reset() ;
			rangeOrder(container) ;
			displaysearch(divlist) ;
		}
	
		else {
			show.innerHTML = "还在遍历啊兄弟！" ;
		}
	}
	else {
		show.innerHTML = "搜索内容不能为空" ;
	}
}
//初始化样式
function reset() {
	divlist = [] ;
	q = 0 ;
	clearInterval(timer) ;
	for(var i=0 ; i<odiv.length ; i++) {
		odiv[i].style.backgroundColor = "white" ;
	}
}
//深度遍历
function preOrder(node) {
	if(node!=null) {
		
		divlist.push(node) ;
		for(var i=0 ; i<node.children.length ; i++) {
			preOrder(node.children[i]) ;
		}
	}
}
//广度遍历
function rangeOrder(node) {
	if(node!=null) {
		divlist.push(node) ;
		
		rangeOrder(node.nextElementSibling) ;
		node = divlist[q++] ;
		rangeOrder(node.children[0]) ;
	}
} 
//遍历显示方框的颜色
function display(list) {
	var time = 0 ;
	complete = false ;
	timer = setInterval(function(argument) {
		
		if(time<list.length) {
			if(time>0) {
				list[time-1].style.backgroundColor = "lightgreen" ;
			}
			list[time++].style.backgroundColor = "lightblue" ;
		}
		else {
			list[time-1].style.backgroundColor = "lightgreen" ;
			complete = true ;
			show.innerHTML = "遍历完成φ(≧ω≦*)♪" ;
			clearInterval(timer) ;
		}
	},500) 
}
//搜索显示方框的颜色
function displaysearch(list) {
		var time = 0 ;
		complete = false ;
	timer = setInterval(function(argument) {
		
		if(time<list.length) {
			if(time>0) {
				list[time-1].style.backgroundColor = "lightgreen" ;
			}
			var str = list[time].outerText ;
			var str1 = str.split(" ") ;
			if(str1[0]==input.value) {
				
				if(str1.length==list[time].children.length) {
					list[time++].style.backgroundColor = "lightblue" ;
				}
				else {
				list[time++].style.backgroundColor = "red" ;
				complete = true ;
				show.innerHTML = "找到了您要找的内容了^_^" ;
				clearInterval(timer) ;
				}
			}
			else {
				list[time++].style.backgroundColor = "lightblue" ;
			}
		}
		else {
			list[time-1].style.backgroundColor = "lightgreen" ;
			show.innerHTML = "搜索不到您要找的内容T.T" ;
			clearInterval(timer) ;
			complete =true ;
		}
	},500) 
}
init() ;