<template>
  <div class="user-list">
    <!-- 查询模块 -->
    <el-form class="form-search" :inline="true" :model="formSearch">
      <el-form-item label="">
        <el-input placeholder="用户姓名" v-model="formSearch.name"></el-input>
      </el-form-item>
      <el-button type="primary" @click="search" @keyup.enter="search">查询</el-button>
    </el-form>
    <!-- 用户列表 -->
    <el-table
      class="user-list__table"
      :data="tableData"
      border
      >
      <el-table-column
        prop="name"
        label="姓名"
       >
      </el-table-column>
      <el-table-column
        prop="job"
        label="任务"
      >
      </el-table-column>
      <el-table-column
        prop="device"
        label="设备">
      </el-table-column>
      <el-table-column
        prop="option"
        label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        name: '王小虎',
        job: '日常点检',
        device: '机床类'
      }, {
        name: '王小虎',
        job: '日常点检',
        device: '电气类'
      }, {
        name: '王小虎',
        job: '日常点检',
        device: '车床类'
      }, {
        name: '王小虎',
        job: '日常点检',
        device: '钻床类'
      }],
      formSearch: {
        name: ''
      }
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style>
.form-search {
  text-align: right;
}

.user-list__table {
  margin: 0 auto;
}
</style>
