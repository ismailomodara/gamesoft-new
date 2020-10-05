<template>
  <el-dialog
    title="Send Message"
    :visible.sync="shouldShow"
    width="45%"
    @close="clearFields"
  >
    <el-form
      ref="messageForm"
      :model="message"
      label-width="200px"
      label-position="top"
    >
      <el-row type="flex" class="flex-wrap">
        <el-col :lg="24">
          <el-form-item class="gs-form-item--auth" label="" prop="user">
            <el-select
              v-model="userIdValue"
              placeholder="Select user"
              filterable
            >
              <el-option
                v-for="(user, index) in allUsers"
                :key="index"
                :label="user.name"
                :value="user.id"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :lg="24">
          <el-form-item
            v-custom-input="message.content"
            class="gs-form-item--auth"
            label="Message"
            prop="content"
          >
            <el-input
              v-model="message.content"
              type="textarea"
              :rows="5"
              auto-complete="off"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="d-flex justify-content-center my-3">
        <el-button type="primary" @click="sendMessage">Send</el-button>
      </div>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  name: 'SendMessage',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    userId: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      message: {
        content: ''
      },
      allUsers: [
        {
          id: 1,
          status: 'online',
          name: 'Moshood Alaran',
          email: 'moshood@alaran.com',
          wallet_balance: 1000,
          last_seen: 'Now',
          account_status: 'active'
        },
        {
          id: 2,
          status: 'online',
          name: 'Bashir Hamza',
          email: 'bashir@hamza.com',
          wallet_balance: 1000,
          last_seen: 'Now',
          account_status: 'active'
        },
        {
          id: 3,
          status: 'offline',
          name: 'Tolu Fakiyesi',
          email: 'tolu@fakiyesi.com',
          wallet_balance: 1000,
          last_seen: '2 days ago',
          account_status: 'suspended'
        },
        {
          id: 4,
          status: 'offline',
          name: 'Deji Ibrahim',
          email: 'deji@ibrahim.com',
          wallet_balance: 1000,
          last_seen: '1 week ago',
          account_status: 'suspended'
        }
      ]
    }
  },
  computed: {
    shouldShow: {
      get() {
        return this.show
      },
      set(value) {
        return this.$emit('update:show', value)
      }
    },
    userIdValue: {
      get() {
        return this.userId
      },
      set(value) {
        return this.$emit('update:userId', value)
      }
    }
  },
  methods: {
    sendMessage() {
      this.message.user = this.userIdValue
    },
    clearFields() {
      this.message = {
        content: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
