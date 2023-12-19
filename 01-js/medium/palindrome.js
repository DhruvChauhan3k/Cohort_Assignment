/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let a=0,b=str.length-1;
  
  while(a<b)
  {
    let beg=str[a].toLowerCase();
    let end=str[b].toLowerCase();
    if(beg.match(/[a-z]/)===null)
    {
      a++;
      continue;
    }
    if(end.match(/[a-z]/)== null)
    {
      b--;
      continue;
    }
    if(beg!==end)return false;
    a++;
    b--;
  }
  return true;
}

module.exports = isPalindrome;
