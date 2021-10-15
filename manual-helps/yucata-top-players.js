function getUserName(html) {
    words = html.split(" ")
    nameAndTag = words[words.length - 1]
    name = nameAndTag.split("<")[0]
    return name
}

function extractRankingList () {
    ranktbl = document.getElementById('rankingTable');
    console.log(ranktbl.innerText)
    // child 0 is some header not of interest
    innertbl = ranktbl.children[1];
    for (row of innertbl.children) {
        // row = innertbl.children[i];
        
        rank = row.children[0].innerText;
        nameHTML = row.children[2].innerHTML;
        
        username = getUserName(nameHTML);
        console.log (`Rank: ${rank} User ${username}`)
        
    }
}

extractRankingList()