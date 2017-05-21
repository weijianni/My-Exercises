var arrdata = {} ;

function getData() {
	var city = document.getElementById("city_Name").value.trim() ;
	var quarity = parseInt(document.getElementById("air_Quarity").value.trim()) ;
	var city_Type = typeof(city) ;
	var quarity_Type = typeof(quarity) ;
	if (city=="") {
		alert("城市名称应为中文或英文组成") ;
		return ;
	}
	if (isNaN(quarity)) {
		alert("质量指数应由数字组成") ;
		return ;
	}
	arrdata[city] = quarity ;
	}
	function renderData() {
	var table =document.getElementById("list") ;
	table.innerHTML = "";
	for (var city in arrdata) {
	if(table.children.length==0) {
		table.innerHTML = "<tr> <td>城市</td> <td>空气质量</td> <td>操作</td> </tr>";
	}
	
	var oTr = document.createElement("tr") ;
	var oTd1 = document.createElement("td") ;
	oTd1.innerHTML = city ;
	oTr.appendChild(oTd1) ;
	var oTd2 = document.createElement("td") ;
	oTd2.innerHTML = arrdata[city] ;
	oTr.appendChild(oTd2) ;
	var oTd3 = document.createElement("td") ;
	oTd3.innerHTML = "<button class='btns'>删除</button>" ;
	oTr.appendChild(oTd3) ;
	table.appendChild(oTr) ;
	}
	}
function btnHandle(ev) {
	
 var e=ev||window.event;
    if(e.preventDefault){
        e.preventDefault();//FF等阻止DOM节点默认行为，这里是提交表单的行为
        e.stopPropagation();
    }else{
        e.cancelBubble = true;//IE阻止事件冒泡
        e.returnValue = false;//IE阻止DOM节点默认行为，这里是提交表单的行为
    }
	getData() ;
	renderData() ;
	
}
function showdelete(target) {
	var tr = target.parentElement.parentElement;
    var strCity = tr.children[0].innerHTML;
    delete arrdata[strCity];
    renderData();
}

function init() {
	
  var btn = document.getElementById("sort-btn") ;
	btn.onclick = btnHandle ;
	 var table = document.getElementById("list");
    var arrBtnDel = table.getElementsByClassName("btns");

    table.addEventListener("click", function(ev) {
		var e=ev||window.event;
    if(e.preventDefault){
        e.preventDefault();//FF等阻止DOM节点默认行为，这里是提交表单的行为
        e.stopPropagation();
    }else{
        e.cancelBubble = true;//IE阻止事件冒泡
        e.returnValue = false;//IE阻止DOM节点默认行为，这里是提交表单的行为
    }
	if (ev.target && ev.target.nodeName === "BUTTON") {
            showdelete(ev.target);
	}
    })
}

init();
