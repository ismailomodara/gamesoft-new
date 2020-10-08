<template>
  <div>
    <div class="gs-layout--heading mb-4">
      <h3>CONTESTS / CONTEST A</h3>
    </div>
    <el-row type="flex" class="flex-wrap mb-1" :gutter="30">
      <el-col :lg="8">
        <el-card>
          <div class="gs-contest--overview__desc">
            <div class="gs-contest--overview__image">
              <img :src="getImage('contest.svg')" alt />
            </div>
            <h5>Contest A</h5>
            <el-tag :type="status('pending')">Pending</el-tag>
          </div>
          <div class="gs-contest--overview">
            <div>
              <h6>Duration</h6>
              <p>3 days</p>
            </div>
            <div>
              <h6>Start Date</h6>
              <p>10th October, 2020</p>
            </div>
            <div>
              <h6>End Date</h6>
              <p>14th October, 2020</p>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :lg="16">
        <el-row type="flex" :gutter="20">
          <el-col :lg="8" class="mb-3"
          ><el-card
          ><p>Players</p>
            <h3>22</h3></el-card
          ></el-col
          >
          <el-col :lg="8" class="mb-3"
          ><el-card
          ><p>Total Payments</p>
            <h3>{{ formatPrice(5200) }}</h3></el-card
          ></el-col
          >
          <el-col :lg="8" class="mb-3"
          ><el-card
          ><p>Total Winnings</p>
            <h3>{{ formatPrice(1700)}}</h3>
          </el-card>
          </el-col
          >
        </el-row>
        <el-card class="gs-contest--players">
          <contest-players />
        </el-card>
      </el-col>
    </el-row>
    <el-row type="flex" class="flex-wrap">
      <el-col :span="24">
        <div class="gs-layout--heading">
          <h3>Categories</h3>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <contest-categories />
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ContestPlayers from "../../../components/Admin/Contests/ContestPlayers";
  import ContestCategories from "../../../components/Admin/Contests/ContestCategories";
  export default {
    name: 'AdminContest',
    components: {
      ContestPlayers,
      ContestCategories
    },
    data() {
      return {
        showSendMessage: false,
        userId: parseInt(this.$route.params.id),
        activeCategory: 'music'
      }
    },
    computed: {},
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .gs-contest--players {
    height: 230px;
    margin-bottom: 30px;
    overflow-y: scroll;
  }

  .gs-contest--overview__desc {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    .gs-contest--overview__image {
      margin: 20px 0 10px;

      img {
        height: 100px;
      }
    }

    h5 {
      font-size: 1.2rem;
      margin-bottom: 3px;
      font-weight: 600;
      letter-spacing: 0;
      text-transform: uppercase;
    }

    p {
      margin-bottom: 20px;
      font-size: 0.9rem;
    }
  }

  .gs-contest--overview {

    > div:not(:last-child) {
      margin-bottom: 20px;
    }

    p {
      font-size: 14px;
      margin-bottom: 3px;
      opacity: 0.75;
    }

    h3 {
      font-size: 1.8rem;
      font-weight: 500;
    }
  }
</style>
