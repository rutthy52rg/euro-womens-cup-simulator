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

//console.log("FINAL", myPlayOff);

//DONE mensaje  "comienzan las fases eliminatorias"
console.log(
    `\n======================================================\n===  ${myPlayOff.msgStart}  ===\n======================================================\n`
);
//TODO mostrar 8 equipos participantes dividos en los grupos de A a D (4 grupos)
console.log(`Equipos que participan en el playOff \n`);
const groups = [...myPlayOff.config.groups];
groups.forEach((group) => {
    let teamNames = []
    group.config.teams.forEach((team) => {
        teamNames.push(team.name);
    })
    console.log(`Grupo ${group.name}: ${teamNames.join(', ')}`)
})

//TODO mostrar el resultado de los partidos en cada ronda
//TODO mostrar resultado de la final
//TODO mensaje anunciando el equipo ganador
