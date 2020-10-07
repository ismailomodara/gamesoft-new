<template>
  <el-dialog
      :title="`${ action === 'add' ? 'Add new' : 'Edit' } category`"
      :visible.sync="shouldShow"
      width="45%"
      @close="closeEvent"
  >
    <el-form
        :model="form"
        label-width="200px"
        label-position="top"
    >
      <el-row type="flex" class="flex-wrap">
        <el-col :lg="24">
          <el-form-item
              v-custom-input="form.name"
              class="gs-form-item--auth"
              label="Category name"
              prop="name"
          >
            <el-input
                v-model="form.name"
                type="text"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="is-flex is-justify-end mt-2">
        <el-button type="primary" @click="closeEvent" plain>Cancel</el-button>
        <el-button v-if="action === 'add'" type="primary" @click="addCategory">Add</el-button>
        <el-button v-else type="primary" @click="addCategory">Update</el-button>
      </div>
    </el-form>
  </el-dialog>
</template>

<script>
  export default {
    name: 'CategoryForm',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      action: {
        type: String,
        default: 'add'
      },
      categoryName: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        form: {
          name: ''
        }
      }
    },
    computed: {
      shouldShow: {
        get() {
          return this.show
        },
        set(value) {
          return this.$emit('update:show', value)
        }
      },
    },
    watch: {
      show() {
        if(this.action === 'edit') {
          this.form.name = this.categoryName
        }
      }
    },
    methods: {
      addCategory() {
        //
      },
      closeEvent() {
        this.shouldShow = false
      }
    }
  }
</script>

<style lang="scss" scoped></style>
