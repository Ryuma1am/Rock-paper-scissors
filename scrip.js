const selection = document.querySelectorAll(".selection");
const section = document.querySelector("section");
selection.forEach((element) => {
  element.addEventListener("click", () => {
      section.classList.add("elementor-toggle")
      counterToGame();
      setTimeout(()=>{
        printElements(element.value);
      },4000);
      setTimeout(()=>{
        let results = document.querySelectorAll(".selection");
        decisionWin(results[0].value,results[1].value)
      },4000);
  });
});

function counterToGame() {
    section.innerText = "";
    let counterWeb = document.createElement("h1");
    let counter = 3;
    counterWeb.innerText = "READY?"
  counterWeb.classList.add("counter");
  section.appendChild(counterWeb);
  let counterSet = setInterval(() => {
    if (counter > 0) {
      counterWeb.innerText = counter;
      counter--;
    } else {
      counterWeb.innerText = "GO";
      clearInterval(counterSet);
    }
  }, 1000);
}
function printElements(decision){
  section.innerText = ""
    selection.forEach(element => {
      let text = document.createElement("h2")
            text.innerText = "Player Decision"
            element.appendChild(text)
    });
    switch (decision) {
        case "rock":
            section.appendChild(selection[0])
            break;
        case "paper":
            section.appendChild(selection[1])
            break;
        case "scissors":
            section.appendChild(selection[2])
            break;
    }
    let versus = document.createElement("h1");
    versus.classList.add("counter");
    versus.innerText = "VS"
    section.appendChild(versus)
    decisionComputer()
  }

function decisionComputer(){
  let button = document.createElement("button")
  let img = document.createElement("img")
  let textComputer = document.createElement("h2")
  button.classList.add("selection")
  textComputer.innerText = "Computer Decision"
  let numberAleatory = parseInt(Math.random() * 3);
  console.log(numberAleatory)
  switch (numberAleatory) {
    case 0:
        button.value = "rock"
        img.src = "images/rock.png"
        break;
    case 1:
      button.value = "paper"
      img.src = "images/paper.png"
        break;
    case 2:
      button.value = "scissors"
      img.src = "images/scissors.png"
        break;
  }
  console.log(button.value)
  button.appendChild(img)
  button.appendChild(textComputer)
  section.appendChild(button) 
}
function decisionWin(player, computer){
  let winner = document.createElement("h1")
  if (player === computer){
    winner.innerText = "There has been a tie"  
  }
  else if(player === "paper" && computer === "rock"){
    winner.innerText = "The winner is Player"
  }
  else if(player === "rock" && computer === "scissors"){
    winner.innerText = "The winner is Player"
  }
  else if(player === "scissors" && computer === "paper"){
    winner.innerText = "The winner is Player"
  }
  else{
    winner.innerText = "The winner is Computer"
  }
  document.querySelector("body").appendChild(winner)
}