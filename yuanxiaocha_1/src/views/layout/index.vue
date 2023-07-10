<!--
    <el-container>：外层容器。当子元素中包含 <el-header> 或 <el-footer> 时，全部子元素会垂直上下排列，否则会水平左右排列。

    <el-header>：顶栏容器。
    
    <el-aside>：侧边栏容器。
    
    <el-main>：主要区域容器。
    
    <el-footer>：底栏容器。 -->
<template>
    <div class="layout">
        <el-container class="box">
            <el-aside width="200px" class="layout-left">
                <aside-nav></aside-nav>
            </el-aside>
            <el-container class="layout-right">
                <el-header class="layout-header">
                    <!-- 第四步，将注册的组件当做一个自定义标签使用 -->
                    <header-nav></header-nav>
                </el-header>
                <el-main class="layout-main">
                    <!-- 二级路由出口 -->
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
        
    </div>
</template>

<script>
//第二步，引入公共组件
import HeaderNav from '../../components/HeaderNav.vue'
import AsideNav from '../../components/AsideNav.vue'
export default {
    //第三步，注册组件
    components:{
        HeaderNav,
        AsideNav
    }
};
</script>

<style lang="less" scoped>
.layout {
    width: 100%;
    height: 100%;
    background-color: rgb(247, 247, 247);
    .box{
        width: 100%;
        height: 100%;
        .layout-left{
            width: 200px;
            height: 100%;
            background-color: pink;
        }
        .layout-header{
            // background-color: rgb(23, 71, 173);
        }
        .layout-main{
            // background-color: rgb(0, 244, 106);
        }
    }
}
</style>