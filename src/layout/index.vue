<template>
  <div :class="['main-container']">
    <div>
      <layout-header />
      <!-- 主体内容 -->
      <app-main />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue';
import appMain from './components/AppMain.vue';

const layoutHeader = defineComponent({
  render() {
    return h(
      'div',
      {
        class: 'fixed-header',
        style: ['box-shadow:0 1px 4px #0d0d0d'],
      },
      {
        default: () => [],
      }
    );
  },
});
</script>

<style></style>
