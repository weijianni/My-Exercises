	var container = document.getElementById("container") ;
	var preOrder = document.getElementById("preOrder") ;
	var inOrder = document.getElementById("inOrder") ;
	var postOrder = document.getElementById("postOrder") ;
	var odiv = document.getElementsByTagName("div") ;
	var p = document.getElementById("text") ;
	var clock = null ;
	var divlist = [] ;
//构建初始化函数
function init() {
	preOrder.onclick = preOrder_Fun ;
	inOrder.onclick = inOrder_Fun ;
	postOrder.onclick = postOrder_Fun ;
}
function preOrder_Fun() {
	p.innerHTML = "您选择的是前序遍历" ;
	reset() ;
	preorder(container) ;
	display() ;
}
function inOrder_Fun() {
	p.innerHTML = "您选择的是中序遍历" ;
	reset() ;
	inorder(container) ;
	display() ;
}
function postOrder_Fun() {
	p.innerHTML = "您选择的是后序遍历" ;
	reset() ;
	postorder(container) ;
	display() ;
}
//初始化样式(方框的颜色，即变回白色)
function reset() {
	divlist = [] ;
	clearInterval(clock) ;
	for(var i=0 ; i<odiv.length ; i++) {
		odiv[i].style.backgroundColor = "white" ;
	}
}
//前序遍历
function preorder(node) {
	if(node!=null) {
		divlist.push(node) ;
		preorder(node.firstElementChild) ;
		preorder(node.lastElementChild) ;
	}
}
//中序遍历
function inorder(node) {
	if(node!=null) {
		inorder(node.firstElementChild) ;
		divlist.push(node) ;
		inorder(node.lastElementChild) ;
	}
}
		
		
//后序遍历
function postorder(node) {
	if(node!=null) {
		postorder(node.firstElementChild) ;
		postorder(node.lastElementChild) ;
		divlist.push(node) ;
	}
}
//显示方框的颜色
function display() {
	var time = 0 ;
	clock = setInterval(function(argument) {
		if(time<divlist.length) {
			if(time>0) {
				divlist[time-1].style.backgroundColor = "lightgreen" ;
			}
			divlist[time++].style.backgroundColor = "lightblue" ;
		}
		else {
			divlist[time-1].style.backgroundColor = "lightgreen" ;
			p.innerHTML = "遍历结束" ;
			clearInterval(clock) ;
		}
	},1000) 
}
init() ;
