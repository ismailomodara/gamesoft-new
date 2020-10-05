<template>
  <el-upload action="" :on-change="uploadPhoto" :show-file-list="false">
    <a
      :style="{
        textDecoration: 'underline',
        fontWeight: '500',
        fontSize: '0.875rem'
      }"
      >{{ photoUrl ? 'Change photo' : 'Add photo' }}</a
    >
  </el-upload>
</template>

<script>
export default {
  name: 'ImageUpload',
  props: {
    photoUrl: {
      type: String,
      default: ''
    },
    uploadStatus: Boolean
  },
  data() {
    return {
      cloudinaryUrl: '',
      cloudinaryPresetUpload: ''
    }
  },
  computed: {
    updatePhotoUrl: {
      get() {
        return this.photoUrl
      },
      set(value) {
        this.$emit('update:photoUrl', value)
      }
    },
    updateUploadStatus: {
      get() {
        return this.uploadStatus
      },
      set(value) {
        this.$emit('update:uploadStatus', value)
      }
    }
  },
  methods: {
    uploadPhoto(event) {
      if (event.size / 1024 / 1024 < 1) {
        this.updateUploadStatus = true
        const formData = new FormData()
        const image = event.raw

        formData.append('file', image)
        formData.append('folder', 'user')
        formData.append('upload_preset', this.cloudinaryPresetUpload)

        fetch(this.cloudinaryUrl, {
          method: 'POST',
          body: formData
        })
          .then((response) => response.json())
          .then((data) => {
            this.updatePhotoUrl = data.url
            setTimeout(() => {
              this.updateUploadStatus = false
            }, 500)
          })
          .catch(() => {
            this.$message.error('Unable to upload image')
            this.updateUploadStatus = false
          })
      } else {
        this.$message.error('Image cannot be larger than 1MB!')
      }
    }
  }
}
</script>

<style scoped lang="scss"></style>
