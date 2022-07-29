import Group from "./group.js";
import Phase from "./Phase.js";
import Team from "./Team.js";

export default class PlayOff {
    constructor(name, teams, config = {}) {
        this.name = name,
            this.setUpConfig(config),
            this.teams = this.filterArrByIndexNotRepeat(
                this.config.numTeams,
                teams
            ),
            this.setUpTeams(teams),
            this.setUpGroups(config.groups),
            this.setTeamsInGroups(this.teams, this.config.groups),
            this.setUpPhases(config.phases)
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
    /**
     * set up de groups from group class
     * @param {groups} from config.groups
     */
    setUpGroups(groups) {
        let temporalGroup = [];
        this.config.groups = [];
        for (let group in groups) {
            let instanceGroup = new Group(groups[group]);
            temporalGroup.push(instanceGroup);
            this.config.groups.push({
                name: groups[group],
                config: temporalGroup[group].config,
            });
        }
    }
    /**
     * set up de phases from phase class
     * @param {phases} from config.phases
     */
    setUpPhases(phases) {
        let temporalPhases = [];
        this.config.phases = [];
        for (let phase in phases) {
            let instancePhase = new Phase(phases[phase]);
            temporalPhases.push(instancePhase);
            this.config.phases.push({
                name: phases[phase],
                config: temporalPhases[phase].config,
            });
        }
    }
    /**
     * method to extract random nums of elements from array, in this case extract 8 teams from 16 teams
     * @param {numbersToExtract} from config.numTeams
     * @param {arrToFilter} from teams from instance class
     */
    filterArrByIndexNotRepeat(numberToExtract, arrToFilter) {
        if (numberToExtract == 0) {
            console.log(null);
        }
        // create this function because shuffle not working and i don't know why :(
        let randomnumbers = new Set(),
            randomIndex;
        while (randomnumbers.size < numberToExtract) {
            randomnumbers.add(Math.floor(Math.random() * arrToFilter.length));
        }
        randomIndex = [...randomnumbers];
        let arrCopy = [...arrToFilter];
        let arrResult = [];
        for (let idx of randomIndex) {
            arrResult.push(arrCopy[idx]);
        }
        return arrResult;
    }
    /**
   * method to random order of teams
   * @param {teams} from this.teams
   */
    shuffle(array) {
        let currentIndex = array.length,
            randomIndex;
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }
        return array;
    }
    /**
    * method to insert teams in each group without repeat
    * @param {teams} from this.teams
    * @param {groups} from  this.config.groups
    */
    setTeamsInGroups(teams, groups) {
        if (teams.length % groups.length === 0) {
            let teamsByGroup = teams.length / groups.length;
            let currentTeams = [...teams];
            let countGroup = 0;
            let countTeams = 0;
            while (countGroup < groups.length) {
                while (countTeams < currentTeams.length) {
                    let result = currentTeams.slice(countTeams, countTeams + teamsByGroup);
                    countTeams += teamsByGroup;
                    groups[countGroup].config.teams = result;
                    countGroup++;
                }
            }
        } else {
            console.log(
                "error, los grupos no salen equitativos, por favor comprueba número de equipos y número de grupos"
            );
        }
    }

}
