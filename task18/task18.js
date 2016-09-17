var arr=[];
function leftenter(){
    var val=document.getElementById("area").value;
    var par=document.getElementById("pa");
    var adiv=document.createElement("div");  //加冒号
    adiv.innerHTML=val
    if ((/^[0-9]+$/).test(val)){
        par.insertBefore(adiv,par.firstChild)
    }
    else {
        alert("请输入数字");
    }
}
function rightenter() {
    var val=document.getElementById("area").value;
    var par=document.getElementById("pa");
    var adiv=document.createElement("div");
    adiv.innerHTML=val
    if ((/^[0-9]+$/).test(val)){     //正则表达式贪婪模式
        par.appendChild(adiv)
    }
    else {
        alert("请输入数字");
    }
}
function leftdelete(){
    var par=document.getElementById("pa");                 //增加判断
    par.removeChild(par.firstChild)
}
function rightdelete(){
    var par=document.getElementById("pa");
    par.removeChild(par.lastChild)
}
