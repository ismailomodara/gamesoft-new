<template>
  <div>
    <template v-if="questions.length">
      <el-table :data="questions">
        <el-table-column label="" width="30">
          <template slot-scope="scope">
            <p>{{ scope.row.no }}</p>
          </template>
        </el-table-column>
        <el-table-column prop="question" label="Question" width="300">
          <template slot-scope="scope">
            <p>{{ scope.row.question }}</p>
          </template>
        </el-table-column>
        <el-table-column prop="type" label="Type">
          <template slot-scope="scope">
            <p>{{ formatToTitleCase(scope.row.type) }}</p>
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
      <div class="is-flex is-justify-center mt-3">
        <el-dropdown trigger="click" @command="command">
          <el-button type="primary" plain size="medium">Add Questions</el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="gs-icon--plus" command="single">Single</el-dropdown-item>
            <el-dropdown-item icon="gs-icon--upload" command="bulk">Bulk upload</el-dropdown-item>
            <el-dropdown-item icon="gs-icon--server" command="database">From database</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </template>
    <div v-else class="gs-empty">
      <el-dropdown trigger="click" @command="command">
        <div class="gs-add-stage">
          <span><i class="gs-icon--plus"></i></span>
          <p>Add Questions</p>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="gs-icon--plus" command="single">Single</el-dropdown-item>
          <el-dropdown-item icon="gs-icon--upload" command="bulk">Bulk upload</el-dropdown-item>
          <el-dropdown-item icon="gs-icon--upload" command="database">From database</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <question-add :show.sync="showQuestionAdd" />
    <questions-add-bulk :show.sync="showQuestionsAddBulk" />
    <questions-add-database :show.sync="showQuestionsAddDatabase" />
  </div>
</template>

<script>
  import QuestionAdd from "../../../components/Admin/Categories/Stage/Question/QuestionAdd";
  import QuestionsAddBulk from "../Categories/Stage/Question/QuestionsAddBulk";
  import QuestionsAddDatabase from "../Categories/Stage/Question/QuestionsAddDatabase";

  export default {
    name: 'ContestCategoryStage',
    props: {
      questions: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      QuestionsAddDatabase,
      QuestionsAddBulk,
      QuestionAdd
    },
    data() {
      return {
        showQuestionAdd: false,
        showQuestionsAddBulk: false,
        showQuestionsAddDatabase: false,
      }
    },
    methods: {
      command(command) {
        if(command === 'single') {
          this.showQuestionAdd = true
        } else if (command === 'bulk') {
          this.showQuestionsAddBulk = true
        } else {
          this.showQuestionsAddDatabase = true
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .gs-empty {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .gs-add-stage {
    display: flex;
    align-items: center;

    span {
      background: #4d00d2;
      height: 32px;
      width: 32px;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin-right: 7px;
    }

    i {
      color: #fff;
      font-size: 0.75rem;
    }
  }
</style>
