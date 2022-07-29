import Football from "./classes/Football.js";


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

const myPlayOff = new Football("euro-cup", teams, {
    groups: ["A", "B", "C", "D"],
    phases: ["CUARTOS DE FINAL", "SEMIFINALES", "TERCER Y CUARTO PUESTO", "FINAL"],
    numTeams: 8
},
    "COMIENZAN LAS FASES ELIMINATORIAS DEL TORNEO",
    " campeona de la EURO WOMEN'S CUP"
);

console.log("FINAL", myPlayOff);
