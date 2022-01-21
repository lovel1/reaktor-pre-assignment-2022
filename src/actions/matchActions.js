import { rpsRules } from "../constants/rpsRules"

export const processMatchResult = result => {
    const [playerA, playerB] = result

    if (playerA.played === playerB.played) {
        return null
    }

    return rpsRules[playerA.played][playerB.played] === 'WIN' ? 'playerA' : 'playerB'
}

export const processMatch = match => {
  const matchPlayers = [match.playerA, match.playerB]
  const winner = processMatchResult(matchPlayers)

  winner === 'playerA' ? matchPlayers[0].result = 'WIN' : matchPlayers[1].result = 'WIN'
  if (winner === 'playerA') {
    matchPlayers[0].result = 'WIN'
    matchPlayers[1].result = 'LOSE'
  } else if (winner === 'playerB') {
    matchPlayers[1].result = 'WIN'
    matchPlayers[0].result = 'LOSE'
  } else {
    matchPlayers.forEach(player => player.result = 'DRAW')
  }

  match.playerA = matchPlayers[0]
  match.playerB = matchPlayers[1]

  return match
}

export const sortMatchesByPlayers = (matches) => {
    const players = []

    matches.forEach(match => {
      const matchPlayers = [match.playerA, match.playerB]
      matchPlayers[0].opponent = matchPlayers[1].name
      matchPlayers[1].opponent = matchPlayers[0].name

      const winner = processMatchResult(matchPlayers)

      winner === 'playerA' ? matchPlayers[0].result = 'WIN' : matchPlayers[1].result = 'WIN'
      !winner && matchPlayers.forEach(player => player.result = 'DRAW')

      matchPlayers.forEach(matchPlayer => {
        if (players.filter(player => player.name === matchPlayer.name).length) {
          players.forEach(player => player.name === matchPlayer.name && player.matches.unshift({ 
            played: matchPlayer.played, 
            gameId: match.gameId, 
            result: matchPlayer.result || 'LOSE' ,
            opponent: matchPlayer.opponent
          }))
        } else { 
          players.unshift({
            name: matchPlayer.name, 
            matches: [{
              played: matchPlayer.played, 
              gameId: match.gameId, 
              result: matchPlayer.result || 'LOSE' ,
              opponent: matchPlayer.opponent
            }] 
          }) 
        }
      })
    })

    return players
}

  