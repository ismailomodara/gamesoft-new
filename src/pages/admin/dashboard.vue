<template>
  <div>
    <div class="gs-app-section-spacing">
      <div class="gs-layout--heading">
        <h3>Overview</h3>
      </div>
      <el-row type="flex" :gutter="40" class="flex-wrap mb-3">
        <el-col class="mb-3" :sm="12" :md="8" :lg="8">
          <el-card>
            <div class="gs-leaderboard-specifics">
              <div>
                <p>Total Users</p>
                <router-link :to="{ name: 'admin.users' }"
                  >102</router-link
                >
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col class="mb-3" :sm="12" :md="8" :lg="8">
          <el-card>
            <div class="gs-leaderboard-specifics">
              <div>
                <p>Total Amount Received</p>
                <h6>{{ formatPrice(8200) }}</h6>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col class="mb-3" :sm="12" :md="8" :lg="8">
          <el-card>
            <div class="gs-leaderboard-specifics">
              <div>
                <p>Total Amount Sent</p>
                <h6>{{ formatPrice(4500) }}</h6>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row type="flex" :gutter="40" class="mb-3">
        <el-col :lg="12" class="mb-3">
          <div class="gs-layout--heading">
            <h3>Users</h3>
          </div>
          <el-card>
            <users-overview />
          </el-card>
        </el-col>
        <el-col :lg="12" class="mb-3">
          <div class="gs-layout--heading">
            <h3>Notifications</h3>
          </div>
          <el-card class="mb-4">
            <div class="gs-notification">
              <div>
                <p>You have 2 new messages</p>
                <el-button
                    size="mini"
                    type="primary"
                    plain
                    @click="$router.push({name: 'admin.messages'})"
                >Show me</el-button
                >
              </div>
              <div class="gs-notification--image">
                <img src="@/assets/img/new-message.svg" alt />
              </div>
            </div>
          </el-card>
          <el-card>
            <div class="gs-notification">
              <div>
                <p>5 new payment requests</p>
                <el-button
                    size="mini"
                    type="primary"
                    plain
                    @click="$router.push({name: 'admin.payments'})"
                >See all</el-button
                >
              </div>
              <div class="gs-notification--image">
                <img src="@/assets/img/payment.svg" alt />
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row type="flex" :gutter="40">
        <el-col :lg="24">
          <div class="gs-layout--heading">
            <h3>Leaderboard</h3>
          </div>
          <el-card>
            <leaderboard />
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Leaderboard from '../../components/Admin/Leaderboard'
import UsersOverview from "../../components/Admin/Users/UsersOverview";

export default {
  name: 'AdminDashboard',
  components: {
    Leaderboard,
    UsersOverview
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.gs-leaderboard-specifics {
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: #4d00d2;
    font-size: 0.875rem;
    margin-bottom: 5px;
    font-weight: 600;
  }

  h6,
  a {
    font-size: 1.5rem;
    color: #070013;
    font-weight: 600;
  }
}

.gs-notification {
  position: relative;
  height: 96px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;

  .gs-notification--image {
    height: 84px;
    width: auto;

    img {
      height: 100%;
      width: auto;
    }
  }

  p {
    font-weight: 500;
    font-size: 0.875rem;
    margin-bottom: 15px;
  }
}
</style>
