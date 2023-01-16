//password-generator.js
const generatePassword = require("generate-password");

function generatePass() {
  var password = generatePassword.generate({
    length: 10,
    numbers: true,
  });
  console.log(password);
}
generatePass();
