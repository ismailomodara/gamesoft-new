<template>
  <div>
    <div class="gs-layout--section">
      <div class="gs-layout--heading">
        <h3>All ({{ categories.length }}) Categories</h3>
      </div>
      <el-row type="flex" :gutter="20" class="flex-wrap">
        <el-col
          v-for="category in categories"
          :key="category.id"
          :sm="12"
          :md="8"
          :lg="8"
        >
          <category-item :category="category"></category-item>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import CategoryItem from '../../../components/User/Categories/CategoryItem'

export default {
  name: 'Dashboard',
  layout: 'app',
  components: {
    CategoryItem
  },
  data() {
    return {
      categories: [
        {
          id: 1,
          name: 'Music',
          score: 240,
          percentage: 62
        },
        {
          id: 2,
          name: 'Sports',
          score: 302,
          percentage: 75
        },
        {
          id: 3,
          name: 'IQ Basic',
          score: 150,
          percentage: 50
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.gs-credits {
  height: 100%;

  .gs-credit {
    background: #fff;
    height: 120px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }

    p {
      margin-bottom: 0;
    }
  }
}
</style>
