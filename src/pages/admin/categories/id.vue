<template>
  <div>
    <template>
      <div class="is-flex is-align-center mb-5">
        <div class="gs-layout--heading">
          <h3 class="mb-0">Categories / Music</h3>
        </div>
        <el-button type="primary" size="small" plain circle icon="gs-icon--edit" @click="showCategoryForm = true"></el-button>
      </div>
      <el-row>
        <el-col :span="22">
          <el-form
              ref="updateForm"
              :model="category"
              label-width="200px"
              label-position="top"
              class="gs-form"
              :rules="rules"
          >
            <el-card class="gs-stages-card">
              <template v-if="category.stages.length === 0">
                <div
                    class="is-flex is-justify-center is-align-center"
                    :style="{ cursor: 'pointer' }"
                    @click="showCategoryStageAdd = true"
                >
                  <div class="gs-add-stage">
                    <i class="gs-icon--plus"></i>
                  </div>
                  <p class="ml-2">Add New Stage</p>
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
                        <router-link :to="{ name: 'admin.categories-category-stage', params: { stageId: stage._id }}">
                          <h5>{{ stage.name }}</h5>
                        </router-link>
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
                  <el-col :lg="2" class="is-flex is-align-center">
                    <div class="gs-add-stage" @click="showCategoryStageAdd = true">
                      <i class="gs-icon--plus"></i>
                    </div>
                  </el-col>
                </el-row>
              </template>
            </el-card>
          </el-form>
        </el-col>
      </el-row>
    </template>
    <category-form :show.sync="showCategoryForm" action="edit" category-name="Music" />
    <category-stage-add :show.sync="showCategoryStageAdd" :category-id="1" />
  </div>
</template>

<script>
  import CategoryForm from "../../../components/Admin/Categories/CategoryForm";
  import CategoryStageAdd from "../../../components/Admin/Categories/Stage/StageAdd";

  export default {
    name: 'AdminCategory',
    components: {
      CategoryForm,
      CategoryStageAdd
    },
    data() {
      return {
        showCategoryForm: false,
        showCategoryStageAdd: false,
        showAddStage: false,
        fetchingCategory: false,
        updatingCategory: false,
        activeStage: '0',
        category: {
          id: this.$route.params.id,
          status: false,
          name: '',
          price: '',
          slug: '',
          stages: [
            {
              name: 'Stage 1',
              _id: 1
            },
            {
              name: 'Stage 2',
              _id: 2
            }
          ]
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
        //
      },
      updateCategory() {
        this.$refs.updateForm.validate((valid) => {
          if (valid) {
            this.updatingCategory = true
            //
          } else {
            return false
          }
        })
      },
      fetchStages() {
        //
      },
      deleteStage() {
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
          //
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
