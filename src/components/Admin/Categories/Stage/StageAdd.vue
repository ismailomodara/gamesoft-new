<template>
  <el-dialog
    title="Add New Stage"
    :visible.sync="shouldShow"
    width="45%"
    @close="closeEvent"
  >
    <el-form
      ref="stageForm"
      :model="stage"
      label-width="200px"
      label-position="top"
      class="gs-form"
    >
      <el-row :gutter="20" type="flex" class="flex-wrap mb-3">
        <el-col :lg="24">
          <el-form-item
            v-custom-input="stage.name"
            class="gs-form-item--auth"
            label="Name"
            prop="name"
          >
            <el-input
              v-model="stage.name"
              type="text"
              auto-complete="off"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="10">
          <el-form-item
            v-custom-input="stage.passmark"
            v-only-number
            class="gs-form-item--auth"
            label="Passmark (%)"
            prop="passmark"
          >
            <el-input
              v-model="stage.passmark"
              type="text"
              auto-complete="off"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="14">
          <el-form-item class="gs-form-item--auth" label="" prop="lastStage">
            <el-select
              v-model="stage.prevStageId"
              placeholder="Last Stage Added"
              :disabled="categoryStages.length === 0"
            >
              <el-option
                v-if="categoryStages.length === 0"
                label="No Previous Stage"
                :value="null"
              ></el-option>
              <el-option
                v-for="(eStage, index) in categoryStages"
                :key="index"
                :label="eStage.name"
                :value="eStage._id"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="is-flex is-justify-end mt-3">
        <el-button type="primary" plain @click="closeEvent">Cancel</el-button>
        <el-button :loading="addingStage" type="primary" @click="addStage"
          >Add Stage</el-button
        >
      </div>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  name: 'CategoryStageAdd',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    categoryId: {
      type: Number,
      default: null
    },
    categoryStages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      addingStage: false,
      stage: {
        name: '',
        duration: '',
        passmark: '',
        categoryId: this.categoryId,
        prevStageId: this.categoryStages.length === 0 ? null : ''
      },
      questionType: ''
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
