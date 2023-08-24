module.exports = function reverse (n) {
  let isNegative = false;
  let integerString = String(n)

  if (Math.sign(n) === -1) {
    isNegative = true;
    integerString = integerString.replaceAll("-", "");
  }

  const reversedStringArray = String(integerString).split("").reverse("");
  const result = reversedStringArray.toString().replaceAll(",", "");

  return isNegative ? Number(`${result}`) : Number(result);
}