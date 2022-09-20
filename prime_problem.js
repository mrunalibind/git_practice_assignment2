let num=15;

for(let i=1;i<=num;i++){
    if(num%i){
        count++;
    }
}
if(count>2){
    console.log(num, "Not Prime Number");
}
else{
    console.log(num, "Prime Number");
}