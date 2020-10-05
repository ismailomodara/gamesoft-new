import moment from 'moment'

export default {
  methods: {
    fullDate(value) {
      return moment(value).format('MMMM Do YYYY')
    }
  }
}
