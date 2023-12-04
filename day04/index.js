function decode(message) {
  function decodeHelper(start) {
    let result = '';
    let i = start;

    while (i < message.length && message[i] !== ')') {
      if (message[i] === '(') {
        const [decoded, newIndex] = decodeHelper(i + 1);
        result += decoded.split('').reverse().join('');
        i = newIndex;
      } else {
        result += message[i];
      }
      i++;
    }

    return [result, i];
  }

  return decodeHelper(0)[0];
}

module.exports = decode
