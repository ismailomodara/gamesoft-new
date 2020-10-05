<template>
  <div
    class="gs-avatar"
    :style="{
      height: size ? `${size}px` : '50px',
      width: size ? `${size}px` : '50px'
    }"
  >
    <img v-if="src" :src="src" :alt="name || ''" />
    <span v-else :style="{ fontSize: `${size / 48}rem` }">GS</span>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    size: {
      type: Number,
      default() {
        return 50
      }
    },
    src: {
      type: String,
      default: ''
    }
  },

  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.gs-avatar {
  border-radius: 1000px;
  background: #4d00d215;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 0.875rem;
    font-weight: 600;
    color: #4d00d2;
  }

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 100%;
  }
}
</style>
