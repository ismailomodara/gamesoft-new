<template>
  <div class="gs-activities">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="type" width="60">
        <template slot-scope="scope">
            <span
                v-if="scope.row.type === 'credit'"
                class="gs-activity-type credit"
            ><i class="gs-icon--arrow-up"></i
            ></span>
          <span v-else class="gs-activity-type debit"
          ><i class="gs-icon--arrow-down"></i>
            </span>
        </template>
      </el-table-column>
      <el-table-column
          prop="transactionId"
          label="Transaction Id"
          width="160"
      >
      </el-table-column>
      <el-table-column prop="amount" label="Amount" width="120">
        <template slot-scope="scope">
          &#8358; {{ scope.row.amount }}
        </template>
      </el-table-column>
      <el-table-column prop="description" label="Description">
      </el-table-column>
      <el-table-column prop="date" label="Date"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'UserTransactions',
    data() {
      return {
        searchQuery: '',
        tableData: [
          {
            type: 'debit',
            transactionId: 'GST-DB03042020',
            amount: '1,500',
            description: 'Made a withdrawal',
            date: '21st December, 2018'
          },
          {
            type: 'credit',
            transactionId: 'GST-CR03042020',
            amount: '2,000',
            description: 'Winnings addition',
            date: '21st December, 2018'
          },
          {
            type: 'credit',
            transactionId: 'GST-CR03042020',
            amount: '500',
            description: 'Make a deposit',
            date: '21st December, 2018'
          },
          {
            type: 'debit',
            transactionId: 'GST-DB03042020',
            amount: '800',
            description: 'Made a withdrawal',
            date: '21st December, 2018'
          },
          {
            type: 'debit',
            transactionId: 'GST-DB03042020',
            amount: '800',
            description: 'Made a withdrawal',
            date: '21st December, 2018'
          }
        ]
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .gs-activities {
    border-radius: 10px;
    background: #fff;

    .gs-activity-type {
      height: 24px;
      width: 24px;
      border-radius: 100px;
      padding: 7px;
      display: flex;
      justify-content: center;
      align-items: center;

      i {
        font-size: 11px;
      }

      &.credit {
        background: #67c23a20;
        color: #67c23a;
      }

      &.debit {
        background: #f56c6c20;
        color: #f56c6c;
      }
    }

    a {
      font-weight: 600;
      font-size: 12px;
    }
  }
</style>
