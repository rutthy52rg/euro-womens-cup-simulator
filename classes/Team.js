export default class Team {
    constructor(name, config = {}) {
        this.name = name,
            this.setUpConfig(config)
    }

    setUpConfig(config = {}) {
        const defaultConfig = {
            goalsTo: 0,
            goalsFrom: 0,
            totalGoalsTo: 0,
            totalGoalsFrom: 0
        }
        this.config = Object.assign(defaultConfig, config)
    }
}
