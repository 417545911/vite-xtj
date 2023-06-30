/**
 * 当前echart版本：4.0.2
 */
const option = {
  backgroundColor: '#fff',
  title: {
    text: "职能",
    link: 'https://github.com/ecomfe/echarts-wordcloud',
    subtext: '大致工作内容',
    sublink: 'http://data-visual.cn',
    top: 190,
    left: 100
  },
  grid: {
    top: 180,
    bottom: 220,
    show: true,
  },
  tooltip: {},
  series: [{
    type: 'wordCloud',
    gridSize: 20,
    sizeRange: [12, 50],
    rotationRange: [0, 0],
    shape: 'circle',
    textStyle: {
      normal: {
        color: function () {
          return 'rgb(' + [
            Math.round(Math.random() * 160),
            Math.round(Math.random() * 160),
            Math.round(Math.random() * 160)
          ].join(',') + ')';
        }
      },
      emphasis: {
        shadowBlur: 10,
        shadowColor: '#333'
      }
    },
    data: [{
      name: '网页开发',
      value: 8000,
      // textStyle: {
      //     normal: {
      //         color: 'black'
      //     },
      //     emphasis: {
      //         color: 'red'
      //     }
      // }
    }, {
      name: '界面设计',
      value: 4181
    }, {
      name: '响应式设计',
      value: 4386
    }, {
      name: '用户体验',
      value: 4055
    }, {
      name: '与后端集成',
      value: 2467
    }, {
      name: '测试',
      value: 2244
    }, {
      name: '调试',
      value: 1898
    }, {
      name: '性能优化',
      value: 2684
    },
    {
      name: 'HTML',
      value: 1112
    }, {
      name: 'CSS',
      value: 965
    }, {
      name: 'JavaScript',
      value: 847
    }, {
      name: '界面交互',
      value: 582
    }, {
      name: '浏览器兼容性',
      value: 555
    }, {
      name: '界面美化',
      value: 550
    }, {
      name: '数据交互',
      value: 462
    }, {
      name: '前端框架',
      value: 366
    }, {
      name: '网络技术',
      value: 360
    }
    ]
  }]
};