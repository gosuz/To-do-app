let total_hrs = 0;
let total_min = 0;
let hrs = 0;
let min = 0;

const todo = document.querySelector("#todo");
const list = document.querySelector("#list");
const addTask = document.querySelector("#addTask");
const form = document.querySelector("form");
// const displayTotal = document.querySelector("#displayTotal");

addTask.addEventListener("click", (event) => {
  // when the submit button is clicked it should either:
  if (todo.value === ''){
    alert("Please enter a task");
    // console.log("empty task");
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = todo.value;
    list.appendChild(li); // <ul> <li>hr min</li> </ul>

    let tspan = document.createElement("span");
    hrs = parseInt(form.elements.hrs.value, 10);
    min = parseInt(form.elements.min.value, 10);

    tspan.classList.add("time");
    let total = `${hrs}hrs ${min}min`;
    tspan.innerHTML = `${hrs}hrs ${min}min`;
    li.appendChild(tspan);
    //

    let span = document.createElement("span");
    span.classList.add("x");
    span.innerHTML = "\u00d7";    // Creating x
    // append the span onto the li
    li.appendChild(span);

    total_hrs += hrs;
    total_min += min;

    if (total_min >= 60){
      // You want to update the total hrs and minutes each time you add task

      // Convert it into hrs and minutes
      let conv_hrs = Math.floor((total_min/60));
      let conv_min = total_min % 60;

      // then add the hrs into the total_hrs
      total_hrs = conv_hrs + total_hrs;
      total_min = conv_min;
      total = `${total_hrs}hrs ${total_min}min`;
      // And reassign
    }


    console.log(`This is the total hrs: ${total_hrs}`);
    console.log(`This is the total min: ${total_min}`);
    total = `${total_hrs}hrs ${total_min}min`;

    // Only want to update and show the newest one
    document.getElementById("displayTotal").textContent = total;
    saveData()
  }
  todo.value = '';
  hrs.value = '';
  min.value = '';
});


// Add event listener for when the checkmark is clicked (the li element)
list.addEventListener("click", (event) => {
  if(event.target.tagName === "LI"){
    event.target.classList.toggle("checked");
    // for unchecked
    // Add back the time
    if(event.target.classList != "checked"){
      console.log("Unchecked");
      // Add the time into the total
      console.log(`Total hrs in click event listnener ${hrs}`);
      console.log(`Total hrs in click event listnener ${min}`);
    }
    else{
      console.log("Checked")
      // Substract the time from the total

    }
    saveData();
  }
  else if(event.target.tagName === "SPAN"){
    event.target.parentElement.remove();
    // make it uncheck and minus stuff
    // total = total hrs - total min
    saveData();
  }
});


function saveData(){
  localStorage.setItem("data", list.innerHTML);
  localStorage.setItem("time", displayTotal.innerHTML);
}

function display() {
  list.innerHTML = localStorage.getItem("data");
  displayTotal.innerHTML = localStorage.getItem("time");
}
display();


// add event listener for span (x) -> delete item
// const x = document.querySelectorAll(".list-task span");
// x.addEventListener("click", (event) => {
//   console.log("helloo");
// });

// Create a function
// event listener (he's creating a function to run it)
  // but we can use event listener on the click, and make it either create a message saying add something or submitting and showing the task



/**
If it was for normal calculations:
1. Get total hrs
2. Get total minutes


Task:
1. Get input from user (hrs and minutes)
let hrs = hrs.value
let min = min.value

2. Add the total
2.1 let total_hrs += hrs
2.2 let total_min += min
      if total_min >= 60 (convert it into hrs and minutes)
      Then add hrs to total_hrs       and min to total_min

Either:
1. get total_min = ((hrs * 60) + min )
then reconvert this back into total hrs and min when displaying

2. get total=  total_hrs  + total_min
total_hrs (in hrs)
toal_min (in min)

then if minute >= 60   convert it into hrs and minutes
And add them together


possibly a loop inside the else statement??

*/


// 2 issues:
// 1. When I remove the thing from the time doesn't change
// 2. If i refresh the page, then add the time, the current time is replaced by the new time (it doesn't add onto the current time)
