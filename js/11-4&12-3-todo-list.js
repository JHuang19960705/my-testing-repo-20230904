// 變成object
const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-23'
}];

renderTodolist();

document.querySelector('.js-add-todo')
.addEventListener('click', () => {
  addTodo();
});



function renderTodolist() {
  let todoListHTML = '';
  todoList.forEach( (todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div> 
      <div>${dueDate}</div> 
      <button onclick="
        // todoList.splice(${index}, 1);
        // renderTodolist();
      " class="js-delete-todo-button  delete-todo-button">delete</button>`;
    todoListHTML += html;
  });
 
  /*
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name } = todoObject;  //const name = todoObject.name;
    const { dueDate } = todoObject;  //const dueDate = todoObject.dueDate;
    const html = `
      <div>${name}</div> 
      <div>${dueDate}</div> 
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodolist();
      " class="delete-todo-button">delete</button>`;
    todoListHTML += html;
  }*/


  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
    
   // .addEventListener要放在.innerHTML 之後執行
   // .querySelectorAll 可以執行全部的class
   // 若用console.log()呈現，會發現.querySelectorAll會呈現很像是Array的List
   // List可以用.forEach()來執行
  document.querySelectorAll('.js-delete-todo-button')
  .forEach((deleteButton, index)=>{
    deleteButton.addEventListener('click',() => {
      todoList.splice(index, 1); // string才要${}
      renderTodolist();
    });
  });
      
      
      
      
  


}


/*
const todoList = []; //It's called empty array.
*/

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  console.log(name);

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    name,     //name: name,
    dueDate  //dueDate: dueDate
  });
  console.log(todoList);

  inputElement.value = '';

  renderTodolist();

}

