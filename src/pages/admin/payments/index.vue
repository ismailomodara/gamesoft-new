<template>
  <div>
    <div class="is-flex is-align-center mb-5">
      <div class="gs-layout--heading">
        <h3 class="mb-0">All {{ tableDataValue.length }} payments</h3>
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
        <el-table-column label="" width="20"> </el-table-column>
        <el-table-column prop="name" label="Name"></el-table-column>
        <el-table-column prop="email" label="Email"></el-table-column>
        <el-table-column prop="amount" label="Amount" width="120">
          <template slot-scope="scope"> &#8358; {{ scope.row.amount }} </template>
        </el-table-column>
        <el-table-column prop="date" label="Date"></el-table-column>
        <el-table-column prop="status" label="Status" width="150">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.status" type="success">Approved</el-tag>
            <el-tag v-else type="danger">Unapproved</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'AdminPayments',
  layout: 'admin',
  data() {
    return {
      searchQuery: '',
      tableData: [
        {
          name: 'Tolu Fakiyesi',
          email: 'tolu@fakiyesi.com',
          amount: '1,500',
          status: 'approved',
          date: '21st December, 2019'
        },
        {
          name: 'Hamza Bashir',
          email: 'hamza@bashir.com',
          amount: '2,500',
          status: 'unapproved',
          date: '21st December, 2019'
        },
        {
          name: 'Moshood Alaran',
          email: 'moshood@alaran.com',
          amount: '3,500',
          status: 'unapproved',
          date: '21st December, 2019'
        },
        {
          name: 'Deji Ibrahim',
          email: 'deji@ibrahim.com',
          amount: '4,500',
          status: 'approved',
          date: '21st December, 2019'
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
          data.name.toLowerCase().includes(query.toLowerCase()) ||
          data.email.toLowerCase().includes(query.toLowerCase()) ||
          data.status.toLowerCase().includes(query.toLowerCase()) ||
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

.el-table {
  h6 {
    font-size: 16px;
    margin-bottom: 2px;

    + p {
      font-size: 14px;
    }
  }
}
</style>
