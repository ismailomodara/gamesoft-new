<template>
  <div>
    <div class="gs-layout--section">
      <div class="gs-layout--heading">
        <h3>Wallet</h3>
      </div>
      <el-row type="flex" :gutter="20" class="flex-wrap">
        <el-col :sm="12" :md="8">
          <div class="gs-credit">
            <div>
              <p>Balance</p>
              <h3>&#8358;680.00</h3>
            </div>
            <el-button type="primary" size="mini" @click="showFundWallet = true"
              >Fund wallet</el-button
            >
          </div>
        </el-col>
        <el-col :sm="12" :md="8">
          <div class="gs-credit">
            <p>Total Winnings</p>
            <h3>&#8358;7,830.00</h3>
          </div>
        </el-col>
        <el-col :sm="12" :md="8">
          <div class="gs-credit">
            <p>Total Withdrawal</p>
            <h3>&#8358;130.00</h3>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="gs-layout--section">
      <div class="gs-layout--heading">
        <h3>Wallet Transactions</h3>
      </div>
      <el-row type="flex" class="flex-wrap">
        <el-col :lg="24">
          <wallet-transactions />
        </el-col>
      </el-row>
    </div>
    <fund-wallet :show.sync="showFundWallet" />
  </div>
</template>

<script>
import FundWallet from '../../components/User/Wallet/FundWallet'
import WalletTransactions from '../../components/User/Wallet/WalletTransactions'

export default {
  name: 'Wallet',
  layout: 'app',
  components: {
    FundWallet,
    WalletTransactions
  },
  data() {
    return {
      showFundWallet: false,
      paystackkey: '',
      email: this.$store.state.auth.user.email,
      amount: 0
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
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
</style>
