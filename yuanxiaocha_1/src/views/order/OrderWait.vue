<template>
    <div class="list">
        <el-card>
            <el-table :data="tableData">
                <!-- 使用表格组件 -->
                <el-table-column label="ID" prop="id" width="40px"></el-table-column>
                <el-table-column label="订单方式" prop="otype" width="100px"></el-table-column>
                <el-table-column label="产品流水号" prop="onumber" ></el-table-column>
                <el-table-column label="订单金额" prop="oprice" width="100px"></el-table-column>
                <el-table-column label="下单时间" prop="otime" width="200px"></el-table-column>
                <el-table-column label="产品状态" prop="paystate"></el-table-column>
                <el-table-column label="操作">
                    <template>
                        <el-button>编辑订单信息</el-button>
                        <el-button type="danger">删除</el-button>
                    </template>
                </el-table-column>
                
                
            </el-table>
            <!-- 分页器 -->
            <el-pagination 
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[4, 6, 8, 10]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="800"
            >
            </el-pagination>
        </el-card>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                tableData:[], //定义一个容器去接收我们返送请求后端
                currentPage:1,//当前页码
                pageSize:4,//分页
            }
        },
        //创建后 生命周期函数
        created(){
            this.querylist()
        },
        methods:{
            //定义一个获取数据的方法
            querylist(){
                this.$axios({
                    methods:'get',
                    url:'http://106.12.127.84/ymapp/order/queryAllOrder',
                    params:{
                        page:this.currentPage,
                        limit:this.pageSize
                    }
                }).then(res=>{
                    console.log(res)
                    this.tableData=res.data.data;
                });
            },
            //页面数据改变时触发的方法
            handleSizeChange(val){
                //这个val就是现在页面要改成的数据条数
                console.log(`每页 ${val} 条`);
                this.pageSize=val
                this.querylist()
            },
            handleCurrentChange(val) {
                //这个val就是要跳转的页码
                console.log(`当前页： ${val}`);
                this.currentPage=val
                this.querylist()
            }
        }
    }
</script>

<style lang="less" scoped>
.list {
    width: 100%;
    height: 100%;
}
</style>