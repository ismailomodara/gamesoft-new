export default {
  methods: {
    status(status) {
      switch (status.toLowerCase()) {
        case 'completed':
          return 'success'
        case 'pending':
          return 'warning'
        case 'ongoing':
          return 'success'
      }
    }
  }
}
