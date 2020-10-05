<template>
  <el-table :data="users" :show-header="false">
    <el-table-column width="70">
      <template slot-scope="scope">
        <el-avatar :size="48" :src="scope.row.avatar">
          <img class="icon" src="../../assets/img/user.svg" alt="" />
        </el-avatar>
      </template>
    </el-table-column>
    <el-table-column prop="name" width="200">
      <template slot-scope="scope">
        <router-link :to="{ name: 'admin.users-user', params: { id: scope.row.id }}">
          <p class="gs-user">{{ scope.row.name }}</p>
          <span class="gs-user--email">{{ scope.row.email }}</span>
        </router-link>
      </template>
    </el-table-column>
    <el-table-column prop="last_seen" align="right">
      <template  slot-scope="scope">
        <p class="gs-user--last-seen">{{ scope.row.last_seen }}</p>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: 'UsersOverview',
    data() {
      return {
        searchQuery: '',
        users: [
          {
            id: 1,
            avatar: "",
            name: "Ajanaku Williams",
            email: "ajak@gmail.com",
            status: "inactive",
            last_seen: "2 hours ago"
          },
          {
            id: 2,
            avatar: "",
            name: "Rauf Tola",
            email: "rauf@yahoo.com",
            status: "active",
            last_seen: "1 day ago"
          },
          {
            id: 3,
            avatar: "",
            name: "Moshood Alaran",
            email: "moshood@gmail.com",
            status: "inactive",
            last_seen: "1 week ago"
          },
          {
            id: 4,
            avatar: "",
            name: "Bashir Hamza",
            email: "bashirhamza@gmail.com",
            status: "active",
            last_seen: "2 weeks ago"
          }
        ]
      }
    },
    computed: {},
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .el-avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #C0C4CC70;

    .icon {
      height: 20px;
    }
  }

  .gs-user {
    color: #4d00d2;
    font-size: 0.875rem;
    font-weight: 500;
  }

  .gs-user--email {
    font-size: 0.75rem
  }

  .gs-user--last-seen {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
  }
</style>
