function caesarCipher(text, shift) {
  const result = [];
  console.log(text, shift);
  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if (char.match(/[a-zA-Z]/)) {
      // Get the ASCII code of the current character
      const code = text.charCodeAt(i);

      // Determine if it's an uppercase or lowercase letter
      const isUpperCase = char === char.toUpperCase();

      // Apply the shift and handle wrapping around the alphabet
      char = String.fromCharCode(
        ((code - (isUpperCase ? 65 : 97) + shift) % 26) +
          (isUpperCase ? 65 : 97)
      );
    }

    result.push(char);
  }

  return result.join("");
}

export default caesarCipher;
