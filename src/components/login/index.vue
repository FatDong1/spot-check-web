<template>
  <div class="login">
    <p class="login__title">脚力共享后台管理</p>
    <el-form ref="form" :model="form" label-width="50px">
      <el-form-item label="账号">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          class="sign-btn"
          :disabled="form.disabled"
          @click="signIn">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        password: '',
        disabled: false
      }
    }
  },
  methods: {
    signIn () {
      if (!this.form.name) {
        alert('账号不能为空!')
      } else if (!this.form.password) {
        alert('密码不能为空')
      }
      // this.form.disabled = true
      this.$storage.set('CODE', 123)
      this.$router.push({name: 'manage'})
    }
  }
}
</script>

<style>
.login {
  width: 300px;
  margin: 140px auto;
  text-align: center;
}

.login__title {
  font-size: 28px;
  color: #878D99;
  margin-bottom: 40px;
}

.sign-btn {
  width: 100%;
}
</style>
