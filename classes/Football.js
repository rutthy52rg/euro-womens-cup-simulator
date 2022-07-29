import PlayOff from "./PlayOff.js";
export default class Football extends PlayOff {
    constructor(name, teams, config, msgStart, msgFinish) {
        super(name, teams, config), // pilla la información de como se construye desde la clase padre
            this.msgStart = msgStart,
            this.msgFinish = msgFinish
    }
}