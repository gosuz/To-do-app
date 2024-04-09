// 1. Select an element
  // .querySelector()

  // select each input and the submission button
// const todo = document.querySelector("#todo");
// const hr = document.querySelector("#hr");
// const min = document.querySelector("#min");
// const addTask = document.querySelector("#addTask");

// 	2. Listen to an event
// Event listener for each thing -> But you get each thing from listening to the submit button.

// Once you listen to the input, you have to insert it into the list (should include the task, the hrs, minutes)


  // .addEventListner("click:() => {}

// 	3. Change the dOM


const todo = document.querySelector("#todo");
const list = document.querySelector("#list");
const addTask = document.querySelector("#addTask");

// console.log(todo.value);

addTask.addEventListener("click", (event) => {
  // when the submit button is clicked it should either:
  if (todo.value === ''){
    alert("Please enter a task");
    // console.log("empty task");
  }
  else {
    // Get the value we got from the user, and add it into the inner HTML (in list)
    // todo.value -> add it into a list
    let li = document.createElement("li");
    li.innerHTML = todo.value;
    // // let li = `<li>${todo.value}</li>`;
    // list.innerHTML += li;
    list.appendChild(li); // <ul> <li></li> </ul>

    // You want to create an li
    // You want to be able to select whatever li element we just created

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";    // Creating x
    // append the span onto the li
    li.appendChild(span);
  }
  todo.value = '';
});


// Add event listener for when the checkmark is clicked (the li element)
list.addEventListener("click", (event) => {
  if(event.target.tagName === "LI"){
    event.target.classList.toggle("checked");
  }
  else if(event.target.tagName === "SPAN"){
    event.target.parentElement.remove();
  }
});


// add event listener for span (x) -> delete item
// const x = document.querySelectorAll(".list-task span");
// x.addEventListener("click", (event) => {
//   console.log("helloo");
// });

// Create a function
// event listener (he's creating a function to run it)
  // but we can use event listener on the click, and make it either create a message saying add something or submitting and showing the task
