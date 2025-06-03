let btnCalcular = document.querySelector("#btnCalcular");
let C = document.querySelector("#inpR");
let F = document.querySelector("#inpR");
let label = document.querySelector("#Temper")

function mudarTemp(temp){
    if (temp.target.id == "radioC"){
        label.innerHTML = "Insira a temperatura em °F"
    }
    else if (temp.target.id == "radioF"){
        label.innerHTML = "Insira a temperatura em °C"
    }
}

C.addEventListener("change", mudarTemp)
F.addEventListener("change", mudarTemp)

btnCalcular.addEventListener('click', (e)=>{
    let inpTemp = parseFloat(document.querySelector("#inpTemp").value);
    let resultado = 0;
    C = document.querySelector("#radioC")
    F = document.querySelector("#radioF")
    
    if(C.checked){
        resultado = (inpTemp-32)*(5/9)    
    }
    else if(F.checked){
        resultado = (inpTemp*(9/5)) + 32
      }

    console.log(resultado)

    document.querySelector('#output').innerHTML = resultado
})

