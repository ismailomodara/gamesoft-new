<template>
  <el-row type="flex" :gutter="30" class="flex-wrap">
    <el-col :lg="6">
      <el-card>
        <div class="gs-stage">
          <span>MUSIC > STAGE > 1</span>
        </div>
        <div class="gs-stage-score">
          <h2>0/<span class="text-primary">400</span></h2>
        </div>
        <div class="gs-stage-questions">
          <h6>QUESTIONS</h6>
          <div class="d-flex flex-wrap">
            <span v-for="i in 30" :key="i">{{ i }}</span>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :lg="16">
      <el-card>
        <div class="d-flex justify-content-end mb-4">
          <h3 class="text-primary"><i class="gs-icon--clock"></i> 06:30</h3>
        </div>
        <question-item></question-item>
        <div class="d-flex justify-content-end">
          <el-button type="primary" plain>Next</el-button>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import QuestionItem from '~/components/Questions/QuestionItem'

export default {
  name: 'StageShow',
  layout: 'app',
  components: {
    QuestionItem
  },
  data() {
    return {
      stage: this.$route.params.stage
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.gs-stage {
  font-size: 12px;
  font-weight: 600;
  color: #4d00d2;
  text-align: center;
}

.gs-stage-score {
  text-align: center;
  margin-bottom: 40px;
}

.gs-stage-questions {
  h6 {
    margin-bottom: 15px;
    text-align: center;
  }

  span {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    background: #eee;
    color: #333;
    font-size: 12px;
    border-radius: 100px;
    margin-bottom: 10px;
    margin-right: 10px;
  }
}
</style>
