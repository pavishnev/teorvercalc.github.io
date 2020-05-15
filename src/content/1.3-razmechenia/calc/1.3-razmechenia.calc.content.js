import { combinations, factorial } from "mathjs";
import drawResult from "@/misc/genericCalc.js";
import variables from "@/misc/variables.js";

export default {
  data() {
    return {
      param_N: variables.inputDefaultValue,
      param_M: variables.inputDefaultValue,
      result: variables.outputTip,
      classObj: {}
    };
  },
  methods: {
    compute() {
      drawResult(this, (n, m) => combinations(n, m) * factorial(m), [
        +this.param_N,
        +this.param_M
      ]);
    }
  }
};
