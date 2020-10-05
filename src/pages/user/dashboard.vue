<template>
  <div>
    <div class="gs-layout--section">
      <div class="gs-layout--heading">
        <h3>Categories</h3>
      </div>
      <el-row type="flex" :gutter="20" class="flex-wrap">
        <el-col
          v-for="category in categories"
          :key="category.id"
          :sm="12"
          :md="8"
          :lg="8"
        >
          <category-item :category="category"></category-item>
        </el-col>
      </el-row>
    </div>
    <div class="gs-layout--section">
      <div class="gs-layout--heading">
        <h3>Credit</h3>
      </div>
      <el-row type="flex" :gutter="20" class="flex-wrap">
        <el-col :sm="12" :md="8">
          <div class="gs-credit">
            <p>Referrals Bonus</p>
            <h3>&#8358;130.00</h3>
          </div>
        </el-col>
        <el-col :sm="12" :md="8">
          <div class="gs-credit">
            <p>Quiz Funds</p>
            <h3>&#8358;7,830.00</h3>
          </div>
        </el-col>
        <el-col :sm="12" :md="8">
          <div class="gs-credit">
            <p>Referrals Bonus</p>
            <h3>&#8358;680.00</h3>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="gs-layout--section">
      <el-row type="flex" :gutter="20" class="flex-wrap">
        <el-col :sm="24" :md="16" :lg="16">
          <div class="gs-layout--heading">
            <h3>Recent Transactions</h3>
          </div>
          <recent-transactions />
        </el-col>
        <el-col :sm="24" :md="8" :lg="8">
          <div class="gs-layout--heading">
            <h3>Messages</h3>
          </div>
          <el-card>
            <div class="gs-messages">
              <div class="gs-empty-message">
                <img src="@/assets/img/new-message.svg" alt />
              </div>
              <p>You have 2 new messages</p>
              <el-button
                size="mini"
                type="primary"
                @click="showMessenger = true"
                >Show me</el-button
              >
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <messenger :show.sync="showMessenger" />
  </div>
</template>

<script>
import CategoryItem from '../../components/User/Categories/CategoryItem'
import Messenger from '../../components/User/Messenger'

export default {
  name: 'Dashboard',
  layout: 'app',
  components: {
    CategoryItem,
    Messenger
  },
  data() {
    return {
      categories: [
        {
          id: 1,
          name: 'Music',
          score: 240,
          percentage: 62
        },
        {
          id: 2,
          name: 'Sports',
          score: 302,
          percentage: 75
        },
        {
          id: 3,
          name: 'IQ Basic',
          score: 150,
          percentage: 50
        }
      ],
      showMessenger: false
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.gs-credit {
  background: #fff;
  height: 120px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 0;
    opacity: 0.74;
  }
}

a {
  font-size: 12px;
  font-weight: 500;
  margin-right: 15px;
}

.gs-messages {
  position: relative;
  height: 320px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;

  .gs-empty-message {
    height: 120px;
    width: auto;
    margin-bottom: 20px;

    img {
      height: 100%;
      width: auto;
    }
  }

  p {
    font-weight: 500;
    font-size: 0.9rem;
  }
}

@media (max-width: 1280px) {
  .gs-credit {
    margin-bottom: 25px;
  }
}
</style>
