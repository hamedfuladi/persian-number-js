/**
 * Convert latin numbers in a string to arabic/persian number
 * @param {sting} sting - The string that you wanna convert
 * @return {string} - Converted string with 
 */

function toPersianDigits(sting) {
  var nums = [
    '۰',
    '۱',
    '۲',
    '۳',
    '۴',
    '۵',
    '۶',
    '۷',
    '۸',
    '۹'
  ];
  return sting.replace(/[0-9]/g, function (w) {
    return nums[ + w]
  })
}
