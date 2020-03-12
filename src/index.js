module.exports = function toReadable (number) {
  let words = {
    0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
    10:'ten',11:'eleven',12:'twelve',13:'thirteen',14:'fourteen',15:'fifteen',16:'sixteen',17:'seventeen',
    18:'eighteen',19:'nineteen',20:'twenty',30:'thirty',40:'forty',50:'fifty',60:'sixty',70:'seventy',80:'eighty',
    90:'ninety',100:'hundred',
}
 
  let hundreds = Math.floor(number / 100);
  let tens = number % 100;
  let result = '';
  
  let wordFunc = (item) => {
      if (result.length == 0) {
        result += item;
      } else {
        result = result + ' ' + item;
      }
  }
  if (number === 0) {
    wordFunc(words[number]);
  } else if (hundreds > 0) {
    wordFunc(words[hundreds]);
    wordFunc(words[100]);
  }
  if (tens > 0 && tens < 21) {
    wordFunc(words[tens]);
  } else if (tens > 20) {
    wordFunc(words[Math.floor(tens / 10) * 10]);
      if (tens % 10 > 0) {
        wordFunc(words[tens % 10]);
      }
  }
  return result;
}
