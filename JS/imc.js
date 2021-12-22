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
    
    if(funcaoIMC < 17){
        document.getElementById('muito-abaixo').style.backgroundColor = "lightcoral"   
    }
    if(funcaoIMC >= 17 && funcaoIMC <= 18.9){
        document.getElementById('abaixo').style.backgroundColor = "lightcoral"
    }
    if(funcaoIMC >= 19 && funcaoIMC<= 24.9){
        document.getElementById('normal').style.backgroundColor = "lightgreen"
    }
    if(funcaoIMC >= 25 && funcaoIMC<= 29.9){
        document.getElementById('acima').style.backgroundColor = "lightgoldenrodyellow"
    }
    if(funcaoIMC >= 30 && funcaoIMC<= 34.9 ){
        document.getElementById('obesidade1').style.backgroundColor = "lightcoral"
    }
    if(funcaoIMC >= 35 && funcaoIMC <=39.9){
        document.getElementById('obesidade2').style.backgroundColor = "lightcoral"
    }
    if(funcaoIMC > 40){
        document.getElementById('obesidade3').style.backgroundColor = "lightcoral"
    }

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

