import Vue from 'vue'
import Router from 'vue-router'
import webStorage from '../utils/storage'
import manage from '@/components/manage'
import login from '@/components/login'
import userList from '@/components/manage/user/userList'
import addUser from '@/components/manage/user/addUser'
import deviceList from '@/components/manage/device/deviceList'
import deviceGroup from '@/components/manage/device/deviceGroup'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'manage',
      component: manage,
      children: [
        // 设备管理
        {
          path: '/manage/device/list',
          name: 'deviceList',
          component: deviceList,
          meta: [
            {
              name: '设备管理',
              url: ''
            },
            {
              name: '设备列表',
              url: ''
            }
          ]
        },
        {
          path: '/manage/device/group',
          name: 'deviceGroup',
          component: deviceGroup,
          meta: [
            {
              name: '设备管理',
              url: ''
            },
            {
              name: '设备归类',
              url: ''
            }
          ]
        },
        // 用户管理
        {
          path: '/manage/user/list',
          name: 'userList',
          component: userList,
          meta: [
            {
              name: '用户管理',
              url: ''
            },
            {
              name: '用户列表',
              url: ''
            }
          ]
        },
        {
          path: '/manage/user/add',
          name: 'addUser',
          component: addUser,
          meta: [
            {
              name: '用户管理',
              url: ''
            },
            {
              name: '添加用户',
              url: ''
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})

router.beforeEach((to, from, next) => {
  let code = webStorage.get('CODE') || false
  if (code && to.name === 'login') {
    next({name: 'manage'})
  } else if (!code && to.name === 'login') {
    next()
  } else if (!code) {
    next({name: 'login'})
  } else {
    next()
  }
})

export default router
