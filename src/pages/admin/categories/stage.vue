<template>
  <div>
    <div class="is-flex is-align-center mb-5">
      <div class="gs-layout--heading">
        <h3 class="mb-0">Categories / Music / Stage 1</h3>
      </div>
      <el-button type="primary" size="small" plain circle icon="gs-icon--edit"></el-button>
    </div>
    <el-card>
      <div class="is-flex is-justify-end mb-2">
        <el-dropdown trigger="click" @command="command">
          <el-button type="primary" size="medium">Add</el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="gs-icon--plus" command="single">Single</el-dropdown-item>
            <el-dropdown-item icon="gs-icon--upload" command="bulk">Bulk upload</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <el-table :data="data">
        <el-table-column label="" width="30">
          <template slot-scope="scope">
            <p>{{ scope.row.no }}</p>
          </template>
        </el-table-column>
        <el-table-column prop="question" label="Question" width="500">
          <template slot-scope="scope">
            <p>{{ scope.row.question }}</p>
          </template>
        </el-table-column>
        <el-table-column prop="type" label="Type">
          <template slot-scope="scope">
            <p>{{ formatToTitleCase(scope.row.type) }}</p>
          </template>
        </el-table-column>
        <el-table-column label="Actions">
          <template>
            <el-button size="mini">Edit</el-button>
            <el-button
                size="mini"
                type="danger"
            >Delete</el-button
            >
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
            type: 'text'
          },
          {
            id: 8972,
            no: 2,
            question: 'What is the right sequence',
            type: 'image',
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
