/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
     var city=document.getElementById("aqi-city-input").value.trim()
     var value=document.getElementById("aqi-value-input").value.trim()
     if(!/^[\u4e00-\u9fa5a-zA-Z]+$/.test(city)){
        alert("城市名必须由中英文字符")
        return flase
     }
     if (!/^[1-9]*$/.test(value)) {
        alert('请输入正整数!');
        return flase
     }
     aqiData[city] = value
}

/**
 *
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var table=document.getElementById("aqi-table")
    var tablein=""
    var body=""
    for (var city in aqiData){
        tablein+="<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button type='button' class='del'>删除</button></td></tr>"
    }
    body="<tr><th>城市</th><th>空气质量</th><th>操作</th></tr>"+tablein;
    table.innerHTML=body
}
/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
    // do sth.

    renderAqiList();
}


function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    document.getElementById("add-btn").addEventListener("click",addBtnHandle);

    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

window.onload=function(){
    init();
}
