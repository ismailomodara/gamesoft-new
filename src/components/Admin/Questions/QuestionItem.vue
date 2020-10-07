<template>
  <div class="mb-5">
    <div class="gs-question">
      <p>2. {{ question.question }}</p>
    </div>
    <div class="gs-options">
      <el-radio-group v-model="question.option">
        <el-radio
          v-for="(option, index) in question.options"
          :key="index"
          :label="option"
          >{{ option }}</el-radio
        >
      </el-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionItem',
  layout: 'app',
  components: {},
  data() {
    return {
      question: {
        question: 'What day is today?',
        option: '',
        options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday']
      }
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.gs-question p {
  margin-bottom: 30px;
}

.el-radio-group {
  display: flex;
  flex-direction: column;

  .el-radio {
    margin-bottom: 20px;
  }
}
</style>
