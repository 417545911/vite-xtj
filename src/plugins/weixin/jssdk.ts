import axios from 'axios';
import wx from 'weixin-js-sdk';
import sha1 from 'sha1'
import enemy from '@/assets/airplane/enemy2.png'

const config = {
  token: "Ljy18270740209",
  appId: "wx8f36c7cecdfa60f4",
  appsecret: "8ec67fdf34fce4ae7c1996fcc73d6e4e",
};

/** 生成随机字符串 */
const createNonceStr = () => Math.random().toString(36).substr(2, 15);
/** 生成时间戳 */
const createTimestamp = () => parseInt(new Date().getTime() / 1000) + '';
// 对参数进行字典排序
const raw = (args: any) => {
  let keys = Object.keys(args);
  keys = keys.sort();
  let newArgs = {};
  keys.forEach(function (key) {
    newArgs[key.toLowerCase()] = args[key];
  });

  let str = '';
  for (let k in newArgs) {
    str += '&' + k + '=' + newArgs[k];
  }
  return str.substr(1);
}
// 生成签名
const generateSignature = (ticket, nonceStr, timestamp, url) => {
  const params = {
    jsapi_ticket: ticket,
    noncestr: nonceStr,
    timestamp: timestamp,
    url: url
  };
  const string = raw(params);
  const signature = sha1(string);
  return signature;
}

/** 微信分享功能 */
const getWxSdk = async () => {
  const link = location.href;
  const ticket = 'O3SMpm8bG7kJnF36aXbe82wART_4LIR2pTOciT2IvEkRZzEoWF4UIcm8K2VcI2NFy8PZHVtfOzcVURjXin4O_w'
  // const { data } = await axios({ url: `http://localhost:3000/getSign`, params: { link, ticket } }) || {}
  const nonceStr = createNonceStr();
  const timestamp = createTimestamp()
  const signature = generateSignature(ticket, nonceStr, timestamp, link)
  const ret = { signature, appId: config.appId, nonceStr, timestamp }
  wx.config({
    debug: false,
    // ...data,
    ...ret,
    jsApiList: [
      'updateAppMessageShareData',
      'updateTimelineShareData',
      'getLocation'
    ]
  });
  wx.ready(function () {
    wx.updateAppMessageShareData({
      title: '飞机大作战', // 分享时的标题
      desc: '向着星辰与深渊', // 分享描述
      link,
      imgUrl: enemy,
      success: function () {
        console.log('分享成功1');
      },
      cancel: function () {
        console.log('取消分享1');
      },
    });
    wx.getLocation({
      type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
      success: function (res: any) {
        const latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
        const longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
        const speed = res.speed; // 速度，以米/每秒计
        const accuracy = res.accuracy; // 位置精度
        console.info("🐕‍🦺 ~file: jssdk.ts ~line: 82 ~latitude", res);
        alert(`经纬度测试:${latitude + ',' + longitude + speed + accuracy}`)
      }
    });
  });
};

export { getWxSdk }