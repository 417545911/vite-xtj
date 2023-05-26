<template>
  <div :class="['app-wrapper']">
    <!-- <div v-show="set.device==='mobile' && set.sidebar.opened && layout.includes('vertical')" class="app-mask"></div> -->
    <div :class="['main-container']">
      <layout-header />
      <!-- 主体内容 -->
      <app-main />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue';
import appMain from './components/AppMain.vue';

// function setTheme(layoutModel:string){
//   window.document.body.setAttribute("layout",layoutModel);
//   $storage.layout = {
//     layout:`${layoutModel}`,
//     theme:$storage.layout?.theme,
//     darkMode:$storage.layout?.darkMode,
//     sidebarStatus:$storage.layout?.sidebarStatus,
//     epThemeColor:$storage.layout?.epThemeColor
//   }
// }

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

<style lang="scss" scoped>
@mixin clearfix {
  &::after {
    content:"";
    display: table;
    clear:both
  }
}

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
</style>
