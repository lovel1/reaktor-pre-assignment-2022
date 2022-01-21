export const countPlayerResults = (matches) => {
    const wins = matches.filter(match => match.result === 'WIN').length
    const loses = matches.filter(match => match.result === 'LOSE').length
    const draws = matches.filter(match => match.result === 'DRAW').length

    return { wins, loses, draws }
}

export const countPlayerStats = (player) => {
  const playerResults = countPlayerResults(player.matches)
  const playerMatches = player.matches.length
  const playerRatio = playerResults.wins + '/' + playerResults.loses + '/' + playerResults.draws
  const playerFavHand = findPlayerFavHand(player.matches)

  return {playerResults, playerMatches, playerRatio, playerFavHand}
}

export const findPlayerFavHand = (matches) => {
   const rockHandMatches = matches.filter(match => match.played === 'ROCK')
   const paperHandMatches = matches.filter(match => match.played === 'PAPER')
   const scissorsHandMatches = matches.filter(match => match.played === 'SCISSORS')

   const allHandsArray = [rockHandMatches, paperHandMatches, scissorsHandMatches]
   const maxHandMatches = Math.max(...allHandsArray.map(array => array.length))
   const handArraysWithMaxMatches = allHandsArray.filter(array => array.length === maxHandMatches)

   return handArraysWithMaxMatches.length === 1 ? handArraysWithMaxMatches[0][0].played : null
} 