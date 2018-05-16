<template>
  <div class="gitlab-list">
    <!-- 查询模块 -->
    <!-- <el-form class="form-search" :inline="true" :model="formSearch">
      <el-form-item label="">
        <el-input placeholder="快递物品" v-model="formSearch.name"></el-input>
      </el-form-item>
       <el-button type="primary" @click="search" @keyup.enter="search">查询</el-button> 
    </el-form> -->
    <!-- 列表模块 -->
    <div style="width: 150px; margin: 0 auto 10px; border-bottom: 4px double black;">
      <h3 style="margin: 0 0 10px 0; text-align: center;">订单管理</h3>
    </div>
    <el-table class="gitlab-list__table" :data="orderData">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" class="table-expand" inline>
            <el-form-item label="快递物品">
              <span>{{ props.row.goods }}</span>
            </el-form-item>
            <el-form-item label="重量水平">
              <span>{{ props.row.weight_level }}</span>
            </el-form-item>
            <el-form-item label="快递公司">
              <span>{{ props.row.express_company }}</span>
            </el-form-item>
            <el-form-item label="寄送地址">
              <span>{{ props.row.send_address }}</span>
            </el-form-item>
            <el-form-item label="取件地址">
              <span>{{ props.row.get_address }}</span>
            </el-form-item>
            <el-form-item label="寄送时间">
              <span>{{ props.row.send_date }}</span>
            </el-form-item>
            <el-form-item label="取件时间">
              <span>{{ props.row.get_date }}</span>
            </el-form-item>
            <el-form-item label="佣金">
              <span>{{ props.row.price + '元' }}</span>
            </el-form-item>
            <el-form-item label="发布者">
              <span>{{ props.row.publisher }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="寄送日期" prop="send_date" sortable>
        <template slot-scope="scope">
          <el-icon name="time"></el-icon>
          <span>{{ scope.row.send_date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="快递物品" prop="goods"></el-table-column>
      <el-table-column label="取件地址" prop="get_address"></el-table-column>
      <el-table-column label="重量水平" prop="weight_level"></el-table-column>
      <el-table-column label="佣金" prop="price">
        <template slot-scope="scope">
          <span>{{ scope.row.price + '元' }}</span>
        </template>
      </el-table-column>
      <el-table-column label="发布者" prop="publisher"></el-table-column>
      
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="small"  class="btn-default" @click="handleUpdate(scope.$index, scope.row)">撤回</el-button>
          <el-button size="small"  class="btn-default" @click="handleUpdate(scope.$index, scope.row)">恢复</el-button> 
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
      orderData: [{
        goods: '猪肉',
        weight_level: '较重',
        express_company: '顺丰',
        send_address: '南区',
        get_address: '北区',
        send_date: '2018-05-18',
        get_date: '2018-03-04',
        price: 10,
        publisher: '陈培彬'
      }, {
        goods: '梳子',
        weight_level: '较轻',
        express_company: '中通',
        send_address: '红棉路口',
        get_address: '北区',
        send_date: '2018-09-08',
        get_date: '2018-03-04',
        price: 10,
        publisher: '范中岚'
      }, {
        goods: '杯子',
        weight_level: '较轻',
        express_company: '顺丰',
        send_address: '全家超市天气下',
        get_address: '北区',
        send_date: '2018-01-24',
        get_date: '2018-03-04',
        price: 10,
        publisher: '胡震'
      }, {
        goods: '风扇',
        weight_level: '较重',
        express_company: '韵达',
        send_address: '南区',
        get_address: '菊园b22',
        send_date: '2018-02-21',
        get_date: '2018-03-04',
        price: 10,
        publisher: '陈建新'
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
