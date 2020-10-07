<template>
  <div class="gs-app-layout">
    <div class="gs-app-layout-sidebar">
      <div class="gs-user">
        <div class="d-flex">
          <div class="gs-user-avatar" @click="openSidenav">
            <img src="@/assets/img/mosh.jpeg" alt />
          </div>
          <div class="gs-user-details">
            <h6>{{ name }}</h6>
            <p>{{ user.email }}</p>
          </div>
        </div>
        <div class="gs-logout" @click="logout">
          <i class="gs-icon--power"></i>
        </div>
      </div>
      <div class="gs-user-balance">
        <p>Total Winnings</p>
        <h3>&#8358; 3,200.00</h3>
        <div class="gs-pill" @click="showWithdrawalDialog = true">Withdraw</div>
      </div>
      <el-menu
        :default-active="activeMenu"
        :router="true"
        class="gs-app-layout-menu"
      >
        <el-menu-item
          v-for="(route, index) in routes"
          :key="index"
          :route="{ name: `user.${route.index}` }"
          :index="route.index"
        >
          <i :class="`gs-icon--${route.icon}`"></i>
          <span>{{ route.label }}</span>
        </el-menu-item>
      </el-menu>
      <div class="gs-logout" @click="logout">
        <i class="gs-icon--power"></i>
      </div>
    </div>
    <div
      v-if="!sidebarOpen"
      class="gs-mobile-sidebar--toggle"
      @click="openSidenav"
    >
      <i class="gs-icon--menu"></i>
    </div>
    <transition name="overlay-fade" mode="out-in">
      <div v-if="sidebarOpen" class="overlay " @click="closeSidenav"></div>
    </transition>
    <div class="gs-app-layout-main">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <withdraw :show.sync="showWithdrawalDialog" />
  </div>
</template>

<script>
import Withdraw from '../components/User/Wallet/Withdraw'

export default {
  name: 'AppLayout',
  components: {
    Withdraw
  },
  data() {
    return {
      activeMenu: '',
      sidebarOpen: false,
      showWithdrawalDialog: false,
      routes: [
        {
          label: 'Dashboard',
          index: 'dashboard',
          icon: 'grid'
        },
        {
          label: 'Categories',
          index: 'categories',
          icon: 'server'
        },
        {
          label: 'Wallet',
          index: 'wallet',
          icon: 'credit-card'
        },
        {
          label: 'Referrals',
          index: 'referrals',
          icon: 'user-plus'
        },
        {
          label: 'Settings',
          index: 'settings',
          icon: 'settings'
        }
      ]
    }
  },
  computed: {
    user: {
      get() {
        return this.$store.getters.user
      },
      set(value) {
        this.$emit('update:user', value)
      }
    },
    name() {
      return `${this.user.firstname} ${this.user.lastname}` || 'Hello, User'
    }
  },
  watch: {
    $route(to) {
      if (to.name !== null) {
        const value = to.name.split('.')
        this.activeMenu = value[1]
      }
    }
  },
  mounted() {
    if (this.$route.name !== null) {
      const value = this.$route.name.split('.')
      this.activeMenu = value[1]
    }
  },
  methods: {
    openSidenav() {
      this.sidebarOpen = true
      document.querySelector('.gs-user-layout-sidebar').classList.add('open')
    },
    closeSidenav() {
      this.sidebarOpen = false
      document.querySelector('.gs-user-layout-sidebar').classList.remove('open')
    },
    logout() {
      this.$store
        .dispatch('auth/LOGOUT')
        .then(() => {
          this.$router.push({ name: 'accounts-login' })
          this.$message.success('You are logged out!')
        })
        .catch()
    }
  }
}
</script>

