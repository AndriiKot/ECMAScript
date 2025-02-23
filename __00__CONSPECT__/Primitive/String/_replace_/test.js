function palindrome(str) {
  const validString = str.replace(/^w*/gi, '')
  console.log(validString)
  console.log([...validString].reverse().join(''))
  return validString === [...validString].reverse().join()
}

console.log(palindrome("eye"));