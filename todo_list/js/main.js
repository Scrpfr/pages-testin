"use strict";

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

const ulTodos = document.querySelector('.todos');
const todoInput = document.querySelector('.input');
const todos = [];

const errTodoNotFound = todoId => `Todo with id ${todoId} not found`;

const getNewTodoId = todos =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  if (newTodo[todoKeys.text] == '') return 'f'
  todos.push(newTodo);
  todoInput.value = '';
  ulTodos.insertAdjacentHTML('beforeend', `
    <li todoLi="${newTodo[todoKeys.id]}" class="todo">
      <div class="todo-text">${newTodo[todoKeys.text]}</div>
      <div class="todo-actions">
        <button class="button-complete button" onclick="completeTodoById(todos, this)">&#10004;</button>
        <button class="button-delete button" onclick="deleteTodoById(todos, this)">&#10006;</button>
      </div>
    </li>
  `);
};

const completeTodoById = (todos, clickedBtn) => {
  const todoId = +clickedBtn.parentElement.parentElement.getAttribute('todoLi');
  const todo = todos.find(todo => todo[todoKeys.id] === todoId);

  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  if (todo[todoKeys.id]) clickedBtn.parentElement.parentElement.classList.toggle('completed');
};

const deleteTodoById = (todos, clickedBtn) => {
  const todoId = +clickedBtn.parentElement.parentElement.getAttribute('todoLi');
  const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  clickedBtn.parentElement.parentElement.remove();
};

createTodo(todos, 'Задача 1');