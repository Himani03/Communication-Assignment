let usersList = () => {
  userArray = JSON.parse(localStorage.getItem("usersList"));
  //current user information
  let userHTML = ``;
  //retreving the ID of the current user
  let activeUserID = JSON.parse(localStorage.getItem("activeUser")).id;
  //updating the inner html
  userArray.forEach((user) => {
    userHTML += `<tr>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td><button onclick="editUserStorageHandler(${user.id})">Edit</button> | <button id="user-${user.id}" onclick="confirmModalHandler(${user.id})">Delete</button></td>
          </tr>`;
  });

  document.getElementById("usersList").innerHTML = userHTML;
  let activeUserClass = "user-" + activeUserID;
  document.getElementById(activeUserClass).disabled = true;

};
