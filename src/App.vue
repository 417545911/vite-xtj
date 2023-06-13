<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { getWxSdk } from '@/plugins/weixin/jssdk';

onMounted(() => {
  getWxSdk();
});
</script>
