
// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
    var y = dat.getFullYear();
    var m = dat.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = dat.getDate();
    d = d < 10 ? '0' + d : d;
    return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
    var returnData = {};
    var dat = new Date("2016-01-01");
    var datStr = ''
    for (var i = 1; i < 92; i++) {
        datStr = getDateStr(dat);
        returnData[datStr] = Math.ceil(Math.random() * seed);
        dat.setDate(dat.getDate() + 1);
    }
    return returnData;
}

var aqiSourceData = {
    "北京": randomBuildData(500),
    "上海": randomBuildData(300),
    "广州": randomBuildData(200),
    "深圳": randomBuildData(100),
    "成都": randomBuildData(300),
    "西安": randomBuildData(500),
    "福州": randomBuildData(100),
    "厦门": randomBuildData(100),
    "沈阳": randomBuildData(500)
};

// 用于渲染图表的数据
/*<option>上海</option>
<option>广州</option>
<option>深圳</option>
<option>成都</option>
<option>西安</option>
<option>福州</option>
<option>厦门</option>
<option>沈阳</option>*/
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
    nowSelectCity: -1,
    nowGraTime: "day"
};

/**
 * 渲染图表
 */
function renderChart() {
    var divchart=document.getElementsByClassName("aqi-chart-warp");
    var color='#'+Math.floor(Math.random()*16777215).toString(16);
    for(var i in chartData ){
        var aqivalue=chartData[i];
        divchart.innerHTML+='<div style=background-color:'+color+
        ";margin-left: 5px;height:"+aqivalue+"px;title="+("空气质量"+aqivalue)+"></div>"
    }
}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange() {
    // 确定是否选项发生了变化
    if(pageState.nowGraTime!=this.value){
        pageState.nowGraTime=this.value
    }else {
        return
    }
    renderChart()
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
    if(pageState.nowSelectCity!=this.value){
        pageState.nowSelectCity=this.value
    }else {
        return
    }
    renderChart()
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
    var seldata= document.getElementById("form-gra-time").getElementsByTagName("input");

    for (var i = 0;i<seldata.length;i++) {
        seldata[i].onclick = graTimeChange;
    }

}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
   var city="";
    for(var cityname in aqiSourceData){
        if(pageState.nowSelectCity==-1){
            pageState.nowSelectCity=cityname
        }
        city+= "<option>" + cityName + "</option>";
    }
    var selcity=document.getElementById("city-select");
    citySelect.innerHTML=city
    selcity.onchange=citySelectChange;
}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
    // 将原始的源数据处理成图表需要的数据格式
    // 处理好的数据存到 chartData 中
}

/**
 * 初始化函数
 */
function init() {
    initGraTimeForm()
    initCitySelector();
    initAqiChartData();
}

window.onload=init();
