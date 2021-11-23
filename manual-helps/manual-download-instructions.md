# Instructions for manual download support
Some of the Yucata things I'd like to automate, with an eye  toward downloading all games of a given game 
type, are not feasible when logged out. Rather than try to use something like Selenium, I'd like to at least
try to make some of these work by manual downloads, followed by automatic processing of the downloaded files.

But even then, there are subtleties. Because the lists somewhere like 
https://www.yucata.de/en/Ranking/Game/SaintPetersburg2
(if logged in) are generated dynamically by JavaScript, they won't save with a standard Ctrl+S. I need a good way to 
save off those lists. 

Apparently you can't even see any game histories at all now. So clearly we need a new solution. How about running JS in the 
browser while logged in and accessing the relevant info?

## Find players of a game type.

Petersburg is an example here. This seems to be a simple way to find it from any Yucata.de page:

```javascript
var theArray = []
processRes = function(res) {
  // return res.map(function (x) {return x[0]});
  theArray = res;
  return res;
}


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
.then(processRes)
.then(console.log)

ranksAndNames = theArray.map(
  function(item) {
    return item[2];
  }
)
```

See https://stackoverflow.com/questions/14248296/making-http-requests-using-chrome-developer-tools

Note: `'359',	// St Pete`

#### Generalizing it

Eureka! Here is the call to get what I'm looking for: 
https://www.yucata.de/Services/YucataService.svc/data.jqdt?dataSource=RankingDetailsUser&UserID=404792&GameType=142&Length=-1

The last one is to get *all* the rows in the JSON (i.e., len(-1)). Thank you, line 3723 of mpscripts.

```javascript
serviceUrl = 'https://www.yucata.de/Services/YucataService.svc/data.jqdt?dataSource=RankingDetailsUser&UserID=404792&GameType=142&Length=-1'
fetch(serviceUrl, {
  method: 'GET',
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
}).then(res => res.json())
.then(console.log)
```

I don't know how to do actual date ranges: appending `FromDate=2020-01-01&ToDate=2021-11-30`:

```javascript
fetch('https://www.yucata.de/Services/YucataService.svc/data.jqdt?dataSource=RankingDetailsUser&UserID=404792&GameType=142', {
  method: 'GET',
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
}).then(res => res.json())
.then(console.log)
```
#### All together now

```javascript

function fetchGamesForPlayer(player) {
  fetch(`https://www.yucata.de/Services/YucataService.svc/data.jqdt?dataSource=RankingDetailsUser&UserID=${player}&GameType=142&Length=-1`, {
  method: 'GET',
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
  }).then(res => res.json())
  .then(console.log)
}

// function fetchGamesForPlayer(player) {
//   console.log(`soon I'll fetch games for ${player}`)
// }

var theArray = []
processPlayerList = function(res) {
  // return res.map(function (x) {return x[0]});
  theArray = res.d.slice(0, 20).map(
  function(item) {
    player = item[6]
    fetchGamesForPlayer(player)
    return player
  })
  return theArray
}


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
```




```
// Don't paste this in - it only fouls it up - but try to fix it.
userIds = theArray.d.map(
  function(item) {
    return item[6]
  }
)
```



#### Generalizing it - the old fruitless approach

I found the name of GetTrueSkillRatingsByGameType in bundles-mpscripts. The lines that look something like:
`BaseServiceCall("GetTrueSkillRatingsByGameType", ...)` are the ones to track carefully.

However so far it's proved fruitless for all the rest. Instead, note the console.log on line 3739 of mpscripts.



Old fruitless approach.

```javascript
fetch('https://www.yucata.de/Services/YucataService.svc/GetAllPlayedGamesByUserId', {
  method: 'POST',
  body: JSON.stringify({
    playerId: "404792"}),
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
})

