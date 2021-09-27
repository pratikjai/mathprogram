
// revesre number with using 
//  split join and reverse method


function reverse_num(n){
n=n+"";
let num=n.split("").reverse().join("");
return num;
}
console.log(reverse_num(12345));
 