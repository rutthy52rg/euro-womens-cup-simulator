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
    /**
* method to generate random goals for each match without repeat 
* @param {range} from  number of goals
*/
    generateGoalsDoWhile(range = 10) {
        let goalsTeam1 = null;
        let goalsTeam2 = null;
        let goalsByMatch = []
        do {
            goalsTeam1 = Math.floor(Math.random() * range)
            goalsTeam2 = Math.floor(Math.random() * range)
        }
        while (goalsTeam1 === goalsTeam2)
        goalsByMatch.push(goalsTeam1, goalsTeam2)
        return goalsByMatch
    }
    /**
* method to play the match and get winner return goals result
* @param {goals1} from  goals team1
* @param {goals2} from  goals team2
*/

    playMatch(goals1, goals2) {
        const goalsInMatch = this.generateGoalsDoWhile(10)
        goals1 = goalsInMatch[0]
        goals2 = goalsInMatch[1]
        let winner = null;
        if (goals1 > goals2) {
            winner = goals1
        } else {
            winner = goals2
        }
        return { goals1: goals1, goals2: goals2, winner: winner };
    }
    /**
* method to instert in intance of class,  the results of matches
* @param {phase} from  phase
* @param {match} from  current match
*/
    setMatchesResults(phase, match) {
        let matchResult = this.playMatch(
            match.teams.team1.config.goalsTo,
            match.teams.team2.config.goalsTo
        );
        match.teams.team1.config.goalsTo = matchResult.goals1
        match.teams.team2.config.goalsTo = matchResult.goals2
        phase.config.matches.push({ ...match })
    }
}