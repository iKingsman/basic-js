const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.alphabetCount = 26;
  }

  encrypt(text, key) {
    if (!text || !key) throw new Error("Incorrect arguments!");
    text = text.toUpperCase();
    key = this.generateKey(text, key);
    const encryptedText = [];
    for (let i = 0, keyIndex = 0; i < text.length; i++) {
      const symbol = text[i];
      const keySymbol = key[keyIndex];
      if (!this.alphabet.includes(symbol)) {
        encryptedText.push(symbol);
      } else {
        const symbolIndex = this.alphabet.indexOf(symbol);
        const shift = this.alphabet.indexOf(keySymbol);
        const encryptedSymbolIndex = (symbolIndex + shift) % this.alphabetCount;
        const encryptedSymbol = this.alphabet[encryptedSymbolIndex];
        encryptedText.push(encryptedSymbol);
        keyIndex++;
      }
    }
    return this.direct ? encryptedText.join('') : encryptedText.reverse().join('');
  }

  decrypt(text, key) {
    if (!text || !key) throw new Error("Incorrect arguments!");
    text = text.toUpperCase();
    key = this.generateKey(text, key);
    const encryptedText = [];
    for (let i = 0, keyIndex = 0; i < text.length; i++) {
      const symbol = text[i];
      const keySymbol = key[keyIndex];
      if (!this.alphabet.includes(symbol)) {
        encryptedText.push(symbol);
      } else {
        const symbolIndex = this.alphabet.indexOf(symbol);
        const shift = this.alphabet.indexOf(keySymbol);
        const encryptedSymbolIndex = (symbolIndex - shift + this.alphabetCount) % this.alphabetCount;
        const encryptedSymbol = this.alphabet[encryptedSymbolIndex];
        encryptedText.push(encryptedSymbol);
        keyIndex++;
      }
    }
    return this.direct ? encryptedText.join('') : encryptedText.reverse().join('');
  }

  generateKey(text, key) {
    const keyDifference = Math.ceil(text.length / key.length);
    return key.repeat(keyDifference).toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
