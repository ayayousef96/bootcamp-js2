function leapyear(y){
    let r="";
    if(y%4==0 && y%100!=0){
        r="leap year!";
    }
    if(y%4==0 && y%100==0 && y%400!=0){
        r="not aleap year!";
    }
    if(y%4==0 && y%100==0 && y%400==0){
        r="leap year!";
    }
    if(y%4!=0){
        r="not a leap year!";
    
    }
    console.log(r);

}

leapyear(2012);
leapyear(2100);
leapyear(2400);