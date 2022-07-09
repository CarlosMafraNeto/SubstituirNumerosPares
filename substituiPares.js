function substituiPares(array) {
  for (let i = 0; i < array.lenght; i++) {
    if (array[i] === 0) {
      console.log('Já é um zero')
    } else if (array[i] % 2 === 0) {
      console.log(`substituindo ${array[i]} por zero`)
      array[i] = 0
    }
  }
  return array
}

let umArray = [0, 20, 5, 67, 4, 10]
console.log(substituiPares(umArray))
