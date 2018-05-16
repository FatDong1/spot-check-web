import Vue from 'vue'
import Router from 'vue-router'
import webStorage from '../utils/storage'
import manage from '@/components/manage'
import group from '@/components/manage/user-manage/group.vue'
import user from '@/components/manage/user-manage/user.vue'
import login from '@/components/login'
import gitlabList from '@/components/manage/gitlab-manage/gitlabList.vue'
import addGitlab from '@/components/manage/gitlab-manage/addGitlab.vue'

import userList from '@/components/manage/user/user-list.vue'
import orderList from '@/components/manage/order/order-list.vue'
import businessList from '@/components/manage/business/business-list.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'manage',
      component: manage,
      children: [
        {
          path: '/manage/group',
          name: 'group',
          component: group,
          meta: [
            {
              name: '用户管理',
              url: ''
            },
            {
              name: '用户组管理',
              url: ''
            }
          ]
        },
        {
          path: '/manage/user',
          name: 'user',
          component: user,
          meta: [
            {
              name: '用户管理',
              url: ''
            },
            {
              name: '用户管理',
              url: ''
            }
          ]
        },
        {
          path: '/manage/gitlab/list',
          name: 'gitlabList',
          component: gitlabList,
          meta: [
            {
              name: 'gitlab管理',
              url: ''
            },
            {
              name: '列表',
              url: ''
            }
          ]
        },
        {
          path: '/manage/gitlab/add',
          name: 'addGitlab',
          component: addGitlab,
          meta: [
            {
              name: 'gitlab管理',
              url: ''
            },
            {
              name: '添加项目',
              url: ''
            }
          ]
        },
        {
          path: '/order/list',
          name: 'order-list',
          component: orderList,
          meta: [
            {
              name: '订单管理',
              url: ''
            }
          ]
        },
        {
          path: '/user/list',
          name: 'user-list',
          component: userList,
          meta: [
            {
              name: '会员管理',
              url: ''
            }
          ]
        },
        {
          path: '/business/list',
          name: 'business-list',
          component: businessList,
          meta: [
            {
              name: '商家管理',
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
