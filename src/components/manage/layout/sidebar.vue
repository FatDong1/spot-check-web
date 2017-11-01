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
        <span>文档后台管理系统</span>
      </el-menu-item>
    </el-tooltip>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-document"></i>
        <span>用户管理</span>
      </template>
      <el-menu-item index="/manage/user">用户管理</el-menu-item>
      <el-menu-item index="/manage/group">用户组管理</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-date"></i>
        <span>gitlab管理</span>
      </template>
      <el-menu-item index="/manage/gitlab/add">添加gitlab</el-menu-item>
      <el-menu-item index="/manage/gitlab/list">查询gitlab</el-menu-item>
    </el-submenu>
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
