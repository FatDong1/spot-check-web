import Vue from 'vue'
import Router from 'vue-router'
import webStorage from '../utils/storage'
import home from '@/components/manage/home/home'
import manage from '@/components/manage'
import login from '@/components/login'
import userList from '@/components/manage/user/userList'
import addUser from '@/components/manage/user/addUser'
import deviceList from '@/components/manage/device/deviceList'
import deviceGroup from '@/components/manage/device/deviceGroup'
import dayCheckDone from '@/components/manage/check/day-check/dayCheckDone'
import dayCheckWill from '@/components/manage/check/day-check/dayCheckWill'
import professCheckDone from '@/components/manage/check/profess-check/professCheckDone'
import professCheckWill from '@/components/manage/check/profess-check/professCheckWill'
import precisionCheckDone from '@/components/manage/check/precision-check/precisionCheckDone'
import precisionCheckWill from '@/components/manage/check/precision-check/precisionCheckWill'
import account from '@/components/manage/account/account'
import dayCycle from '@/components/manage/cycle/dayCycle'
import professCycle from '@/components/manage/cycle/professCycle'
import precisionCycle from '@/components/manage/cycle/precisionCycle'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: manage,
      children: [
        // 首页
        {
          path: '/manage',
          name: 'home',
          component: home
        },
        // 日常点检
        {
          path: '/manage/day-check/done',
          name: 'dayCheckDone',
          component: dayCheckDone,
          meta: [
            {
              name: '日常点检',
              url: ''
            },
            {
              name: '已完成',
              url: ''
            }
          ]
        },
        {
          path: '/manage/day-check/will',
          name: 'dayCheckWill',
          component: dayCheckWill,
          meta: [
            {
              name: '日常点检',
              url: ''
            },
            {
              name: '未完成',
              url: ''
            }
          ]
        },
        // 专业点检
        {
          path: '/manage/profess-check/done',
          name: 'professCheckDone',
          component: professCheckDone,
          meta: [
            {
              name: '专业点检',
              url: ''
            },
            {
              name: '已完成',
              url: ''
            }
          ]
        },
        {
          path: '/manage/profess-check/will',
          name: 'professCheckWill',
          component: professCheckWill,
          meta: [
            {
              name: '专业点检',
              url: ''
            },
            {
              name: '未完成',
              url: ''
            }
          ]
        },
        // 精密点检
        {
          path: '/manage/precision-check/done',
          name: 'precisionCheckDone',
          component: precisionCheckDone,
          meta: [
            {
              name: '精密点检',
              url: ''
            },
            {
              name: '已完成',
              url: ''
            }
          ]
        },
        {
          path: '/manage/precision-check/will',
          name: 'precisionCheckWill',
          component: precisionCheckWill,
          meta: [
            {
              name: '精密点检',
              url: ''
            },
            {
              name: '未完成',
              url: ''
            }
          ]
        },
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
        },
        // 点检管理
        {
          path: '/manage/cycle/day',
          name: 'dayCycle',
          component: dayCycle,
          meta: [
            {
              name: '点检周期'
            },
            {
              name: '日常点检'
            }
          ]
        },
        {
          path: '/manage/cycle/profess',
          name: 'professCycle',
          component: professCycle,
          meta: [
            {
              name: '点检周期'
            },
            {
              name: '专业点检'
            }
          ]
        },
        {
          path: '/manage/cycle/precision',
          name: 'precisionCycle',
          component: precisionCycle,
          meta: [
            {
              name: '点检周期'
            },
            {
              name: '精密点检'
            }
          ]
        },
        // 账户管理
        {
          path: '/manage/account',
          name: 'account',
          component: account,
          meta: [
            {
              name: '账户管理'
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
    next({name: 'home'})
  } else if (!code && to.name === 'login') {
    next()
  } else if (!code) {
    next({name: 'login'})
  } else {
    next()
  }
})

export default router
