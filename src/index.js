module.exports = function getZerosCount(number) {
  // your implementation
    let zerosCount = 0;
    for (let i = 1; Math.pow(5, i) <= number; i++) {
        zerosCount += Math.floor(number / (Math.pow(5, i)));
    }
    return zerosCount;
};