export default {
  methods: {
    formatPrice(value) {
      return value ? "₦" + Number(value).toLocaleString() : "₦0";
    },
    formatFigure(value) {
      return Number(value).toLocaleString();
    },
  }
}