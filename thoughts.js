list.addEventListener("click", (event) => {
// When you click on add task do the following

  if(event.target.tagName === "LI"){
    // Check if the element is an LI, if it is
    // Toggle the class of the LI to checked
    event.target.classList.toggle("checked");

    // If you click on the list
    // Adding a check
    if(event.target.classList == "checked"){
      console.log("checked");
      //
    }

    // Add a check == add hrs, but only for the click
    // Minus check == minus hrs, but only for the click

    else



    saveData();
  }
