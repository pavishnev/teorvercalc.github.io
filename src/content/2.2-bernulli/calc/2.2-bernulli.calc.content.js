import { combinations, pow } from "mathjs";
import drawResult from "@/misc/genericCalc.js";
import variables from "@/misc/variables.js";

export default {
  data() {
    return {
      param_k: variables.inputDefaultValue,
      param_n: variables.inputDefaultValue,
      param_p: variables.inputDefaultValue,
      result: variables.outputTip,
      classObj: {}
    };
  },
  methods: {
    compute() {
      drawResult(this, this.bernulli, [
        +this.param_k,
        +this.param_n,
        +this.param_p
      ]);
    },
    bernulli(k, n, p) {
      return combinations(n, k) * pow(p, k) * pow(1 - p, n - k);
    }
  }
};
