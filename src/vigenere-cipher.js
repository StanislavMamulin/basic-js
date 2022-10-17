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
  #directMachine;

  constructor(direction = true) {
    this.#directMachine = direction;
  }

  encrypt(message, key) {
    // check input parameters
    if (
      typeof message === 'undefined' ||
      typeof key === 'undefined'
    ) {
      throw new Error('Incorrect arguments!');
    }

    let cipherText="";
    const alphabet = /[a-zA-Z]/; // encrypt only those characters
  
    for (let i = 0, j = 0; i < message.length; i += 1)
    {
        const char = message[i].toUpperCase();
        const keyChar = key[j % key.length].toUpperCase();
        
        // converting in range 0-25
        if (alphabet.test(char)) {
            let x = (char.charCodeAt(0) + keyChar.charCodeAt(0)) % 26;
    
            // convert into alphabets (ASCII)
            x += 'A'.charCodeAt(0);
    
            cipherText += String.fromCharCode(x);
            j += 1;
        } else {
            cipherText += char;
        }
    }

    if (!this.#directMachine) {
      return reverseString(cipherText);
    }
    return cipherText;
  }

  decrypt(encryptedMessage, key) {
    // check input parameters
    if (
      typeof encryptedMessage === 'undefined' ||
      typeof key === 'undefined'
    ) {
      throw new Error('Incorrect arguments!');
    }

    let originalText="";
    const alphabet = /[a-zA-Z]/;  // decrypt only those characters
  
    for (let i = 0, j = 0 ; i < encryptedMessage.length ; i += 1)
    {
      const char = encryptedMessage[i].toUpperCase();
      const keyChar = key[j % key.length].toUpperCase();

      // converting in range 0-25
      if (alphabet.test(char)) {
        let x = (char.charCodeAt(0) - keyChar.charCodeAt(0) + 26) % 26;

        // convert into alphabets (ASCII)
        x += 'A'.charCodeAt(0);

        originalText += String.fromCharCode(x);
        j += 1;
      } else {
        originalText += char;
      } 
    }

    if (!this.#directMachine) {
      return reverseString(originalText);
    }
    return originalText;
  }
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

module.exports = {
  VigenereCipheringMachine
};
