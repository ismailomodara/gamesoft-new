<template>
  <div>
    <template>
      <div class="mb-4">
        <div class="gs-layout--heading">
          <h3>Add new contest</h3>
        </div>
      </div>
      <el-row type="flex" :gutter="40" class="flex-wrap">
        <el-col :lg="8">
          <div class="gs-contest--illustration">
            <img :src="getImage('contest.svg')" alt="Contest" />
          </div>
        </el-col>
        <el-col :lg="16">
          <el-form
              ref="contestForm"
              :model="form"
              label-width="200px"
              label-position="top"
              class="gs-form"
          >
            <el-card class="mb-4">
              <el-row :gutter="20" type="flex" class="flex-wrap ">
                <el-col :xs="24" :lg="12">
                  <el-form-item
                      v-custom-input="form.start"
                      class="gs-form-item--auth"
                      label="Contest starts"
                      prop="title"
                  >
                    <el-date-picker
                        v-model="form.start"
                        :clearable="false"
                        type="date"
                        format="dd MMM, yyyy"
                        value-format="yyyy-MM-dd"
                    />
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :lg="12">
                  <el-form-item
                      v-custom-input="form.end"
                      class="gs-form-item--auth"
                      label="Contest ends"
                      prop="title"
                  >
                    <el-date-picker v-model="form.end" type="date" format="dd MMM, yyyy"
                                    value-format="yyyy-MM-dd" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" type="flex" class="flex-wrap ">
                <el-col :xs="24" :lg="24">
                  <el-form-item
                      label="Categories"
                      prop="categories"
                  >
                    <el-checkbox-group v-model="form.categories">
                      <el-checkbox label="music" border>Music</el-checkbox>
                      <el-checkbox label="science" border>Science</el-checkbox>
                      <el-checkbox label="sports" border>Sports</el-checkbox>
                      <el-checkbox label="maths" border>Maths</el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" type="flex" class="flex-wrap ">
                <el-col :xs="24" :lg="12">
                  <el-form-item
                      v-custom-input="form.fee"
                      v-only-number
                      class="gs-form-item--auth"
                      label="Fee"
                      prop="fee"
                  >
                    <el-input
                        v-model="form.fee"
                        type="text"
                    />
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :lg="12">
                  <el-form-item
                      v-custom-input="form.prize"
                      v-only-number
                      class="gs-form-item--auth"
                      label="Prize"
                      prop="prize"
                  >
                    <el-input
                      v-model="form.prize"
                      type="text"
                  />
                  </el-form-item>
                </el-col>
              </el-row>
            </el-card>
          </el-form>
          <div class="is-flex is-justify-end">
            <el-button type="primary" plain>Cancel</el-button>
            <el-button type="primary">Add</el-button>
          </div>
        </el-col>
      </el-row>
    </template>
  </div>
</template>

<script>
  import admin from '../../../controllers/admin'

  export default {
    name: 'AdminCategories',
    layout: 'admin',
    components: {},
    data() {
      return {
        addingCategory: false,
        form: {
          start: "",
          end: "",
          duration: "",
          categories: [],
          fee: "",
          prize: ""
        }
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
    methods: {
      addCategory() {
        this.addingCategory = true
        admin
            .addCategory(this.category)
            .then((response) => {
              const res = response.data
              if (!res.error) {
                this.category.id = res.response.data._id
                this.$message.success(res.message)
                this.addingCategory = false
                setTimeout(() => {
                  this.$router.push({
                    name: 'admin.categories-edit',
                    params: {
                      category: res.response.data.slug,
                      id: this.category.id
                    }
                  })
                }, 500)
              } else {
                this.addingCategory = false
                this.$message.error(res.message)
              }
            })
            .catch((error) => {
              this.addingCategory = false
              this.$message.error(error.response.data.message)
            })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .gs-contest--illustration {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    img {
      height: 140px;
    }
  }
</style>
