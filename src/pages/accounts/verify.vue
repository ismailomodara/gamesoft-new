<template>
  <div class="gs-auth">
    <div class="gs-auth-container">
      <div v-loading="sendingMail" class="gs-auth-container-content">
        <router-link :to="{ name: 'accounts-login' }">
          <img class="gs-auth-logo" :src="logo" alt />
        </router-link>
        <div class="text-center">
          <h4 class="gs-auth-heading">Verify your account</h4>
          <p>
            A verification link has been sent to <br />
            <strong>{{ email }}</strong>
          </p>
          <p class="small">
            Didn't get mail?
            <span
              class="text-primary"
              :style="{ cursor: 'pointer' }"
              @click="sendVerificationMail"
              >Resend</span
            >
          </p>
          <el-button
            type="primary"
            class="px-5"
            @click="$router.push({ name: 'accounts-login' })"
            >Login</el-button
          >
        </div>
      </div>
      <div class="gs-auth-container-image"></div>
    </div>
  </div>
</template>

<script>
import auth from '~/controllers/auth'

export default {
  name: 'Verify',
  data() {
    return {
      logo: '/logo.svg',
      email: this.$store.state.auth.newUserEmail,
      sendingMail: false
    }
  },
  created() {
    this.sendVerificationMail()
  },
  methods: {
    sendVerificationMail() {
      this.sendingMail = true
      auth
        .verify({ email: this.email })
        .then((response) => {
          const res = response.data
          if (!res.error) {
            this.$message.success('Verification mail sent.')
            this.sendingMail = false
          }
        })
        .catch((error) => {
          this.$message.error(error.response.data.response.errors.email)
          this.sendingMail = false
        })
    }
  }
}
</script>

<style scoped>
.gs-auth-container-content > div {
  width: 90% !important;
}
</style>
