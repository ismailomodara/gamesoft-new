<template>
  <el-row type="flex" :gutter="30">
    <el-col :lg="7">
      <el-card>
        <div class="gs-user--profile__image">
          <avatar
            v-loading="uploadingPhoto"
            :src="form.avatar"
            :size="120"
            icon="el-icon-user-solid"
          ></avatar>
          <image-upload
            :upload-status.sync="uploadingPhoto"
            :photo-url.sync="form.avatar"
          />
        </div>
      </el-card>
    </el-col>
    <el-col :lg="17">
      <el-card>
        <el-form
          ref="updateForm"
          :model="form"
          :rules="rules"
          label-width="200px"
          label-position="top"
          class="gs-form"
        >
          <div class="mb-4">
            <div class="gs-layout--heading">
              <h3>Personal Information</h3>
            </div>
            <el-row :gutter="20" type="flex" class="flex-wrap">
              <el-col :xs="24" :sm="12">
                <el-form-item
                  v-custom-input="form.firstname"
                  class="gs-form-item--auth"
                  label="Firstname"
                  prop="firstname"
                >
                  <el-input
                    v-model="form.firstname"
                    type="text"
                    auto-complete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12">
                <el-form-item
                  v-custom-input="form.lastname"
                  class="gs-form-item--auth"
                  label="Lastname"
                  prop="lastname"
                >
                  <el-input
                    v-model="form.lastname"
                    type="text"
                    auto-complete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20" type="flex" class="flex-wrap">
              <el-col :xs="24" :sm="12">
                <el-form-item
                  v-custom-input="form.username"
                  class="gs-form-item--auth"
                  label="Username"
                  prop="username"
                >
                  <el-input
                    v-model="form.username"
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
                    disabled
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
                <el-form-item class="gs-selection" label="Gender" prop="gender">
                  <el-radio v-model="form.gender" label="male" border
                    >Male</el-radio
                  >
                  <el-radio v-model="form.gender" label="female" border
                    >Female</el-radio
                  >
                </el-form-item>
              </el-col>
            </el-row>
          </div>
          <div class="mb-5">
            <div class="gs-layout--heading">
              <h3>Preferences</h3>
            </div>
            <el-form-item
              class="gs-selection flex-column align-items-start"
              label="Categories"
            >
              <el-checkbox-group v-model="form.categories">
                <el-checkbox label="Music"></el-checkbox>
                <el-checkbox label="Sports"></el-checkbox>
                <el-checkbox label="IQ Basic"></el-checkbox>
                <el-checkbox label="Health"></el-checkbox>
                <el-checkbox label="Economics"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </div>
          <el-form-item class="d-flex justify-content-center">
            <el-button
              :loading="updating"
              type="primary"
              class="px-5"
              @click="update"
              >Update</el-button
            >
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import Avatar from './Avatar'
import ImageUpload from './ImageUpload'

export default {
  name: 'Profile',
  components: {
    Avatar,
    ImageUpload
  },
  data() {
    return {
      uploadingPhoto: false,
      updating: false,
      form: {
        avatar: '',
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        phoneNumber: '',
        gender: '',
        categories: []
      },
      rules: {
        firstname: [
          {
            required: true,
            message: 'Field is required',
            trigger: 'change'
          }
        ],
        lastname: [
          {
            required: true,
            message: 'Field is required',
            trigger: 'change'
          }
        ],
        username: [
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
        gender: [
          {
            required: true,
            message: 'You were born with a genital',
            trigger: 'change'
          }
        ]
      }
    }
  },
  created() {
    this.form = { ...this.$store.state.auth.user }
    this.form.avatar = ''
    this.form.gender = ''
    this.form.categories = []
  },
  methods: {
    update() {
      //
    }
  }
}
</script>

<style lang="scss" scoped>
.gs-user--profile__image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
