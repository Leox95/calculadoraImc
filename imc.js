const botaoConfirmarimc = document.querySelector("#confirmar")
console.log(botaoConfirmarimc)

botaoConfirmarimc.addEventListener("click", function(event){
    event.preventDefault()
    const formulario = document.querySelector("#formulario")
    let peso = formulario.peso.value
    let altura = formulario.altura.value

    let funcaoIMC = calculoIMC(peso,altura)
    console.log(funcaoIMC)
    let paragrafoImc = document.createElement("p")
    paragrafoImc.textContent = funcaoIMC
    console.log(paragrafoImc)
    formulario.appendChild(paragrafoImc)

})

function calculoIMC(peso,altura){
    let imc = 0
    imc = peso / (altura*altura)
    return imc.toFixed(2)

}