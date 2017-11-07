<template>
  <div class="user-list">
    <!-- 查询模块 -->
    <div class="search">
      <el-input
        placeholder="请输入用户姓名"
        v-model="searchName"
        class="search-input"
        @keyup.enter.native="searchUser"></el-input>
      <el-button type="primary" @click="searchUser">查询</el-button>
    </div>
    <!-- 显示的用户列表 -->
    <el-table
      class="user-list__table"
      :data="tableData"
      border
      >
      <el-table-column
        prop="name"
        label="员工姓名"
       >
      </el-table-column>
      <el-table-column
        prop="account"
        label="员工账号"
       >
      </el-table-column>
      <el-table-column
        prop="checkType"
        label="负责点检"
      >
      </el-table-column>
      <el-table-column
        prop="deviceGroup"
        label="负责设备种类">
      </el-table-column>
      <el-table-column
        prop="option"
        label="选项">
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
    <!-- 隐藏的用户编辑表格 -->
    <el-dialog title="编辑用户" :visible.sync="editFormVisible" center>
      <el-form :model="userFormEdit">
        <el-form-item label="员工姓名" label-width="100px">
          <el-input v-model="userFormEdit.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="员工账号" label-width="100px">
          <el-input v-model="userFormEdit.account" auto-complete="off"></el-input>
        </el-form-item>
      <el-form-item label="负责点检" label-width="100px">
        <el-select v-model="userFormEdit.checkType" placeholder="请选择点检种类">
          <el-option label="日常点检" value="日常点检"></el-option>
          <el-option label="专业点检" value="专业点检"></el-option>
          <el-option label="精密点检" value="精密点检"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="负责设备" label-width="100px">
        <el-select v-model="userFormEdit.deviceGroup" placeholder="请选择设备种类">
          <el-option label="电气类" value="电气类"></el-option>
          <el-option label="机床类" value="机床类"></el-option>
          <el-option label="仪器类" value="仪器类"></el-option>
        </el-select>
      </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="editFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleConfirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: '',
      searchName: '',
      editIndex: '',
      editFormVisible: false,
      userFormEdit: {
        id: '',
        name: '',
        checkType: '',
        deviceGroup: ''
      }
    }
  },
  created () {
    this.$http({
      url: '/api/users',
      methods: 'GET'
    }).then((data) => {
      this.tableData = data.value
    }).catch((err) => {
      console.log(err)
    })
  },
  methods: {
    handleEdit (index, row) {
      this.editIndex = index
      this.editFormVisible = true
      for (let key in row) {
        this.userFormEdit[key] = row[key]
      }
    },
    handleDelete (index, row) {
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http({
          url: '/api/user',
          method: 'DELETE',
          params: {
            id: row.id
          }
        }).then((data) => {
          this.$message({
            message: data.msg,
            type: 'success'
          })
          // 重新获取用户数据
          this.$http({
            url: '/api/users',
            methods: 'GET'
          }).then((data) => {
            this.tableData = data.value
          })
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },

    searchUser () {
      this.$http({
        url: '/api/users/search',
        method: 'GET',
        params: {
          name: this.searchName
        }
      }).then((data) => {
        this.tableData = data.value
      }).catch(() => {
        this.tableData = []
      })
    },

    handleConfirm () {
      this.$http({
        url: '/api/user',
        method: 'POST',
        data: this.userFormEdit
      }).then((data) => {
        this.$message({
          message: data.msg,
          type: 'success'
        })
        for (let key in this.userFormEdit) {
          this.tableData[this.editIndex][key] = this.userFormEdit[key]
        }
      }).catch((err) => {
        this.$message.error(err.msg)
      })
      this.editFormVisible = false
    }
  }
}
</script>

<style>
.search {
  text-align: right;
  margin-bottom: 20px;
}

.search-input {
  display: inline-block;
  width: 20%;
}

.user-list__table {
  margin: 0 auto;
}
</style>
