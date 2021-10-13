<template>
  <div class="ui container">
    <h2>(4)Is-Uσ曲线</h2>
    <div>
      <br>
      <!--自变量-->
      <div class="ui left action input">
        <button class="ui teal labeled icon button">
          <i class="caret square right icon"></i>
          自变量
        </button>
        <input type="text" placeholder="输入以“,”分隔" id="x">
      </div>
      <br>
      <div>Uσ:{{Uo}}(V)</div>
      <br>
      <br>
      <!--因变量-->
      <div class="ui left action input">
        <button class="ui teal labeled icon button">
          <i class="caret square right icon"></i>
          因变量
        </button>
        <input type="text" placeholder="输入以“,”分隔" id="y">
        <br>
      </div>
      <div class="ui container">Is:{{Is}}(mA)</div>
      <br>
      <br>
      <button class="ui button" @click="inputData">添加点</button>
      <button class="ui button" @click="deleteLast">删除点</button>
      <div id="myChart"
           class="ui container"
           style="width: 800px; height: 300px"></div>
    </div>
  </div>
</template>

<script>
  import * as echarts from "echarts";
  import $ from "jquery";
  export default {
    name: "Uσ-Is",
    data () {
      return {
        L: 260,
        b: 300,
        d: 300,
        S: this.b * this.d,
        Is: [],
        Uo: [],
        kUo: [],
      }
    },
    methods: {
      getChart() {
        const dom = document.getElementById('myChart')
        const myChart = echarts.init(dom)
        const option = {
          xAxis: {
            data: this.Uo
          },
          yAxis: {
          },
          series: [{
            data: this.Is,
            type: 'line',
            smooth: true
          }]
        };
        // console.log("打印实例查看 myChart ==>", myChart)
        // 4 设置实例参数
        myChart.setOption(option);
      },
      inputData() {
        let xString = $('#x').val()
        let yString = $('#y').val()
        this.Uo.push(xString)
        this.Is.push(yString)
        this.getChart()
        $('#x').val('')
        $('#y').val('')
      },
      deleteLast() {
        this.Is.pop()
        this.Uo.pop()
      }
    },
  }
</script>

<style scoped>

</style>