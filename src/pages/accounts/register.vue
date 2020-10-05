<template>
  <div class="gs-auth">
    <div class="gs-auth-container">
      <div class="gs-auth-container-content">
        <router-link :to="{ name: 'home' }">
          <img class="gs-auth-logo" :src="logo" alt />
        </router-link>
        <el-dialog></el-dialog>
        <div>
          <h4 class="gs-auth-heading">Create your account</h4>
          <el-form
            ref="registerForm"
            :model="form"
            :rules="rules"
            label-width="200px"
            label-position="top"
            class="gs-form"
          >
            <el-row :gutter="20" type="flex" class="flex-wrap">
              <el-col :xs="24" :sm="12">
                <el-form-item
                  v-custom-input="form.firstName"
                  class="gs-form-item--auth"
                  label="Firstname"
                  prop="firstName"
                >
                  <el-input
                    v-model="form.firstName"
                    type="text"
                    auto-complete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12">
                <el-form-item
                  v-custom-input="form.lastName"
                  class="gs-form-item--auth"
                  label="Lastname"
                  prop="lastName"
                >
                  <el-input
                    v-model="form.lastName"
                    type="text"
                    auto-complete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20" type="flex" class="flex-wrap">
              <el-col :xs="24" :sm="12">
                <el-form-item
                  v-custom-input="form.userName"
                  class="gs-form-item--auth"
                  label="Username"
                  prop="userName"
                >
                  <el-input
                    v-model="form.userName"
                    type="text"
                    auto-complete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12">
                <el-form-item
                  v-custom-input="form.email"
                  class="gs-form-item--auth"
                  label="Email"
                  prop="email"
                >
                  <el-input
                    v-model="form.email"
                    type="email"
                    auto-complete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20" type="flex" class="flex-wrap">
              <el-col :xs="24" :sm="12">
                <el-form-item
                  v-custom-input="form.phoneNumber"
                  v-only-number
                  class="gs-form-item--auth"
                  label="Phone Number"
                  prop="phoneNumber"
                >
                  <el-input
                    v-model="form.phoneNumber"
                    type="text"
                    auto-complete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12">
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
                    @keyup.native.enter="register"
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
              </el-col>
            </el-row>
            <el-form-item class="d-flex justify-content-center">
              <el-button
                :loading="registering"
                type="primary"
                class="px-5"
                @click="register"
                >Register</el-button
              >
            </el-form-item>
            <p class="text-center">
              Got an account?
              <strong
                ><router-link :to="{ name: 'accounts-login' }" class="dark-text"
                  >Earn now</router-link
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
  name: 'Login',
  data() {
    return {
      logo: '/logo.svg',
      registering: false,
      passwordFieldType: 'password',
      form: {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        phoneNumber: '',
        password: ''
      },
      rememberMe: '',
      rules: {
        firstName: [
          {
            required: true,
            message: 'Field is required',
            trigger: 'change'
          }
        ],
        lastName: [
          {
            required: true,
            message: 'Field is required',
            trigger: 'change'
          }
        ],
        userName: [
          {
            required: true,
            message: 'Choose a username',
            trigger: 'change'
          }
        ],
        email: [
          {
            required: true,
            message: "Email field can't be blank",
            trigger: 'change'
          },
          {
            type: 'email',
            message: "Email isn't valid",
            trigger: ['blur']
          }
        ],
        phoneNumber: [
          {
            required: true,
            message: 'Your phone number please',
            trigger: 'change'
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
  methods: {
    showPassword() {
      this.passwordFieldType =
        this.passwordFieldType === 'password' ? 'text' : 'password'
    },
    register() {
      this.registering = true
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
          auth
            .register(this.form)
            .then((response) => {
              const res = response.data
              if (!res.error) {
                this.$store.commit('auth/NEW_USER_EMAIL', this.form.email)
                this.$message.success('Account successfully created.')
                this.$router.push({ name: 'accounts-verify' })
              }
              this.registering = false
            })
            .catch((error) => {
              this.$message.error(error.response.data.message)
              this.registering = false
            })
        } else {
          this.registering = false
          return false
        }
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
