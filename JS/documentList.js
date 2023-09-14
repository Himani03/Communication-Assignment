let documentListIntializationHandler = () => {
  let documentList = Boolean(localStorage.getItem("documentList"))
    ? localStorage.getItem("documentList")
    : JSON.stringify([]);
  let documentString = "";
  let activeUser = JSON.parse(localStorage.getItem("activeUser"));
  let activeUserId = activeUser.id;
  let userExists = false;
  let positionOfUser;
  localStorage.setItem("documentList", documentList);
  documentList = JSON.parse(documentList);
  for (i = 0; i < documentList.length; i++) {
    if (documentList[i].activeUserId == activeUserId) {
      userExists = true;
      positionOfUser = i;
      break;
    }
  }
  if (userExists) {
    for (i = 0; i < documentList[positionOfUser].fileNames.length; i++) {
      documentString += `<tr>
        <td>${documentList[positionOfUser].fileNames[i]}</td>
        <td>${documentList[positionOfUser].fileUploads[i]}</td>
        <td><button onclick="editDocumentModalShowHandler(${i})">Edit</button> | <button onclick="deleteDocumentModalShowHandler(${i})">Delete</button></td>
        </tr>`;
    }
  }
  document.getElementById("documentUploadList").innerHTML = documentString;
};

//update the css to show the modal
let documentModalShowHandler = (id) => {
  document.getElementById(id).style.display = "block";
};

//update the css to hide the modal
let documentModalCancellationHandler = (id) => {
  document.getElementById(id).style.display = "none";
};

//on click event to add the document
let documentUploadHandler = () => {
  event.preventDefault();
  let activeUser = JSON.parse(localStorage.getItem("activeUser"));
  let fileName = document.getElementById("fileName").value;
  let fileUpload = document.getElementById("fileUpload").value;
  //validating the empty fields
  if (!Boolean(fileName.trim())) {
    alert("Enter a file Name!");
    return false;
  }
  if (!Boolean(fileUpload.trim())) {
    alert("Upload a file to continue");
    return false;
  }
  //to extract the file name separately
  let fileUploadName = fileUpload.split(/[\\]/)[2];
  //now working on storing the new file to local storage
  activeUserName = activeUser.name;
  activeUserId = activeUser.id;
  let userExists = false;
  let documentList = JSON.parse(localStorage.getItem("documentList"));
  for (i = 0; i < documentList.length; i++) {
    if (documentList[i].activeUserId == activeUserId) {
      documentList[i].fileNames.push(fileName);
      documentList[i].fileUploads.push(fileUploadName);
      userExists = true;
      break;
    }
  }
  if (!userExists) {
    documentList.push({
      activeUserId: activeUserId,
      activeUserName: activeUserName,
      fileNames: [fileName],
      fileUploads: [fileUploadName],
    });
  }
  documentList = JSON.stringify(documentList);
  localStorage.setItem("documentList", documentList);
  location.reload();
  return true;

};

//Edit Modal for documents 
let editDocumentModalShowHandler = (listNumber) => {
  localStorage.setItem("editListNumber", listNumber);
  document.getElementById("modal-edit").style.display = "block";
  let activeUser = JSON.parse(localStorage.getItem("activeUser"));
  let activeUserId = activeUser.id;
  let positionOfUser;
  let documentList = JSON.parse(localStorage.getItem("documentList"));
  for (i = 0; i < documentList.length; i++) {
    if (documentList[i].activeUserId == activeUserId) {
      positionOfUser = i;
      break;
    }
  }
  let currentFileName = documentList[positionOfUser].fileNames[listNumber];
  document.getElementById("fileNameEdit").value = currentFileName;
  //document.getElementById("fileNameEdit").placeholder = currentFileName;
};

let editDocumentModalHideHandler = () => {
  localStorage.removeItem("editListNumber");
  document.getElementById("modal-edit").style.display = "none";
};

//now editing the field which includes validation and updation

let editDocumentUploadHandler = () => {
  event.preventDefault();
  let documentList = JSON.parse(localStorage.getItem("documentList"));
  let editListNumber = localStorage.getItem("editListNumber");
  let activeUser = JSON.parse(localStorage.getItem("activeUser"));
  let activeUserId = activeUser.id;
  let updatedFileName = document.getElementById("fileNameEdit").value;
  let positionOfUser;
  if (!Boolean(updatedFileName.trim())) {
    alert("Enter the File Name");
    return false;
  }
  for (i = 0; i < documentList.length; i++) {
    if (documentList[i].activeUserId == activeUserId) {
      positionOfUser = i;
      break;
    }
  }
  documentList[positionOfUser].fileNames[editListNumber] = updatedFileName;
  documentList = JSON.stringify(documentList);
  localStorage.setItem("documentList", documentList);
  localStorage.removeItem("editListNumber");
  location.reload();
  document.getElementById("modal-edit").style.display = "none";
};

//deleting modal show and hide

let deleteDocumentModalShowHandler = (listNumber) => {
  localStorage.setItem("deleteListNumber", listNumber);
  document.getElementById("modal-delete").style.display = "block";
};

let deleteDocumentModalHideHandler = () => {
  localStorage.removeItem("deleteListNumber");
  document.getElementById("modal-delete").style.display = "none";
};

//deleting the file from the list

let deleteDocumentHandler = () => {
  let documentList = JSON.parse(localStorage.getItem("documentList"));
  let deleteListNumber = localStorage.getItem("deleteListNumber");
  let activeUser = JSON.parse(localStorage.getItem("activeUser"));
  let activeUserId = activeUser.id;
  let positionOfUser;
  for (i = 0; i < documentList.length; i++) {
    if (documentList[i].activeUserId == activeUserId) {
      positionOfUser = i;
      break;
    }
  }
  documentList[positionOfUser].fileNames.splice(deleteListNumber, 1);
  documentList[positionOfUser].fileUploads.splice(deleteListNumber, 1);
  documentList = JSON.stringify(documentList);
  localStorage.setItem("documentList", documentList);
  localStorage.removeItem("deleteListNumber");
  location.reload();
};
