import Team from "./Team.js";

export default class PlayOff {
  constructor(name, teams, config = {}) {
    (this.name = name),
      this.setUpConfig(config),
      this.setUpTeams(teams),
      this.setUpGroups(config.groups);
  }

  /** 
   * set up default config 
   * @param {config} from instance
   */
  setUpConfig(config = {}) {
    const defaultConfig = {
      groups: [],
      phases: [],
      numTeams: 0,
    };
    this.config = Object.assign(defaultConfig, config);
  }

 /** 
   * set up teams from class Team with their initial config
   * @param {teams} from config.grous
   */
  setUpTeams(teams) {
    let temporalTeams = [];
    teams = this.shuffle(teams);
    this.teams = [];
    for (let team in teams) {
      let instanceTeam = new Team(teams[team]);
      temporalTeams.push(instanceTeam);
      this.teams.push({
        name: teams[team],
        config: temporalTeams[team].config,
      });
    }
  }


} 