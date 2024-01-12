const startButton = document.querySelector("h1")


startButton.addEventListener("click", function(){

    let nIterazioni = parseInt(prompt("Quanti numeri inserirai a sistema?", 5))
    let numeroUtente = 0
    for (let i=0; i<nIterazioni; i++){
        numeroUtente = parseInt(prompt("Inserisci un numero", 5))
        console.log("Numero inserito dall'utente: ", numeroUtente)
        if (numeroUtente%2 == 0){
            document.querySelector("p").innerHTML += `Il numero è ${numeroUtente} <br>`
        } else {
                document.querySelector("p").innerHTML += `Il numero è ${numeroUtente+1} <br>`
        
            }
    }
}
)
