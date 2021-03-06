var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");
var storedValues = localStorage.getItem("myItems");

// Form submit event
form.addEventListener("submit", addItem);

// Delete event
itemList.addEventListener("click", removeItem);

// Filter event
filter.addEventListener("keyup", filterItems);



// Add item
function addItem(e) {
  e.preventDefault();

  //Get input value
  var newItem = document.getElementById("item").value;

  // Create new li element
  var li = document.createElement("li");

  // Add class
  li.className = "list-group-item";

  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement("button");

  // Add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  // Append text node
  deleteBtn.appendChild(document.createTextNode("X"));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
  
for(let i=0; i<localStorage.length; i++){
    const key = i;
    const value = newItem.toString();
  
    if(value){
        localStorage.setItem(key,value);
        location.reload();
    }
}
for(let i=0; i<localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    itemList.innerHTML = `${value}<br/>`;
}
 
}


// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter items
function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();

  // Get list items
  var items = itemList.getElementsByTagName("li");

  // Convert HTMLCollection to an array
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
        item.style.display = "block";
        /*document.addEventListener('keydown', function(){
        var UP = 38;
        var DOWN = 40;
        var ENTER = 13;

        var getKey = function(e) {
        if(window.event) { return e.keyCode; }  // IE
        else if(e.which) { return e.which; }    // Netscape/Firefox/Opera
        };

        var keynum = getKey(e);

        if(keynum === UP || keynum === DOWN) {
            items[0].style.fill = 'red';
        }

        if(keynum === ENTER) {
        //Act on current selection
        }
        });
        */
        item.addEventListener('click', function(event){
            filter.value = itemName;
            for(let i=0; i<items.length; i++){
                items[0].firstChild.textContent = itemName;
                items[0].style.display="block";
                items[i].style.display = "none";
            }
        });
    } else {
      item.style.display = "none";
    }
  });
}
/*
window.onkeydown = function(e) { 
  let items = document.getElementById("items");
    if( e.keyCode === 38 || e.keyCode === 40) { 
       items.firstChild.backgroundColor ="red";
    } 
}; 
*/

let listItems = document.getElementsByClassName("list-group-item");

let searchField = document.getElementById("filter");

let inputField = document.getElementById("item");
let i =0;

document.addEventListener("keydown", function(e) {
    var key = e.keyCode;
      if(key===38 || key === 40){
        listItems[i].style.backgroundColor = "lightgreen";
      }
      if (key === 13) {
        inputField.value  = listItems[i].innerText;
        console.log(inputField.value);
      }
    
})


