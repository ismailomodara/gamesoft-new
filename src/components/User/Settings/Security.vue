<template>
  <el-row>
    <el-col :sm="12" :md="8" :lg="8">
      <el-card>
        <el-form
          ref="updatePassword"
          :model="form"
          :rules="rules"
          label-width="200px"
          label-position="top"
          class="gs-form"
        >
          <div class="mb-4">
            <el-form-item
              v-custom-input="form.oldPassword"
              class="gs-form-item--auth"
              label="Current Password"
              prop="oldPassword"
            >
              <el-input
                v-model="form.oldPassword"
                :type="oldPasswordFieldType"
                auto-complete="off"
              >
                <i
                  slot="suffix"
                  :class="
                    oldPasswordFieldType === 'password'
                      ? 'gs-icon--eye'
                      : 'gs-icon--eye-off'
                  "
                  @click="showOldPassword"
                >
                </i>
              </el-input>
            </el-form-item>
            <el-form-item
              v-custom-input="form.newPassword"
              class="gs-form-item--auth"
              label="New Password"
              prop="newPassword"
            >
              <el-input
                v-model="form.newPassword"
                :type="newPasswordFieldType"
                auto-complete="off"
              >
                <i
                  slot="suffix"
                  :class="
                    newPasswordFieldType === 'password'
                      ? 'gs-icon--eye'
                      : 'gs-icon--eye-off'
                  "
                  @click="showNewPassword"
                >
                </i>
              </el-input>
            </el-form-item>
            <el-form-item
              v-custom-input="form.confirmNewPassword"
              class="gs-form-item--auth"
              label="Confirm New Password"
              prop="confirmNewPassword"
            >
              <el-input
                v-model="form.confirmNewPassword"
                :type="confirmNewPasswordFieldType"
                auto-complete="off"
              >
                <i
                  slot="suffix"
                  :class="
                    confirmNewPasswordFieldType === 'password'
                      ? 'gs-icon--eye'
                      : 'gs-icon--eye-off'
                  "
                  @click="showConfirmNewPassword"
                >
                </i>
              </el-input>
            </el-form-item>
          </div>
          <el-form-item class="d-flex justify-content-center">
            <el-button
              :loading="updating"
              type="primary"
              class="px-5"
              @click="updateMyPassword"
              >Update</el-button
            >
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import auth from '~/controllers/auth'

export default {
  name: 'Security',
  data() {
    const newPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter new password'))
      } else {
        if (this.form.confirmNewPassword !== '') {
          this.$refs.updatePassword.validateField('confirmNewPassword')
        }
        callback()
      }
    }
    const confirmNewPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please confirm your new password'))
      } else if (value !== this.form.newPassword) {
        callback(new Error("Passwords don't match"))
      } else {
        callback()
      }
    }
    return {
      updating: false,
      form: {
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: ''
      },
      rules: {
        oldPassword: [
          {
            required: true,
            message: "Password field can't be blank.",
            trigger: 'change'
          }
        ],
        newPassword: [{ validator: newPassword, trigger: 'blur' }],
        confirmNewPassword: [{ validator: confirmNewPassword, trigger: 'blur' }]
      },
      oldPasswordFieldType: 'password',
      newPasswordFieldType: 'password',
      confirmNewPasswordFieldType: 'password'
    }
  },
  methods: {
    showOldPassword() {
      this.oldPasswordFieldType =
        this.oldPasswordFieldType === 'password' ? 'text' : 'password'
    },
    showNewPassword() {
      this.newPasswordFieldType =
        this.newPasswordFieldType === 'password' ? 'text' : 'password'
    },
    showConfirmNewPassword() {
      this.confirmNewPasswordFieldType =
        this.confirmNewPasswordFieldType === 'password' ? 'text' : 'password'
    },
    updateMyPassword() {
      this.$refs.updatePassword.validate((valid) => {
        if (valid) {
          this.updating = true
          auth
            .updatePassword(this.form)
            .then((response) => {
              const res = response.data
              if (!res.error) {
                this.$message.success('Password reset successful')
                this.$refs.updatePassword.clearFields()
                this.updating = false
              }
            })
            .catch(() => {
              this.updating = false
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
