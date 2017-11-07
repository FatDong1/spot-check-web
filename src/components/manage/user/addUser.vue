<template>
  <el-form class="user-form"  status-icon ref="userForm" :rules="rule" :model="userForm" label-width="80px">
    <el-form-item label="用户名称">
      <el-input v-model="userForm.name"></el-input>
    </el-form-item>
    <el-form-item label="登录账户">
      <el-input v-model="userForm.account"></el-input>
    </el-form-item>
    <el-form-item label="用户密码">
      <el-input type="password" v-model="userForm.password"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input type="password" v-model="userForm.checkPass"></el-input>
    </el-form-item>
    <el-form-item label="负责点检">
      <el-select v-model="userForm.checkType" placeholder="请选择点检种类">
        <el-option label="日常点检" value="日常点检"></el-option>
        <el-option label="专业点检" value="专业点检"></el-option>
        <el-option label="精密点检" value="精密点检"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="负责设备">
      <el-select v-model="userForm.deviceGroup" placeholder="请选择设备种类">
        <el-option label="电气类" value="电气类"></el-option>
        <el-option label="机床类" value="机床类"></el-option>
        <el-option label="仪器类" value="仪器类"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item class="user-form__btn">
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data () {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.userForm.checkPass !== '') {
            this.$refs.userForm.validateField('checkPass')
          }
          callback()
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.userForm.password) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        userForm: {
          name: '',
          account: '',
          password: '',
          checkPass: '',
          checkType: '',
          deviceGroup: ''
        },
        rule: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      onSubmit () {
        var that = this
        for (let key in this.userForm) {
          if (!this.userForm[key]) {
            this.$message.error('还有信息没有填写')
            return
          }
        }
        this.$http({
          url: '/api/user/add',
          method: 'POST',
          data: this.userForm
        }).then((data) => {
          that.$message({
            message: '创建用户成功',
            type: 'success'
          })
        }).catch((err) => {
          console.log(err)
          that.$message.error(err.msg)
        })
      }
    }
  }
</script>

<style>
.user-form {
  width: 300px;
  margin-top: 20px;
  margin-left: 20px;
}

.user-form__btn {
  margin-top: 40px;
}
</style>
