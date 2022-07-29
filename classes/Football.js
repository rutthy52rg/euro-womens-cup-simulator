import PlayOff from "./PlayOff.js";
export default class Football extends PlayOff {
    constructor(name, teams, config, msgStart, msgFinish) {
        super(name, teams, config), // pilla la información de como se construye desde la clase padre
            this.msgStart = msgStart,
            this.msgFinish = msgFinish,
            this.generateMatchesByPhase(this.config.phases, this.config.groups)
    }
    /**
  * method to generate matches for each group
  * @param {groups} from  this.config.groups
  */
    generateMatchesByGroups(groups) {
        let matches = [];
        for (let i = 0; i < groups.length; i++) {
            if (i % 2 === 0) {
                matches.push(
                    this.createMatchObject(
                        groups[i].config.teams[0],
                        groups[i + 1].config.teams[1]
                    )
                );
            } else {
                matches.push(
                    this.createMatchObject(
                        groups[i].config.teams[0],
                        groups[i - 1].config.teams[1]
                    )
                );
            }
        }
        return matches;
    }
    /**
* method to generate matches and results for each phase
* @param {groups} from  this.config.groups
* @param {phases} from  this.config.phases
*/
    generateMatchesByPhase(phases, groups) {
        let winners = []
        phases.map((phase, index) => {
            switch (index) {
                case 0:
                    let matchByGroups = this.generateMatchesByGroups(groups);
                    for (let match of matchByGroups) {
                        this.setMatchesResults(phase, match);
                        winners.push(this.getMatchesWinner(match));
                    }
                    break;
                case 1:
                  
                    break;
                case 2:
                   
                    break;
                case 3:
                   
                    break;
                default:
                    break;
            }
        })
    }
}