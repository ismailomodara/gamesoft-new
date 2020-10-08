<template>
  <el-dialog
      title="Add New Question"
      :visible.sync="shouldShow"
      width="45%"
      @close="closeEvent"
  >
    <el-form
        ref="stageForm"
        :model="form"
        label-width="200px"
        label-position="top"
        class="gs-form"
    >
      <el-row type="flex" class="flex-wrap mb-3">
        <el-col :lg="24">
          <el-form-item
              label="Question type"
              prop="type"
          >
            <el-radio-group v-model="form.type">
              <el-radio-button label="text">Text</el-radio-button>
              <el-radio-button label="image">Image</el-radio-button>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :lg="24">
          <el-form-item
              v-custom-input="form.question"
              class="gs-form-item--auth"
              label="Question"
              prop="question"
          >
            <el-input
                v-model="form.question"
                type="textarea"
                auto-complete="off"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :lg="24">
          <el-form-item
              v-custom-input="form.optionA"
              class="gs-form-item--auth"
              label="Option A"
              prop="optionA"
          >
            <el-input
                v-model="form.optionA"
                type="text"
                auto-complete="off"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :lg="24">
          <el-form-item
              v-custom-input="form.optionB"
              class="gs-form-item--auth"
              label="Option B"
              prop="optionB"
          >
            <el-input
                v-model="form.optionB"
                type="text"
                auto-complete="off"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :lg="24">
          <el-form-item
              v-custom-input="form.optionC"
              class="gs-form-item--auth"
              label="Option C"
              prop="optionC"
          >
            <el-input
                v-model="form.optionC"
                type="text"
                auto-complete="off"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :lg="24">
          <el-form-item
              v-custom-input="form.optionD"
              class="gs-form-item--auth"
              label="Option D"
              prop="optionD"
          >
            <el-input
                v-model="form.optionD"
                type="text"
                auto-complete="off"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="is-flex is-justify-end mt-3">
        <el-button type="primary" plain @click="closeEvent">Cancel</el-button>
        <el-button type="primary" @click="addStage"
        >Add Question</el-button
        >
      </div>
    </el-form>
  </el-dialog>
</template>

<script>
  export default {
    name: 'QuestionAdd',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      stageId: {
        type: Number,
        default: null
      }
    },
    data() {
      return {
        addingStage: false,
        form: {
          type: '',
          question: '',
          optionA: '',
          optionB: '',
          optionC: '',
          optionD: '',
          answer: ''
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
      }
    },
    methods: {
      closeEvent() {
        this.shouldShow = false
      },
      addStage() {
        //
      }
    }
  }
</script>
