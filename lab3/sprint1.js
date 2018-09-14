var palindrome=prompt("palindrome");
const isPalindrome = (str) => {
    let string = str
    return string == string.split('').reverse().join('');
  }
while(!isPalindrome(palindrome))
{
    palindrome=prompt("palindrome");
}

alert("welcome");