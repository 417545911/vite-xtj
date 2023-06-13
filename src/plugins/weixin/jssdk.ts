import axios from 'axios';
import wx from 'weixin-js-sdk';

/** 微信分享功能 */
const getWxSdk = async () => {
  const { data } = await axios({ url: `http://localhost:3000/getSign`, params: { url: 'http://192.168.17.177:8848/login' } })
  wx.config({
    debug: true,
    ...data,
    jsApiList: ['updateAppMessageShareData'], // js接口列表
  });
  wx.ready(function () {
    wx.updateAppMessageShareData({
      title: '测试', // 分享时的标题
      desc: '向着星辰与深渊', // 分享描述
      link: 'https://4wi9798646.zicp.fun/login',
      imgUrl:
        'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%9B%BE%E7%89%87&hs=0&pn=0&spn=0&di=7214885350303334401&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&ie=utf-8&oe=utf-8&cl=2&lm=-1&cs=3603845141%2C2283980107&os=3005380784%2C326343445&simid=4269932007%2C868022017&adpicid=0&lpn=0&ln=30&fr=ala&fm=&sme=&cg=&bdtype=0&oriquery=%E5%9B%BE%E7%89%87&objurl=https%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F210924233115O14-0-lp.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3B33da_z%26e3Bv54AzdH3F9hAzdH3Fu3AzdH3Fnmbn9a_z%26e3Bip4s&gsm=&islist=&querylist=&dyTabStr=MCw2LDEsMyw0LDUsMiw3LDgsOQ%3D%3D',
      success: function () {
        console.log('分享成功1');
      },
      cancel: function () {
        console.log('取消分享1');
      },
    });
  });
};

export { getWxSdk }