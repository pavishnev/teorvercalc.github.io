import variables from "@/misc/variables.js";

export default function(context, func, params) {
  try {
    context.result = func(...params);
    if (isNaN(context.result) || context.result == undefined) {
      throw Error("NaN Error");
    }
    context.classObj[variables.outputErrorClass] = false;
    context.result = +parseFloat(
      context.result.toFixed(variables.digitsAfterDotOutput)
    );
  } catch {
    context.result = variables.outputErrorMessage;
    context.classObj[variables.outputErrorClass] = true;
  }
}
