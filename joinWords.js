const joinWords = (str) => {
  let sentence = '';
  for (i of str) {
    sentence = sentence + i;
  }
  return sentence;
};

joinWords('taco carss');


