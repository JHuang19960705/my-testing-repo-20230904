// 變成object
const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, { 
  name: 'wash dishes',
  dueDate: '2022-12-23'
  }];

renderTodolist();

function renderTodolist(){
  let todoListHTML = '';

  for ( let i = 0; i < todoList.length; i++ ) {
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
  }
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
  
}


/*
const todoList = []; //It's called empty array.
*/

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  console.log(name);

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  console.log(dueDate);

  todoList.push({
    name ,     //name: name,
    dueDate  //dueDate: dueDate
    });
  console.log(todoList);

  inputElement.value = ''; // Reset value.
  
  renderTodolist();
  
}

