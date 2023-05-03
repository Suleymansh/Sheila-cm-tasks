//  ededin faktorialini hesablayin

function getFactorial(num) {
  let multiply = 1;
  for (i = 1; i <= num; i++) {
    multiply *= i;
  }
  return multiply;
}
const result = getFactorial(6);
console.log(result);

