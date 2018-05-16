<template>
  <div class="gitlab-list">
    <!-- 查询模块 -->
    <!-- <el-form class="form-search" :inline="true" :model="formSearch">
      <el-form-item label="">
        <el-input placeholder="商店名称" v-model="formSearch.name"></el-input>
      </el-form-item>
       <el-button type="primary" @click="search" @keyup.enter="search">查询</el-button> 
    </el-form> -->
    <div style="width: 150px; margin: 0 auto 10px; border-bottom: 4px double black;">
      <h3 style="margin: 0 0 10px 0; text-align: center;">商家管理</h3>
    </div>
    <!-- 列表模块 -->
    <el-table class="gitlab-list__table" :data="businessData">
      <el-table-column type="index"></el-table-column>
      <el-table-column label="商店名称" prop="business_name"></el-table-column>      
      <el-table-column label="店主姓名" prop="boss_name"></el-table-column>      
      <el-table-column label="状态" prop="state">
        <template slot-scope="scope">
          <span>{{ scope.row.state === 0 ? '封停' : '正常'}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="small" class="btn-default" @click="handleUpdate(scope.$index, scope.row)">封停</el-button>
          <el-button size="small" class="btn-default" @click="handleUpdate(scope.$index, scope.row)">解封</el-button>
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
      businessData: [{
        business_name: '义合堂',
        boss_name: '许三多',
        state: 0
      }, {
        business_name: '牛塔斯特',
        boss_name: '万平',
        state: 0
      }, {
        business_name: '大学新厨',
        boss_name: '张惠兰',
        state: 1
      }, {
        business_name: 'VETES',
        boss_name: '陈华友',
        state: 1
      }, {
        business_name: '美宜佳',
        boss_name: '张三丰',
        state: 1
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
      // console.log(index, row)
    },
    search () {
      // ...
    },
    handleSizeChange () {
      // console.log('size')
    },
    handleCurrentChange () {
      // console.log('curren')
    }
  }
}
</script>

<style>
.form-search {
  text-align: left;;
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
