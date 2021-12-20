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
    paragrafoImc.classList.add("valor-imc")
    console.log(paragrafoImc)
    formulario.appendChild(paragrafoImc)

})
const botaoCalcularNovo = document.querySelector("#calcular-novo")
botaoCalcularNovo.addEventListener("click", function(){
    formulario.reset()
})

function calculoIMC(peso,altura){
    let imc = 0
    imc = peso / (altura*altura)
    return imc.toFixed(2)

}