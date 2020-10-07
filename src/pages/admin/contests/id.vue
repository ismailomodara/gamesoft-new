<template>
  <div>
    <el-row type="flex" :gutter="20" class="mb-3">
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
    <el-row type="flex" class="flex-wrap" :gutter="30">
      <el-col :lg="8">
        <el-card>
          <div class="gs-contest--overview__desc">
            <div class="gs-contest--overview__image">
              <img :src="getImage('contest.svg')" alt />
            </div>
            <h5>{{ $route.params.id }}</h5>
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
        <el-row type="flex">
          <el-col :lg="24"
          ><div class="gs-layout--heading">
            <h3>PLAYERS</h3>
          </div>
            <el-card>
            <contest />
          </el-card>
          </el-col
          >
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Contest from "../../../components/Admin/Contest";
  export default {
    name: 'AdminContest',
    components: {Contest},
    data() {
      return {
        showSendMessage: false,
        userId: parseInt(this.$route.params.id)
      }
    },
    computed: {},
    methods: {}
  }
</script>

<style lang="scss" scoped>
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
      font-size: 1.8rem;
      margin-bottom: 3px;
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
