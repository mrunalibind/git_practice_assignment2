let num=15;

for(let i=1;i<=num;i++){
    if(num%i){
        count++;
    }
}
if(count>2){
    console.log("Not Prime");
}
else{
    console.log("Prime");
}