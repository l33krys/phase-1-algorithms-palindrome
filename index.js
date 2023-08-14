function isPalindrome(word) {
  // Write your algorithm here
  let forward = word
  let forwardSplit = forward.split('')
  let reverse = [...forwardSplit].reverse()
  let reverseWord = reverse.join('')
  if (forward === reverseWord) {
    console.log('palindrome')
    return true
  } else {
    console.log('not a palindrome')
    return false
  }

  
}

isPalindrome('racecar')
isPalindrome('hello')

/* 
  Add your pseudocode here
  Split word into an array of letters
  Create a copy non intrusive
  Flip copy
  Join array letters into a string
  Check if original and copy are the same
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
