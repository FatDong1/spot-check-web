# 文档系统后台管理

> 美信云文档系统的后台管理前端项目

## 构建

``` bash
# 安装依赖
npm install

# 开启热加载服务器: localhost:8080
npm run dev

# 生产环境打包
npm run build

# 生产环境打包并生成bundle分析报告
npm run build --report

# 执行单元测试
npm run unit

# 执行端到端测试
npm run e2e

# 执行所有测试
npm test
```

## 编码规范

在保持美信云前端编码规范的标准之上, 新增:

- 当一个组件中属性个数大于3的时候, 换行并缩进2个空格

```js
// bad
<input :class="class" :style="style" :type="type" @click="onClick">按钮</input>

// good
<input
  :class="class"
  :style="style"
  :type="type"
  @click="onClick">按钮</input>
```

- 组件属性排序: 非v-bind, v-bind, v-on, 统一用指令缩写, 例如v-bind为:, v-on为@

```js
// bad
<button
  class="class"
  :type="type"
  style="style"
  @click="onClick">按钮</button>

// good
<button
  class="class"
  style="style"
  :type="type"
  @click="onClick">按钮</button>
```

- tempalte, script, style模板标签之间空一行

```js
<template>
</template>

<script>
</script>

<style>
</style>
```

- 提交的代码中不允许有console, 否则会报warn

```js
// bad
console.log(list)
```

待续...

## Git规范

- 避免使用`git add .`, 需要有目的性进行commit.

- commit的描述需要清楚说明此次提交做了什么, 描述词统一用中文(除了专业术语, 专有词, 文件名以外).

```bash
// example
git add package.json .gitingore

git commit -m "更新package和gitingore文件."
```

- 禁止有连续的测试提交记录push到远程仓库, 如有必要, 请进行[合并commit](https://mssn.midea.com/ask/?/article/146)操作.
