function XO(str) {
  return (str.match(/o/ig) || []).length === (str.match(/x/ig) || []).length;  
}
