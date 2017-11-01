<template>
  <div>
    <el-row>
      <el-col>
        <el-row>
          <el-button type="primary" @click="dialogFormVisible = true">新增设备归类</el-button>
          <el-input placeholder="搜索设备种类" style="width: 200px" v-model="userGroup">
          </el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-table class="device-group-list" :data="tableData" :fit="true" border>
          <el-table-column label="设备归类名称">
            <template slot-scope="scope">
              <span>{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="包含设备">
            <template slot-scope="scope">
              <span>{{ scope.row.children }}</span>
            </template>
          </el-table-column>
          <el-table-column label="描述">
            <template slot-scope="scope">
              <span>{{ scope.row.desc }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="editUserGroup = true">编辑
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="deleteUserGroup"
                disabled>删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-dialog title="新增设备归类" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="归类名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off" :style="{width:inputWidth}"></el-input>
        </el-form-item>
        <el-form-item label="归类信息描述" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off" :style="{width:inputWidth}"></el-input>
        </el-form-item>
        <el-form-item label="包含设备" :label-width="formLabelWidth">
          <el-transfer
            filter-placeholder="请输入城市拼音"
            v-model="value2"
            :filter-method="filterMethod"
            :titles="['美信云', '智造云']"
            :data="data2"
            filterable>
          </el-transfer>
        </el-form-item>
      </el-form>
      <div class="dialog-footer" slot="footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="修改设备归类" :visible.sync="editUserGroup">
      <el-form :model="form">
        <el-form-item label="归类名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off" :style="{width:inputWidth}"></el-input>
        </el-form-item>
        <el-form-item label="归类信息描述" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off" :style="{width:inputWidth}"></el-input>
        </el-form-item>
        <el-form-item label="包含设备" :label-width="formLabelWidth">
          <el-transfer
            filter-placeholder="请输入城市拼音"
            v-model="value2"
            :filter-method="filterMethod"
            :titles="['全部设备', '机床类']"
            :data="data2"
            filterable>
          </el-transfer>
        </el-form-item>
      </el-form>
      <div class="dialog-footer" slot="footer">
        <el-button @click="editUserGroup = false">取 消</el-button>
        <el-button type="primary" @click="editUserGroup = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      const generateData2 = _ => {
        const data = []
        const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都']
        const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu']
        cities.forEach((city, index) => {
          data.push({
            label: city,
            key: index,
            pinyin: pinyin[index]
          })
        })
        return data
      }
      return {
        userGroup: '',
        tableData: [{
          name: '机床类',
          children: '车床、钻床',
          desc: '这个设备....'
        }, {
          name: '机床类',
          children: '车床、钻床',
          desc: '这个设备....'
        }, {
          name: '机床类',
          children: '车床、钻床',
          desc: '这个设备....'
        }, {
          name: '机床类',
          children: '车床、钻床',
          desc: '这个设备....'
        }],
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
        data2: generateData2(),
        value2: [],
        editUserGroup: false,
        filterMethod (query, item) {
          return item.pinyin.indexOf(query) > -1
        },
        inputWidth: '400px'
      }
    },
    methods: {
      handleEdit (index, row) {
        console.log(index, row)
      },
      handleDelete (index, row) {
        console.log(index, row)
      },
      deleteUserGroup () {
        this.$confirm('此操作将永久删除该用户组, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    }
  }
</script>

<style>
.device-group-list {
  width: 100%;
  margin-top: 20px;
  table-layout: fixed;
}
</style>
