// Create a "close" button and append it to each list item
var spanList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < spanList.length; i++) {
  var closeBtn = document.createElement("SPAN");
  var textNode = document.createTextNode("\u00D7");
  closeBtn.className = "close";
  closeBtn.appendChild(textNode);
  spanList[i].appendChild(closeBtn);
}

// Click on a close button to hide the current list item
var closeAction = document.getElementsByClassName("close");
var i;

for (i = 0; i < closeAction.length; i++) {
  closeAction[i].onclick = function () {
    var clearContent = this.parentElement;
    clearContent.style.display = "none";

    //display remove notification
    var selectRemoveNotification = document.querySelector(".remove");
    selectRemoveNotification.style.opacity = "1";
    var deleteRemoveNotification = setInterval(function () {
      selectRemoveNotification.style.opacity = "0";
      clearInterval(deleteRemoveNotification);
    }, 1500);
  };
}

// Add a "checked" symbol when clicking on a list item
var selectList = document.querySelector("ul");
selectList.addEventListener("click", function (ev) {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("checked");
  }
});

// Create a new list item when clicking on the "Add" button
function createListItem() {
  var userInput = document.getElementById("user-input").value;
  var newListItem = document.createElement("li");
  var newListItemTextNode = document.createTextNode(userInput);
  newListItem.appendChild(newListItemTextNode);
  if (userInput === "") {
    alert("You must write something");
  } else {
    //make default items dissapear
    var selectDefaultObject = document.querySelectorAll(".defaultObject");
    selectDefaultObject.forEach((element) => {
      element.style.display = "none";
    });
    document.getElementById("my-ul").appendChild(newListItem);
    //display added notification
    var selectAddNotification = document.querySelector(".add");
    selectAddNotification.style.opacity = "1";
    var deleteAddNotification = setInterval(function () {
      selectAddNotification.style.opacity = "0";
      clearInterval(deleteAddNotification);
    }, 1500);
  }
  document.getElementById("user-input").value = "";

  for (i = 0; i < spanList.length; i++) {
    var closeBtn = document.createElement("SPAN");
    var textNode = document.createTextNode("\u00D7");
    closeBtn.className = "close";
    closeBtn.appendChild(textNode);
    spanList[i].appendChild(closeBtn);
  }

  for (i = 0; i < closeAction.length; i++) {
    closeAction[i].onclick = function () {
      var clearContent = this.parentElement;
      clearContent.style.display = "none";

      //display remove notification
      var selectRemoveNotification = document.querySelector(".remove");
      selectRemoveNotification.style.opacity = "1";
      var deleteRemoveNotification = setInterval(function () {
        selectRemoveNotification.style.opacity = "0";
        clearInterval(deleteRemoveNotification);
      }, 1500);
    };
  }
}

//ENTER KEY CODE
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    var userInput = document.getElementById("user-input").value;
    var newListItem = document.createElement("li");
    var newListItemTextNode = document.createTextNode(userInput);
    newListItem.appendChild(newListItemTextNode);
    if (userInput === "") {
      alert("You must write something");
    } else {
      //make default items dissapear
      var selectDefaultObject = document.querySelectorAll(".defaultObject");
      selectDefaultObject.forEach((element) => {
        element.style.display = "none";
      });
      document.getElementById("my-ul").appendChild(newListItem);
      //display added notification
      var selectAddNotification = document.querySelector(".add");
      selectAddNotification.style.opacity = "1";
      var deleteAddNotification = setInterval(function () {
        selectAddNotification.style.opacity = "0";
        clearInterval(deleteAddNotification);
      }, 1500);
    }
    document.getElementById("user-input").value = "";

    for (i = 0; i < spanList.length; i++) {
      var closeBtn = document.createElement("SPAN");
      var textNode = document.createTextNode("\u00D7");
      closeBtn.className = "close";
      closeBtn.appendChild(textNode);
      spanList[i].appendChild(closeBtn);
    }

    for (i = 0; i < closeAction.length; i++) {
      closeAction[i].onclick = function () {
        var clearContent = this.parentElement;
        clearContent.style.display = "none";

        //display remove notification
        var selectRemoveNotification = document.querySelector(".remove");
        selectRemoveNotification.style.opacity = "1";
        var deleteRemoveNotification = setInterval(function () {
          selectRemoveNotification.style.opacity = "0";
          clearInterval(deleteRemoveNotification);
        }, 1500);
      };
    }
  }
});
