<template>
  <div>
    <div class="is-flex is-align-center mb-5">
      <div class="gs-layout--heading">
        <h3 class="mb-0">Categories / Music / Stage 1</h3>
      </div>
    </div>
    <el-card>
<!--      <div class="is-flex is-justify-end mb-2">-->
<!--        <el-dropdown trigger="click" @command="command">-->
<!--          <el-button type="primary" size="medium">Add</el-button>-->
<!--          <el-dropdown-menu slot="dropdown">-->
<!--            <el-dropdown-item icon="gs-icon&#45;&#45;plus" command="single">Single</el-dropdown-item>-->
<!--            <el-dropdown-item icon="gs-icon&#45;&#45;upload" command="bulk">Bulk upload</el-dropdown-item>-->
<!--          </el-dropdown-menu>-->
<!--        </el-dropdown>-->
<!--      </div>-->
      <el-table :data="data">
        <el-table-column label="" width="30">
          <template slot-scope="scope">
            <p>{{ scope.row.no }}</p>
          </template>
        </el-table-column>
        <el-table-column prop="question" label="Question" width="400">
          <template slot-scope="scope">
            <p>{{ scope.row.question }}</p>
          </template>
        </el-table-column>
        <el-table-column prop="type" label="Type">
          <template slot-scope="scope">
            <p>{{ formatToTitleCase(scope.row.type) }}</p>
          </template>
        </el-table-column>
        <el-table-column prop="contest" label="Contest">
          <template slot-scope="scope">
            <p>{{ scope.row.contest }}</p>
          </template>
        </el-table-column>
        <el-table-column prop="created_on" label="Added on">
          <template slot-scope="scope">
            <p>{{ scope.row.created_on }}</p>
          </template>
        </el-table-column>
        <el-table-column label="Actions">
          <template>
            <el-button size="mini">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <question-add :show.sync="showQuestionAdd" />
  </div>
</template>

<script>
  import QuestionAdd from "../../../components/Admin/Categories/Stage/Question/QuestionAdd";

  export default {
    name: 'CategoryStage',
    components: {
      QuestionAdd
    },
    data() {
      return {
        showQuestionAdd: false,
        data: [
          {
            id: 8972,
            no: 1,
            question: 'What is an umbrella?',
            type: 'text',
            contest: 'Music',
            created_on: '5th Oct, 2020'
          },
          {
            id: 8972,
            no: 2,
            question: 'What is the right sequence',
            type: 'image',
            contest: 'Sports',
            created_on: '2nd Oct, 2020',
            image: 'user.svg'
          }
        ]
      }
    },
    methods: {
      command(command) {
        if(command === 'single') {
          this.showQuestionAdd = true
        }
      }
    }
  }
</script>

<style lang="scss" scoped></style>
