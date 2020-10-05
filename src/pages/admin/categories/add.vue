<template>
  <div>
    <template>
      <div class="mb-5">
        <h3 class="gs-app-layout-heading">
          ADD NEW CATEGORY
        </h3>
      </div>
      <el-row>
        <el-col :span="22">
          <el-form
            ref="updateForm"
            :model="category"
            label-width="200px"
            label-position="top"
            class="gs-form"
          >
            <el-card class="mb-4">
              <el-row :gutter="20" type="flex" class="flex-wrap ">
                <el-col :xs="24" :sm="8">
                  <el-form-item
                    v-custom-input="category.name"
                    class="gs-form-item--auth"
                    label="Category Title"
                    prop="title"
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
              <el-form-item
                v-if="!category.id"
                class="d-flex justify-content-center mt-4"
              >
                <el-button
                  :loading="addingCategory"
                  type="primary"
                  class="px-5"
                  @click="addCategory"
                  >Add Category</el-button
                >
              </el-form-item>
            </el-card>
          </el-form>
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
      category: {
        id: '',
        status: false,
        name: '',
        price: ''
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
                name: 'admin-categories-category-edit',
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

<style lang="scss" scoped></style>
