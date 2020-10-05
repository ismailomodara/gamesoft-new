<template>
  <div class="container">
    <div>
      <h1 class="title">
        Gamesoft
      </h1>
      <div class="links">
        <router-link :to="{ name: 'admin.login' }">
          <el-button type="primary">Admin</el-button>
        </router-link>
        <router-link :to="{ name: 'user.login' }">
          <el-button type="secondary">User</el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
  display: flex;
  justify-content: center;

  a:not(:last-child) {
    margin-right: 10px;
  }
}
</style>
