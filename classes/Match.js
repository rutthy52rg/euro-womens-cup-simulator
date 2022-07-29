export default class Match {
  constructor(teams, config = {}) {
    this.teams = teams,
    this.setUpConfig(config)
  }

  setUpConfig(config = {}) {
    const defaultConfig = {
      teamA: {},
      teamB: {},
      win: null,
      subwin:null
    };
    this.config = Object.assign(defaultConfig, config);
  }
}