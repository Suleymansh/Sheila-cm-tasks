const result = document.querySelector("#result");

addNumber = (number) => {
  result.value += number;
};

addOperator = (operator) => {
  result.value += " " + operator + " ";
};

clearResult = () => {
  result.value = " ";
};

calculate = () => {
  result.value = eval(result.value);
};
