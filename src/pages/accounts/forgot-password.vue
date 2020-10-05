<template>
  <div class="gs-auth">
    <div class="gs-auth-container">
      <div class="gs-auth-container-content">
        <router-link :to="{ name: 'home' }">
          <img class="gs-auth-logo" :src="logo" alt />
        </router-link>
        <div>
          <h4 class="gs-auth-heading">Recover your password</h4>
          <el-form
            ref="forgotPassword"
            :model="form"
            :rules="rules"
            label-width="200px"
            label-position="top"
            class="gs-form"
          >
            <el-form-item
              v-custom-input="form.email"
              class="gs-form-item--auth"
              label="Email"
              prop="email"
            >
              <el-input
                v-model="form.email"
                type="text"
                auto-complete="off"
              ></el-input>
            </el-form-item>
            <el-form-item class="d-flex justify-content-center">
              <el-button
                :loading="sending"
                type="primary"
                class="px-5"
                @click="sendLink"
                >Send Recovery Mail</el-button
              >
            </el-form-item>
            <p class="text-center">
              Back to
              <strong
                ><router-link :to="{ name: 'accounts-login' }" class="dark-text"
                  >Login</router-link
                ></strong
              >
            </p>
          </el-form>
        </div>
      </div>
      <div class="gs-auth-container-image"></div>
    </div>
  </div>
</template>

<script>
import auth from '~/controllers/auth'

export default {
  name: 'ForgotPassword',
  data() {
    return {
      logo: '/logo.svg',
      sending: false,
      passwordFieldType: 'password',
      form: {
        email: ''
      },
      rules: {
        email: [
          {
            required: true,
            message: 'Please enter email address',
            trigger: 'change'
          },
          {
            type: 'email',
            message: 'Invalid email',
            trigger: ['blur']
          }
        ]
      }
    }
  },
  methods: {
    sendLink() {
      this.$refs.forgotPassword.validate((valid) => {
        if (valid) {
          this.sending = true
          auth
            .recovery(this.form)
            .then((response) => {
              const res = response.data
              if (!res.error) {
                this.$message.success(
                  'Recovery link has been sent to your mail.'
                )
                this.$refs.forgotPassword.clearFields()
                this.sending = false
              }
            })
            .catch(() => {
              this.sending = false
              this.$message.error('An error occurred')
            })
        } else {
          return false
        }
      })
    }
  }
}
</script>
