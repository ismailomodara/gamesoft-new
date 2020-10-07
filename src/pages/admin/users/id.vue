<template>
  <div>
    <el-row type="flex" class="flex-wrap" :gutter="30">
      <el-col :lg="7">
        <el-card>
          <div class="gs-user-card">
            <div class="w-100 mb-4 d-flex justify-content-end">
              <el-switch
                v-model="status"
                inactive-value="suspended"
                active-value="active"
              ></el-switch>
            </div>
            <img src="@/assets/img/mosh.jpeg" alt />
            <h5>Moshood Alaran</h5>
            <p>moshood@alaran.com</p>
            <el-button
              type="primary"
              size="medium"
              @click="showSendMessage = true"
              >Message</el-button
            >
          </div>
          <div class="gs-user-app-overview">
            <div>
              <h6>Overall Points</h6>
              <p>4200</p>
            </div>
            <div>
              <h6>Win Rate</h6>
              <p>77%</p>
            </div>
            <div>
              <h6>Favorite Category</h6>
              <p>Sports</p>
            </div>
            <div>
              <h6>Most Played Category</h6>
              <p>Sports</p>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :lg="17">
        <el-row type="flex" class="gs-user-overview" :gutter="20">
          <el-col :lg="8"
            ><el-card
              ><p>Referral Bonus</p>
              <h3>N1,500</h3></el-card
            ></el-col
          >
          <el-col :lg="8"
            ><el-card
              ><p>Withdrawals</p>
              <h3>N5,200</h3></el-card
            ></el-col
          >
          <el-col :lg="8"
            ><el-card class="dark"
              ><p>Wallet Balance</p>
              <h3>N2,500</h3></el-card
            ></el-col
          >
        </el-row>
        <el-row class="mt-4">
          <el-col :span="24">
            <el-card>
              <user-transactions />
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import UserTransactions from "../../../components/Admin/Users/UserTransactions";
export default {
  name: 'User',
  components: {
    UserTransactions
  },
  data() {
    return {
      showSendMessage: false,
      userId: parseInt(this.$route.params.id),
      status: 'active'
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.gs-user-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  img {
    margin-bottom: 15px;
    height: 80px;
    width: 80px;
    border-radius: 100px;
    object-fit: contain;
  }

  h5 {
    font-size: 1rem;
    margin-bottom: 3px;
  }

  p {
    margin-bottom: 20px;
    font-size: 0.9rem;
  }
}

.gs-user-overview {
  p {
    font-size: 14px;
    margin-bottom: 3px;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 500;
  }
}

.gs-user-app-overview {
  > div:not(:last-child) {
    margin-bottom: 30px;

    h6 {
      font-weight: 600;
    }
    p {
      opacity: 0.6;
    }
  }
}
</style>
