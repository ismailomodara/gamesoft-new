<template>
  <component :is="layout">
    <router-view :layout.sync="layout" />
  </component>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'default') + '-layout'
    }
  },
  beforeRouteEnter(to, from, next) {
    if (localStorage.getItem("gamesoft-admin-token") || localStorage.getItem("gamesoft-user-token")) {
      next();
    } else {
      next({ name: 'home'});
    }
  }
};
</script>

<style scoped lang="scss"></style>
