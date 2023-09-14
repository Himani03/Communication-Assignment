let loginValidationHandler = () => {
  //if the user is not logged in, then it will return false
  //if user is present, it will be taking user to destination page
  if (Boolean(!localStorage.getItem("activeUser"))) {
    document.querySelector("body").style.display = "none";
    setTimeout(() => {
      alert("Please login for access");
      document.location.replace("./login.html");
    }, "200");
  }
};