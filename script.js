// let heroName = "";
// let experienceXP = 0;
// let level = "";

//     if(experienceXP <= 1000){
//         console.log(level = "Ferro"); 
//     }
//     else if (experienceXP >= 1001 && experienceXP <= 2000){
//         console.log(level = "Bronze");
//     }
//     else if (experienceXP >= 2001 && experienceXP <= 5000){
//         console.log(level = "Prata");
//     }
//     else if (experienceXP >= 6001 && experienceXP <= 7000){
//         console.log(level = "Ouro");
//     }
//     else if (experienceXP >= 7001 && experienceXP <= 8000){
//         console.log(level = "Platina");
//     }
//     else if (experienceXP >= 8001 && experienceXP <= 9000){
//         console.log(level = "Ascendente");
//     }
//     else if (experienceXP >= 9001 && experienceXP <= 10000){
//         console.log(level = "Imortal");
//     }
//     else if (experienceXP >= 10001){
//         console.log(level = "Radiante");
//     }

// console.log("O Herói de nome: " + heroName,"tem a pontuação de: "+ experienceXP," e está no nivel: "+level);

let heroName = "";
let experienceXP = 100;
let level = "";

const levelLimit = [0, 1000, 2000, 5000, 7000, 8000, 9000, 10000,10001];
const levelNames = ["", "Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

for (let i = 1; i < levelLimit.length; i++) {
    if (experienceXP <= levelLimit[i]) {
        level = levelNames[i];
        break;
    }
}

console.log("O Herói de nome: " + heroName, "tem a pontuação de: " + experienceXP, " e está no nível: " + level);
