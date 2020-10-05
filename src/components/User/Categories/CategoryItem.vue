<template>
  <div class="gs-category-item">
    <div class="d-flex justify-content-between">
      <div>
        <h4>{{ category.name }}</h4>
        <span
          >TOTAL SCORE - {{ category.score
          }}<span class="text-primary">/400</span></span
        >
      </div>
      <router-link
        :to="{
          name: 'app-categories-category',
          params: {
            category: category.name
              .split(' ')
              .join('-')
              .toLowerCase()
          }
        }"
        class="gs-category-action"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13.137"
          height="14.779"
          viewBox="0 0 13.137 14.779"
        >
          <path
            id="triangle"
            d="M3,17.137H17.779L10.39,4Z"
            transform="translate(17.137 -3) rotate(90)"
            fill="#4d00d2"
          />
        </svg>
      </router-link>
    </div>
    <div>
      <p>Percentage completed</p>
      <el-progress :percentage="category.percentage"></el-progress>
    </div>
    <div class="gs-illustration">
      <img
        :src="
          `../categories/${category.name
            .split(' ')
            .join('-')
            .toLowerCase()}.svg`
        "
        alt
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryItem',
  props: {
    category: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.gs-category-item {
  position: relative;
  height: 200px;
  width: 100%;
  background: #ffffff;
  border-radius: 10px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.inverse {
    background: #4d00d2;
    color: #fff;

    .gs-category-action {
      background: #ffffff30;

      svg path {
        fill: #fff;
      }
    }
  }

  > div {
    width: 100%;
  }

  .gs-category-action {
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

  .gs-illustration {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 100px;
    width: auto;
    opacity: 0.08;

    img {
      height: 100%;
      width: auto;
    }
  }
}

@media (max-width: 1280px) {
  .gs-category-item {
    margin-bottom: 30px;
  }
}
</style>
