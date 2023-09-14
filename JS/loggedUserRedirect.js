let loggedUserRedirect = () => {
    //the goal of this function is to redirect the logged in user out from the login page
    if (Boolean(localStorage.getItem("activeUser"))) {
      alert("Welcome back!");
      document.location.replace("./login-success.html");
    }
  };
  