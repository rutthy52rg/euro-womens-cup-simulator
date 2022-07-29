import Team from "./Team.js";

export default class Match {
  constructor(team1, team2) {
    this.setUpConfig(team1, team2)
  }

  setUpConfig(team1, team2) {
    let instanceTeam1 = new Team(team1)
    let instanceTeam2 = new Team(team2)
    const matchesConfig = {
      team1: {
        ...instanceTeam1
      },
      team2: {
        ...instanceTeam2
      },
      winner: null
    };
    this.teams = Object.assign(matchesConfig);
  }
}