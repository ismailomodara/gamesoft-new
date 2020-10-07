<template>
  <div>
    <el-table :data="data" style="width: 100%">
      <el-table-column width="40">
        <template slot-scope="scope">
          <p>{{ scope.row.id }}</p>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="Name">
        <template slot-scope="scope">
          <router-link :to="{ name: 'admin.users-user', params: {id: scope.row.id  }}">
            <p class="text-primary">{{ scope.row.name }}</p>
          </router-link>
        </template>
      </el-table-column>
      <el-table-column prop="email" label="Email" width="250">
        <template slot-scope="scope">
          <p>{{ scope.row.email }}</p>
        </template>
      </el-table-column>
      <el-table-column prop="winnings" label="Winnings">
        <template slot-scope="scope">{{ formatPrice(scope.row.winnings) }} </template>
      </el-table-column>
      <el-table-column prop="points" label="Points">
        <template slot-scope="scope">{{ scope.row.points }} </template>
      </el-table-column>
      <el-table-column prop="favoriteCategory" label="Categories">
        <template slot-scope="scope">
          <div class="is-flex is-align-center">
            <el-tag v-for="(category, i) in scope.row.categories" :key="i" type="info" class="mr-1">{{ category }}</el-tag>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="is-flex mt-2 ml-3">
      <router-link :to="{ name: 'admin.users'}">
        <el-button type="primary" size="medium" plain>See all</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Leaderboard',
  data() {
    return {
      data: [
        {
          id: 1,
          name: 'Ajala Badmus',
          email: 'ajala@gmail.com',
          winnings: 8270,
          points: 27,
          categories: ['Music', 'Sports']
        },
        {
          id: 2,
          name: 'Moshood Alaran',
          email: 'moshood@gmail.com',
          winnings: 2340,
          points: 56,
          categories: ['IQ', 'Sports']
        },
        {
          id: 3,
          name: 'Jola Opeyemi',
          email: 'jola@yahoomail.com',
          winnings: 8270,
          points: 10,
          categories: ['Maths', 'Sports']
        },
        {
          id: 4,
          name: 'Okanlawon Ajayi',
          email: 'ajay@gmail.com',
          winnings: 2340,
          points: 23,
          categories: ['Music', 'Sports']
        },
        {
          id: 5,
          name: 'Ajala Badmus',
          email: 'ajala@gmail.com',
          winnings: 8270,
          points: 110,
          categories: ['Music', 'Sports']
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
