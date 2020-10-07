<template>
  <div>
    <div class="gs-layout--heading">
      <h3>All {{ allUsersFiltered.length }} users</h3>
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
      <el-table :data="allUsersFiltered" style="width: 100%">
        <el-table-column label="Status" width="80">
          <template slot-scope="scope">
            <div
              v-if="scope.row.status === 'online'"
              class="gs-status-circle online"
            ></div>
            <div v-else class="gs-status-circle offline"></div>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="Name">
          <template slot-scope="scope">
            <router-link
              :to="{ name: 'admin.users-user', params: { id: scope.row.id } }"
              >{{ scope.row.name }}</router-link
            >
          </template>
        </el-table-column>
        <el-table-column prop="email" label="Email" width="200"> </el-table-column>
        <el-table-column prop="wallet_balance" label="Wallet Balance">
        </el-table-column>
        <el-table-column prop="last_seen" label="Last Seen"> </el-table-column>
        <el-table-column label="" width="200">
          <template slot-scope="scope">
            <div class="d-flex align-items-center justify-content-between">
              <el-switch
                v-model="scope.row.account_status"
                active-value="active"
                inactive-value="suspended"
                class="mr-2"
              ></el-switch>
              <el-button size="small" plain @click="sendMessage(scope.row.id)"
                >Message</el-button
              >
            </div>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Users',
  data() {
    return {
      showSendMessage: false,
      searchQuery: '',
      allUsers: [
        {
          id: 1,
          status: 'online',
          name: 'Moshood Alaran',
          email: 'moshood@alaran.com',
          wallet_balance: 1000,
          last_seen: 'Now',
          account_status: 'active'
        },
        {
          id: 2,
          status: 'online',
          name: 'Bashir Hamza',
          email: 'bashir@hamza.com',
          wallet_balance: 1000,
          last_seen: 'Now',
          account_status: 'active'
        },
        {
          id: 3,
          status: 'offline',
          name: 'Tolu Fakiyesi',
          email: 'tolu@fakiyesi.com',
          wallet_balance: 1000,
          last_seen: '2 days ago',
          account_status: 'suspended'
        },
        {
          id: 4,
          status: 'offline',
          name: 'Deji Ibrahim',
          email: 'deji@ibrahim.com',
          wallet_balance: 1000,
          last_seen: '1 week ago',
          account_status: 'suspended'
        }
      ],
      userId: null
    }
  },
  computed: {
    allUsersFiltered() {
      return this.filterWithQuery()
    }
  },
  methods: {
    filterWithQuery(query = this.searchQuery) {
      return this.allUsers.filter(
        (user) =>
          !query ||
          user.status.toLowerCase().includes(query.toLowerCase()) ||
          user.name.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query) ||
          user.wallet_balance.toString().includes(query)
      )
    },
    filterBy(command) {
      this.filterWithQuery(command)
    },
    sendMessage(id) {
      this.userId = id
      this.showSendMessage = true
    }
  }
}
</script>

<style lang="scss" scoped>
.gs-status-circle {
  display: block;
  height: 16px;
  width: 16px;
  border-radius: 100px;
  background: radial-gradient(circle at 100px 100px, #5cabff, #000);

  &.online {
    background: #33de85;
  }

  &.offline {
    background: #f56c6c;
  }
}
</style>
