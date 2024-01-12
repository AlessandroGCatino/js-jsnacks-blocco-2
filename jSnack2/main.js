const startButton = document.querySelector("h1")

startButton.addEventListener("click", function(){

    let numeroDaIndovinare = randomNumber(1, 100)
    let numeroUtente = 0
    let conta = 0

    console.log(numeroDaIndovinare)

    while(numeroDaIndovinare !== numeroUtente){
        numeroUtente = parseInt(prompt("Inserisci la tua risposta:", 10))
        if (numeroUtente<numeroDaIndovinare){
            alert("Il numero è troppo basso!")
        } else if(numeroUtente>numeroDaIndovinare){
            alert("Il numero è troppo alto!")
        }
        conta++
    }
    alert("Risposta esatta!")
    document.querySelector("p").innerHTML = `Il numero da indovinare era: ${numeroDaIndovinare} <br> Ci hai messo ${conta} tentativi!`
    
}
)


function randomNumber (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}