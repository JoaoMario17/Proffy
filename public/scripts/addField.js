//Procurar o botao
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener('click' , cloneField)

//Executar uma açao
function cloneField() {
    //Duplicar campo
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    //limpa cada campo
    fields.forEach(function(field) {
        field.value = ""
    })

    //Adicionar a pagina
    document.querySelector('#schedule-items').appendChild(newFieldContainer)  
}