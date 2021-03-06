import { TEAMS } from "./constants";

export const buildUpdateScoreBody = (score, team) => {
  const result = {};
  if(team === TEAMS.KETCHUP) {
    result.ketchupMiams = score;
  }
  else if(team === TEAMS.MAYO) {
    result.mayoMiams = score;
  }

  return JSON.stringify(result);
}

export const getScoreFromResponse = (response, team) => {
  if(team === TEAMS.KETCHUP) {
    return {ketchup: response.ketchupMiams}
  }
  if(team === TEAMS.MAYO) {
    return {mayo: response.mayoMiams}
  }

  return 0;
}
