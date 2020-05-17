import { factorial } from "mathjs";
import drawResult from "@/misc/genericCalc.js";
import variables from "@/misc/variables.js";

export default {
  data() {
    return {
      param_N: variables.inputDefaultValue,
      result: variables.outputTip,
      classObj: {}
    };
  },
  methods: {
    compute() {
      drawResult(this, factorial, [+this.param_N]);
    }
  }
};
