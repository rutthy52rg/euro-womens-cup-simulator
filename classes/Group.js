export default class Group {
  constructor(name, config = {}) {
    (this.name = name), this.setUpConfig(config);
  }
  setUpConfig(config = {}) {
    const defaultConfig = {
      teams: [],
    };
    this.config = Object.assign(defaultConfig, config);
  }
}
