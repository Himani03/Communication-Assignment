//first function which runs when user tries to edit in user list
// the main purpose of this is to store the edit user Id to local storage
let editUserStorageHandler = (editId) => {
    //adding the edit user details as a temporary local storage
    localStorage.setItem("editUserId", editId);
    document.location.replace("./edit-user.html");
  };
  
  //this function is responsible for showing the current user details in the placeholder
  let editUserHandler = () => {
    //redirect syntax
    if (!Boolean(localStorage.getItem("editUserId"))) {
      document.location.replace("./users-list.html");
    }
    //array positon of current user
    let usersList = JSON.parse(localStorage.getItem("usersList"));
    for (i = 0; i < usersList.length; i++) {
      if (usersList[i].id == localStorage.getItem("editUserId")) {
        document.getElementById("name").value = usersList[i].name;
        document.getElementById("email").value = usersList[i].email;
        break;
      }
    }
  };
  
  let editUserSubmissionHandler = () => {
    event.preventDefault();
    //storing the value and field value validation
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if (name.length < 4) {
      alert("Enter a Valid user name");
      return false;
    } else if (isValidEmail.test(email) == false) {
      alert("Enter a Valid Email");
      return false;
    }
    //updating the user entered Value to the local storage
    let usersList = JSON.parse(localStorage.getItem("usersList"));
    for (i = 0; i < usersList.length; i++) {
      if (usersList[i].id == localStorage.getItem("editUserId")) {
        usersList[i].name = name;
        usersList[i].email = email;
        break;
      }
    }
    localStorage.setItem("usersList", JSON.stringify(usersList));
    localStorage.removeItem("editUserId");
    //updating the activeUser info incase
    let activeUser = JSON.parse(localStorage.getItem("activeUser"));
    let activeUserId = activeUser.id;
    for (i = 0; i < usersList.length; i++) {
      if (usersList[i].id === activeUserId) {
        activeUser.id = usersList[i].id;
        activeUser.name = usersList[i].name;
        activeUser.email = usersList[i].email;
        activeUser.password = usersList[i].password;
        break;
      }
    }
    activeUser = JSON.stringify(activeUser);
    alert(activeUser);
    localStorage.setItem("activeUser", activeUser);
    document.location.replace("./users-list.html");
    return false;
  };
  