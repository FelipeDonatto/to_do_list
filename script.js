const list = document.querySelector('#lista-tarefas')
const input = document.querySelector('#texto-tarefa')
const button = document.querySelector("#criar-tarefa")
const button2 = document.querySelector("#apaga-tudo")
const button3 = document.querySelector("#remover-finalizados")
const button4 = document.querySelector("#salvar-tarefas")
const button5 = document.querySelector("#mover-cima")
const button6 = document.querySelector("#mover-baixo")
const button7 = document.querySelector('#remover-selecionado')


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
            whitebg[i].id = ''
        }
    }
    const target = event.target
    
    target.id = 'selected'
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

function moveDown(){
    if(document.querySelector('#selected')&&document.querySelector('#selected').nextElementSibling){
const selected = document.querySelector('#selected')
let array= []
array.push(selected.innerText)
array.push(selected.nextElementSibling.innerText)
selected.innerText = array[1]
selected.id = ''
selected.nextElementSibling.innerText = array[0]
selected.nextElementSibling.id = 'selected'
console.log(array)
    }
}

function moveUp(){
    if(document.querySelector('#selected')&& document.querySelector('#selected').previousElementSibling){
    const selected = document.querySelector('#selected')
    let array= []
    array.push(selected.innerText)
    array.push(selected.previousElementSibling.innerText)
    selected.innerText = array[1]
    selected.id = ''
    selected.previousElementSibling.innerText = array[0]
    selected.previousElementSibling.id = 'selected'
    console.log(array)
    }
    }

function removeSelected(){
    const selected = document.querySelectorAll('#selected')
    for(i = 0; i< selected.length; i+= 1){
        let completedToErase = document.querySelector('#selected')
        completedToErase.remove()
    }
}



window.onload = onloadStorage

button7.addEventListener('click', removeSelected)
button6.addEventListener('click', moveDown)
button5.addEventListener('click', moveUp)
button4.addEventListener('click', save)
button3.addEventListener('click', removeCompleted)
button2.addEventListener('click', apagar)
list.addEventListener('click', grayBg)
list.addEventListener('dblclick', strikethrough)

