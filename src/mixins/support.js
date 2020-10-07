export default {
  methods: {
    formatToTitleCase(sentence) {
      if (sentence) {
        const words = sentence.split(" ");
        let newSentence = [];
        for (let i = 0; i < words.length; i++) {
          newSentence.push(
              words[i].charAt(0).toUpperCase() + words[i].substr(1).toLowerCase()
          );
        }
        return newSentence.join(" ");
      }
      return "-";
    },
  }
}
