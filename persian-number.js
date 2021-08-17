/**
 * Convert latin numbers in a string to persian number
 * @param {srting} srting - The string that you wanna convert
 * @return {string} - Converted string with persian digits
 */

function toPersianDigits(srting) {
  
  if(typeof string === 'string')
  {
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
    string =  string.replace(/[0-9]/g, function (w) {
      return nums[ + w]
    })
  }
  return string
}

/**
 * Convert persian numbers in a string to lating number
 * @param {srting} srting - The string that you wanna convert
 * @return {string} - Converted string with lating digits
 */

function persiantoLatinDigits(string){
var persianNums = [/۰/g,
                  /۱/g,
                  /۲/g,
                  /۳/g,
                  /۴/g,
                  /۵/g,
                  /۶/g,
                  /۷/g,
                  /۸/g,
                  /۹/g
                 ];
  if(typeof string === 'string')
  {
    for(var i=0; i<10; i++)
    {
      string = string.replace(persianNums[i], i);
    }
  }
  return string;
}
