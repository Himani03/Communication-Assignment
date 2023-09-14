let loginHandler = () => {
  let loginEmail = document.getElementById("email").value;
  let loginPass = document.getElementById("password").value;
  let isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  let existingUsers, userExist,id;
  //  validation
  if (isValidEmail.test(loginEmail) === false || loginEmail === "" || loginEmail === null) {
    alert("Enter a Valid Email");
    return false;
  }
  // Validating if the value exists in the local storage
  if (localStorage.getItem("usersList") !== null) {
    existingUsers = JSON.parse(localStorage.getItem("usersList"));
    userExist = false;
  }
  // validation

  for (count = 0; count < existingUsers.length; count++) {
    if (existingUsers[count].email === loginEmail) {
      id = count;
      break;
    }
    if (count === existingUsers.length - 1) {
      alert(
        "Email Not found!"
      );
      return false;
    }
  }
  //password Validation
  if (existingUsers[id].password === loginPass) {
    activeUserString = JSON.stringify(existingUsers[id]);
    localStorage.setItem("activeUser", activeUserString);
    return true;
  } else {
    alert("Password do not match the existing data, please revalidate");
    return false;
  }
};
