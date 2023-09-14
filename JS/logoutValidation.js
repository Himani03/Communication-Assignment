let logoutValidationHandler = () => {
  localStorage.removeItem("activeUser");
  alert("successfully Logged out");
  window.location.replace("./logout.html");
};