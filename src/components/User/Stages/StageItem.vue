<template>
  <div class="gs-stage-item">
    <div class="d-flex justify-content-between">
      <div>
        <h5>STAGE {{ stage.number }}</h5>
        <span
          >TOTAL SCORE - {{ stage.score
          }}<span class="text-primary">/{{ stage.total_score }}</span></span
        >
      </div>
      <div class="gs-pill primary" @click="selectedStage">
        <i class="gs-icon--chevron-right"></i>
      </div>
    </div>
    <div>
      <p>Percentage completed</p>
      <el-progress :percentage="percentage"></el-progress>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StageItem',
  props: {
    stage: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    percentage() {
      return (this.stage.attempted_questions / this.stage.total_questions) * 100
    }
  },
  methods: {
    selectedStage() {
      this.$emit('selected-stage', this.stage)
    }
  }
}
</script>

<style lang="scss" scoped>
.gs-stage-item {
  position: relative;
  height: 180px;
  width: 100%;
  background: #ffffff;
  border-radius: 10px;
  padding: 30px 20px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  .gs-pill {
    opacity: 0;
    transition: opacity 0.2s ease-out;

    i {
      font-size: 14px;
    }
  }

  &:hover {
    .gs-pill {
      opacity: 1;
      transition: opacity 0.2s ease-in;
    }
  }

  > div {
    width: 100%;
  }

  .gs-stage-action {
    height: 45px;
    width: 45px;
    border-radius: 100%;
    background: #4d00d230;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    font-size: 0.75rem;
    margin-right: 10px;

    span {
      font-weight: 600;
    }
  }

  h4 {
    font-weight: 600;
  }

  p {
    font-size: 0.85rem;
    margin-bottom: 2px;
    opacity: 0.5;
  }
}
</style>
