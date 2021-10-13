<template>
    <div class="ui container">
      <h2>(2)B-IM曲线</h2>
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
        <div>IM:{{IM}}</div>
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
        <div class="ui container">UH:{{UH}}</div>
        <div class="ui container">B:{{B}}</div>
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
  // import ChartDom from "../components/ChartDom";
  import * as echarts from "echarts";
  import $ from "jquery";

  export default {
    name: "B-IM",
    data () {
      return {
        KH: 174.8,
        B: [],
        Is: 2.00,
        IM: [],
        U1: 0,
        U2: 0,
        U3: 0,
        U4: 0,
        UH: []
      }
    },
    methods: {
      getChart() {
        const dom = document.getElementById('myChart')
        const myChart = echarts.init(dom)
        const option = {
          xAxis: {
            data: this.IM
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
      getUH(Ux) {
        return (Ux[0]*1 - Ux[1]*1 + Ux[2]*1 - Ux[3]*1) / 4
      },
      getB(UH) {
        return UH/(this.KH * this.Is)
      },
      inputData() {
        // let xString = document.getElementById('x')
        let xString = $('#x').val()
        let yString = $('#y').val()
        // console.log(xString);
        console.log(yString);
        this.IM.push(xString)
        // this.Is = xString.split(',')
        console.log(this.Is);
        let Ux = yString.split(',')
        this.UH.push(this.getUH(Ux)) //this.getUH(Ux)就是该次拿到的UH
        this.B.push(this.getB(this.getUH(Ux)).toFixed(2))
        this.getChart()
        $('#x').val('')
        $('#y').val('')
        console.log('UH:'+this.UH);
      },
      deleteLast() {
        this.IM.pop()
        this.B.pop()
        this.UH.pop()
      }
    },
  }
</script>

<style scoped>

</style>