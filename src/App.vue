<template>
  <div id="app">
    <FromCreator :conf="LoginConf" @submit="onSubmit" ref="login" />
    <button @click="showLoginData">登录</button>
    <hr />
    <FromCreator :conf="Regesiter" @submit="onSubmit" ref="regesiter" />
    <button @click="showRegesiterData">注册</button>
  </div>
</template>

<script>
import FromCreator from './components/FromCreator.vue'
import LoginConf from './config/login.js'
import Regesiter from './config/register.js'
export default {
  name: 'App',
  methods: {
    onSubmit (data) {
      console.log(data)
    },
    showLoginData () {
      const res = this.$refs.login.getFormData()
      console.log('登录数据', res)
    },
    showRegesiterData () {
      const res = this.$refs.regesiter.getFormData()
      console.log('注册数据', res)
    }
  },
  data () {
    return {
      LoginConf,
      Regesiter
    }
  },
  components: {
    FromCreator
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
