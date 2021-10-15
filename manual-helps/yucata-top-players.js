
ranktbl = document.getElementById('rankingTable');
console.log(ranktbl.innerText)
// child 0 is some header not of interest
innertbl = ranktbl.children[1];
// for (row of innertbl.children) {
for (i = 0; i < 10; i ++ ) {
    row = innertbl.children[i];
    
    console.log(row.children[0].innerText)
    console.log(row.children[2].innerHTML)
    
}
