<template>
  <div>
     <p class="title">脚力共享后台管理</p> 
    <el-menu 
      :default-active="activeIndex" 
      class="el-menu-header" 
      mode="horizontal"  
      router="true" 
      @select="handleSelect">
      <el-menu-item index="/order/list">订单管理</el-menu-item>
      <el-menu-item index="/business/list">商家管理</el-menu-item>
      <el-menu-item index="/user/list">会员管理</el-menu-item>
    </el-menu>
    <!-- <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">脚力共享后台管理</el-breadcrumb-item>
      <el-breadcrumb-item
        :key="index"
        :to="item.url"
        v-for="(item, index) in $route.meta">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb> -->
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        管理员<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">注销</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '/order/list'
    }
  },
  methods: {
    handleCommand (command) {
      if (command === 'a') {
        this.$storage.remove('CODE')
        this.$router.push({name: 'login'})
      }
    }
  }
}
</script>

<style>
.title {
  position: absolute;
  top: 0;
  margin: 0;
  left: 20px;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #e6e6e6;
  color: black;
}
.el-menu-header {
  margin-left: 150px;
}
.el-breadcrumb,
.el-dropdown {
  display: inline-block;
  height: 60px;
  line-height: 60px;
}

.el-dropdown {
  position: absolute;
  top: 0;
  right: 10px;
}

</style>
