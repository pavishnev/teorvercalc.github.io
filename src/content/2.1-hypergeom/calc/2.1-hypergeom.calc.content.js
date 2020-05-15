import { combinations } from "mathjs";
import drawResult from "@/misc/genericCalc.js";
import variables from "@/misc/variables.js";

export default {
  data() {
    return {
      param_N: variables.inputDefaultValue,
      param_n: variables.inputDefaultValue,
      param_M: variables.inputDefaultValue,
      param_m: variables.inputDefaultValue,
      result: variables.outputTip,
      classObj: {}
    };
  },
  methods: {
    compute() {
      drawResult(this, this.hyperGeom, [
        +this.param_n,
        +this.param_N,
        +this.param_m,
        +this.param_M
      ]);
    },
    hyperGeom(n, N, m, M) {
      return (
        (combinations(M, m) * combinations(N - M, n - m)) / combinations(N, n)
      );
    }
  }
};
