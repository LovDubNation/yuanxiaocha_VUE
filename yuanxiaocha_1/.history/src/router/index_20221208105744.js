import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path:'/login',
    component:Login
  },
 

  //首页
  // path 路由路径    meta:{title:"首页"} 路由标题     redirect  路由重定向     children  二级路由,是一个数组
  {path:'/home',meta:{title:"首页"},component:Layout,redirect:"/home/index",children:[
    // 二级路由的path 前边不加/  路由加载的时候会自动拼接 
    //   ../ 是返回到上一级目录   ./ 是在当前平级的目录    @是以src目录为起点的
    {path:'index',component:()=>import('../views/home/home.vue')}
  ]},
  //用户管理
  {path:'/users',meta:{title:"用户管理"},component:Layout,redirect:"/users/userlist",children:[
    {path:'userlist',meta:{title:"用户信息"},component:()=>import('../views/users/UserList.vue')},
    {path:'usersave',meta:{title:"新增用户"},component:()=>import('../views/users/UserSave.vue')},
  ]},
  //商品管理
  {path:'/goods',meta:{title:"商品管理"},component:Layout,redirect:"/goods/goodslist",children:[
    {path:'goodslist',meta:{title:"商品信息"},component:()=>import('../views/goods/GoodsList.vue')},
  ]},
  //商品分类
  {path:'/class',meta:{title:"商品分类"},component:Layout,redirect:"/class/goodstype",children:[
    {path:'goodstype',meta:{title:"分类信息"},component:()=>import('../views/class/GoodsType.vue')},
    {path:'goodssave',meta:{title:"新增分类"},component:()=>import('../views/class/GoodsSave.vue')},
  ]},
  //图片管理
  {path:'/picture',meta:{title:"图片管理"},component:Layout,redirect:"/picture/imglist",children:[
    {path:'imglist',meta:{title:"图片信息"},component:()=>import('../views/picture/ImgList.vue')},
    {path:'imgsave',meta:{title:"上传图片"},component:()=>import('../views/picture/ImgSave.vue')},
  ]},
  //订单管理
  {path:'/order',meta:{title:"订单管理"},component:Layout,redirect:"/order/orderlist",children:[
    {path:'orderlist',meta:{title:"全部订单"},component:()=>import('../views/order/OrderList.vue')},
    {path:'orderwait',meta:{title:"待出货订单"},component:()=>import('../views/order/OrderWait.vue')},
  ]},
  {path:'/vis',meta:{title:"羊了个羊"},component:Layout,redirect:"/vis/index",children:[
    // 二级路由的path 前边不加/  路由加载的时候会自动拼接 
    //   ../ 是返回到上一级目录   ./ 是在当前平级的目录    @是以src目录为起点的
    {path:'index',component:()=>import('../views/visualize/index.vue')}
  ]},
]

const router = new VueRouter({
  routes
})

export default router
