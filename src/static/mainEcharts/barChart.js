
export default function (obj) {
    var xAxisData = [];
var data1 = [];
var data2 = [];
    for (var i = 1; i < 31; i++) {
    xAxisData.push(obj.month +'/'+ i);
    data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
    data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
}


var option = {
    title: {
        text: '月活用户数对比'
    },
    legend: {
        data: ['本月', '上月'],
        align: 'left'
    },
    toolbox: {
        // y: 'bottom',
        feature: {
            magicType: {
                type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
                pixelRatio: 2
            }
        }
    },
    tooltip: {},
    xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
            show: false
        }
    },
    yAxis: {
    },
    series: [{
        name: '本月',
        type: 'bar',
        data: data1,
        animationDelay: function (idx) {
            return idx * 100;
        }
    }, {
        name: '上月',
        type: 'bar',
        data: data2,
        animationDelay: function (idx) {
            return idx * 100 + 500;
        }
    }],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx) {
        return idx * 5;
    }
};
return option
}


