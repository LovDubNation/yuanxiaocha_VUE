<template>
    <div class="save">
        <!-- 卡片组件 -->
        <el-card class="box-card">
            <!-- slot="header" 这个插槽是将我们卡片的标题放在我们卡片的头部 -->
            <div slot="header" class="clearfix">
                <span>新增用户</span>
            </div>
            <!-- form表单 -->
            <!-- ref="form" 绑定form表单，然后可以通过this.$refs这方方法拿到表单中所有的内容 -->
            <el-form label-width="100px" :model="userobj" ref="form">
                <!-- 用户名称表单域 label 表单域头部的标题文字| -->   
                <el-form-item label="用户名称" prop="account">
                    <el-input placeholder="请选择输入用户名称" v-model="userobj.account"></el-input>
                </el-form-item >
                <!-- 手机号 -->
                <el-form-item label="用户手机号" prop="phone">
                    <el-input placeholder="请选择输入用户手机号" v-model="userobj.phone"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item label="密码" prop="password">
                    <el-input placeholder="请选择输入密码" v-model="userobj.password"></el-input>
                </el-form-item>
                <!-- 用户组 -->
                <el-form-item label="用户组" prop="userGroup">
                    <el-select placeholder="请选择用户组" v-model="userobj.userGroup">
                        <el-option label="管理员" value="管理员"></el-option>
                        <el-option label="普通员工" value="普通员工"></el-option>
                    </el-select>
                </el-form-item>
                <!-- 按钮 -->
                <el-form-item>
                    <el-button type="primary" @click="submitForm">提交</el-button>
                    <el-button @click="resetForm('userobj')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userobj:{
                    account:"",
                    phone:"",
                    password:"",
                    userGroup:"",
                },
            };
        },
        methods:{
            //重置的方法
            //这个form 对应的是ref="form"
            resetForm(){
                console.log('正在重置');
                this.$refs.form.resetFields();
            },
            //提交的方法
            submitForm(){
                this.$axios({
                    method:'post',
                    url:'http://106.12.127.84/ymapp/user/registerUtell',
                    params:{
                        uname:this.userobj.account,
                        utell:this.userobj.phone,
                        jurisdiction:this.userobj.userGroup,
                        upwd:this.userobj.password
                    }
                }).then((res)=>{
                    console.log(res)
                    if(res.data.code == 0){
                        this.$message({
                            //提示
                            message:res.data.msg,
                            // message:"成功",
                            //成功状态
                            type:'success'
                        })
                    }else{
                        this.$message({
                            //提示
                            message:res.data.msg,
                            // message:"错误"
                        })
                    }
                })
            }
        }
    };
</script>

<style lang="less" scoped>
.save {
    width: 100%;
    height: 100%;
    /deep/.el-input__inner {
        width: 300px;
    }
}
</style>