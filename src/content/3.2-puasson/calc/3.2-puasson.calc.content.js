import { factorial, pow, e } from "mathjs";
import drawResult from "@/misc/genericCalc.js";
import variables from "@/misc/variables.js";

export default {
  data() {
    return {
      param_n: variables.inputDefaultValue,
      param_p: variables.inputDefaultValue,
      param_m: variables.inputDefaultValue,
      result: variables.outputTip,
      classObj: {}
    };
  },
  methods: {
    compute() {
      drawResult(this, this.puasson, [
        +this.param_n,
        +this.param_p,
        +this.param_m
      ]);
    },
    puasson(n, p, m) {
      return (pow(n * p, m) / factorial(m)) * pow(e, -n * p);
    }
  }
};
