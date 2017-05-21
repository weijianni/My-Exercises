//��CSS�ļ���ȥԪ�ص�ֵ���磺height,background-color����JS�ļ���
function getValue(node,nodeStyle) {
	
	var oStyle = node.currentStyle? node.currentStyle : window.getComputedStyle(node, null);
	if (oStyle.getPropertyValue) {
		return oStyle.getPropertyValue(nodeStyle);
	} 
	else {
		return oStyle.getAttribute(nodeStyle) ;
	}
}

var btn = document.getElementsByClassName("btn")[0] ;
var section_1 = document.getElementsByClassName("section-1")[0] ;
var section_2 = document.getElementsByClassName("section-2")[0] ;
var ctrl = document.getElementsByClassName("ctrl")[0] ;
var line = document.getElementsByClassName("line") ;
var ship = [] ;
var num = 0 ;
var spare = [] ;
var j = 0 ;
var s = 0 ;
var pi = Math.PI ;

//������ʼ������
function init() {
		//����Ӱ�ťʱ��ӿ��ƿ�ͷɴ�
	btn.onclick = addShip ;
}
function addShip() {
	ship[num] = new newShip(num) ;
}
	//����newShip����
	function newShip(n) {
		this.clock = null ;
		this.energy = 100 ;
		this.speed = 0 ;
		if(num<4) {
			if(spare.length==0) {
			this.num = n ;
			}
			else {
				for(var k=0 ; k<spare.length ; k++) {
					if(spare[k]!=null) {
						this.num = spare[k] ;
						spare[k] = null ;
						break ;
					}
				}
			}
			//�ɴ�������Ϊ4
			
				this.add_ship() ;
				this.add_ctrl() ;
				this.control() ;	
				
				num++ ;
			}
			else {
				return ;
			}
	}	
	//
	newShip.prototype.control = function() {
		//this���ı�����funciton������this
		var a = this.num ; 
		//��ʼ����
				document.getElementsByClassName("ctrl-"+(a+1))[0].getElementsByClassName("start")[0].onclick = function() {        
					clearInterval(ship[a].clock) ;
				ship[a].clock = setInterval(function() {
						document.getElementsByClassName("ship-"+(a+1))[0].style.animationPlayState = "running" ;
						document.getElementsByClassName("ship-"+(a+1))[0].getElementsByClassName("per")[0].innerHTML = ship[a].energy ;
						document.getElementsByClassName("ship-"+(a+1))[0].getElementsByClassName("per")[0].style.height = ship[a].energy+'%' ;
						if(ship[a].energy<=0) {
							clearInterval(ship[a].clock) ;
							document.getElementsByClassName("ship-"+(a+1))[0].style.animationPlayState = "paused" ;
						}
						ship[a].energy = ship[a].energy-5 ;
						},1000) ;
					} ;
				document.getElementsByClassName("ctrl-"+(a+1))[0].getElementsByClassName("stop")[0].onclick = function() {                //ֹͣ����
				alert(a) ;
					document.getElementsByClassName("ship-"+(a+1))[0].style.animationPlayState = "paused" ;
					clearInterval(ship[a].clock) ;
					ship[a].clock = setInterval(function() {
						document.getElementsByClassName("ship-"+(a+1))[0].getElementsByClassName("per")[0].innerHTML = ship[a].energy ;
						document.getElementsByClassName("ship-"+(a+1))[0].getElementsByClassName("per")[0].style.height = ship[a].energy+'%' ;
						if(ship[a].energy<100) {
							if(ship[a].energy==99) {
								ship[a].energy = ship[a].energy+1 ;
							}
							else {
								ship[a].energy = ship[a].energy+2 ;
							}
						}
					},1000) ;
				} ;
				document.getElementsByClassName("del")[this.num].onclick = function() {														//ɾ���ɴ�
					clearInterval(ship[a].clock) ;
					document.getElementsByClassName("ctrl-"+(a+1))[0].parentNode.removeChild(document.getElementsByClassName("ctrl-"+(a+1))[0]) ;
					document.getElementsByClassName("ship-"+(a+1))[0].parentNode.removeChild(document.getElementsByClassName("ship-"+(a+1))[0]) ;
					ship[a] = null ;
					spare[a] = a ;
					num-- ;
				} ;
	}
	//��ӿ��ƿ�
	newShip.prototype.add_ctrl = function () {
		var odiv = document.createElement("div") ;
		odiv.innerHTML = "<button class='number'></button><button class='start'>Go</button><button class='stop'>Stop</button><button class='del'>Del</button>" ;
		var i = this.num+1 ;
		odiv.className = "ctrl_ship ctrl-"+i ;
		ctrl.insertBefore(odiv,ctrl.children[this.num]) ;
		var ctrl_Num = document.getElementsByClassName("number")[this.num] ;
		ctrl_Num.innerHTML = this.num+1 ;
	} ;
	//��ӷɴ�
	newShip.prototype.add_ship = function () {
		var odiv = document.createElement("div") ;
		odiv.innerHTML = "<div class='per'></div>" ;
		var i = this.num+1 ;
		odiv.className = "ship ship-"+i ;
		line[this.num].insertBefore(odiv,line[this.num].children[0]) ;
		var a = parseInt(getValue(line[this.num],"height")) ;
		this.speed = (a*pi)/20 ;
		odiv.style.animationDuration = this.speed+'s' ;
		document.getElementsByClassName("ship-"+(this.num+1))[0].getElementsByClassName("per")[0].innerHTML = this.energy ;
		document.getElementsByClassName("ship-"+(this.num+1))[0].getElementsByClassName("per")[0].style.height = this.energy+'%' ;
	} ;


init() ;