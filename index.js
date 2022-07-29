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
  "Manchester City",
  "Chelsea",
  "Bayern de Munich",
  "Real Betis Balompié",
  "Paris Saint-Germain",
  "Liverpool F.B",
  "Valencia C.F",
  "Getafe C.F",
];

const myPlayOff = new PlayOff(
  "euro-cup",
  teams,
  {
    groups: ["A", "B", "C", "D"],
    phases: ["CUARTOS DE FINAL", "SEMIFINAL", "FINAL"],
  }
);

console.log("FINAL", myPlayOff);
