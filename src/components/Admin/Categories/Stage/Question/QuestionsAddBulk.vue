<template>
  <el-dialog :visible.sync="shouldShow" @close="closeEvent" width="40%">
    <template slot="title">
      <p class="dialog-header-title">Bulk Questions Upload</p>
      <p>
        You can find our excel template
        <a :href="templateUrl" target="_blank" class="text-eden">here</a>
      </p>
    </template>
    <vue-csv-import
        v-model="csv"
        :url="url"
        :auto-match-fields="true"
        :callback="handleSuccess"
        :catch="handleError"
        :button-class="'el-button el-button--plain'"
        headers="headers"
        :map-fields="fields"
        ref="csvImport"
    >
      <template slot="error">
        File type is invalid. It has to be a csv file (e.g Excel, Google
        Spreadsheets)
      </template>

      <template slot="next">
        <div class="">
          <el-button plain @click="setHeaders">Set Headers</el-button>
        </div>
      </template>

      <template slot="submit">
        <div class="is-flex is-justify-end">
          <el-button plain @click="shouldShow = false">Cancel</el-button>
          <el-button
              type="primary"
              @click="uploadCustomers"
              :loading="uploading"
          >Upload File</el-button
          >
        </div>
      </template>
    </vue-csv-import>
  </el-dialog>
</template>

<script>
  import { VueCsvImport } from "vue-csv-import";

  export default {
    name: "QuestionsAddBulk",
    props: {
      show: Boolean
    },
    components: {
      VueCsvImport
    },
    data() {
      return {
        templateUrl: 'https://docs.google.com/spreadsheets/d/1P-GlLtZPPneeaCL1trLmqV20rhlHkN12I6mP2RvjY2Q/edit?usp=sharing',
        url: 'https://gamesoft-revised.herokuapp.com/questions/upload',
        fields: ['Question', 'Type', 'Image', 'OptionA', 'OptionB', 'OptionC', 'OptionD', 'Answer'],
        csv: [],
        uploading: false
      };
    },
    watch: {
      show() {
        if (this.show) {
          setTimeout(() => {
            this.styleInput();
          }, 100);
        }
      }
    },
    computed: {
      shouldShow: {
        get() {
          return this.show;
        },
        set(value) {
          this.$emit("update:show", value);
        }
      }
    },
    methods: {
      closeEvent() {
        this.shouldShow = false;
      },
      styleInput() {
        const input = document.querySelector(
            ".vue-csv-uploader .csv-import-file"
        );
        let node = document.createTextNode("Click here to upload file");
        let label = document.createElement("span");
        label.appendChild(node);
        input.appendChild(label);

        const fileInput = document.querySelector(
            '.csv-import-file [type="file"]'
        );

        fileInput.onchange = () => {
          if (!fileInput.value) return;

          let value = fileInput.value.replace(/^.*[\\/]/, "");

          const labelChange = document.querySelector(".csv-import-file span");
          labelChange.classList.add("chosen");
          labelChange.innerHTML = value;
        };
      },
      setHeaders() {
        this.$refs.csvImport.load();
      },
      handleError(error) {
        this.uploading = false;
        this.$message.error(error.response.data.message);
      },
      uploadCustomers() {
        this.uploading = true;
        this.$refs.csvImport.submit();
      },
      handleSuccess(response) {
        if (response.data.status) {
          this.uploading = false;
          this.closeEvent();
          this.$message.success(response.data.message);
          this.$emit("success");
        } else {
          this.uploading = false;
          this.$message.error(response.data.message);
        }
      }
    }
  };
</script>

<style lang="scss" scoped></style>
