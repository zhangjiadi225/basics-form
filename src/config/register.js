export default {
  title: '注册页',
  formItems: [
    [
      {
        label: '用户名',
        value: 'defaultUser',
        key: 'username',
        type: 'input',
        colspan: 16
      },
      {
        label: '年龄',
        key: 'age',
        type: 'input',
        colspan: 4,
        attrs: { placeholder: '请输入年龄' }
      },
      {
        label: '性别',
        key: 'gender',
        type: 'input',
        colspan: 4,
        attrs: { placeholder: '请输入性别' }
      }
    ]
  ]
}
