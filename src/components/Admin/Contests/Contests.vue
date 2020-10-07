<template>
  <div>
    <el-table :data="data" style="width: 100%">
      <el-table-column prop="status" label="Status" width="110">
        <template slot-scope="scope">
          <el-tag :type="status(scope.row.status)">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="Name" width="120">
        <template slot-scope="scope">
          <router-link :to="{ name: 'admin.contests-contest', params: { id: scope.row.id }}">
            <p>{{ scope.row.name }}</p>
          </router-link>
        </template>
      </el-table-column>
      <el-table-column prop="duration" label="Duration" width="90">
        <template slot-scope="scope">
          <p>{{ scope.row.duration }}</p>
        </template>
      </el-table-column>
      <el-table-column prop="period" label="Period" width="280">
        <template slot-scope="scope">
          <div class="is-flex is-align-center">
            <p>{{ scope.row.start }} - {{ scope.row.end }}</p>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="categories" label="Categories" width="160">
        <template slot-scope="scope">
          <p>{{ scope.row.categories.join(', ') }}</p>
        </template>
      </el-table-column>
      <el-table-column prop="payments" label="Payments" width="90">
        <template slot-scope="scope">
          <p v-if="scope.row.payments">{{ formatPrice(scope.row.payments) }}</p>
          <p v-else>-</p>
        </template>
      </el-table-column>
      <el-table-column prop="winnings" label="Winnings" width="90">
        <template slot-scope="scope">
          <p v-if="scope.row.winnings">{{ formatPrice(scope.row.winnings) }}</p>
          <p v-else>-</p>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'Contests',
    data() {
      return {
        data: [
          {
            id: 1221,
            status: "Pending",
            duration: '4 days',
            start: "10th Oct, 2020",
            end: "14th, Oct, 2020",
            name: 'Contest A',
            categories: ['Maths', 'Science'],
            payments: null,
            winnings: null
          },
          {
            id: 2123,
            status: "Ongoing",
            duration: '3 days',
            start: "5th Oct, 2020",
            end: "8th, Oct, 2020",
            name: 'Contest B',
            categories: ['Music', 'Sports'],
            payments: 12589,
            winnings: 6500
          },
          {
            id: 3934,
            status: "Completed",
            duration: '2 days',
            start: "20th Sep, 2020",
            end: "22nd, Sep, 2020",
            name: 'Contest C',
            categories: ['IQ', 'Sports'],
            payments: 12589,
            winnings: 6500
          },
          {
            id: 2034,
            status: "Completed",
            duration: '5 days',
            start: "20th Sep, 2020",
            end: "22nd, Sep, 2020",
            name: 'Contest D',
            categories: ['Music', 'Sports'],
            payments: 3500,
            winnings: 2000
          },
          {
            id: 5202,
            status: "Completed",
            duration: '5 days',
            start: "19th Sep, 2020",
            end: "20th, Sep, 2020",
            name: 'Contest E',
            categories: ['Science', 'Sports'],
            payments: 2900,
            winnings: 1200
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped></style>
