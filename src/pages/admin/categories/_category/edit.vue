<template>
  <div>
    <template v-if="!viewStage">
      <div class="mb-5 d-flex">
        <div class="gs-back-arrow" @click="goBack">
          <i class="gs-icon--arrow-left"></i>
        </div>
        <h3 class="gs-app-layout-heading">Update {{ category.name }}</h3>
      </div>
      <el-row v-loading="fetchingCategory">
        <el-col :span="22">
          <el-form
            ref="updateForm"
            :model="category"
            label-width="200px"
            label-position="top"
            class="gs-form"
            :rules="rules"
          >
            <el-card class="mb-4">
              <el-row :gutter="20" type="flex" class="flex-wrap ">
                <el-col
                  :span="24"
                  class="d-flex justify-content-end align-items-center mb-4"
                >
                  <el-switch v-model="category.status"></el-switch>
                </el-col>
                <el-col :xs="24" :sm="8">
                  <el-form-item
                    v-custom-input="category.name"
                    class="gs-form-item--auth"
                    label="Category Name"
                    prop="name"
                  >
                    <el-input
                      v-model="category.name"
                      type="text"
                      auto-complete="off"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="8">
                  <el-form-item
                    v-custom-input="category.name"
                    class="gs-form-item--auth"
                    label="Slug"
                    prop="slug"
                  >
                    <el-input
                      v-model="slug"
                      disabled
                      type="text"
                      auto-complete="off"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="8">
                  <el-form-item
                    v-custom-input="category.price"
                    v-only-number
                    class="gs-form-item--auth"
                    label="Price ($)"
                    prop="price"
                  >
                    <el-input
                      v-model="category.price"
                      type="text"
                      auto-complete="off"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-form-item class="d-flex justify-content-center mt-4">
                <el-button
                  :loading="updatingCategory"
                  type="primary"
                  class="px-5"
                  @click="updateCategory"
                  >Update</el-button
                >
              </el-form-item>
            </el-card>
            <el-card class="gs-stages-card">
              <template v-if="category.stages.length === 0">
                <div
                  class="my-3 d-flex justify-content-center align-items-center"
                  :style="{ cursor: 'pointer' }"
                  @click="showAddStage = true"
                >
                  <div class="gs-add-stage">
                    <i class="gs-icon--plus"></i>
                  </div>
                  <p class="mb-0 ml-2">Add New Stage</p>
                </div>
              </template>
              <template v-else>
                <el-row type="flex" class="flex-wrap" :gutter="30">
                  <el-col
                    v-for="(stage, index) in category.stages"
                    :key="index"
                    :lg="8"
                  >
                    <div class="gs-category-stage">
                      <div>
                        <h5 @click="showStage(stage)">{{ stage.name }}</h5>
                        <p>0 Questions</p>
                      </div>
                      <div class="gs-category-stage-action">
                        <el-button
                          type="primary"
                          icon="gs-icon--trash"
                          circle
                          @click="deleteStage(stage._id)"
                        ></el-button>
                      </div>
                    </div>
                  </el-col>
                  <el-col :lg="2">
                    <div
                      class="h-100 d-flex justify-content-center align-items-center"
                    >
                      <div class="gs-add-stage" @click="showAddStage = true">
                        <i class="gs-icon--plus"></i>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </template>
            </el-card>
          </el-form>
        </el-col>
      </el-row>
    </template>
    <template v-else>
      <div class="d-flex mb-5">
        <div class="gs-back-arrow" @click="hideStage">
          <i class="gs-icon--arrow-left"></i>
        </div>
        <h3 class="gs-app-layout-heading">
          {{ category.name }} / {{ stageProperties.name }}
        </h3>
      </div>
      <view-stage
        :show.sync="viewStage"
        :stage-properties="stageProperties"
      ></view-stage>
    </template>
    <add-stage
      :show.sync="showAddStage"
      :category-id="category.id"
      :category-stages="category.stages"
    ></add-stage>
  </div>
</template>

<script>
import admin from '~/controllers/admin'
import ViewStage from '~/components/Stage/ViewStage'
import AddStage from '~/components/Stage/AddStage'

