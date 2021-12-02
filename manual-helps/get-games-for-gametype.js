// This file represents the latest canonical code to come out of my experiments documented in `manual-download-instructions.md`. 
// For best results, this entire block of code should typically be pasted directly into the console.

let THROTTLE = 5;  // i.e. don't do too many queries until this works really well.

// function GameFetcher(gameType) {

// }

function processGamesList(gameResp) {
  rv = gameResp.data.slice(0, THROTTLE).map( x => x.HistoryExists ? getGameLog(x.GameId) : `!!! UNAVAILABLE GAME ID:  ${x.GameId}`)
  // rv = gameResp.data
  return rv
}

function fetchGamesForPlayer(player) {
  return fetch(`https://www.yucata.de/Services/YucataService.svc/data.jqdt?dataSource=RankingDetailsUser&UserID=${player}&GameType=142&Length=-1`, {
  method: 'GET',
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
  })
  .then(res => res.json())
  .then(processGamesList)
}

function getGameLog(gameId){
  window.location.href = `/en/Game/RRR2/${gameId}#page`
  console.log($("#gameLog")[0].innerHTML)
}


var theArray = []
processPlayerList = function(res) {
  // return res.map(function (x) {return x[0]});
  theArray = res.d.slice(0, THROTTLE).map(
  function(item) {
    player = item[6]
    fetchGamesForPlayer(player)
    return player
  })
  return theArray
}

function go(){
  
  fetch('https://www.yucata.de/Services/YucataService.svc/GetTrueSkillRatingsByGameType', {
    method: 'POST',
    body: JSON.stringify({
      gameTypeId: '142',	// Russian RR
      page: '1'  }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  .then(res => res.json())
  // .then(res => processRes(res))
  .then(processPlayerList)
  .then(console.log)
}
go()
