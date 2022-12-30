export function fromCipher(cipher, str) {
    str = str.toUpperCase();
    let s = '';
    for(let i = 0; i < str.length; i++) {
        s += Object.keys(cipher).find(key => cipher[key] === str[i]);
    }
    return s;
}

