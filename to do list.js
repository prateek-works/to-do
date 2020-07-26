
// getting all the required elements
var mainContainer = document.getElementById("mainContainer");
var text = document.getElementById("emptyList");
var list = document.getElementById("defaultList");
var listItems = document.getElementsByTagName("li");
var newElement = document.getElementById("newElement");
var addItem = document.getElementById("addItem");

// making the function call on click at the plus icon
// to create a new task
addItem.addEventListener('click' , newTask);

//creating an array to use this for counting total
//number of tasks in the list
var totalList = [];
var total = document.createElement('totalTask');
total.id = "totalTasks";
total.textContent = "Total tasks:  " + totalList.length;
mainContainer.appendChild(total);



// checking if the list is empty
function checkForEmpty() {
    if(totalList.length == 0){
  text.innerHTML = "No task added";
  text.style.border = "2px solid black";
    }
};

// for clearing the empty list text
function clearEmpty() {
  if(document.getElementById("newElement").value != ""){
  text.textContent = "";
  text.style.border = "0px";
  }
}

// for adding a new task 
function newTask() {
  clearEmpty();
  var li = document.createElement("li");
  var inputValue = newElement.value;
  var note = document.createTextNode(inputValue);
  li.appendChild(note);
    if (inputValue === '') {
    alert("Empty task cannot be created.");
  } else {
      document.getElementById("defaultList").appendChild(li);
      totalList.push(1);
      total.textContent = "Total tasks:  " + totalList.length;  
  }

  // clearing the input area after a task is added
  document.getElementById("newElement").value = "";

  // for deleting a task
  var remove = document.createElement("removeButton");
  remove.className = "deleteTask";
  remove.innerHTML = '<i class="fas fa-trash"></i>';
  li.appendChild(remove);

  // handling click on the delete button
 var close = document.getElementsByClassName("deleteTask");
  for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      totalList.pop(1); 
      total.textContent = "Total tasks:  " + totalList.length;
      checkForEmpty();

    }
  }
}
// for handling the state of task as done or not done
var list = document.querySelector('ul');
list.addEventListener('click', function(check) {
  if (check.target.tagName === "LI") {
    check.target.classList.toggle('checked');
  }
}, false);