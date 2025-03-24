let message = 'hello world';
document.write('message:', message);

let md1 = forge.md.md5.create();
let md2 = forge.md.sha1.create();
let md3 = forge.md.sha256.create();
let md4 = forge.md.sha384.create();
let md5 = forge.md.sha512.create();

md1.update(message);
md2.update(message);
md3.update(message);
md4.update(message);
md5.update(message);

let result1 = md1.digest().toHex();
let result2 = md2.digest().toHex();
let result3 = md3.digest().toHex();
let result4 = md4.digest().toHex();
let result5 = md5.digest().toHex();

console.log('입력 메시지:', message);

console.log('MD5 hash:', result1, result1.length);
console.log('SHA1 hash:', result2, result2.length);
console.log('SHA256 hash:', result3, result3.length);
console.log('SHA384 hash:', result4, result4.length);
console.log('SHA512 hash:', result5, result5.length);

document.write('<br> MD5 hash: ', result1);
document.write('<br> SHA1 hash: ', result2);
document.write('<br> SHA256 hash: ', result3);
document.write('<br> SHA384 hash: ', result4);
document.write('<br> SHA512 hash: ', result5);
