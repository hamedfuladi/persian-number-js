/**
 * Convert latin numbers in a string to persian number
 * @param {string} string - The string that you want to convert
 * @return {string} - Converted string with persian digits
 */
function toPersianDigits(string) {
  if(typeof string !== 'string'){
    return "Input should be a string";
  }
  const nums = [
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
  string =  string.replace(/[0-9]/g, function (w) {
    return nums[ + w]
  });
  return string;
}

/**
 * Convert persian numbers in a string to latin number
 * @param {string} string - The string that you want to convert
 * @return {string} - Converted string with latin digits
 */
function persiantoLatinDigits(string){
  if(typeof string !== 'string'){
    return "Input should be a string";
  }
  const persianNums = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
  for(let i = 0; i < 10; i++){
    string = string.replace(persianNums[i], i);
  }
  return string;
}
