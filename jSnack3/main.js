const startButton = document.querySelector("h1")

const arrayMaggiore = [1,2,3,4,5,6,10,50,87,16,84,71,30,87,89,35]
const arrayMinore = [5,7,9,80,54,7]

console.log("Primo Array", arrayMaggiore)
console.log("Secondo Array", arrayMinore)


startButton.addEventListener("click", function(){

    for (i=arrayMinore.length; i<arrayMaggiore.length; i++){
        arrayMinore.push(randomNumber(1,99))
    }
    document.querySelector("p").innerHTML = "Gli array ora sono di dimensioni uguali, controlla in console!"
    console.log("Primo Array", arrayMaggiore)
    console.log("Secondo Array", arrayMinore)
    
}
)

function randomNumber (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
