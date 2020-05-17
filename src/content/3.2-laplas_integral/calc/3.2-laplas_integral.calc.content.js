import { pow, sqrt, e, pi } from "mathjs";
import drawResult from "@/misc/genericCalc.js";
import variables from "@/misc/variables.js";

export default {
  data() {
    return {
      param_n: variables.inputDefaultValue,
      param_p: variables.inputDefaultValue,
      param_k: variables.inputDefaultValue,
      result: variables.outputTip,
      classObj: {}
    };
  },
  methods: {
    compute() {
      drawResult(this, this.lapals, [
        +this.param_n,
        +this.param_p,
        +this.param_k
      ]);
    },
    lapals(n, p, k) {
      const x = (k - n * p) / sqrt(n * p * (1 - p));
      const F = (1 / sqrt(2 * pi)) * pow(e, -pow(x, 2) / 2);
      return (1 / sqrt(n * p * (1 - p))) * F;
    }
  }
};
