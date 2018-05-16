<template>
  <el-menu
    mode="vertical"
    class="sidebar-menu"
    default-active="2"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :router="router"
    :collapse="isCollapse">
    <el-tooltip class="item" effect="dark" :content="content" placement="bottom-end">

      <el-menu-item @click="isCollapse = !isCollapse">
        <i class="el-icon-menu"></i>
        <span>脚力共享后台管理</span>
      </el-menu-item>
    </el-tooltip>
      <el-menu-item index="/order/list">
        <i class="el-icon-document"></i>
        <span>订单管理</span>
      </el-menu-item>
      <el-menu-item index="/business/list">
        <i class="el-icon-printer"></i>      
        <span>商家管理</span>  
      </el-menu-item>
      <el-menu-item index="/user/list">
        <i class="el-icon-news"></i>            
        <span>会员管理</span>
      </el-menu-item>
  </el-menu>
</template>
<style>
  .sidebar-menu:not(.el-menu--collapse) {
    display: block;
    width: 200px;
    height: 100%;
    border: none;
    min-height: 100vh;
  }

  .el-menu--collapse {
    min-height: 100vh;
  }
</style>
<script>
  export default {
    data () {
      return {
        router: true,
        isCollapse: false
      }
    },
    methods: {},
    computed: {
      content () {
        if (this.isCollapse) {
          return '点击展开侧边栏'
        } else {
          return '点击折叠侧边栏'
        }
      }
    }
  }
</script>
