<template>
    <div class="header">
        <div class="header-right">
            <!-- 欢迎 -->
            <div class="title">欢迎你，小诺</div>
            <!-- 用户头像 -->
            <div>
                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.header{
    width: 100%;
    height: 100%;
    //使用flex布局
    display: flex;
    //主轴对齐方式
    justify-content: flex-end;
    background-color: white;
    .header-right{
        display: flex;
        align-items: center;
    }
}
</style>