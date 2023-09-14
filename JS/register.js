let registrationHandler = () => {
  let newUser;
  let userString = JSON.parse(localStorage.getItem("usersList"));
  let id = Date.now();
  let name = document.getElementById("userName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

  //General Inputs validation
  if (isValidEmail.test(email) === false) {
    alert("Enter a Valid Email");
    return false;
  } else if (password != confirmPassword) {
    alert("Passwords Do not Match!");
    return false;
  } else {
    //storing values if all validations are passed
    newUser = [{
      id: id,
      name: name,
      email: email,
      password: password,
    }];
    if (userString == null) {
      userString = JSON.stringify(newUser);
      localStorage.setItem("usersList", userString);
      return true;
    }
    else {
      userString.push(newUser);
      userString = JSON.stringify(userString);
      alert(userString);
      localStorage.setItem("usersList", userString);
      return true;
    }
  }
};
