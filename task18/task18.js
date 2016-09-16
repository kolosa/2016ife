var arr=[1,2,3];
function leftenter(){
    var val=document.getElementById("area").value;
    arr.unshift(val);
    alert(arr);
}
function rightenter() {
    var val=document.getElementById("area").value;
    arr.push(val);
    alert(arr);
}
function leftdelete(){
    var arry=arr.splice(0,1);
    alert(arr)
}
function rightdelete(){
 var i=arr.length-1;
    var arry=arr.splice(i,1)
    alert(arr)
}


