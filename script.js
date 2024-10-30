function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value;
    const resultDice = document.getElementById("resultDice");
    const resultImages = document.getElementById("resultImages");

    const values = [];
    const images = [];



for(let i = 0; i < numOfDice; i++){
    const value = Math.floor(Math.random() * 6) + 1;
   
    values.push(value);
    images.push(`<img src="dice_folder/${value}.png">`)
    console.log(values);
}

resultDice.textContent = `Dice: ${values}`;
resultImages.innerHTML = images.join(" ");

}
















