const list = document.querySelector('#lista-tarefas')
const input = document.querySelector('#texto-tarefa')
const button = document.querySelector("#criar-tarefa")
const button2 = document.querySelector("#apaga-tudo")
const button3 = document.querySelector("#remover-finalizados")
const button4 = document.querySelector("#salvar-tarefas")


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
    const allLi = document.querySelectorAll('li').length
    const whitebg = document.querySelectorAll('li')
    if(allLi > 0){
        for(let i = 0; i<allLi; i+= 1){
            whitebg[i].style = ''
        }
    }
    const target = event.target
    target.style.backgroundColor = 'grey'
}
}

function strikethrough(event){
    const clickTarget = event.target
    const trueOrNot = clickTarget.classList.contains('completed')
    if(event.target.id != 'lista-tarefas' && trueOrNot == false){
    clickTarget.classList.add('completed')
    }else if(trueOrNot == true){
        clickTarget.classList.remove('completed')
    }
}
function apagar(){
        list.innerHTML = ''
}

function removeCompleted(){
    const completed = document.querySelectorAll('.completed')
    for(i = 0; i< completed.length; i+= 1){
        let completedToErase = document.querySelector('.completed')
        completedToErase.remove()
    }
}

function save(){
    let list = document.getElementById('lista-tarefas').innerHTML
    localStorage.setItem('list', list)
}

function onloadStorage(){
    let listContent = localStorage.getItem('list')
    let list =  document.getElementById('lista-tarefas')
    list.innerHTML = listContent
}

window.onload = onloadStorage
button4.addEventListener('click', save)
button3.addEventListener('click', removeCompleted)
button2.addEventListener('click', apagar)
list.addEventListener('click', grayBg)
list.addEventListener('dblclick', strikethrough)

