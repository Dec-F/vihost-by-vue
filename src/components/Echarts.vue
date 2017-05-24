<template>
  <div id="echarts" ref="echarts" v-bind:style="{ width:width+'px',height:height+'px',background:'#fff'}">
  </div>
</template>

<script>
const echarts = require('echarts');
export default {
  name: 'echarts',
  props: ['width','height','option'],
  mounted() {
    let chart = echarts.init(this.$refs.echarts);
    chart.setOption(this.$props.option)
  }
}
</script>

