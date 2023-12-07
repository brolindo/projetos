function inverterString(palavra) {

    let palavraInvertida = '';

    for (let i = palavra.length - 1; i >= 0; i--){
        palavraInvertida += palavra[i];
    }
    return palavraInvertida;
}

const form = document.querySelector(".form-container");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const input = document.querySelector("#input")
    console.log(input.value);

    if (input.value !== "") {
        const span = document.querySelector(".result-text")
        span.innerHTML = inverterString(input.value);
    }
    else{
        alert("Nada foi digitado");
    }
})


//let palavra = prompt('Digite o que quer inverter');
//alert(inverterString(palavra));