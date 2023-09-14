//showing the confirmation modal for deleting the user
let confirmModalHandler = (userId) => {
    localStorage.setItem("deleteUserId", userId);
    document.getElementById("modal").style.display = "block";
  };
  //cancelling the modal on clicking the cancel
  let deleteCancellationHandler = () => {
    document.getElementById("modal").style.display = "none";
    localStorage.removeItem("deleteUserId");
  };
  
  //Function for deleting the users
  let deleteUserHandler = () => {
    let userId = localStorage.getItem("deleteUserId");
    let usersList = JSON.parse(localStorage.getItem("usersList"));
    for (i = 0; i < usersList.length; i++) {
      if (usersList[i].id === userId) {

        usersList.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("usersList", JSON.stringify(usersList));
    localStorage.removeItem("deleteUserId");
    location.reload();
  };

    /*//Function for deleting the users
    let deleteUserChatHandler = () => {
      let dltUser = localStorage.getItem("deleteUserId");
      let chatList = JSON.parse(localStorage.getItem("allchats"));
      for (i = 0; i < chatList.length; i++) {
        if (chatList[i].userName === dltUser) {
          dltUser= chatList[i].
          chatList.splice(i, 1);
          break;
        }
      }
      localStorage.setItem("allchats", JSON.stringify(chatList));
      localStorage.removeItem("dltUser");
      location.reload();
    };*/