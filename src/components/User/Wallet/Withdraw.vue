<template>
  <el-dialog title="Withdraw" :visible.sync="shouldShow" width="30%">
    <div>
      <p>How much would you like to withdraw?</p>
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
        <el-form-item class="gs-form-item--auth" label="" prop="bank">
          <el-select v-model="form.bank" placeholder="Select bank" filterable>
            <el-option
              v-for="(bank, index) in banks"
              :key="index"
              :label="bank"
              :value="bank.toLowerCase()"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          v-custom-input="form.amount"
          v-only-number
          class="gs-form-item--auth"
          label="Account number"
          prop="accountNumber"
        >
          <el-input
            v-model="form.accountNumber"
            type="text"
            auto-complete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="d-flex justify-content-end">
        <el-button type="primary" size="medium">Withdraw</el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'Withdraw',
  props: {
    show: Boolean
  },
  layout: 'app',
  data() {
    return {
      form: {
        amount: '',
        bank: '',
        accountNumber: null
      },
      banks: [
        'First Bank',
        'Guaranty Trust Bank',
        'FCMB',
        'UBA',
        'Zenith Bank',
        'Polaris',
        'Access Bank',
        'Union Bank'
      ]
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
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss"></style>
