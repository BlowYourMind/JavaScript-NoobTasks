function reverse (int){
  return  Array.from(String(int), Number).reverse()
}
console.log(reverse(5));