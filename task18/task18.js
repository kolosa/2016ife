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
    if ((/^[0-9]+$/).test(val)){
        par.appendChild(adiv)
    }
    else {
        alert("请输入数字");
    }
}
function leftdelete(){
    var par=document.getElementById("pa");
    par.removeChild(pa.firstChild)
}
function rightdelete(){
    var par=document.getElementById("pa");
    par.removeChild(pa.lastChild)
}

/*function  addd(obj){
    var par=document.getElementById(obj);

    var adiv=document.createElement("div");

    adiv.innerHTML="444";

    par.appendChild(adiv)
}
addd(part)
*/
