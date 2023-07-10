import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/index.vue'    //引入登录页面
import Layout from '../views/layout/index.vue'  //  引入布局页面

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'login',
    component:Login
  },
  {
    path:'/login',
    component:Login
  },
  //首页
  {path:'/home',meta:{title:'首页'},redirect:'/home/index',component:Layout,children:[
      {path:'index',component:()=>import('../views/home/home.vue')}
  ]},
  //商品
  {path:'/goods',meta:{title:'商品管理'},redirect:'/goods/goodslist',component:Layout,children:[
    {path:'goodslist',meta:{title:'商品列表'},component:()=>import('../views/goods/GoodsList.vue')}
  ]},
  //商品分类
  {path:'/class',meta:{title:'商品分类'},redirect:'/class/goodstype',component:Layout,children:[
    {path:'goodssave',meta:{title:'新增分类'},component:()=>import('../views/class/GoodsSave.vue')},
    {path:'goodstype',meta:{title:'分类信息'},component:()=>import('../views/class/GoodsType.vue')}
  ]},
  //订单
  {path:'/order',meta:{title:'订单管理'},redirect:'/order/roderlist',component:Layout,children:[
    {path:'orderlist',meta:{title:'订单列表'},component:()=>import('../views/order/OrderList.vue')},
    {path:'orderwait',meta:{title:'待出货订单'},component:()=>import('../views/order/OrderWait.vue')}
  ]},
  //图片
  {path:'/picture',meta:{title:'图片管理'},redirect:'/picture/imglist',component:Layout,children:[
    {path:'imglist',meta:{title:'图片信息'},component:()=>import('../views/picture/ImgList.vue')},
    {path:'imgsave',meta:{title:'上传图片'},component:()=>import('../views/picture/ImgSave.vue')}
  ]},
  {path:'/users',meta:{title:'用户管理'},redirect:'/users/userlist',component:Layout,children:[
    {path:'userlist',meta:{title:'用户信息'},component:()=>import('../views/users/UserList.vue')},
    {path:'usersave',meta:{title:'增加用户'},component:()=>import('../views/users/UserSave.vue')}
  ]}
]

const router = new VueRouter({
  routes
})

export default router
