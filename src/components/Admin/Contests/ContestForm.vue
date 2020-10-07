<template>
  <el-dialog
      :title="`${ action === 'add' ? 'Add new' : 'Edit' } contest`"
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
              label="Contest name"
              prop="name"
          >
            <el-input
                v-model="form.name"
                type="text"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20" type="flex" class="flex-wrap ">
        <el-col :xs="24" :lg="12">
          <el-form-item
              v-custom-input="form.start_date"
              class="gs-form-item--auth"
              label="Contest starts"
              prop="title"
          >
            <el-date-picker
                v-model="form.start_date"
                :clearable="false"
                type="date"
                format="dd MMM, yyyy"
                value-format="yyyy-MM-dd"
            />
          </el-form-item>
        </el-col>
        <el-col :xs="24" :lg="12">
          <el-form-item
              v-custom-input="form.end_date"
              class="gs-form-item--auth"
              label="Contest ends"
              prop="title"
          >
            <el-date-picker v-model="form.end_date" type="date" format="dd MMM, yyyy"
                            value-format="yyyy-MM-dd" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20" type="flex" class="flex-wrap ">
        <el-col :xs="24" :lg="24">
          <el-form-item
              label="Categories"
              prop="categories"
          >
            <el-checkbox-group v-model="form.categories">
              <el-checkbox label="music" border>Music</el-checkbox>
              <el-checkbox label="science" border>Science</el-checkbox>
              <el-checkbox label="sports" border>Sports</el-checkbox>
              <el-checkbox label="maths" border>Maths</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="is-flex is-justify-end mt-2">
        <el-button type="primary" @click="closeEvent" plain>Cancel</el-button>
        <el-button v-if="action === 'add'" type="primary" @click="addContest">Add</el-button>
        <el-button v-else type="primary" @click="addContest">Update</el-button>
      </div>
    </el-form>
  </el-dialog>
</template>

<script>
  export default {
    name: 'ContestForm',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      action: {
        type: String,
        default: 'add'
      },
      contest: {
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
          start_date: '',
          end_date: '',
          categories: []
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
      show() {}
    },
    methods: {
      addContest() {
        //
      },
      closeEvent() {
        this.shouldShow = false
      }
    }
  }
</script>

<style lang="scss" scoped></style>
