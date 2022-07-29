export default class Group {
  constructor(name, config = {}) {
    this.name = name,
    this.setUpConfig(config)
  }
  setUpConfig(config = {}) {
    const defaultConfig = {
      teams: [],
      win: null,
      subwin: null,
    };
    this.config = Object.assign(defaultConfig, config);
  }
}
