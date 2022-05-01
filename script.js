const list = document.querySelector('#lista-tarefas')
const input = document.querySelector('#texto-tarefa')
const button = document.querySelector("#criar-tarefa")

function createTask(){

const task = document.createElement('li')
task.innerText = input.value
list.appendChild(task)
input.value = ''
}

button.addEventListener('click', createTask)


console.log(list)