document.addEventListener("DOMContentLoaded", () => {
  // your code here


  // Grab necessary DOM elements 
  const form = document.querySelector('#create-task-form')
  const input = document.querySelector('#new-task-description')
  const ul = document.querySelector('#tasks')
  const select = document.querySelector('select[name="priority"]')


  // Define function to add form input to list
  const addTask = (event) => {
    event.preventDefault();
    const li = document.createElement('li')
    li.textContent = input.value;
    const delete_btn = document.createElement('button');
    delete_btn.textContent = "X";
    delete_btn.addEventListener("click", function (e) {
      //delete the parent li
      this.parentNode.remove(this.parentNode);
    });

    select.addEventListener("change", function (event) {
      if (event.target.value == "low") {
        li.style.color = "yellow"
      } else if (event.target.value == "medium") {
        li.style.color = "orange"
      }
      else if (event.target.value == "high") {
        li.style.color = "red"
      }
    })

    li.append(delete_btn);
    ul.append(li);


    form.reset();
  }


  // Listen to Submit events on form 
  form.addEventListener('submit', addTask);














});
