//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOptions = document.querySelector('.filter-todo');

// event lisenters
document.addEventListener('DOMContentLoaded',getTodos)
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOptions.addEventListener('click',filterTodo)


//function
function addTodo(e){

   //console.log("hello")
   // prevwnting before submitting
   e.preventDefault();

   const todoDiv = document.createElement('div');
   todoDiv.classList.add('todo');
   const newTodo = document.createElement('li');
   newTodo.innerText = todoInput.value;
   newTodo.classList.add("todo-item")
   todoDiv.appendChild(newTodo);
   // Add todo localstroge
   saveLocalTodos(todoInput.value);

   // check mark button
   const completedButton = document.createElement('button');
   completedButton.innerHTML = '<i class ="fas fa-check"></i>';
   completedButton.classList.add('completed-btn');
   todoDiv.appendChild(completedButton)

      // check trash button
      const trashButton = document.createElement('button');
      trashButton.innerHTML = '<i class ="fas fa-trash"></i>';
      trashButton.classList.add('trash-btn');
      todoDiv.appendChild(trashButton)


      // append to list
      todoList.appendChild(todoDiv)
      // clear todo input value
      todoInput.value ="";
}

function deleteCheck(e){
const item =e.target;

// Delete todo
if(item.classList[0] ==='trash-btn'){
    const todo = item.parentElement;
    //Animation
    todo.classList.add('fall');
    removeLocalTodos(todo);
    todo.addEventListener('transitionend',function(){
        todo.remove();
    })
   // todo.remove();
}
// check mark
if(item.classList[0] ==='completed-btn'){
    const todo = item.parentElement;
    todo.classList.toggle('completed')
}
}

// filter
function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
          switch(e.target.value){
              case "all":
                  todo.style.display = 'flex'
                  break; 
              case "completed":
                      if(todo.classList.contains('completed')){
                          todo.style.display = 'flex';
                      }
                      else {
                          todo.style.display = "none"
                      }
               case "uncompleted":
                   if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex'; 
                   }
                   else {
                    todo.style.display = "none"
                }
                   break;   
          }
    })
    //console.log(todos);
}
function saveLocalTodos(todo){
    // check  hey do i already have thing in there
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
    let todos;
     // check  hey do i already have thing in there
   
     if(localStorage.getItem('todos') === null){
         todos = [];
     }
     else{
         todos = JSON.parse(localStorage.getItem('todos'))
     }
     todos.forEach(function(todo){
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
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
           trashButton.classList.add('trash-btn');
           todoDiv.appendChild(trashButton)
     
     
           // append to list
           todoList.appendChild(todoDiv)
     })

}

function removeLocalTodos(todo){
    let todos;
    // check  hey do i already have thing in there
  
    if(localStorage.getItem('todos') === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    const todoIndex = todo.children[0].innerText
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem("todos",JSON.stringify(todos))
}