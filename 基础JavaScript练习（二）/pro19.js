var color = ["#ff7575","#ff95ca","#b15bff","#2828ff","#2894ff","#00ffff","#02c874","#28ff28","#82d900","#e1e100","#ff9224","#c48888"] ;
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
				
				var list = document.getElementsByTagName("input") ;
				var word = document.getElementById("text") ;
				var output = document.getElementById("output") ;
				var queue = {
					str : [] ,
					leftpush : function(num) {
						if(isNaN(parseFloat(word.value))||(word.value!=parseFloat(word.value.toString()))||(parseFloat(word.value)<0)||(parseFloat(word.value)>100)) {
						alert("输入应为0-100数字") ;
						}
						else if(this.str.length>=20) {
							alert("超过数组容量了，不能超过五个") ;
						}
						else {
							this.str.unshift(num) ;
							this.display() ;
						} 
						document.getElementById("text").value = "" ;
					},
					rightpush : function(num) {
						if(isNaN(parseFloat(word.value))||(word.value!=parseFloat(word.value.toString()))||(parseFloat(word.value)<0)||(parseFloat(word.value)>100)) {
						alert("输入应为0-100数字") ;
						}
						else if(this.str.length>=20) {
							alert("超过数组容量了,不能超过五个") ;
						}
						else {
							this.str.push(num) ;
							this.display() ;
						} 
						document.getElementById("text").value = "" ;
					},
					leftpop : function() {
						if(this.str!="") {
						var left_out = this.str.shift() ;
						alert(left_out) ;
						this.display() ;
						}
						else {alert("为空了") ;}
					},
					rightpop : function() {
						if(this.str!="")  {
						var right_out = this.str.pop() ;
						alert(right_out) ;
						this.display() ;
						}
						else {alert("为空了") ;}
					},
					display : function() {
						output.innerHTML = "" ;
						for(var i=0 ; i<this.str.length ; i++) {
							output.innerHTML +="<div class='odiv'>"+this.str[i]+"</div>" ;
							var odiv = document.getElementsByClassName("odiv") ;
							var a = (this.str[i]*8) ;
							odiv[i].style.height=a+"px" ;
							odiv[i].style.lineHeight=a+"px" ;
							odiv[i].style.backgroundColor= color[4] ;
						}
						addDivEvent() ;
					},
					deletediv : function(a) {
						alert(this.str[a]) ;
						this.str.splice(a, 1);
						this.display();
					},
					rank : function() {
						var Clock ;
						var times = 0 ;
						var i = 0 ;
						Clock=setInterval(function() {
												if(times==queue.str.length) {
													clearInterval(Clock) ;
												}
												if(i==(queue.str.length-times-1)) {
													times++ ;
													i=0 ;
												}
												if((queue.str[i]-queue.str[i+1])>0) {
													var temp = queue.str[i] ;
													queue.str[i] = queue.str[i+1] ;
													queue.str[i+1] = temp ;
													queue.display() ;
												}
												i++ ;
												},300);
					},
					displayrandom : function() {
						var random = [] ;
						for(var i=0 ;i<this.str.length ;i++) {
							var num = Math.random() ;
							(num>0.5) ? (random.push(this.str[i])):(random.unshift(this.str[i])) ;
						}
						this.str = random ;
						this.display() ;
					}
				};
				function addDivEvent() {
					for (var j=0 ; j<output.childNodes.length ; j++) {
						 output.childNodes[j].j=j;
						addEvent(output.childNodes[j],"click",function() {queue.deletediv(this.j)});
					}
				}
				addEvent(list[1],"click",function() {
					var input = word.value ;
					queue.leftpush(input) ;
				});
				addEvent(list[2],"click",function() {
					
					var input = word.value ;
					queue.rightpush(input) ;
				});
				addEvent(list[3],"click",function() {
					queue.leftpop() ;
				});
				addEvent(list[4],"click",function() {
					queue.rightpop() ;
				});
				addEvent(list[5],"click",function() {
					queue.rank() ;
				});
				addEvent(list[6],"click",function() {
					queue.displayrandom() ;
				}) ;
			}
			init() ;