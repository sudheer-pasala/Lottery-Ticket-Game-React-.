function genTicket(n){
let arr = new Array(n);

for(let i=0; i<n; i++){
    arr[i]= Math.floor(Math.random()*10);
}
return arr;
}

function sum(arr){
    let ElementSum= 0;
    for(let i=0; i<arr.length; i++){
ElementSum+= arr[i];
    }
    return ElementSum;
}
export {genTicket, sum};