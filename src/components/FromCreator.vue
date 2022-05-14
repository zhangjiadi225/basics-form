<script>
export default {
  props: {
    conf: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      form: {}
    }
  },
  created () {
    this.conf.formItems.forEach(rows => {
      rows.forEach(item => {
        //   this.form[item.key] = item.value
        this.$set(this.form, item.key, item.value)
      })
    })
  },
  methods: {
    getFormData () {
      return this.form
    },
    //渲染行
    renderRows (rows) {
      return rows.map(row => {
        return <el-row>{this.renderColumns(row)}</el-row>
      })
    },
    //渲染列
    renderColumns (columns) {
      return columns.map(column => {
        return (
          <el-col span={column.colspan}>
            <el-form-item label={column.label}>
              {this.renderItem(column)}
            </el-form-item>
          </el-col>
        )
      })
    },
    renderInput (item) {
      return (
        <el-input
          attrs={item.attrs}
          value={this.form[item.key]}
          onInput={val => (this.form[item.key] = val)}
        ></el-input>
      )
    },
    //渲染核心组件
    renderItem (item) {
      switch (item.type) {
        case 'input':
          return this.renderInput(item)
      }
    }
  },
  //jsx渲染
  render () {
    const { title, formItems } = this.conf
    console.log(title, formItems)
    return (
      <div>
        <h1>{title}</h1>
        <el-form label-width='80px'>{this.renderRows(formItems)}</el-form>
      </div>
    )
  }
}
</script>

<style lang="less" scoped></style>
