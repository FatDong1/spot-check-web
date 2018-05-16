<template>
  <div class="gitlab-list">
    <!-- 查询模块 -->
    <!-- <el-form class="form-search" :inline="true" :model="formSearch">
      <el-form-item label="">
        <el-input placeholder="用户名称" v-model="formSearch.name"></el-input>
      </el-form-item>
      <el-button type="primary" @click="search" @keyup.enter="search">查询</el-button>
    </el-form> -->
    <div style="width: 150px; margin: 0 auto 10px; border-bottom: 4px double black;">
      <h3 style="margin: 0 0 10px 0; text-align: center;">会员管理</h3>
    </div>
    <!-- 列表模块 -->
    <el-table class="gitlab-list__table" :data="userData">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" class="table-expand" inline>
            <el-form-item label="会员姓名">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="性别">
              <span>{{ props.row.sex === 1 ? '男' : '女' }}</span>
            </el-form-item>
            <el-form-item label="邮箱">
              <span>{{ props.row.email }}</span>
            </el-form-item>
            <el-form-item label="手机号码">
              <span>{{ props.row.phone }}</span>
            </el-form-item>
            <el-form-item label="接单次数">
              <span>{{ props.row.order_times }}</span>
            </el-form-item>
            <el-form-item label="成单次数">
              <span>{{ props.row.finish_times }}</span>
            </el-form-item>
            <el-form-item label="注册时间">
              <span>{{ props.row.sign_date }}</span>
            </el-form-item>
            <el-form-item label="个人介绍">
              <span>{{ props.row.introduce }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="会员名称" prop="name"></el-table-column>
      <el-table-column label="性别" prop="sex">
        <template slot-scope="scope">
          <span>{{ scope.row.sex === 1 ? '男' : '女'}}</span>
        </template>
      </el-table-column>
      <el-table-column label="邮箱" prop="email"></el-table-column>
      <el-table-column label="手机号码" prop="phone"></el-table-column>
      <el-table-column label="个人介绍" prop="introduce"></el-table-column>
      <el-table-column label="注册时间" prop="sign_date"></el-table-column>      
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button 
            size="small"        
            class="btn-default" 
            @click="handleUpdate(scope.$index, scope.row)">注销</el-button>
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
      userData: [{
        name: '王鹏',
        sex: 1,
        email: '562097257@qq.com',
        phone: '15602231822',
        order_times: 0,
        finish_times: 0,
        point: 10,
        sign_date: '2018-09-05',
        introduce: '哈哈哈哈哈'
      }, {
        name: '吴泽国',
        sex: 1,
        email: '435343453@qq.com',
        phone: '14352231822',
        order_times: 0,
        finish_times: 0,
        point: 20,
        sign_date: '2018-09-05',
        introduce: '我叫吴泽国'
      }, {
        name: '许萍',
        sex: 0,
        email: '3552116732@qq.com',
        phone: '14352231822',
        order_times: 0,
        finish_times: 0,
        point: 50,
        sign_date: '2018-09-05',
        introduce: '哈哈哈哈哈'
      }, {
        name: '林小曼',
        sex: 0,
        email: '34534097257@qq.com',
        phone: '156752231822',
        order_times: 0,
        finish_times: 0,
        point: 10,
        sign_date: '2018-09-05',
        introduce: '哈哈哈哈哈'
      }],
      formSearch: {
        name: ''
      },
      currentPage1: 5
    }
  },
  created () {

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
