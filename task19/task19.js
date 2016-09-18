var arr=[];
function leftenter(){
    var val=document.getElementById("area").value;
    var par=document.getElementById("pa");
    var adiv=document.createElement("div");  //加冒号
    adiv.style.height=val+"px"
    if ((/^[0-9]+$/).test(val)){
        if(val>10&&val<100){
            if(par.getElementsByTagName("div").length<60){
                par.insertBefore(adiv,par.firstChild)
            }
            else{
                alert("已超出限制")
            }

        }
        else{
            alert("请输入10-100的数字")
        }

    }
    else {
        alert("请输入数字");
    }
}
function rightenter() {
    var val=document.getElementById("area").value;
    var par=document.getElementById("pa");
    var adiv=document.createElement("div");
    adiv.style.height=val+"px"
    if ((/^[0-9]+$/).test(val)){
        if(val>10&&val<100){
            if(par.getElementsByTagName("div").length<60){
                par.appendChild(adiv,par.firstChild)
            }
            else{
                alert("已超出限制")
            }
        }
    else{
            alert("请输入10-100的数字")
        }

    }
    else {
        alert("请输入数字");
    }
}
function leftdelete(){
    var par=document.getElementById("pa");
    par.removeChild(par.firstChild)
}
function rightdelete(){
    var par=document.getElementById("pa");
    par.removeChild(par.lastChild)
}
function heightarr(){
    var arr=[]
    var len=document.getElementById("pa").getElementsByTagName("div")
    for (i=0;i<len.length;i++){
        var num=parseInt(len[i].style.height)
        arr.push(num)
    }
    return arr
 }
function  sortarr(arr){
    data.sort(function(a,b){
        return a[1]-b[1]
    })
    return arr
}
function render(arr) {
    var list=document.getElementById("pa");
    var nlist="";
    for (var i = 0; i < arr.length; i++) {
        var aqiData = data[i];
    }
    list.innerHTML=nlist
}


