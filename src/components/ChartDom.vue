<template>
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
    <div>Is:{{Is}}</div>
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
    <br>
    <br>
    <button class="ui button" @click="inputData">添加点</button>
    <button class="ui button" @click="deleteLast">删除点</button>
    <div id="myChart"
         class="ui container"
         style="width: 800px; height: 300px"></div>
  </div>
</template>

<script>
  import * as echarts from "echarts";
  import $ from "jquery";

  export default {
    name: "ChartDom",
    data () {
      return {
        Is: [],
        U1: 0,
        U2: 0,
        U3: 0,
        U4: 0,
        UH: []
      }
    },
    mounted() {
      this.getChart()
    },
    methods: {
      getChart() {
        const dom = document.getElementById('myChart')
        const myChart = echarts.init(dom)
        const option = {
          xAxis: {
            // type: 'Is/mA(工作电流)',
            data: this.Is
          },
          yAxis: {
            // type: 'UH/mV(霍尔电压)'
          },
          series: [{
            data: this.UH,
            type: 'line'
          }]
        };
        // console.log("打印实例查看 myChart ==>", myChart)
        // 4 设置实例参数
        myChart.setOption(option);
      },
      getUH(Ux) {
        return (Ux[0]*1 - Ux[1]*1 + Ux[2]*1 - Ux[3]*1) / 4
      },
      inputData() {
        // let xString = document.getElementById('x')
        let xString = $('#x').val()
        let yString = $('#y').val()
        // console.log(xString);
        console.log(yString);
        this.Is.push(xString)
        // this.Is = xString.split(',')
        console.log(this.Is);
        let Ux = yString.split(',')
        this.UH.push(this.getUH(Ux))
        console.log(this.UH);

        this.getChart()
        $('#x').val('')
        $('#y').val('')
        console.log('UH:'+this.UH);
      },
      deleteLast() {
        this.Is.pop()
        this.UH.pop()
      }
    }
  }
</script>

<style scoped>

</style>