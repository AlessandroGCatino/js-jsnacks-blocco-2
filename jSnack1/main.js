const startButton = document.querySelector("h1")



startButton.addEventListener("click", function(){
    
    const newArray = []
    document.querySelector("p").innerHTML = ""
    let somma = 0
    while (somma<50){
        numeroUtente = parseInt(prompt("Inserisci un numero da sommare:", 10))
        document.querySelector("p").innerHTML += numeroUtente + "<br>"

        newArray.push(numeroUtente)
        somma += numeroUtente
    }
    console.log(newArray)
    document.querySelector("p").innerHTML += `<h1>La somma è: ${somma}</h1>`
    
}
)
