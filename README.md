# basics-form

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



通用表单生成
目前写完了el-input相关逻辑
通过配置js对象形式生成对应表单
{
  title: '登录页',
  formItems: [
    [{ label: '用户名', value: 'defaultUser', key: 'username', type: 'input' }],
    [{ label: '密码', key: 'password', type: 'input' }]
  ]
}
