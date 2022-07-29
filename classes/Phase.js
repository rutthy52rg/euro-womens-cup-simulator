export default class Phase {
  constructor(name, config = {}) {
    this.name = name;
    this.setUpConfig(config)
  }

  setUpConfig(config = {}) {
    const defaultConfig = {
      matches: []
    };
    this.config = Object.assign(defaultConfig, config);
  }
}