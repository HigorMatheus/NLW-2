//procurar o botao
document.querySelector("#add-time")
//quando clicar no botao 
.addEventListener('click', cloneField)

//executar uma acao
function cloneField(){
    // duplicar campos.Que Campo?
    const newFildContainer = document.querySelector('.schedule-item').cloneNode(true)

    //pegar os campos 
    const filds = newFildContainer.querySelectorAll('input')

    //para cada campo, limpar 
    filds.forEach(function(field){
        //pegaro field do monemto
        field.value=""
    })

    // colocar na pagina
    document.querySelector('#schedule-items').appendChild(newFildContainer)
}
