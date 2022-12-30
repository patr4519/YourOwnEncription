export function toCipher(cipher, str) {
    str = str.toLowerCase();
    let s = '';
    for (let i = 0; i < str.length; i++) {
        s += cipher[str[i]];
    }
    return s;
}