export default {
  name: 'AdminCategoryEdit',
  layout: 'admin',
  components: {
    AddStage,
    ViewStage
  },
  data() {
    return {
      showAddStage: false,
      fetchingCategory: false,
      updatingCategory: false,
      activeStage: '0',
      category: {
        id: this.$route.params.category,
        status: false,
        name: '',
        price: '',
        slug: '',
        stages: []
      },
      rules: {
        name: [
          {
            required: true,
            message: "Field can't be blank",
            trigger: 'change'
          }
        ],
        price: [
          {
            required: true,
            message: "Field can't be blank",
            trigger: 'change'
          }
        ]
      },
      loadingHeaders: false,
      showQuestions: false,
      viewStage: false,
      stageProperties: {}
    }
  },
  computed: {
    slug() {
      return this.category.name
        .toLowerCase()
        .split(' ')
        .join('-')
    }
  },
  watch: {
    showAddStage() {
      this.fetchStages()
    }
  },
  created() {
    this.fetchCategory()
  },
  methods: {
    goBack() {
      return window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    fetchCategory() {
      this.fetchingCategory = true
      admin
        .getCategory(this.$route.params.category)
        .then((response) => {
          const res = response.data
          if (!res.error) {
            this.category.id = res.response.data._id
            this.category.name = res.response.data.name
            this.category.slug = res.response.data.slug
            this.category.price = res.response.data.price
            this.fetchStages()
          }
        })
        .catch((error) => {
          this.$message.error(error.response.data.response.error)
          this.fetchingCategory = false
        })
    },
    updateCategory() {
      this.$refs.updateForm.validate((valid) => {
        if (valid) {
          this.updatingCategory = true
          admin
            .updateCategory(this.category)
            .then((response) => {
              const res = response.data
              console.log(res)
              if (!res.error) {
                this.updatingCategory = false
                this.$message.success(res.message)
              }
            })
            .catch((error) => {
              this.updatingCategory = false
              if (error.response.status === 500) {
                this.$message.error('Unable to update now, please try later.')
              }
            })
        } else {
          return false
        }
      })
    },
    fetchStages() {
      admin
        .getStages(this.category.id)
        .then((response) => {
          const res = response.data
          if (!res.error) {
            this.category.stages = res.response.data
            this.fetchingCategory = false
          }
        })
        .catch((error) => {
          this.$message.error(error.response.data.response.error)
          this.fetchingCategory = false
        })
    },
    deleteStage(id) {
      this.$confirm("This can't be undone, Proceed?", 'Warning', {
        confirmButtonText: 'Proceed',
        cancelButtonText: 'Cancel',
        type: 'warning',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = 'Deleting...'

            setTimeout(() => {
              done()
              setTimeout(() => {
                instance.confirmButtonLoading = false
              }, 300)
            }, 1500)
          } else {
            done()
          }
        }
      }).then(() => {
        admin
          .deleteStage(id)
          .then((response) => {
            const res = response.data
            if (!res.error) {
              this.fetchStages()
              this.$message.success(res.message)
            }
          })
          .catch((error) => {
            this.$message.error(error.response.data.message)
          })
      })
    },
    showStage(stage) {
      this.stageProperties = stage
      this.viewStage = true
    },
    hideStage() {
      this.fetchStages()
      this.viewStage = false
    }
  }
}
</script>

<style lang="scss" scoped>
.gs-all-categories {
  padding: 20px;
  border-radius: 10px;
  background: #fff;

  i {
    font-size: 12px;
    margin-right: 5px;
  }

  a {
    font-weight: 600;
    font-size: 12px;
  }
}

.el-menu {
  height: 100%;
  background: #ffffff;
  border-right: 2px solid #4d00d270;
  padding-right: 15px;

  .el-menu-item {
    border-radius: 5px;
    opacity: 0.5;
    margin-bottom: 5px;
    position: relative;

    .remove-button {
      position: absolute;
      right: 0;
      height: 100%;
      top: 50%;
      width: 50px;
      transform: translateY(-50%);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 5;
    }

    i {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 10px;
      font-weight: 500;
      visibility: hidden;
      transition: visibility 0.2s ease-out;
    }

    &:hover i {
      visibility: visible;
      transition: visibility 0.2s ease-in;
    }

    &.is-active {
      opacity: 1;
      background: #4d00d215;
      color: #4d00d2;
      transition: all 0.2s ease-in;
    }
  }
}

.gs-back-arrow {
  margin-right: 10px;
  cursor: pointer;
  i {
    font-weight: 400;
    margin-bottom: 0;
  }
}

.gs-category-stage {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 25px;
  background: #4d00d215;
  border-radius: 10px;

  h5 {
    color: #4d00d2;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
  }

  p {
    font-weight: 500;
    margin-bottom: 0;
    font-size: 12px;
  }

  .gs-category-stage-action {
    display: flex;

    .el-button {
      padding: 10px;

      i {
        font-size: 12px;
      }
    }
  }
}

.gs-add-stage {
  background: #4d00d2;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  i {
    color: #fff;
    font-size: 0.8rem;
  }
}

.gs-form {
  opacity: 1;
  animation: fade 0.8s linear;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
