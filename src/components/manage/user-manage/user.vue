<template>
  <div>
    <el-row>
      <el-col>
        <el-row>
          <el-button type="primary" @click="dialogFormVisible = true">新增用户</el-button>
          <el-input v-model="username"
                    placeholder="搜索用户"
                    style="width: 200px">
          </el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-table
          :data="tableData"
          :fit="true"
          style="width: 100%;table-layout: fixed">
          <el-table-column type="expand">
            <template slot-scope="scope">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="用户id">
                  <span>{{ scope.row.id }}</span>
                </el-form-item>
                <el-form-item label="账号">
                  <span>{{ scope.row.username }}</span>
                </el-form-item>
                <el-form-item label="昵称">
                  <span>{{ scope.row.name }}</span>
                </el-form-item>
                <el-form-item label="电子邮箱">
                  <span>{{ scope.row.email }}</span>
                </el-form-item>
                <el-form-item label="性别">
                  <span>{{ scope.row.sex }}</span>
                </el-form-item>
                <el-form-item label="用户组">
                  <span>{{ scope.row.id }}</span>
                </el-form-item>
                <el-form-item label="创建时间">
                  <span>{{ scope.row.create_time }}</span>
                </el-form-item>
                <el-form-item label="更新时间">
                  <span>{{ scope.row.update_time }}</span>
                </el-form-item>
                <el-form-item label="最后登录时间">
                  <span>{{ scope.row.last_login_time }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="用户id">
            <template slot-scope="scope">
              <span>{{ scope.row.id }}</span>
            </template>
          </el-table-column>
          <el-table-column label="账号">
            <template slot-scope="scope">
              <span>{{ scope.row.username }}</span>
            </template>
          </el-table-column>
          <el-table-column label="昵称">
            <template slot-scope="scope">
              <span>{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="电子邮箱">
          <template slot-scope="scope">
            <span>{{ scope.row.email }}</span>
          </template>
        </el-table-column>
          <el-table-column label="性别">
            <template slot-scope="scope">
              <span>{{ scope.row.sex }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="editUser">编辑
              </el-button>
              <el-button
                size="mini"
                type="danger"
                disabled>
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-dialog :title="title" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="用户id" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off" :style="{width:inputWidth}"></el-input>
        </el-form-item>
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off" :style="{width:inputWidth}"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off" :style="{width:inputWidth}"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off" :style="{width:inputWidth}"></el-input>
        </el-form-item>

        <el-form-item label="加入用户组" :label-width="formLabelWidth">
          <el-select v-model="value5" multiple placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

<script>
  export default {
    data () {
      return {
        title: '新增用户',
        username: '',
        tableData: [],
        isAddToUserGroup: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        inputWidth: '400px',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value5: []
      }
    },
    methods: {
      editUser () {
        this.dialogFormVisible = true
        this.title = '修改用户'
      },
      addUser () {
        this.dialogFormVisible = true
        this.title = '新增用户'
      }
    },
    mounted () {
      const _this = this
      this.$http({
        url: 'users',
        method: 'get'
      }).then(function (data) {
        _this.tableData = data
      })
    }
  }
</script>
