<template>
  <div class="ui container">
    <h2>(3)B-x曲线</h2>
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
      <div>x:{{x}}(mm)</div>
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
      <div class="ui container">B:{{B}}(T)</div>
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
    name: "B-x",
    data () {
      return {
        KH: 174.8,
        x: [],
        B: [],
        IM: 0.600,
        Is: 2.00,
        UH: []
      }
    },
    methods: {
      getChart() {
        const dom = document.getElementById('myChart')
        const myChart = echarts.init(dom)
        const option = {
          xAxis: {
            data: this.x
          },
          yAxis: {
          },
          series: [{
            data: this.B,
            type: 'line',
            smooth: true
          }]
        };
        // console.log("打印实例查看 myChart ==>", myChart)
        // 4 设置实例参数
        myChart.setOption(option);
      },
      getB(UH) {
        return UH/(this.KH * this.Is)
      },
      inputData() {
        let xString = $('#x').val()
        let yString = $('#y').val()
        this.x.push(xString)
        this.UH.push(yString)
        this.B.push(this.getB(yString).toFixed(2))
        this.getChart()
        $('#x').val('')
        $('#y').val('')
        console.log('UH:'+this.UH);
      },
      deleteLast() {
        this.x.pop()
        this.B.pop()
        this.UH.pop()
      }
    },
  }
</script>

<style scoped>

</style>