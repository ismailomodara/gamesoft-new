<template>
  <div class="gs-referrals">
    <div class="gs-app-section-spacing">
      <el-row type="flex" :gutter="40" class="flex-wrap mt-5">
        <el-col
          :lg="10"
          class="d-flex justify-content-center align-items-center"
        >
          <div class="gs-referral-illustration">
            <img src="@/assets/img/referral-illustration.svg" alt />
          </div>
        </el-col>
        <el-col :lg="14">
          <el-card>
            <h3 class="text-center">Earn rewards by referring</h3>
            <el-form
              ref="referralLink"
              label-width="200px"
              label-position="top"
              class="gs-form"
            >
              <el-form-item class="gs-form-item--auth" label="">
                <el-input
                  v-model="referralLink"
                  type="text"
                  auto-complete="off"
                ></el-input>
              </el-form-item>
              <el-form-item class="d-flex justify-content-center">
                <el-button type="primary" plain @click="copyLink"
                  >Copy Link</el-button
                >
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Referrals',
  layout: 'app',
  components: {},
  data() {
    return {
      referralLink: 'https://www.gamesoft.com/MA2020'
    }
  },
  methods: {
    copyLink() {
      const link = document.querySelector(
        '.gs-form-item--auth .el-input__inner'
      )

      /* Select the text field */
      link.select()
      link.setSelectionRange(0, 99999)

      document.execCommand('copy')

      this.$message({
        message: 'Link copied',
        type: 'success'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.gs-referrals {
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gs-referral-illustration {
  height: 400px;
  width: auto;

  img {
    height: 100%;
    width: 100%;
  }
}
</style>
