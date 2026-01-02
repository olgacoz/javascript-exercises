const palindromes = function (str) {
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const cleanedStr = str
    .toLowerCase()
    .split('')
    .filter(char => alphanumerical.includes(char))
    .join('');
    
  const checkUpTo = Math.floor(cleanedStr.length / 2);

  for (let i = 0; i < checkUpTo; i++) {
    if (
      cleanedStr[i]
      !== cleanedStr[cleanedStr.length - i - 1]
    ) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
