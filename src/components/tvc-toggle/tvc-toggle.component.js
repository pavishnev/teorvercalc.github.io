export default {
  name: "VtcToggle",
  data() {
    return {
      theoryPath: "theory",
      calcPath: "calc"
    };
  },
  methods: {
    recombinePath(lastItem) {
      let path = this.$route.fullPath.split("/");
      path.pop();
      path.push(lastItem);
      return path.join("/");
    }
  }
};