fetch('https://www.yucata.de/Services/YucataService.svc/GetAllPlayedGamesByUserId', {
  method: 'POST',
  body: JSON.stringify({
    playerId: '404792' }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
})
.then(res => res.json())
// .then(res => processRes(res))
//.then(processRes)
.then(console.log)


bodyJson = JSON.stringify({
    gameTypeId: '142',
    page: '1' })
fetch('https://www.yucata.de/Services/YucataService.svc/GetTrueSkillRatingsByGameType', {
  method: 'POST',
  body: bodyJson,
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
})
.then(res => res.json())
.then(console.log)


bodyJson = JSON.stringify({usedID: '404792' })

fetch('https://www.yucata.de/Services/YucataService.svc/GetAllPlayedGames', {
  method: 'POST',
  body: bodyJson,
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
})
// .then(res => res.json())
.then(console.log)
```


```javascript
function ServiceGetAllPlayedGames(n, t, i) {
    BaseServiceCall("GetAllPlayedGames", '{"userID":"' + n + '"}', t, i)
}
function ServiceGetGamesByOpponentByGameType(n, t, i, r) {
    BaseServiceCall("GetGamesByOpponentByGameType", '{"playerID":"' + n + '","opponentID":"' + t + '"}', i, r)
}
function ServiceGetGamesByGameTypeByOpponent(n, t, i, r) {
    BaseServiceCall("GetGamesByGameTypeByOpponent", '{"playerID":"' + n + '","gameType":"' + t + '"}', i, r)
}
function ServiceGetGamesByGameTypeAllGames(n, t, i, r) {
    BaseServiceCall("GetGamesByGameTypeAllGames", '{"playerID":"' + n + '","gameType":"' + t + '"}', i, r)
}
function ServiceGetGamesByOpponentAllGames(n, t, i, r) {
    BaseServiceCall("GetGamesByOpponentAllGames", '{"playerID":"' + n + '","opponentID":"' + t + '"}', i, r)
}
function ServiceGetGamesByGameTypeByOpponentAllGames(n, t, i, r, u) {
    BaseServiceCall("GetGamesByGameTypeByOpponentAllGames", '{"playerID":"' + n + '","opponentID":"' + t + '","gameType":"' + i + '"}', r, u)
}
```

//'142',	// Russian RR


### Some code from each player's info page


    $(function () {
        UpdatePlayerRankingList(66469, window.location.hash);
        ServiceGetPlayedOpponents(66469, setOpponentFilter);
        ServiceGetPlayedGameTypes(66469, setGameTypesFilter);

        window.onhashchange = function () {
            UpdatePlayerRankingList(66469, window.location.hash);
		};

### Legacy approach

#### Newer stuff where we can't get anything better.

1. Go to each player's page. e.g.

2.
```javascript
el = document.getElementById("divPlayerRankingListTable")
el.child[0].children  // rows of the table
```

Handy to manipulate the table (adapted from JS on the Ranking/<username>) page)

```javascript
var dataTableAll = $('#divPlayerRankingListTable').DataTable();
dataTableAll.page.len(-1).draw
```

```javascript

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getTheGames(player){
  window.location.href = `/en/Ranking/${player}#game_142`;
  var dataTableAll = $('#divPlayerRankingListTable').DataTable();
  dataTableAll.page.len(-1).draw
}

let somePlayers = ['Lilou', 'philip9999']  // Lilou = top player in ranking right now
for (player of somePlayers) {
  getTheGames(player)
  console.log(`Navigated to ${player}'s page and viewed all games of this type.`)
  sleep(500)
  console.log("Finished sleeping.")

}

```
#### Legacy legacy
1. Access https://www.yucata.de/en/Ranking/Game/SaintPetersburg2 * in browser while logged in.
2. Set to 100 games.
2. Press Ctrl + Shift + C or whatever brings up the JavaScript tool. Paste in the 
JS from manual-helps/yucata-top-players.js


Note that the list is in table#rankingTable

*formerly https://www.yucata.de/en/Ranking/Game/Petersburg

### Some other spelunked JavaScript


See this line in the page JS:
	ServiceGetTrueSkillRatingsByGameType(rankingGameTypeId, rankingPageId, FormatTrueSkillResultTable,TrueSkillError);

See mpscripts file line 954
function ServiceGetTrueSkillRatingsByGameType(n, t, i, r) {
    BaseServiceCall("GetTrueSkillRatingsByGameType", '{"gameTypeId":"' + n + '","pageId":"' + t + '"}', i, r)
}


function BaseServiceCall(n, t, i, r, u) {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: BaseUrl + "Services/YucataService.svc/" + n,
        data: t,
        dataType: "json",
        timeout: 2e6,
        success: function(n) {
            i && i(n, u)
        },
        error: function(n) {
            r && r(n, u)
        }
    })
}

https://www.yucata.de/Services/YucataService.svc/GetTrueSkillRatingsByGameType


# Notes on manual downloads


## Ranking table

1. Go to https://www.yucata.de/en/Ranking/Game/Petersburg (while logged in)


```
		Name	μ	σ	TrueSkill
1		Itzamna saladin	1558,579	38,47407	1443
2		Che-le Grifos99	1533,45	38,96693	1416
3		Ahmakiq sstackho	1529,97	39,87739	1410
4		Itzamna thekid	1527,593	39,82245	1408
5		Itzamna texaswer	1504,332	40	1384
6		Mayor CroOm	1498,041	38,39856	1382
7		Hermit c4dancer	1475,69	36,91256	1364
8		Ix Chel W0RLD	1503,39	47,74929	1360
9		Hermit esper80	1476,27	39,64982	1357
10		Farmer georgedim	1460,936	39,18377	1343
11		Ahaucan LucRivNor	1476,669	46,02152	1338
12		Shopkeeper BloodyOlaf	1453,899	38,56121	1338
13		Journeyman speedtrain	1452,412	40	1332
14		Weaver konmar	1537,503	70,71511	1325
15		Itzamna hgfdsa	1438,638	37,99547	1324
16		Itzamna hank2015	1435,368	37,88865	1321
17		Hermit TwistedTea	1434,003	37,44754	1321
18		Councillor bootstrap	1452,27	45,9935	1314
19		Ahaucan Fruechtchen	1431,401	40	1311
20		Hermit Storm	1429,506	40	1309
21		Toolmaker Pug17	1427,684	39,67299	1308
22		Toolmaker sidmobes	1465,858	52,45956	1308
23		Ahmakiq PeteC2	1421,26	38,63268	1305
24		Ahmakiq Chuck	1411,436	35,38	1305
25		Baker KenoBob	1412,691	35,90989	1304
26		Farmer Ostrich	1424,214	39,80494	1304
27		Itzamna Marc1974	1418,519	38,13478	1304
28		Ahmakiq ttseppel	1496,273	64,57715	1302
29		Ahmakiq Ottokar	1417,036	38,70166	1300
30		Toolmaker Dr Schiwago	1419,82	39,75502	1300
31		Merchant Schummeli	1409,392	36,44139	1300
32		Chaac Lumumba	1414,661	40,0031	1294
33		Shopkeeper fp91gx	1408,145	37,97227	1294
34		Treasurer lonewolf70	1386,72	32,91282	1287
35		Itzamna prof43	1406,343	40,84373	1283
36		Messenger Zavoz	1399,268	38,63129	1283
37		Astrologer Woodstock	1406,268	41,58017	1281
38		Treasurer Dominik1701	1461,933	60,40828	1280
39		Secretary BelindaB	1396,228	38,52336	1280
40		Healer Godsmurf	1386,906	36,27488	1278
41		Ahmakiq Madjer	1395,764	41,48917	1271
42		Ahaucan kostra	1387,28	39,60995	1268
43		Fisherman Lopuch99	1378,236	36,84677	1267
44		Farmer thegambiteer	1377,455	38,75821	1261
45		Hermit Tönni	1361,52	33,65734	1260
46		Fisherman maciek112	1375,921	38,85031	1259
47		Ix Chel Toph	1377,913	39,61583	1259
48		Councillor cel123	1371,982	38,12486	1257
49		Healer Calmon	1429,432	57,96043	1255
50		Ahaucan Baron Frog	1369,465	38,31017	1254
51		Scholar rapharonii	1382,909	43,02276	1253
52		Ahaucan Ma1980	1392,597	46,29067	1253
53		Farmer ivan_schrecklich	1360,408	35,76945	1253
54		Ahaucan junesen	1405,486	50,91448	1252
55		Secretary BarbaricBagra	1366,567	38,0947	1252
56		Toolmaker ineg57	1366,848	38,35603	1251
57		Itzamna zlorfik	1499,946	82,87437	1251
58		Chilan priest lolcese	1362,344	37,24197	1250
59		Itzamna Girkassa	1368,892	39,65421	1249
60		Itzamna waxeater	1592,735	114,6673	1248
61		Chaac ElDavid	1362,651	38,10881	1248
62		Itzamna Laurentio	1362,525	38,12303	1248
63		Journeyman goforit	1387,145	46,8167	1246
64		Itzamna Stu12	1362,186	38,99621	1245
65		Merchant Combat311	1359,852	38,76494	1243
66		Ahaucan JasonB	1355,936	38,08065	1241
67		Healer ToddVP	1339,316	32,58165	1241
68		Che-le lanzi	1408,464	55,79498	1241
69		Che-le JHughes	1355,124	38,33683	1240
70		Itzamna matztias	1473,497	77,84052	1239
71		Chilan priest Speedway	1355,648	38,70443	1239
72		Merchant gibr	1355,441	38,98043	1238
73		Lay monk Ayrton12	1358,794	40,22984	1238
74		Secretary trymore	1406,881	56,30061	1237
75		Lay monk Bontempi	1353,965	38,7716	1237
76		Hermit Vine	1356,818	40	1236
77		Builder eLeMeN	1818,951	194,5289	1235
78		Ahmakiq HighwayStar	1345,895	37,29156	1234
79		Ahaucan emptyset	1347,764	37,96178	1233
80		Journeyman NeueGoldeneHorde	1812,727	192,9606	1233
81		Mayor Emanon	1375,225	47,7066	1232
82		Scholar JimTee	1347,318	39,02885	1230
83		Ahaucan Xeres	1339,74	37,14611	1228
84		Fisherman ede1	1343,278	38,48284	1227
85		Farmer BELYucata	1347,822	40,23298	1227
86		Itzamna Radagast	1338,798	37,46077	1226
87		Treasurer ChrisWithers	1327,026	33,83145	1225
88		Ahaucan Hefti	1368,603	47,6906	1225
89		Itzamna Defdamesdompi	1336,596	37,11224	1225
90		Ahaucan Ganymede	1358,831	44,70713	1224
91		Baker Ruehle	1337,894	37,91921	1224
92		Chilan priest throoh	1334,612	37,48921	1222
93		Ahaucan Jersey_Shirt_67	1334,852	37,72973	1221
94		Astrologer TheRealGinge	1344,509	41,10666	1221
95		Lay monk Taavi	1326,379	35,06493	1221
96		Juror Noctua	1335,507	38,7369	1219
97		Ahmakiq smlait	1330,839	37,21682	1219
98		Itzamna Tarewan	1328,791	38,53117	1213
99		Juror austinpower	1327,1	38,17305	1212
100		Merchant chiefarmorer	1321,586	36,81994	1211
```
