<template>
  <el-drawer :visible.sync="shouldShow">
    <div class="gs-messenger--content"></div>
  </el-drawer>
</template>

<script>
export default {
  name: 'Messenger',
  props: {
    show: Boolean
  },
  data() {
    return {}
  },
  computed: {
    shouldShow: {
      get() {
        return this.show
      },
      set(value) {
        this.$emit('update:show', value)
      }
    }
  }
}
</script>

<style lang="scss">
@media (max-width: 600px) {
  .el-drawer__open .el-drawer {
    width: 100% !important;
  }
}
</style>
