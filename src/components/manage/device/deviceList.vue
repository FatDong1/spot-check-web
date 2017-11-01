<template>
  <div class="device-list">
    <!-- 查询模块 -->
    <el-form class="form-search" :inline="true" :model="formSearch">
      <el-form-item label="">
        <el-input placeholder="设备名称" v-model="formSearch.name"></el-input>
      </el-form-item>
      <el-button type="primary" @click="search" @keyup.enter="search">查询</el-button>
    </el-form>
    <!-- 列表模块 -->
    <el-table class="device-list__table" :data="deviceData">
      <el-table-column type="expand"  label-width="300px">
        <template slot-scope="props">
          <el-form label-position="left" class="table-expand" inline>
            <el-form-item label="设备名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="设备归类">
              <span>{{ props.row.group }}</span>
            </el-form-item>
            <el-form-item label="购买日期">
              <span>{{ props.row.buyDate }}</span>
            </el-form-item>
            <el-form-item label="点检日期">
              <span>{{ props.row.lastDate }}</span>
            </el-form-item>
            <el-form-item label="维修记录">
              <span>{{ props.row.record }}</span>
            </el-form-item>
            <el-form-item label="故障原因">
              <span>{{ props.row.reason }}</span>
            </el-form-item>
            <el-form-item label="注意事项">
              <span>{{ props.row.notice }}</span>
            </el-form-item>
            <el-form-item label="设备描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="最近点检日期" prop="lastDate" sortable>
        <template slot-scope="scope">
          <el-icon name="time"></el-icon>
          <span>{{ scope.row.lastDate }}</span>
        </template>
      </el-table-column>
      <el-table-column label="设备名称" prop="name"></el-table-column>
      <el-table-column label="设备归类" prop="group"></el-table-column>
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
      deviceData: [{
        name: '车床',
        buyDate: '2001-12-01',
        lastDate: '2017-11-02',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        group: '车床类',
        record: '维修记录',
        reason: '维修原因'
      }],
      formSearch: {
        name: ''
      },
      currentPage1: 5
    }
  },
  created () {
    for (var i = 0; i < 5; i++) {
      this.deviceData.push({
        name: '车床',
        buyDate: '2001-12-01',
        lastDate: '2017-11-02',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        group: '车床类',
        record: '维修记录',
        reason: '维修原因'
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

.device-list__table {
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
