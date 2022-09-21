document.getElementById("myForm").addEventListener("submit", valueGetter)


function valueGetter(){

    window.event.preventDefault()

    const task = document.querySelector(".todo-input").value

    // TEXTO DA TAREFA

    const pElement = document.createElement("p")
    pElement.setAttribute("class","p-item")
    pElement.innerHTML = task
    pElement.style.cursor = "pointer"


    // BOTÃO DE REALIZAÇÃO

    const doneBtn = document.createElement("button")
    doneBtn.innerHTML = "✔️"
    pElement.appendChild(doneBtn)
    doneBtn.addEventListener("click", () => {
        pElement.style.textDecoration == "line-through" 
        ? pElement.style.textDecoration = "none" 
        : pElement.style.textDecoration = "line-through"
    })
    
    // BOTÃO DE REMOÇÃO DE TAREFAS 

    const removeBtn = document.createElement("button")
    removeBtn.innerText = "🗑️"
    pElement.appendChild(removeBtn)
    removeBtn.addEventListener("click", () => {
        removeBtn.parentNode.remove()
    })

    let sectionArea = document.querySelector(".todo-itens")
    sectionArea.appendChild(pElement)
    document.getElementById("myForm").reset()


}