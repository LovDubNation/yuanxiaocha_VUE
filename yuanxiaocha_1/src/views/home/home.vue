<template>
    <div class="home">
        <!-- datav中的边框组件 -->
        <dv-border-box-1>
            <!-- 头部的盒子 -->
            <div class="box-top">
                <!-- 头部订单动画效果 行内样式，设置宽度和高度 -->
                <dv-decoration-5 style="width:900px; height:40px"/>
            </div>
            <!-- 下边主体图表部分 分左右布局 -->
            <div class="box-main">
                <!-- 左边的部分 -->
                <div class="main-left">
                    <!-- 胶囊柱状图  ：config="config" 动态绑定data中的数据 -->
                    <dv-capsule-chart
                    :config="config"
                    style="width:500px; height: 220px;"/>
                    
                    <!--echarts拆线图显示的容器 id="echarts"
                    echarts获取dom,详情看methods中的drow方法  -->
                    <div id="echarts"></div>
                </div>
                <!-- 右边的部分 -->
                <div class="main-right">
                    <!-- 附带行号的轮播表 -->
                    <dv-scroll-board
                    :config="config"
                    style="width:500px; height: 220px"/>
                    <!-- 单条滚动的轮播表 -->
                    <dv-scroll-ranking-board
                    :config="config"
                    style="width:500px; height: 300px"
                    />
                </div>
            </div>
        </dv-border-box-1>
    </div>
</template>

<script>
import * as echarts from "echarts";
    export default {
        data(){
            return{
                // 胶囊柱状图 和 单条滚动的轮播表 的数据，两个图表共用一个数据
                config:{
                    data:[
                        {
                            name:"周口",
                            value:55,
                        },
                        {
                            name:"南阳",
                            value:120,
                        },
                        {
                            name:"西峡",
                            value:78,
                        },
                        {
                            name:"驻马店",
                            value:66,
                        },
                        {
                            name:"新乡",
                            value:80,
                        },
                        {
                            name:"信阳",
                            value:45,
                        },
                        {
                            name:"漯河",
                            value:29,
                        },
                    ],
                    colors:["#e062ae","#fb7293","#e690d1","#32c5e9","#96bfff"],
                    unit:"单位",
                    showValue:true,
                },
                config1:{
                    header:["城市"],
                    data:[
                        ["周口"],
                        ["南阳"],
                        ["西峡"],
                        ["驻马店"],
                        ["新乡"],
                        ["信阳"],
                        ["漯河"],
                    ],
                    index:true,
                    columnWidth:[50],
                    align:["center"],
                },
            };
        },
        // 挂载后生命周期函数
        // 这里不使用created()创建生命周期函数的原因是，在created中不能操作dom，而echarts图表显示需要担任dom
        mounted(){
            this.draw()
        },
        methods:{
            // 定义echarts图表显示的方法
            draw(){
                // 定义一个变量去接收获取到的echarts图表显示的容器的dom,
                // document.getElementById("echarts")是通过div标签上id来获取dom的
                // 所以我们在使用echarts时，要先给容器添加id,然后通过id获取dom
                // 基于准备好的dom，初始化charts实例
                var chartDom=document.getElementById("echarts");
                var myChart=echarts.init(chartDom);
                var option;


                option={
                // xAxis为grid直角坐标轴中的x轴
                    xAxis:{
                    //类目轴，适用于高散的类目数据
                        type:"category",
                        // x轴显示的内容
                        data:["周口","南阳","西峡","驻马店","新乡","信阳","漯河"],
                    },

                    // yAxis为echarts图表的纵坐标，它的type属性只有一种'value',value显示的是横坐标对应的数值
                    // 并且纵坐标的值不用我们自己去设置，它会根据我们给的数据自己生成纵坐标数值范围。
                    yAxis:{
                        type:"value",

                    },

                    // series是一个数组，数组里面有若干个对象
                    series:[
                        {
                            // 显示的数据
                            data:[55,120,78,66,80,45,29],
                                // 类型，比如line是拆线,bar是柱形等
                            type:"line",
                        },
                    ],
                };

                // 使用刚指定的配置项和数据显示图表
                option && myChart.setOption(option);
            },
        },
        
    };
</script>

<style lang="less" scoped>
.home{
    width:100%;
    height: 100%;
    background-image: url(../../assets/images/bg.jpg);
    background-size: cover;
    .box-top{
        width:100%;
        display: flex;
        justify-content: center;
    }
    /deep/.box-main{
        padding: 20px;
        display: flex;
        justify-content: space-around;
        .main-left{
            width: 500px;
            height: 100%;
            display: flex;
            #echarts{
                width: 500px;
                height: 100%;

            }
        }
        .mian-right{
            width: 500px;
            height: 100%;
            display: flex;
            flex-direction: column;
        }

    }
}

</style>