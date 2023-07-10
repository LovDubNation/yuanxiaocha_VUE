
<template>
    <div class="login dfcenter">
        <div class="box">
            <div class="title dfcenter">
                <h1>源小茶登录系统</h1>
            </div>
            <!-- 
                给form表单使用 ：model 动态绑定数据源 然后就可以给表单元素使用 v-model 进行双向数据绑定
             -->
            <el-form :model="userobj" :rules="rules" label-width="100px">
                <el-form-item label="用户名" prop="account">
                    <el-input v-model="userobj.account" type="text" placeholder="请输入电话号码">
                        <i class="iconfont icon-yonghufill" slot="prefix"></i>
                    </el-input>
                </el-form-item>

                <el-form-item label="密码" prop="password">
                    <!--  -->
                    <el-input v-model="userobj.password" :type="flage?'text':'password'" placeholder="请输入密码">
                        <i class="iconfont icon-mima" slot="prefix"></i>
                        <i :class="['iconfont',flage?'icon-yanjing_huaban1':'icon-05wangluoanquan_biyanjing']" slot="suffix" @click="flage = !flage"></i>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="gologin" type="primary">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            userobj:{
                //用户名
                account:"",
                //密码
                password:""
            },
            //定义一个标杆，控制眼睛的显示和隐藏
            flage:false,
            rules:{
                account:[
                    { required: true, message:'此选项不能为空',trigger:'blur'},
                    { min:11,max: 11, message:'请输入正确的电话号码',trigger:'vlur'}
                ],
                password:[
                    { required: true, message:'此选项不能为空',trigger:'blur'},
                    { min:3,max: 3, message:'请输入正确的电话号码',trigger:'vlur'}
                ]
            }
        }
    },
    methods:{
        //定义一个登录方法
        gologin(){
            this.$axios({
                //请求方式
                methods:'post',
                //请求地址
                // url:'http://106.12.12.127.84/ymapp/userLogin',
                url:'http://localhost:8080/login/User/login_1',
                //请求参数
                params:{
                    userEmail:this.userobj.account,
                    upwd:this.userobj.password
                }
            }).then((res)=>{
                console.log(res)
                if(res.data.code == 0){
                    //提示
                    this.$message({
                        //提示
                        message:res.data.meg,
                        //状态
                        type:'success'
                    })
                }else{
                    //提示
                    this.$message({
                        message:'请输入正确的用户名和密码'
                    })
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
.login{
    width: 100%;
    height: 100%;
    background-image: url(@/assets/images/bj.webp);
    background-size: cover;
    .box{
        widows: 400px;
        height: 300px;
        .title{
            color: white;
            font-size: 25px;
            font-weight: 900;
            margin-bottom: 25px;
            margin-left: 70px;
        }

        .el-button--primary{
            width: 100%;
        }
        /deep/.el-form-item_label{
            color: white;
        }
    }
}

</style>