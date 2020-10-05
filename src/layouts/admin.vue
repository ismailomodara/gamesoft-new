<template>
  <div class="gs-admin-layout">
    <div class="gs-admin-layout-sidebar">
      <div class="gs-user">
        <div>
          <div class="gs-user-avatar" @click="openSidenav">
            <img src="@/assets/img/mosh.jpeg" alt />
          </div>
          <div class="gs-user-details">
            <h6>{{ name }}</h6>
            <p>{{ admin.email }}</p>
          </div>
        </div>
        <div class="gs-logout" @click="logout">
          <i class="gs-icon--power"></i>
        </div>
      </div>
      <div class="gs-active-users">
        <p>Active Users</p>
        <h2>72</h2>
      </div>
      <el-menu
        :default-active="activeMenu"
        :router="true"
        class="gs-admin-layout-menu"
      >
        <el-menu-item
          v-for="(link, index) in links"
          :key="index"
          :route="{ name: `admin.${link.url}` }"
          :index="link.url"
          @click="closeSidenav"
        >
          <span class="icon"><i :class="`gs-icon--${link.icon}`"></i></span>
          <span>{{ link.label }}</span>
        </el-menu-item>
      </el-menu>
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
    <div class="gs-admin-layout-main">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import * as actions from '../store/action-types'

export default {
  name: 'AdminLayout',
  data() {
    return {
      activeMenu: '',
      sidebarOpen: false,
      links: [
        {
          label: 'Dashboard',
          url: 'dashboard',
          icon: 'list'
        },
        {
          label: 'Contests',
          url: 'contests',
          icon: 'award'
        },
        {
          label: 'Categories',
          url: 'categories',
          icon: 'server'
        },
        {
          label: 'Users',
          url: 'users',
          icon: 'users'
        },
        {
          label: 'Transactions',
          url: 'transactions',
          icon: 'clipboard'
        },
        {
          label: 'Payments',
          url: 'payments',
          icon: 'credit-card'
        },
        {
          label: 'Messages',
          url: 'messages',
          icon: 'email'
        },
        {
          label: 'Admins',
          url: 'admins',
          icon: 'user-plus'
        },
      ]
    }
  },
  computed: {
    admin: {
      get() {
        return this.$store.getters.admin
      },
      set(value) {
        this.$emit('update:admin', value)
      }
    },
    name() {
      return `${this.admin.firstname} ${this.admin.lastname}` || 'Administrator'
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
  beforeRouteEnter(to, from, next) {
    if (this.$store.getters.authenticated) {
      next()
    } else {
      next({ name: 'admin.login' })
    }
  },
  created() {
    setTimeout(() => {
      this.admin = this.$store.getters.admin
    }, 500)
  },
  methods: {
    openSidenav() {
      this.sidebarOpen = true
      document.querySelector('.gs-admin-layout-sidebar').classList.add('open')
    },
    closeSidenav() {
      this.sidebarOpen = false
      document
        .querySelector('.gs-admin-layout-sidebar')
        .classList.remove('open')
    },
    logout() {
      this.closeSidenav()
      this.$store
        .dispatch(actions.ADMIN_LOGOUT)
        .then(() => {
          this.$router.push({ name: 'admin-login' })
          this.$message.success('You are logged out!')
        })
        .catch()
    }
  }
}
</script>

<style scoped lang="scss">
  $--sidenav: 280px;
.gs-admin-layout {
  display: flex;
  height: 100vh;
  width: 100%;
  overflow: hidden;

  .gs-admin-layout-sidebar {
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

    .gs-active-users {
      height: 100px;
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
        font-weight: 500;
        margin-bottom: 10px;
        color: #fff;
        line-height: 1;
      }

      h2 {
        font-weight: 600;
        color: #fff;
        line-height: 1;
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

        span.icon {
          height: 36px;
          width: 36px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 10px;

          i {
            font-size: 1.1rem;
          }
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
    transition-duration: 0.2s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .overlay-fade-enter,
  .overlay-fade-leave-active {
    opacity: 0;
  }

  .gs-admin-layout-main {
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

@media (max-width: 1280px) {
  .gs-admin-layout {
    .gs-admin-layout-sidebar {
      width: 80px;
      padding: 50px 10px 20px;
      transition: all 0.3s ease-out;

      .gs-user-details,
      .gs-active-users,
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
        .gs-active-users,
        span {
          opacity: 1 !important;
          display: inline;
          transition-delay: 0.4s;
          transition: opacity 0.3s ease-in;
        }

        .gs-active-users {
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

    .gs-admin-layout-main {
      left: 80px;
      width: calc(100% - 80px);
    }
  }
}

@media (max-width: 600px) {
  .gs-admin-layout {
    .gs-admin-layout-sidebar {
      width: 300px;
      left: -300px;
      padding: 40px 30px;
      transition: left 0.3s ease-out;

      .gs-user-details,
      .gs-active-users,
      span {
        opacity: 1 !important;
        display: inline;
        transition-delay: 0.4s;
        transition: opacity 0.3s ease-in;
      }

      .gs-active-users {
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

    .gs-admin-layout-main {
      left: 0;
      width: 100%;
    }
  }
}
</style>
