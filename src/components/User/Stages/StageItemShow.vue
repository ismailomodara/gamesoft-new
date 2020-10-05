<template>
  <div class="gs-stage-item-show">
    <div class="d-flex justify-content-between align-items-center">
      <div class="gs-stage-title">
        <h4>STAGE 1</h4>
        <h6>QUESTIONS ATTEMPTED: <span>0/24</span></h6>
      </div>
      <div class="gs-pill no-hover">
        In Progress
      </div>
    </div>
    <div class="d-flex justify-content-center my-4">
      <h1>0<span class="text-primary">/400</span></h1>
    </div>
    <div>
      <h6>DESCRIPTION</h6>
      <p>
        Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium
        suscipit tellus sit amet aliquet. Vestibulum maximus lacinia massa non
        porttitor. Pellentesque vehicula est a lorem gravida bibendum. Proin
        tristique diam ut urna pharetra, ac rhoncus elit elementum. Proin vitae
        purus ultrices, dignissim turpis ut, mattis eros. Maecenas ornare
        molestie urna, hendrerit venenatis sem.
      </p>
    </div>
    <div class="d-flex justify-content-between">
      <div>
        <h6>TOTAL EARNINGS</h6>
        <h5>$5.52</h5>
      </div>
      <div>
        <h6>TIME LEFT:</h6>
        <h5 class="text-right">06:24</h5>
      </div>
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <router-link
        :to="{ name: 'app-categories-category-stage', params: { stage: '2' } }"
      >
        <el-button type="primary">Continue</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StageItemShow',
  props: {
    content: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.gs-stage-item-show {
  > div {
    margin-bottom: 30px;
  }

  h6 {
    font-weight: 600;
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
    line-height: 1.8;
    text-align: justify;
  }
}
</style>
