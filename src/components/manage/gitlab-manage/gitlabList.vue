<template>
  <div class="gitlab-list">
    <!-- 查询模块 -->
    <el-form class="form-search" :inline="true" :model="formSearch">
      <el-form-item label="">
        <el-input placeholder="项目名称" v-model="formSearch.name"></el-input>
      </el-form-item>
      <el-button type="primary" @click="search" @keyup.enter="search">查询</el-button>
    </el-form>
    <!-- 列表模块 -->
    <el-table class="gitlab-list__table" :data="gitlabData">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" class="table-expand" inline>
            <el-form-item label="项目名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="项目地址">
              <span>{{ props.row.url }}</span>
            </el-form-item>
            <el-form-item label="添加日期">
              <span>{{ props.row.date }}</span>
            </el-form-item>
            <el-form-item label="ssh key">
              <span>{{ props.row.ssh }}</span>
            </el-form-item>
            <el-form-item label="分支">
              <span>{{ props.row.branch }}</span>
            </el-form-item>
            <el-form-item label="项目负责人">
              <span>{{ props.row.author }}</span>
            </el-form-item>
            <el-form-item label="项目描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="添加日期" prop="date" sortable>
        <template slot-scope="scope">
          <el-icon name="time"></el-icon>
          <span>{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="项目名称" prop="name"></el-table-column>
      <el-table-column label="分支" prop="branch"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="small" @click="handleUpdate(scope.$index, scope.row)">pull</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页模块 -->
    <el-pagination
      class="pagination"
      layout="total, prev, pager, next"
      :current-page.sync="currentPage1"
      :page-size="100"
      :total="1000"
      @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data () {
    return {
      gitlabData: [{
        ssh: '12987122',
        name: '在线客服',
        date: '2017-11-02',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        url: '上海市普陀区真北路',
        branch: 'dev'
      }],
      formSearch: {
        name: ''
      },
      currentPage1: 5
    }
  },
  created () {
    for (var i = 0; i < 5; i++) {
      this.gitlabData.push({
        ssh: '12987123',
        name: '长安',
        date: '2018-12-12',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        url: '上海市普陀区真北路',
        branch: 'master'
      })
    }
  },
  methods: {
    handleUpdate (index, row) {
      console.log(index, row)
    },
    search () {
      // ...
    },
    handleSizeChange () {
      console.log('size')
    },
    handleCurrentChange () {
      console.log('curren')
    }
  }
}
</script>

<style>
.form-search {
  text-align: right;
}

.gitlab-list__table {
  margin: 0 auto;
  border: 1px solid #ececec;
}

.table-expand {
  font-size: 0;
}

.table-expand label {
  width: 90px;
  color: #99a9bf;
}

.table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}

.pagination {
  text-align: center;
  margin-top: 15px;
}
</style>
