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
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
    nowSelectCity: "北京",
    nowGraTime: "day"
};
var divchart=document.getElementsByClassName("aqi-chart-warp")[0];
var selacity=docuent.getElementById("city-select");
/**
 * 渲染图表
 */
function renderChart() {
    var txt=""
    var color=""
    for(var date in chartData ){
        var color='#'+Math.floor(Math.random()*16777215).toString(16);
        var aqivalue=chartData[date];
        txt+="<div title='"+date+':'+aqivalue+"' style='height:"+aqivalue+'px;background-color:'+color+"'></div>"
    }
    divchart.innerHTML=txt
}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange() {
    // 确定是否选项发生了变化
    if(pageState.nowGraTime==this.value){
       return;
    }else{
        pageState.nowGraTime=this.value;
    }
    initAqiChartData();
    renderChart()
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
    if(pageState.nowSelectCity==this.value){
        return
    }else {
        pageState.nowSelectCity=this.value
    }

    initAqiChartData();
    renderChart()
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
    var seldata= document.getElementById("form-gra-time").getElementsByTagName("input");
    for (var i = 0;i<seldata.length;i++) {
       seldata.onclick=graTimeChange
    }
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
   var cityslist="";
    for(var i in aqiSourceData){
        cityslist+= "<option>" + i + "</option>";
    }
    selacity.innerHTML=cityslist;
   selacity.onchange=citySelectChange
}
/*
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
    var nowcity = aqiSourceData[pageState.nowSelectCity];
    if (pageState.nowGraTime = "day") {
        chartData = nowcity
    }
    if (pageState.nowGraTime = "week") {
        chartData = {}
        var datesum = 0
        var daysum = 0
        var week = 0
        for (var i in nowcity) {
            datesum += nowcity[i]
            daysum++
            if ((new Date(i)).getDay() == 6) {
                week++;
                chartData['第' + week + '周'] = Math.floor(datesum / daysum);
                datesum = 0;
                daysum = 0;
            }
        }
        if (daySum != 0) {
            week++;
            chartData['第' + week + '周'] = Math.floor(datesum / daysum);
        }
    }
    if (pageState.nowGraTime = "month"){
        chartData={}
        var datesum = 0
        var daysum = 0
        var month = 0
        for (var i in nowcity) {
            datesum += nowcity[i]
            daysum++
            if ((new Date(i)).getMonth() !=month) {
                month++;
                chartData['第' + month + '周'] = Math.floor(datesum / daysum);
                datesum = 0;
                daysum = 0;
            }
        }
        if (daySum != 0) {
            month++;
            chartData['第' + month + '周'] = Math.floor(datesum / daysum);
        }

    }
}

/**
 * 初始化函数
 */
window.onload=function init() {
    initGraTimeForm()
    initCitySelector();
    initAqiChartData();
    renderChart();
}