<style scoped lang="scss">
  $--sidenav: 280px;

  .gs-app-layout {
    display: flex;
    height: 100vh;
    width: 100%;
    overflow: hidden;

  .gs-app-layout-sidebar {
    width: $--sidenav;
    height: 100%;
    background: #ffffff;
    padding: 40px 30px;
    z-index: 99;

    .gs-user {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;

      > div:first-child {
        display: flex;
        align-items: center;
      }

      .gs-user-avatar {
        height: 50px;
        width: 50px;
        border-radius: 100%;
        margin-right: 10px;

        img {
          height: 100%;
          width: 100%;
          border-radius: 100%;
          object-fit: cover;
        }
      }
      p {
        font-size: 0.85rem;
        color: #070013;
        opacity: 0.7;
        margin-bottom: 0;
      }
    }

    .gs-user-balance {
      height: 170px;
      padding: 15px 0;
      background: #4d00d2;
      border-radius: 10px;
      margin-bottom: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      p {
        font-size: 0.9rem;
        font-weight: 400;
        margin-bottom: 10px;
        color: #fff;
      }

      h3 {
        font-weight: 600;
        margin-bottom: 10px;
        color: #fff;
      }
    }
    .el-menu {
      height: 100%;
      background: #ffffff;
      border-right: none;

      .el-menu-item {
        height: 55px;
        display: flex;
        align-items: center;
        font-size: 0.9rem;
        border-radius: 5px;
        opacity: 0.5;

        i {
          font-size: 0.95rem;
          margin-right: 12px;
        }

        &.is-active {
          font-weight: 600;
          opacity: 1;
          background: #4d00d215;
          color: #4d00d2;
          transition: all 0.2s ease-in;
        }
      }
    }
    .gs-logout {
      position: absolute;
      bottom: 20px;
      right: 20px;
      cursor: pointer;
      background: #07001315;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #070013;
      border-radius: 100%;
      transition: all 0.2s ease-out;

      &:hover {
        background: #070013;
        color: #fff;
        transition: all 0.2s ease-in;
      }
    }
  }

  .gs-mobile-sidebar--toggle {
    display: none;
    position: fixed;
    right: 25px;
    bottom: 25px;
    height: 45px;
    width: 45px;
    background: #fff;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    border-radius: 100px;
    z-index: 1;

    i {
      font-size: 1rem;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 3;
  }

  .overlay-fade-enter-active,
  .overlay-fade-leave-active {
    transition-duration: 0.4s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .overlay-fade-enter,
  .overlay-fade-leave-active {
    opacity: 0;
  }

  .gs-app-layout-main {
    position: relative;
    width: calc(100% - 330px);
    height: 100%;
    background: #f3eff9;
    padding-bottom: 80px;
    overflow-y: scroll;

    > div {
      max-width: 1200px;
      margin: auto;
      padding: 40px;
    }
  }
}

.gs-announcements {
  padding: 12px;

  h6 {
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-size: 0.875rem;
    margin-bottom: 10px;
    font-weight: 700;
    opacity: 0.8;
    color: #3b8070;
  }

  p {
    font-size: 0.875rem;
    font-family: 'Avenir', sans-serif;
    line-height: 1.8;
    opacity: 0.74;
    color: #070013;
  }
}

@media (max-width: 1280px) {
  .gs-app-layout {
    .gs-app-layout-sidebar {
      width: 80px;
      padding: 50px 10px 20px;
      transition: all 0.3s ease-out;

      .gs-user-details,
      .gs-user-balance,
      span {
        opacity: 0;
        display: none;
        transition-delay: 0.4s;
        transition: opacity 0.3s ease-out;
      }

      .el-menu-item {
        i {
          margin-right: 0 !important;
        }

        span {
          opacity: 0;
          display: none;
          transition-delay: 0.4s;
          transition: opacity 0.3s ease-out;
        }
      }

      &.open {
        width: 300px;
        padding: 40px 30px;
        transition: all 0.3s ease-out;

        .gs-user-details,
        .gs-user-balance,
        span {
          opacity: 1 !important;
          display: inline;
          transition-delay: 0.4s;
          transition: opacity 0.3s ease-in;
        }

        .gs-user-balance {
          display: flex !important;
        }

        .el-menu-item {
          i {
            margin-right: 10px !important;
          }

          span {
            opacity: 1;
            display: inline;
            transition-delay: 0.4s;
            transition: opacity 0.3s ease-in;
          }
        }
      }
    }

    .gs-app-layout-main {
      left: 80px;
      width: calc(100% - 80px);
    }
  }
}

@media (max-width: 600px) {
  .gs-app-layout {
    .gs-app-layout-sidebar {
      width: 300px;
      left: -300px;
      padding: 40px 30px;
      transition: left 0.3s ease-out;

      .gs-user-details,
      .gs-user-balance,
      span {
        opacity: 1 !important;
        display: inline;
        transition-delay: 0.4s;
        transition: opacity 0.3s ease-in;
      }

      .gs-user-balance {
        display: flex !important;
      }

      .el-menu-item {
        i {
          margin-right: 10px !important;
        }

        span {
          opacity: 1;
          display: inline;
          transition-delay: 0.4s;
          transition: opacity 0.3s ease-in;
        }
      }

      &.open {
        left: 0;
        transition: left 0.3s ease-out;
      }
    }

    .gs-mobile-sidebar--toggle {
      display: flex;
    }

    .gs-app-layout-main {
      left: 0;
      width: 100%;
    }
  }
}
</style>
