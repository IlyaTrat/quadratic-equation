module.exports = function solveEquation(equation) {
  let split = equation.split(' ');
  let a, b, c;
  a = split[0];
  split[3] == '-' ? b = 0 - split[4] : b = Number(split[4]);
  split[7] == '-' ? c = 0 - split[8] : c = Number(split[8]);
  return solver(a, b ,c);
}

function solver(a, b, c) {
  let x1, x2;
  let d = Math.pow(b, 2) - 4 * a * c;
  if(d > 0) {
    x1 = Math.round((-1 * b + Math.sqrt(d)) / (2 * a));
    x2 = Math.round((-1 * b - Math.sqrt(d)) / (2 * a));
    return [x1, x2].sort((a, b) => a - b);
  }
  else if (d == 0) {
    x1 = x2 = -1 * Math.round(b / (2 * a));
    return [x1, x2].sort((a, b) => a - b);
  }
  else {
    return 'not a simple answer'
  }
}
