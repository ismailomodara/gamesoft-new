<template>
  <div class="gs-auth">
    <div class="gs-auth-container">
      <div class="gs-auth-container-content">
        <router-link :to="{ name: 'home' }">
          <img class="gs-auth-logo" :src="logo" alt />
        </router-link>
        <div>
          <h4 class="gs-auth-heading">Welcome Admin</h4>
          <el-alert
              v-if="loginError"
              :title="errorMessage"
              type="error"
          >
          </el-alert>
          <el-form
              ref="loginForm"
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
            <el-form-item
                v-custom-input="form.password"
                class="gs-form-item--auth"
                label="Password"
                prop="password"
            >
              <el-input
                  v-model="form.password"
                  :type="passwordFieldType"
                  auto-complete="off"
                  @keyup.native.enter="login"
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
            <el-form-item class="d-flex justify-content-center">
              <el-button
                  :loading="loggingIn"
                  type="primary"
                  class="px-5"
                  @click="login"
              >Login</el-button
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
  import * as actions from '../../store/action-types'

  export default {
    name: 'AdminLogin',
    data() {
      return {
        logo: '/logo.svg',
        loggingIn: false,
        loginError: false,
        errorMessage: '',
        passwordFieldType: 'password',
        form: {
          email: 'admin@gmail.com',
          password: 'password'
        },
        rememberMe: '',
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
          ],
          password: [
            {
              required: true,
              message: "Password field can't be blank.",
              trigger: 'change'
            }
          ]
        }
      }
    },
    watch: {
      form: {
        deep: true,
        handler() {
          this.loginError = false
        }
      }
    },
    methods: {
      showPassword() {
        this.passwordFieldType =
            this.passwordFieldType === 'password' ? 'text' : 'password'
      },
      login() {
        this.loggingIn = true
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            this.$store
                .dispatch(actions.ADMIN_LOGIN, this.form)
                .then((response) => {
                  if (!response.data.error) {
                    this.$message.success(response.data.message)
                    this.$router.push({ name: 'admin.leaderboard' })
                  }
                  this.loggingIn = false
                })
                .catch((error) => {
                  this.errorMessage = ''
                  this.loginError = true
                  this.loggingIn = false
                  const errors = error.response && error.response.data.response.errors
                  if (errors) {
                    const errorKeys = Object.keys(errors)
                    this.errorMessage = errors[errorKeys[0]];
                  } else {
                    this.errorMessage = 'Yo'
                  }
                })
          } else {
            this.loggingIn = false
            return false
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .gs-auth-actions .el-form-item__content {
    line-height: 0;

    label {
      margin-bottom: 0;
    }

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  }

  @media (max-width: 600px) {
    .gs-auth {
      height: 100vh;
    }
  }
</style>
