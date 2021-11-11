
  

function getUserName(html) {
    words = html.split(" ")
    nameAndTag = words[words.length - 1]
    name = nameAndTag.split("<")[0]
    return name
}

function actOnRow(row){
        rank = row.children[0].innerText;
        nameHTML = row.children[2].innerHTML;
        
        username = getUserName(nameHTML);
        console.log (`Rank: ${rank} User ${username}`)
        return username;
}

function extractRankingList () {
    ranktbl = document.getElementById('rankingTable');
    console.log(ranktbl.innerText)
    // child 0 is some header not of interest
    innertbl = ranktbl.children[1];
    
    rv = []
    for (row of innertbl.children) {
        rv.push(actOnRow(row));
    }
    return rv;
}

function actOnUser(user) {
    url = `https://www.yucata.de/en/Ranking/${user}`;
    window.open(url, '_blank')

    sleep(2000).then(() => {
        theTable = document.getElementById('divPlayerRankingListTable')
        body = theTable.children[1];
    });
    sleep(500).then(() => {
        for (row of body) {
            console.log("---");
            console.log(row);
            makeTextFile(row)
        }
    });
    
}

function followAllUsers(listOfUsers) {
    i = 0; 
    for (name of listOfUsers) {
        actOnUser(name)    ;
        // sleep(500).then(() => {
        //     //iterate
        //     console.info('slept')
        // });
        if (i++ > 3)
            break;  // for now
    }    
}


theList = extractRankingList()
console.log(theList)
// Not fully impl but if you want to try getting per-user data:

// function sleep (time) {
//     return new Promise((resolve) => setTimeout(resolve, time));
//   }
  
//   // https://stackoverflow.com/questions/21012580
//   var textFile = null,
//   makeTextFile = function (text) {
//       var data = new Blob([text], {type: 'text/plain'});
  
//       // If we are replacing a previously generated file we need to
//       // manually revoke the object URL to avoid memory leaks.
//       if (textFile !== null) {
//         window.URL.revokeObjectURL(textFile);
//       }
  
//       textFile = window.URL.createObjectURL(data);
  
//       // returns a URL you can use as a href
//       return textFile;
//     };
    
// followAllUsers(theList)
