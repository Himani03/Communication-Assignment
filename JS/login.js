let loginHandler = () => {
  let count;
  let valid = 0;
  let id;
  let activeUserString;
  let loginEmail = document.getElementById("email").value;
  let loginPass = document.getElementById("password").value;
  let isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  //  validation
  if (isValidEmail.test(loginEmail) === false || loginEmail === "" || loginEmail === null) {
    alert("Enter a Valid Email");
    return false;
  }
  // Validating if the value exists in the local storage
  //let existingUsers = JSON.parse(localStorage.getItem("usersList"));
  let existingUsers = localStorage.getItem("usersList");
  alert(existingUsers["id"]);
  alert(type(existingUsers));
  //email validation
  for (count = 0; count < existingUsers.length; count++) {
    if (existingUsers[count].email === loginEmail) {
      valid = valid + 1;
      id = count;
      console.log(id);
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
    alert("Password do not match");
    return false;
  }
};
