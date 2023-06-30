/**
 * echarts 4.7.0
 */
const option = {
    backgroundColor: '#fff',
    title: {
        text: "发版需求",
        link: 'https://github.com/ecomfe/echarts-wordcloud',
        subtext: '每月参与的个数',
        sublink: 'http://data-visual.cn',
        top: 180,
        left: 0
    },
    grid: {
        top: 180,
        bottom: 220,
        show: false,
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            show: false
        },
        splitArea: {
            // show: true,
            color: '#f00',
            lineStyle: {
                color: '#f00'
            },
        },
        axisLabel: {
            color: '#fff'
        },
        splitLine: {
            show: false
        },
        boundaryGap: false,
        data: ['A', 'B', 'C', 'D', 'E', 'F'],

    }],

    yAxis: [{
        type: 'value',
        min: 0,
        // max: 140,
        splitNumber: 4,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.1)'
            }
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
            margin: 20,
            textStyle: {
                color: '#d1e6eb',

            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
        name: '注册总量',
        type: 'line',
        // smooth: true, //是否平滑
        showAllSymbol: true,
        // symbol: 'image://./static/images/guang-circle.png',
        symbol: 'circle',
        symbolSize: 25,
        lineStyle: {
            normal: {
                color: "#6c50f3",
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 5,
                shadowOffsetX: 5,
            },
        },
        label: {
            show: true,
            position: 'top',
            textStyle: {
                color: '#6c50f3',
            }
        },
        itemStyle: {
            color: "#6c50f3",
            borderColor: "#fff",
            borderWidth: 3,
            shadowColor: 'rgba(0, 0, 0, .3)',
            shadowBlur: 0,
            shadowOffsetY: 2,
            shadowOffsetX: 2,
        },
        tooltip: {
            show: false
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(108,80,243,0.3)'
                },
                {
                    offset: 1,
                    color: 'rgba(108,80,243,0)'
                }
                ], false),
                shadowColor: 'rgba(108,80,243, 0.9)',
                shadowBlur: 20
            }
        },
        data: [14, 12, 6, 10, 4, 5,]
    },
    {
        name: '注册总量',
        type: 'line',
        // smooth: true, //是否平滑
        showAllSymbol: true,
        // symbol: 'image://./static/images/guang-circle.png',
        symbol: 'circle',
        symbolSize: 25,
        lineStyle: {
            normal: {
                color: "#00ca95",
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 5,
                shadowOffsetX: 5,
            },
        },
        label: {
            show: true,
            position: 'top',
            textStyle: {
                color: '#00ca95',
            }
        },

        itemStyle: {
            color: "#00ca95",
            borderColor: "#fff",
            borderWidth: 3,
            shadowColor: 'rgba(0, 0, 0, .3)',
            shadowBlur: 0,
            shadowOffsetY: 2,
            shadowOffsetX: 2,
        },
        tooltip: {
            show: false
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0,202,149,0.3)'
                },
                {
                    offset: 1,
                    color: 'rgba(0,202,149,0)'
                }
                ], false),
                shadowColor: 'rgba(0,202,149, 0.9)',
                shadowBlur: 20
            }
        },
        data: [8, 10, 10, 20, 10, 4,],
    },
    ]
};