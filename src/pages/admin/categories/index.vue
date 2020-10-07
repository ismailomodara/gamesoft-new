<template>
  <div>
    <div class="is-flex is-align-center mb-5">
      <div class="gs-layout--heading">
        <h3 class="mb-0">All {{ data.length }} Categories</h3>
      </div>
      <el-button type="primary" size="small" plain @click="showCategoryForm = true">Add new</el-button>
    </div>
    <el-card>
      <el-form class="gs-filters">
        <el-form-item class="gs-form-item--auth" label="" prop="search">
          <el-input
            v-model="searchQuery"
            suffix-icon="gs-icon--search"
            type="text"
            placeholder="Search category"
            :disabled="!data.length"
          ></el-input>
        </el-form-item>
      </el-form>
      <el-table :data="data">
        <el-table-column label="" width="30"> </el-table-column>
        <el-table-column prop="name" label="Name">
          <template slot-scope="scope">
            <router-link
              :to="{
                name: 'admin.categories-category',
                params: { id: scope.row.id }
              }"
              >{{ scope.row.name }}</router-link
            >
          </template>
        </el-table-column>
        <el-table-column prop="slug" label="Slug">
          <template slot-scope="scope">
            <p>{{ scope.row.slug }}</p>
          </template>
        </el-table-column>
        <el-table-column prop="stages" label="Stages">
          <template slot-scope="scope">
            <p>{{ scope.row.stages }}</p>
          </template>
        </el-table-column>
        <el-table-column prop="created" label="Created on">
          <template slot-scope="scope">
            {{ scope.row.created }}
          </template>
        </el-table-column>
        <el-table-column label="Actions">
          <template slot-scope="scope">
            <el-button size="mini" @click="editCategory(scope.row.id)">Edit</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="deleteCategory(scope.row.name)"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <category-form :show.sync="showCategoryForm" action="add" />
  </div>
</template>

<script>
  import CategoryForm from "../../../components/Admin/Categories/CategoryForm";
export default {
  name: 'AdminCategories',
  components: {
    CategoryForm
  },
  data() {
    return {
      showCategoryForm: false,
      searchQuery: '',
      data: [
        {
          id: 1,
          name: 'Music',
          slug: 'music',
          stages: 3,
          created: '5th Oct, 2020'
        },
        {
          id: 2,
          name: 'Music',
          slug: 'music',
          stages: 3,
          created: '5th Oct, 2020'
        },
        {
          id: 3,
          name: 'Music',
          slug: 'music',
          stages: 3,
          created: '5th Oct, 2020'
        },
        {
          id: 4,
          name: 'Music',
          slug: 'music',
          stages: 3,
          created: '5th Oct, 2020'
        },
        {
          id: 5,
          name: 'Music',
          slug: 'music',
          stages: 3,
          created: '5th Oct, 2020'
        }
      ]
    }
  },
  methods: {
    editCategory(id) {
      this.$router.push({ name: 'admin.categories-edit', params: { id }})
    },
    deleteCategory(name) {
      this.$confirm(
        `Are you sure you want to delete this category, ${name}?`,
        'Warning',
        {
          confirmButtonText: 'Delete',
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
        }
      )
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
    font-weight: 400;
    font-size: 14px;
  }
}
</style>
