var res= '\n', i, j;
for (i = 1; i <= 7; i++){
    for(j=1; j <=15; j++){
        res += (i * j) %8 ?  ' ' : '*';
    }
    res += '\n';
}

console.log(res += '\n');