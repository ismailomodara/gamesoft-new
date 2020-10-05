<template>
  <div class="gs-auth">
    <div class="gs-auth-container">
      <div class="gs-auth-container-content">
        <router-link :to="{ name: 'home' }">
          <img class="gs-auth-logo" :src="logo" alt />
        </router-link>
        <div>
          <h4 class="gs-auth-heading">Reset your password</h4>
          <el-form
            ref="resetPassword"
            :model="form"
            :rules="rules"
            label-width="200px"
            label-position="top"
            class="gs-form"
          >
            <el-form-item
              v-custom-input="form.password"
              class="gs-form-item--auth"
              label="New password"
              prop="password"
            >
              <el-input
                v-model="form.password"
                :type="passwordFieldType"
                auto-complete="off"
              >
                <i
                  slot="suffix"
                  :class="
                    passwordFieldType === 'password'
                      ? 'gs-icon--eye'
                      : 'gs-icon--eye-off'
                  "
                  @click="showPassword"
                >
                </i>
              </el-input>
            </el-form-item>
            <el-form-item
              v-custom-input="form.confirm_password"
              class="gs-form-item--auth"
              label="Confirm new password"
              prop="confirm_password"
            >
              <el-input
                v-model="form.confirm_password"
                :type="confirmPasswordFieldType"
                auto-complete="off"
              >
                <i
                  slot="suffix"
                  :class="
                    confirmPasswordFieldType === 'password'
                      ? 'gs-icon--eye'
                      : 'gs-icon--eye-off'
                  "
                  @click="showConfirmPassword"
                >
                </i>
              </el-input>
            </el-form-item>
            <el-form-item class="d-flex justify-content-center">
              <el-button
                :loading="resetting"
                type="primary"
                class="px-5"
                @click="resetMyPassword"
                >Reset password</el-button
              >
            </el-form-item>
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
  name: 'ResetPassword',
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('You need to enter a password'))
      } else {
        if (this.form.confirm_password !== '') {
          this.$refs.resetPassword.validateField('confirm_password')
        }
        callback()
      }
    }
    const confirmPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'))
      } else if (value !== this.form.password) {
        callback(new Error('Passwords do not match, try again!'))
      } else {
        callback()
      }
    }
    return {
      logo: '/logo.svg',
      resetting: false,
      passwordFieldType: 'password',
      confirmPasswordFieldType: 'password',
      form: {
        token: '',
        password: '',
        confirm_password: ''
      },
      rules: {
        password: [{ validator: validatePassword, trigger: 'blur' }],
        confirm_password: [{ validator: confirmPassword, trigger: 'blur' }]
      }
    }
  },
  methods: {
    showPassword() {
      this.passwordFieldType =
        this.passwordFieldType === 'password' ? 'text' : 'password'
    },
    showConfirmPassword() {
      this.confirmPasswordFieldType =
        this.confirmPasswordFieldType === 'password' ? 'text' : 'password'
    },
    resetMyPassword() {
      this.$refs.resetPassword.validate((valid) => {
        if (valid) {
          this.resetting = true
          auth
            .reset(this.form)
            .then((response) => {
              const res = response.data
              if (!res.error) {
                this.$message.success('Password reset successful')
                this.resetting = false
                this.$router.push({ name: 'accounts-login' })
              }
            })
            .catch(() => {
              this.resetting = false
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
