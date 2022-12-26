const phoneNumber = "020-382-6940";
const phonePattern = /^\d\d\d-\d\d\d-\d\d\d\d$/;
console.log(phonePattern.test(phoneNumber));
console.log(phoneNumber.match(phonePattern));