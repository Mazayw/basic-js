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
  constructor(boolean = true) {
    this.isDirect = boolean;
  }
  ciphering(message, key, isDirect) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    const upperMessage = message.toUpperCase();
    const fullKey = key.repeat(Math.ceil(upperMessage.length / key.length)).toUpperCase();
    const res = [];
    for (let m = 0, k = 0; m < upperMessage.length; m++, k++) {
      if (upperMessage[m].charCodeAt() == 32) k--;
      if (upperMessage[m].charCodeAt() < 65 || upperMessage[m].charCodeAt() > 90) res.push(upperMessage[m]);
      else {
        let index = upperMessage.charCodeAt(m) - 65;
        let ofset = fullKey.charCodeAt(k) - 65;
        res.push(String.fromCharCode(65 + (isDirect ? index + ofset : index - ofset + 26) % 26));
      }
    }
    if (this.isDirect) return res.join('');
    return res.reverse().join('');
  }
  encrypt(message, key) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.ciphering(message, key, true);
  }
  decrypt(message, key) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.ciphering(message, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine
};
