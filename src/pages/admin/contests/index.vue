<template>
  <div>
    <el-row type="flex" :gutter="40" class="flex-wrap mb-3">
      <el-col :span="24">
        <div class="gs-layout--heading">
          <h3>ONGOING</h3>
        </div>
      </el-col>
      <el-col class="mb-3" :sm="12" :md="12" :lg="12">
        <el-card>
          <div class="gs-contest">
            <div>
              <router-link :to="{ name: 'admin.contests-contest', params: { id: pending.id }}">
                <h3 class="gs-contest--title">{{ pending.id }}</h3>
              </router-link>
              <div class="gs-contest--period">
                <p>{{ pending.start }} - {{ pending.end }}</p>
              </div>
              <div class="gs-contest--categories">
                <p>{{ pending.categories.join(', ') }}</p>
              </div>
            </div>
            <div>
              <el-tag :type="status(pending.status)">{{ pending.status }}</el-tag>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col class="mb-3" :sm="12" :md="12" :lg="12">
        <el-card>
          <div class="gs-contest">
            <div>
              <h3 class="gs-contest--title">{{ ongoing.id }}</h3>
              <div class="gs-contest--period">
                <p>{{ ongoing.start }} - {{ ongoing.end }}</p>
              </div>
              <div class="gs-contest--categories">
                <p>{{ ongoing.categories.join(', ') }}</p>
              </div>
            </div>
            <div>
              <el-tag :type="status(ongoing.status)">{{ ongoing.status }}</el-tag>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row type="flex" :gutter="40">
      <el-col :lg="24">
        <div class="is-flex is-align-center mb-3">
          <div class="gs-layout--heading">
            <h3 class="mb-0">Contests</h3>
          </div>
          <el-button type="primary" size="mini" plain @click="showContestForm = true">Add new</el-button>
        </div>
        <el-card>
          <contests />
        </el-card>
      </el-col>
    </el-row>
    <contest-form :show.sync="showContestForm" />
  </div>
</template>

<script>
  import ContestForm from "../../../components/Admin/Contests/ContestForm";
  import Contests from "../../../components/Admin/Contests/Contests"

  export default {
    name: 'AdminContests',
    components: {
      Contests,
      ContestForm
    },
    data() {
      return {
        pending: {
          id: 2123,
          status: "Pending",
          duration: '4 days',
          start: "10th Oct, 2020",
          end: "14th, Oct, 2020",
          players: '-',
          categories: ['Sports', 'Science']
        },
        ongoing: {
          id: 1221,
          status: "Ongoing",
          duration: '4 days',
          start: "3rd Oct, 2020",
          end: '6th, Oct, 2020',
          players: '-',
          categories: ['Maths', 'Science']
        },
        showContestForm: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .gs-contest {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .gs-contest--title {
      font-size: 1.8rem;
      color: #070013;
      font-weight: 600;
      margin-bottom: 12px;
    }

    .gs-contest--period,
    .gs-contest--categories {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      i {
        margin-right: 7px;
        font-weight: 400 !important;
        color: #57b894;
      }
    }
  }
</style>
