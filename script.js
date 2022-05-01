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



list.addEventListener('click', grayBg)
list.addEventListener('dblclick', strikethrough)

