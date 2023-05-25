
<template>
  <div>
    <button @click="shareWeChat">分享到微信</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const initWeChatSDK = () => {
  // 初始化微信SDK
  wx.config({
    // 替换为你自己的AppID
    appId: 'YOUR_APP_ID',
    // 替换为你自己的权限验证地址
    jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline'],
    // 替换为你自己的权限验证地址
    url: 'YOUR_CURRENT_URL',
  });

  wx.ready(() => {
    // 微信SDK初始化成功后的回调函数
    // 在这里配置分享的数据
    const shareData = {
      title: '分享标题',
      desc: '分享描述',
      imgUrl: '分享图片链接',
      link: '分享链接',
    };

    // 分享给朋友
    wx.onMenuShareAppMessage(shareData);

    // 分享到朋友圈
    wx.onMenuShareTimeline(shareData);
  });

  wx.error(res => {
    // 微信SDK初始化失败后的回调函数
    console.error(res.errMsg);
  });
};

onMounted(() => {
  // 引入微信JS-SDK
  const wxScript = document.createElement('script');
  wxScript.src = 'https://res.wx.qq.com/open/js/jweixin-1.6.0.js';
  wxScript.async = true;
  wxScript.onload = initWeChatSDK;
  document.head.appendChild(wxScript);
});

const shareWeChat = () => {
  // 在需要分享时调用此方法
  // 请确保微信JS-SDK已经加载完成
  wx.ready(() => {
    // 执行自定义分享操作
    // 例如：点击分享按钮后再次配置分享的数据
    const shareData = {
      title: '新的分享标题',
      desc: '新的分享描述',
      imgUrl: '新的分享图片链接',
      link: '新的分享链接',
    };

    // 分享给朋友
    wx.onMenuShareAppMessage(shareData);

    // 分享到朋友圈
    wx.onMenuShareTimeline(shareData);
  });
};
</script>
