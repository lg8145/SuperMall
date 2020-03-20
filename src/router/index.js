import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('../views/login/Login.vue')
const Manage = () => import('../views/manage/Manage.vue')
const Home = () => import('../views/home/Home.vue')
const UserList = () => import('../views/user/UserList.vue')
const GreyUserList = () => import('../views/user/GreyUserList.vue')
const BlackUserList = () => import('../views/user/BlackUserList.vue')
//1.安装插件
Vue.use(VueRouter)

//2.创建路由对象
const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/manage',
    component: Manage,
    name: '',
    children: [{
      path: '',
      component: Home,
      meta: [],
    }, {
      path: '/userList',
      component: UserList,
      meta: ['用户管理', '用户列表'],
    }, {
      path: '/greyUserList',
      component: GreyUserList,
      meta: ['用户管理', '灰名单列表']
    }, {
      path: '/blackUserList',
      component: BlackUserList,
      meta: ['用户管理', '黑名单列表']
    }]
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFailed = error.message.match(pattern);
  const targetPath = router.history.pending.fullPath;
  if (isChunkLoadFailed) {
    router.replace(targetPath);
  }
});

export default router
