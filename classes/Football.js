import Match from "./Match.js";
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
        let currentWinners = []
        let lossers = []
        let currentLosers = []
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
                    currentWinners = [...winners];
                    winners = [];
                    let pairWinners = [];
                    pairWinners.push(
                        currentWinners.filter((w, i) => i % 2 === 0),
                        currentWinners.filter((w, i) => i % 2 !== 0)
                    );
                    for (let winner of pairWinners) {
                        let match = this.createMatchObject(winner[0], winner[1]);
                        this.setMatchTeamsName(match, winner);
                        this.setMatchesResults(phase, match);
                        winners.push(this.getMatchesWinner(match));
                        lossers.push(this.getMatchesLoser(match));
                    }
                    break;
                case 2:
                    currentLosers = [...lossers];
                    lossers = [];
                    let secondWinner = null;
                    var match = this.createMatchObject(
                        currentLosers[0],
                        currentLosers[1]
                    );
                    this.setMatchTeamsName(match, currentLosers);
                    this.setMatchesResults(phase, match);
                    secondWinner = this.getMatchesWinner(match);
                    this.secondWinner = secondWinner
                    break;
                case 3:
                    currentWinners = [...winners];
                    winners = [];
                    let firstWinner = null;
                    var match = this.createMatchObject(
                        currentWinners[0],
                        currentWinners[1]
                    );
                    this.setMatchTeamsName(match, currentWinners)
                    this.setMatchesResults(phase, match)
                    firstWinner = this.getMatchesWinner(match)
                    this.winner = firstWinner
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
    /**
    * method to get the winner of match and insert in object instance
    * @param {match} from  generateMatchesByPhase 
    */
    getMatchesWinner(match) {
        let winner = match.teams.team1.config.goalsTo > match.teams.team2.config.goalsTo
            ? match.teams.team1.name
            : match.teams.team2.name
        match.teams.winner = winner;
        return winner
    }
    /**
    * method to get the losser of match and insert in object instance
    * @param {match} from  generateMatchesByPhase 
    */
    getMatchesLoser(match) {
        let losser = match.teams.team1.config.goalsTo < match.teams.team2.config.goalsTo
            ? match.teams.team1.name
            : match.teams.team2.name;
        return losser
    }

    /**
    * method to createObject by match if it is necesary
    * @param {team1} from  generateMatchesByPhase
    * @param {team2} from  generateMatchesByPhase
    */
    createMatchObject(team1, team2) {
        let instanceMatch = new Match(team1.name, team2.name)
        let matchObject = { ...instanceMatch }
        return matchObject;
    }
    /**
    * method to insert in instance object the name of the teams who play
    * @param {match} from  generateMatchesByPhase
    * @param {names} from  generateMatchesByPhase
    */
    setMatchTeamsName(match, names) {
        match.teams.team1.name = names[0]
        match.teams.team2.name = names[1]
    }




}