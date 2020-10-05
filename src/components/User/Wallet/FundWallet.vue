<template>
  <el-dialog title="Fund wallet" :visible.sync="shouldShow" width="30%">
    <div>
      <p>How much would you like to add to your wallet?</p>
      <el-form :model="form">
        <el-form-item
          v-custom-input="form.amount"
          v-only-number
          class="gs-form-item--auth"
          label="Amount"
          prop="amount"
        >
          <el-input
            v-model="form.amount"
            type="text"
            auto-complete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="d-flex justify-content-end">
        <paystack
          :amount="amount"
          :email="email"
          :paystackkey="paystackkey"
          :reference="reference"
          :callback="callback"
          :close="close"
          :embed="false"
        >
          <el-button type="primary" size="medium"
            >Add NGN {{ form.amount }}</el-button
          >
        </paystack>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'FundWallet',
  props: {
    show: Boolean
  },
  layout: 'app',
  data() {
    return {
      paystackkey: '',
      email: this.$store.state.auth.user.email,
      form: {
        amount: ''
      }
    }
  },
  computed: {
    shouldShow: {
      get() {
        return this.show
      },
      set(value) {
        this.$emit('update:show', value)
      }
    },
    amount() {
      return parseInt(this.form.amount) * 100
    },
    reference() {
      let text = ''
      const possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length))

      return text
    }
  },
  methods: {
    callback(response) {
      console.log(response)
    },
    close() {
      console.log('Payment closed')
    }
  }
}
</script>

<style scoped lang="scss">
.payButton {
  border: none;
  background: transparent;
  padding: 0;
}
</style>
