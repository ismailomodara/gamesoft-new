<template>
  <el-dialog
      title="Questions from Database"
      :visible.sync="shouldShow"
      width="70%"
      @close="closeEvent"
  >
    <div class="gs-questions--table">
      <el-table :data="questions">
        <el-table-column
            type="selection"
            width="55">
        </el-table-column>
        <el-table-column label="" width="30">
          <template slot-scope="scope">
            <p>{{ scope.$index + 1 }}</p>
          </template>
        </el-table-column>
        <el-table-column prop="question" label="Question" width="300">
          <template slot-scope="scope">
            <p>{{ scope.row.question }}</p>
          </template>
        </el-table-column>
        <el-table-column prop="optionA" label="A">
          <template slot-scope="scope">
            <p>{{ scope.row.optionA }}</p>
          </template>
        </el-table-column>
        <el-table-column prop="optionB" label="B">
          <template slot-scope="scope">
            <p>{{ scope.row.optionB }}</p>
          </template>
        </el-table-column>
        <el-table-column prop="optionC" label="C">
          <template slot-scope="scope">
            <p>{{ scope.row.optionC }}</p>
          </template>
        </el-table-column>
        <el-table-column prop="optionD" label="D">
          <template slot-scope="scope">
            <p>{{ scope.row.optionD }}</p>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <span slot="footer">
      <el-button type="primary" plain @click="closeEvent">Cancel</el-button>
      <el-button type="primary">Add</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    name: 'QuestionsAddDatabase',
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
        questions: [
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
          },
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
          },
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
        ]
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

<style lang="scss" scoped>
  .gs-questions--table {
    height: 500px;
    overflow-y: scroll;
  }
</style>
