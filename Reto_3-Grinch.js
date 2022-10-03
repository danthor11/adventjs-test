export default function isValid(letter) {
  for (let i = 0; i < letter.length; i++) {
    if (letter[i] === "(") {
      for (let j = i + 1; j < letter.length; j++) {
        if (letter[j] === "{" || letter[j] === "[") {
          return false;
        } else if (letter[j] === ")") {
          if (j === i + 1) {
            return false;
          }
          break;
        } else if (j === letter.length - 1) {
          return false;
        }
      }
    }
  }
  return true;
}
