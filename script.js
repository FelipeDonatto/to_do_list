const list = document.querySelector('#lista-tarefas')
const input = document.querySelector('#texto-tarefa')
const button = document.querySelector("#criar-tarefa")

function createTask(){

const task = document.createElement('li')
if(input.value != ''){
task.innerText = input.value
list.appendChild(task)
input.value = ''
}
}

button.addEventListener('click', createTask)

function grayBg(event){
    if(event.target.id != 'lista-tarefas'){
    const target = event.target
    target.style.backgroundColor = 'grey'
}
}

list.addEventListener('click', grayBg)

console.log(list)