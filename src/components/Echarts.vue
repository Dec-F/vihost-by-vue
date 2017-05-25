<template>
  <div id="echarts" ref="echarts" v-bind:style="styleObj">
  </div>
</template>

<script>
const echarts = require('echarts');
export default {
  name: 'echarts',
  props: ['styleObj','option'],
  mounted() {
    let chart = echarts.init(this.$refs.echarts);
    chart.setOption(this.$props.option)
  }
}
</script>

