// information about current active user
let activeUserInfoHandler = () => {
    let activeUserInfo = JSON.parse(localStorage.getItem("activeUser"));
    document.getElementById("userName").innerHTML = activeUserInfo.name;
  };
  
