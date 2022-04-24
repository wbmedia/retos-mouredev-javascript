var lengthOfLastWord = function (s) {
  const words = s.trim().split(" ");
  return words.length > 0 ? words[words.length - 1].length : 0;
};

lengthOfLastWord('Hello World');
lengthOfLastWord('   fly me   to   the moon  ');
lengthOfLastWord('luffy is still joyboy');
