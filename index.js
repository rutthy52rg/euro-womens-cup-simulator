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

const internationalTeams = [
    "Inglaterra",
    "Austria",
    "Noruega",
    "Irlanda",
    "Alemania",
    "España",
    "Dinamarca",
    "Finlandia",
    "Suecia",
    "Países Bajos",
    "Suiza",
    "Portugal",
    "Francia",
    "Bélgica",
    "Islandia",
    "Italia"
]

const myPlayOff = new Football("euro-cup", internationalTeams, {
    groups: ["A", "B", "C", "D"],
    phases: ["CUARTOS DE FINAL", "SEMIFINALES", "TERCER Y CUARTO PUESTO", "FINAL"],
    numTeams: 8
},
    "COMIENZAN LAS FASES ELIMINATORIAS DEL TORNEO",
    " campeona de la EURO WOMEN'S CUP"
);

//console.log("FINAL", myPlayOff);

//DONE mensaje  "comienzan las fases eliminatorias"
console.log(
    `\n   ======================================================\n   ===  ${myPlayOff.msgStart}  ===\n   ======================================================\n`
);
//TODO mostrar 8 equipos participantes dividos en los grupos de A a D (4 grupos)
console.log(`   Equipos que participan en el playOff \n`);
const groups = [...myPlayOff.config.groups];
groups.forEach((group) => {
    let teamNames = []
    group.config.teams.forEach((team) => {
        teamNames.push(team.name);
    })
    console.log(`   Grupo ${group.name}: ${teamNames.join(', ')}`)
})

//DONE mostrar el resultado de los partidos en cada ronda
//DONE mostrar resultado de la final
const phases = [...myPlayOff.config.phases];
for (let phase in phases) {
    console.log(`\n   ====  ${phases[phase].name}  ====\n`);
    for (let i of phases[phase].config.matches) {
        console.log(`   ${i.teams.team1.name} ${i.teams.team1.config.goalsTo} - ${i.teams.team2.config.goalsTo} ${i.teams.team2.name}  ==>  ${i.teams.winner}`)
    }
}

//DONE mensaje anunciando el equipo ganador
console.log(
    `\n
   =================================================
      ${myPlayOff.msgFinish ? myPlayOff.winner + myPlayOff.msgFinish : 'FINALIZA EL TORNEO'}
   =================================================
   \n`)
