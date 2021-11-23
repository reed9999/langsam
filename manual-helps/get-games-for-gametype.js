// This file represents the latest canonical code to come out of my experiments documented in `manual-download-instructions.md`. 
// It exists largely to separate out this large block of running code that I want to paste into the Console.


function processGamesList(gameResp) {
  rv = gameResp.data.map( x => x.HistoryExists ? `GOOD: ${x.GameId}` : `No:  ${x.GameId}`)
  // rv = gameResp.data
  return rv
}

function fetchGamesForPlayer(player) {
  fetch(`https://www.yucata.de/Services/YucataService.svc/data.jqdt?dataSource=RankingDetailsUser&UserID=${player}&GameType=142&Length=-1`, {
  method: 'GET',
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
  })
  .then(res => res.json())
  .then(processGamesList)
  .then(console.log)
}

// function fetchGamesForPlayer(player) {
//   console.log(`soon I'll fetch games for ${player}`)
// }

var theArray = []
processPlayerList = function(res) {
  // return res.map(function (x) {return x[0]});
  theArray = res.d.slice(0, 10).map(
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
