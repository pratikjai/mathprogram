
const fib=(n)=>{
    const fibarry=[0,1];
    for(var i=2;i<n;i++){
        fibarry.push(fibarry[i-2]+ fibarry[i-1]);
    }
    return fibarry;
}
console.log(fib(10));