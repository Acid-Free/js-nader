const email = "monkey@trees.com";

const emailPattern = /\.com$/;

console.log(emailPattern.test(email));
console.log(email.match(emailPattern));