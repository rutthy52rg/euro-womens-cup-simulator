import PlayOff from "./classes/_PlayOff";


const teams = [
  "R.Madrid",
  "FC. Barcelona",
  "Sevilla FC",
  "At. Madrid",
  "Milan",
  "Manchester United",
  "Olimp. Lion",
  "Juventus",
];

const myPlayOff = new PlayOff(
  "euro-cup",
  teams,
  {
    groups: ["A", "B", "C", "D"],
    phases: ["CUARTOS DE FINAL", "SEMIFINAL", "FINAL"],
  },
  "COMIENZAN LAS FASES ELIMINATORIAS DEL TORNEO"
);

console.log("FINAL", myPlayOff);
