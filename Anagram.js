// Solution 1
const Anagram = function (word1, word2) {
  const word1Map = buildCharMap(word1)
  const word2Map = buildCharMap(word2)

  // si la longitud de los dos mapas es diferente, no son anagramas
  if (Object.keys(word1Map).length !== Object.keys(word2Map).length) {
    return false
  }
  // iteramos sobre los mapas y buscamos si hay diferencias
  for (let char in word1Map) {
    if (word1Map[char] !== word2Map[char]) {
      return false
    }
  }
  // si no hay diferencias, son anagramas y retornamos true
  return true
}

// helper function to sort the letters of a word
const buildCharMap = function (str) {
  // creamos un hash table
  const charMap = {}
  // limpiamos nuestro string
  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1
  }
  return charMap
}
console.log(Anagram('listen', 'silent'))
console.log(Anagram('hey bob', 'yei bob'))

// Solution 2
const isAnagram = function (word1, word2) {
  // comparamos si los strings son iguales
  return cleanString(word1) === cleanString(word2)
}

const cleanString = function (str) {
  // limpiamos nuestro string
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}
console.log(isAnagram('listen', 'silent'))
console.log(isAnagram('hey bob', 'yei bob'))
