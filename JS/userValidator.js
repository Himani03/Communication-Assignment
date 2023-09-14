let userValidationHandler = () => {
  let validEmail = [];
  let validPass = [];
  let userString = JSON.parse(localStorage.getItem("usersList"));
  for (i in userString) {
    validEmail.push(i.email);
    validPass.push(i.password);
  }
  console.log(validEmail);
  console.log(validPass);
};
