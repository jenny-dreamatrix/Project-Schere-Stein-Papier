const outputErgebnisSpielrunde = document.querySelector(".output-ergebnis-spielrunde");
const outputSpielstand = document.querySelector(".output-spielstand");
const outputRounds = document.querySelector(".output-rounds");
const roundsDisappear = document.querySelector(".rounds-disappear");
const form = document.querySelector("form");
const spielstandUser = document.querySelector(".spielstand-user");
const spielstandComputer = document.querySelector(".spielstand-computer");
const playSec = document.querySelector(".play-sec");

let u = 0;
let c = 0;
let rundenGespielt = 0;

const restart = () => {
     event.preventDefault();
     roundsDisappear.style.top = "0";
     form.style.padding = "15rem 0 0 0";
     spielstandUser.style.left = "-100rem";
     spielstandComputer.style.right = "-100rem";
     outputRounds.innerHTML = ``;
     outputSpielstand.innerHTML = `0 : 0`;
     outputErgebnisSpielrunde.innerHTML = `Mache deinen Spielzug!`;
     outputErgebnisSpielrunde.classList.remove("ende-win-lose");
     playSec.classList.remove("play-sec-losing");
     playSec.classList.remove("play-sec-winning");
     return rundenGespielt = 0, c = 0, u = 0;
}

const playgame = (user) => {
     event.preventDefault();

     playSec.classList.remove("play-sec-losing");
     playSec.classList.remove("play-sec-winning");

     const rounds = Number(document.querySelector("input[name='rounds']:checked").value);
     roundsDisappear.style.top = "-100rem";
     form.style.padding = "3rem 0 0 0";
     spielstandUser.style.left = "5rem";
     spielstandComputer.style.right = "3rem";

     rundenGespielt = rundenGespielt + 1;

     let computer = Math.ceil(Math.random() * 3);

     if (computer === 1){
          computer = "Schere";
     } else if (computer === 2){
          computer = "Stein";
     } else {
          computer = "Papier";
     }

     if (rundenGespielt <= rounds){

          if (user == computer){
               outputErgebnisSpielrunde.innerHTML = `Es ist Unentschieden! Ihr habt beide ${user} gewählt.`
               outputRounds.innerHTML = `<p>Runde</p> <p>${rundenGespielt} / ${rounds}</p>`;
          } else if (user == "Schere" && computer == "Stein"){
               c = c + 1;
               lose(computer, user, c, u, rundenGespielt, rounds);
          } else if (user == "Schere" && computer == "Papier"){
               u = u + 1;
               win(computer, user, c, u, rundenGespielt, rounds);
          } else if (user == "Stein" && computer == "Schere"){
               u = u + 1;
               win(computer, user, c, u, rundenGespielt, rounds);
          } else if (user == "Stein" && computer == "Papier"){
               c = c + 1;
               lose(computer, user, c, u, rundenGespielt, rounds);
          } else if (user == "Papier" && computer == "Schere"){
               c = c + 1;
               lose(computer, user, c, u, rundenGespielt, rounds);
          } else if (user == "Papier" && computer == "Stein"){
               u = u + 1;
               win(computer, user, c, u, rundenGespielt, rounds);
          }
     
     } else {
          if (u > c){
               outputErgebnisSpielrunde.innerHTML = `Du hast gewonnen!`;
               outputErgebnisSpielrunde.classList.add("ende-win-lose");
          } else if (u < c){
               outputErgebnisSpielrunde.innerHTML = `Du hast verloren!`;
               outputErgebnisSpielrunde.classList.add("ende-win-lose");
          } else if (u == c){
               outputErgebnisSpielrunde.innerHTML = `Es ist unentschieden!`;
               outputErgebnisSpielrunde.classList.add("ende-win-lose");
          }
     }
}

const lose = (computer, user, c, u, rundenGespielt, rounds) => {
     event.preventDefault();
     outputErgebnisSpielrunde.innerHTML = `${computer} <span>(Computer)</span> schlägt ${user} <span>(User)</span>. Du hast <span class="lost">verloren</span>!`
     outputSpielstand.innerHTML = `${u} : ${c}`;
     outputRounds.innerHTML = `<p>Runde</p> <p>${rundenGespielt} / ${rounds}</p>`;
     playSec.classList.add("play-sec-losing");
}

const win = (computer, user, c, u, rundenGespielt, rounds) => {
     event.preventDefault();
     outputErgebnisSpielrunde.innerHTML = `${user} <span>(User)</span> schlägt ${computer} <span>(Computer)</span>. Du hast <span class="win">gewonnen</span>!`
     outputSpielstand.innerHTML = `${u} : ${c}`;
     outputRounds.innerHTML = `<p>Runde</p> <p>${rundenGespielt} / ${rounds}</p>`;
     playSec.classList.add("play-sec-winning");
}