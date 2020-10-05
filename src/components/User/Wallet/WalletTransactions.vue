<template>
  <div class="gs-activities">
    <el-form class="gs-filters">
      <el-form-item class="gs-form-item--auth" label="" prop="search">
        <el-input
          v-model="searchQuery"
          type="text"
          suffix-icon="gs-icon--search"
          placeholder="Search transaction by property"
        ></el-input>
      </el-form-item>
    </el-form>
    <el-table :data="tableDataValue" style="width: 100%">
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
      <el-table-column label="" width="100">
        <template slot-scope="scope">
          <p v-if="scope.row.type === 'credit'" class="gs-transaction-desc">
            Credit
          </p>
          <p v-else class="gs-transaction-desc">Debit</p>
        </template>
      </el-table-column>
      <el-table-column prop="transactionId" label="Transaction Id" width="180">
      </el-table-column>
      <el-table-column prop="amount" label="Amount" width="120">
        <template slot-scope="scope">
          &#8358; {{ scope.row.amount }}.00
        </template>
      </el-table-column>
      <el-table-column prop="description" label="Description" width="220">
      </el-table-column>
      <el-table-column prop="date" label="Date" width="200"></el-table-column>
      <el-table-column prop="time" label="Time" width="120"></el-table-column>
      <el-table-column>
        <el-button size="mini" plain type="primary" icon="el-icon-download"
          >Receipt</el-button
        >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'WalletTransactions',
  props: {
    recentActivities: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      searchQuery: '',
      tableData: [
        {
          type: 'debit',
          transactionId: 'GST-DB03042020',
          amount: '1,500',
          description: 'Made a withdrawal',
          date: 'Sat, 21st December, 2018',
          time: '02:36 pm'
        },
        {
          type: 'credit',
          transactionId: 'GST-CR03042020',
          amount: '2,000',
          description: 'Winnings addition',
          date: 'Sat, 21st December, 2018',
          time: '12:17 pm'
        },
        {
          type: 'credit',
          transactionId: 'GST-CR03042020',
          amount: '500',
          description: 'Make a deposit',
          date: 'Sat, 21st December, 2018',
          time: '04:00 pm'
        },
        {
          type: 'debit',
          transactionId: 'GST-DB03042020',
          amount: '800',
          description: 'Made a withdrawal',
          date: 'Sat, 21st November, 2018',
          time: '04:00 pm'
        },
        {
          type: 'debit',
          transactionId: 'GST-DB03042020',
          amount: '1,500',
          description: 'Made a deposit',
          date: 'Sat, 21st December, 2018',
          time: '04:00 pm'
        },
        {
          type: 'credit',
          transactionId: 'GST-CR03042020',
          amount: '2,000',
          description: 'Winnings addition',
          date: 'Sat, 21st December, 2018',
          time: '04:00 pm'
        },
        {
          type: 'credit',
          transactionId: 'GST-CR03042020',
          amount: '500',
          description: 'Make a deposit',
          date: 'Sat, 21st December, 2018',
          time: '04:00 pm'
        },
        {
          type: 'debit',
          transactionId: 'GST-DB03042020',
          amount: '800',
          description: 'Made a withdrawal',
          date: 'Sat, 21st December, 2018',
          time: '04:00 pm'
        },
        {
          type: 'debit',
          transactionId: 'GST-DB03042020',
          amount: '1,500',
          description: 'Made a deposit',
          date: 'Sat, 21st December, 2018',
          time: '04:00 pm'
        }
      ]
    }
  },
  computed: {
    tableDataValue() {
      return this.filterWithQuery()
    }
  },
  methods: {
    filterWithQuery(query = this.searchQuery) {
      return this.tableData.filter(
        (data) =>
          !query ||
          data.type.includes(query) ||
          data.transactionId.toLowerCase().includes(query.toLowerCase()) ||
          data.description.toLowerCase().includes(query.toLowerCase()) ||
          data.date.toLowerCase().includes(query.toLowerCase()) ||
          data.amount.includes(query)
      )
    },
    filterBy(command) {
      this.filterWithQuery(command)
    }
  }
}
</script>

<style lang="scss" scoped>
.gs-activities {
  padding: 20px;
  border-radius: 10px;
  background: #fff;

  .gs-activity-type {
    height: 30px;
    width: 30px;
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

  .gs-transaction-desc {
    font-size: 0.875rem;
    text-transform: uppercase;
  }

  a {
    font-weight: 600;
    font-size: 12px;
  }

  .el-dropdown-link {
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
