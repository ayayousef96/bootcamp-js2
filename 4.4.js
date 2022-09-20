function boom(n){
    let arr=[];
    for(i=0;i<=n;i++){
        if(i%7!= 0){
            arr.push(i);
        }
        if(i%7==0 && (i.toString().includes('7')== true)){
            arr.push('BOOM-BOOM');
        }
        {
        if(i%7!=0 && (i.toString().includes('7')== true))
            arr.push('BOOM');
        }
    }
    console.log(arr.toString());
    
}
