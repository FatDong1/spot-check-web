<template>
  <el-form class="user-form" ref="form" :model="form" label-width="80px">
    <el-form-item label="用户名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="用户密码">
      <el-input v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item label="负责点检">
      <el-select v-model="form.region" placeholder="请选择点检种类">
        <el-option label="日常点检" value="shanghai"></el-option>
        <el-option label="专业点检" value="beijing"></el-option>
        <el-option label="精密点检" value="xxxxxxx"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="负责设备">
      <el-select v-model="form.region" placeholder="请选择设备种类">
        <el-option label="电气类" value="shanghai"></el-option>
        <el-option label="机床类" value="beijing"></el-option>
        <el-option label="仪器类" value="xxxxxxx"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit () {
        console.log('submit!')
      }
    }
  }
</script>

<style>
.user-form {
  width: 50%;
}
</style>
