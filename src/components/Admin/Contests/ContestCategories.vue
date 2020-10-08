<template>
  <el-card>
    <el-row type="flex">
      <el-col :span="24">
        <el-tabs v-model="categorySetter">
          <el-tab-pane v-for="(category, i) in Object.keys(categories)" :key="i" :label="formatToTitleCase(category)" :name="category">
            <el-row type="flex" :gutter="20" class="mb-2">
              <el-col v-for="(stage, i) in Object.keys(categories[category])" :key="i" :lg="8">
                <div class="gs-category-stage" @click="setActiveStage(i)">
                  <div>
                    <h5>{{ formatToTitleCase(stage) }}</h5>
                    <p>{{ categories[category][stage].length }} Questions</p>
                  </div>
                  <div :class="['gs-category-stage-action', { active: activeStage === i}]">
                    <i v-if="activeStage === i" class="gs-icon--eye"></i>
                    <i v-else class="gs-icon--eye-off"></i>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <contest-category-stage :questions="questionsInStage" />
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
  import ContestCategoryStage from "./ContestCategoryStage";
  export default {
    name: 'ContestCategories',
    components: {ContestCategoryStage},
    data() {
      return {
        categories: {
          music: {
            stage1: [
              {
                id: 8972,
                no: 1,
                question: 'Sushi originated from...?',
                type: 'text',
                optionA: 'Japan',
                optionB: 'India',
                optionC: 'China',
                optionD: 'Italy'
              },
              {
                id: 8972,
                no: 2,
                question: 'What is the right sequence',
                type: 'image',
                optionA: 'B - C - D - A',
                optionB: 'C- A - B- D',
                optionC: 'A - D - C - B',
                optionD: 'D - C - A - B'
              }
            ],
            stage2: [],
            stage3: []
          },
          sports: {
            stage1: ['2', '3'],
            stage2: ['1', '2', '3', '4'],
            stage3: []
          },
          science: {
            stage1: [],
            stage2: [],
            stage3: []
          }
        },
        category: "",
        activeStage: 0
      }
    },
    computed: {
      categorySetter: {
        get() {
          return Object.keys(this.categories)[0]
        },
        set(value) {
          this.$emit("update:category", value)
        }
      },
      questionsInStage() {
        const category = this.categories[this.categorySetter];
        return category[Object.keys(category)[this.activeStage]]
      }
    },
    methods: {
      setActiveStage(i) {
        this.activeStage = i
      }
    }
  }
</script>

<style lang="scss" scoped>
  .gs-category-stage {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 25px;
    background: #4d00d215;
    border-radius: 10px;
    cursor: pointer;

    h5 {
      color: #4d00d2;
      font-weight: 500;
      font-size: 1rem;
    }

    p {
      font-weight: 500;
      margin-bottom: 0;
      font-size: 12px;
    }

    &:hover {
      .gs-category-stage-action:not(.active) {
        background: #4d00d2;
        transition: background 0.2s ease-in;

        i {
          color: #fff;
        }
      }
    }

    .gs-category-stage-action {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100px;
      height: 45px;
      width: 45px;
      background: #4d00d210;
      transition: background 0.2s ease-out;

      i {
        font-size: 1rem;
        color: #4d00d2;
      }

      &.active {
        background: #4d00d2;
        transition: background 0.2s ease;

        i {
          color: #fff;
          transition: color 0.2s ease;
        }
      }
    }
  }
</style>
