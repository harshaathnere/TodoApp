const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


todoButton.addEventListener('click', addTodo);

function addTodo(e){

   //console.log("hello")
   // prevwnting before submitting
   e.preventDefault();

   const todoDiv = document.createElement('div');
   todoDiv.classList.add('todo');
   const newTodo = document.createElement('li');
   newTodo.innerText = 'hey';
   newTodo.classList.add("todo-item")
   todoDiv.appendChild(newTodo);

   // check mark button
   const completedButton = document.createElement('button');
   completedButton.innerHTML = '<i class ="fas fa-check"></i>';
   completedButton.classList.add('completed-btn');
   todoDiv.appendChild(completedButton)

      // check trash button
      const trashButton = document.createElement('button');
      trashButton.innerHTML = '<i class ="fas fa-trash"></i>';
      trashButton.classList.add('completed-btn');
      todoDiv.appendChild(trashButton)


      // append to list
      todoList.appendChild(todoDiv)
}
