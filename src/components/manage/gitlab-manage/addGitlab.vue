<template>
  <div class="project">
    <el-form
      class="project__form"
      :label-position="right"
      label-width="80px"
      :model="project">
      <el-form-item label="项目名称">
        <el-input v-model="project.name"></el-input>
      </el-form-item>
      <el-form-item label="项目地址">
        <el-input v-model="project.url"></el-input>
      </el-form-item>
      <el-form-item label="分支">
        <el-input v-model="project.branch"></el-input>
      </el-form-item>
      <el-form-item label="ssh key">
        <el-input v-model="project.ssh"></el-input>
      </el-form-item>
      <el-form-item label="项目描述" prop="desc">
        <el-input type="textarea" v-model="project.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <div class="httpDesc">
      <p>正发http请求....</p>
      <p>正在获取....</p>
      <p>已经获取....</p>
      <p>正在可隆项目....</p>
      <p>已经克隆项目....</p>
      <p>正在获取....</p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        project: {
          name: '',
          url: '',
          ssh: ''
        }
      }
    }
  }
</script>

<style>
.project__form {
  display: inline-block;
  width:45%;
}

.httpDesc {
  margin-left: 50px;
  display: inline-block;
  vertical-align: top;
}
</style>
