<template>
    <div class="aside">
        <div class="aside-top dfcenter">
            <!-- 头像 element ui 中的组件，直接使用这个标签即可 -->
            <el-avater src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
            </el-avater>
            <div class="title">源小茶</div>
        </div>
        <!-- 侧边栏组件 -->
        <el-menu
        router
        :default-active='$route.path'
        background-color=' #545c64'
        text-color='white'
        active-text-color="#ffd04b"
        >
            <!-- 后台首页 -->
            <el-menu-item index="/home/index">
                <i class="iconfont icon-31shuyexuanzhong"></i>
                <span>后台首页</span>
            </el-menu-item>
            <!-- 用户管理 -->
            <el-submenu index="users">
                <template slot="title">
                    <i class="iconfont icon-zhanghaozhongxinzhanghaoguanli"></i>
                    <span>用户管理</span>
                </template>
                <!-- el-menu-item-group组件可以实现菜单进行分组 -->
                <el-menu-item-group>
                    <!-- 选项 -->
                    <el-menu-item index="/users/userlist">用户信息</el-menu-item>
                    <el-menu-item index="/users/usersave">新增用户</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <!-- 商品管理 -->
            <el-submenu index="goods">
                <template slot="title">
                    <i class="iconfont icon-shangpin"></i>
                    <span>商品管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/goods/goodslist">商品信息</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <!-- 商品分类 -->
            <el-submenu index="class">
                <template slot="title">
                    <i class="iconfont icon-shangpin"></i>
                    <span>商品分类</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/class/goodstype">分类信息</el-menu-item>
                    <el-menu-item index="/class/goodssave">新增分类</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <!-- 图片管理 -->
            <el-submenu index="picture">
                <template slot="title">
                    <i class="iconfont  icon-quanbudingdan"></i>
                    <span>图片管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/picture/imglist">图片信息</el-menu-item>
                    <el-menu-item index="/picture/imgsave">上传图片</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <!-- 订单管理 -->
            <el-submenu index="order">
                <template slot="title">
                    <i class="iconfont icon-tongjifenxi-changguitongji"></i>
                    <span>订单管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/order/orderlist">全部订单</el-menu-item>
                    <el-menu-item index="/order/orderwait">待出货订单</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.aside{
    width: 100%;
    height: 100%;
    background-color: #545c64;
    .aside-top{
        color: white;
        font-weight: 700;
        height: 60px;
    }
    .iconfont{
        font-size: 20px;
        margin-right: 10px;
        color: #fff;
    }
}
</style>