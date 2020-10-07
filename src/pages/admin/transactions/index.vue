<template>
  <div>
    <div class="is-flex is-align-center mb-5">
      <div class="gs-layout--heading">
        <h3 class="mb-0">All {{ tableDataValue.length }} transactions</h3>
      </div>
    </div>
    <el-card>
      <el-form class="gs-filters">
        <el-form-item class="gs-form-item--auth" label="" prop="search">
          <el-input
              v-model="searchQuery"
              type="text"
              suffix-icon="gs-icon--search"
              placeholder="Search category"
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
        <el-table-column prop="transactionId" label="Transaction Id" width="180">
        </el-table-column>
        <el-table-column prop="name" label="Name">
          <template slot-scope="scope">
            <div class="gs-stack">
              <h6>{{ scope.row.name }}</h6>
              <p>{{ scope.row.email }}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="amount" label="Amount" width="120">
          <template slot-scope="scope"> &#8358; {{ scope.row.amount }} </template>
        </el-table-column>
        <el-table-column prop="description" label="Description">
        </el-table-column>
        <el-table-column prop="date" label="Date" width="170"></el-table-column>
      </el-table>    </el-card>
  </div>
</template>

<script>
export default {
  name: 'AdminTransactions',
  layout: 'admin',
  data() {
    return {
      searchQuery: '',
      tableData: [
        {
          type: 'credit',
          transactionId: 'GST-SDLF29323',
          name: 'Tolu Fakiyesi',
          email: 'tolu@fakiyesi.com',
          amount: '1,500',
          description: 'Made a deposit',
          date: '21st December, 2018'
        },
        {
          type: 'credit',
          transactionId: 'GST-SDLF29323',
          name: 'Hamza Bashir',
          email: 'hamza@bashir.com',
          amount: '2,500',
          description: 'Made a deposit',
          date: '21st December, 2018'
        },
        {
          type: 'debit',
          transactionId: 'GST-SDLF29323',
          name: 'Moshood Alaran',
          email: 'moshood@alaran.com',
          amount: '3,500',
          description: 'Made a withdrawal',
          date: '21st December, 2018'
        },
        {
          type: 'credit',
          transactionId: 'GST-SDLF29323',
          name: 'Deji Ibrahim',
          email: 'deji@ibrahim.com',
          amount: '4,500',
          description: 'Made a deposit',
          date: '21st December, 2018'
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
          data.type.toLowerCase().includes(query.toLowerCase()) ||
          data.transactionId.toLowerCase().includes(query.toLowerCase()) ||
          data.name.toLowerCase().includes(query.toLowerCase()) ||
          data.email.toLowerCase().includes(query.toLowerCase()) ||
          data.description.toLowerCase().includes(query.toLowerCase()) ||
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

a {
  font-weight: 600;
  font-size: 12px;
}

.gs-stack {
  h6 {
    font-size: 16px;
    margin-bottom: 5px;
    color: #070013;

    + p {
      font-size: 13px;
    }
  }
}
</style>
