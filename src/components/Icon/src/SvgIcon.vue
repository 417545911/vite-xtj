//
<script lang="ts">
// import { defineComponent, computed } from 'vue';
// import {useDesign} from
// export default defineComponent({
//   name: 'SvgIcon',
//   props: {
//     prefix: {
//       type: String,
//       default: 'icon',
//     },
//     name: {
//       type: String,
//       required: true,
//     },
//     size: {
//       type: [Number, String],
//       default: 16,
//     },
//     spin: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   setup(props) {
//     const { prefixCls } = useDesign('svg-icon');
//     const symbolId = computed(() => `#${props.prefix}-${props.name}`);
//   },
// });
//
</script>
//
<template>
  //
  <svg :class="[prefixCls, $attrs.class, spin && 'svg-icon-spin']" :style="getStyle" aria-hidden="true">
    //
    <use :xlink:href="symbolId"></use>
    //
  </svg>
  //
</template>
