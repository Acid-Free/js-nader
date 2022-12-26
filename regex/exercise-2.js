const email = "monkey@trees.com";

const emailPattern = /[a-zA-z]*@[a-zA-z]*\.com$/;


console.log(emailPattern.test(email));
console.log(email.match(emailPattern));