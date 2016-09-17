var arr=[];
function leftenter(){
    var val=document.getElementById("area").value;
    if ((/^[0-9]+$/).test(val)){
        arr.unshift(val);
        alert(arr);}
    else {
        alert("请输入数字");
    }
}
function rightenter() {
    var val=document.getElementById("area").value;
    if ((/^[0-9]+$/).test(val)){
        arr.push(val);
        alert(arr);}
    else {
        alert("请输入数字");
    }
}
function leftdelete(){
    var arry=arr.splice(0,1);
    alert(arr)
}
function rightdelete(){
 var i=arr.length-1;
    var arry=arr.splice(i,1);
    alert(arr);
}

    for(var i=0;i<arr.length;i++){
        var blo=document.getElementsById("block");
        var ar=arr[i].value;
        bol.append(ar);
    }