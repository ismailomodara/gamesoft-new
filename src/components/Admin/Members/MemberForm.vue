<template>
  <el-dialog
      :title="`${ action === 'add' ? 'Add new' : 'Edit' } member`"
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
              label="Name"
              prop="name"
          >
            <el-input
                v-model="form.name"
                type="text"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex">
        <el-col :lg="24">
          <el-form-item
              v-custom-input="form.email"
              class="gs-form-item--auth"
              label="Email"
              prop="email"
          >
            <el-input
                v-model="form.email"
                type="text"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" :gutter="20">
        <el-col :lg="14">
          <el-form-item
              v-custom-input="form.phone"
              class="gs-form-item--auth"
              label="Phone"
              prop="phone"
          >
            <el-input
                v-model="form.phone"
                type="text"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :lg="14">
          <el-form-item
              v-custom-input="form.role"
              class="gs-form-item--auth"
              label="Role"
              prop="role"
          >
            <el-select
                v-model="form.role"
                placeholder=""
            >
              <el-option label="Admin" value="admin"></el-option>
              <el-option label="Sub Admin" value="sub-admin"></el-option>
            </el-select>
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
    name: 'MemberForm',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      action: {
        type: String,
        default: 'add'
      },
      member: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        form: {
          name: '',
          email: '',
          phone: '',
          role: ''
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
