function scoreavg(s1,s2,s3){
    let avg=(s1+s2+s3)/3;
    return avg;
}

let john=scoreavg(130,120,103);
let mike=scoreavg(116,94,123);
if(mike == john){
    console.log(" ITS A DRAW!")
}
if(mike> john){
    console.log("Mike wins with score average " + mike+ "!");
}
else{
    console.log("John wins with score average " + john+ "!");
}
let marry=scoreavg(97,134,105);
if(marry == john){
    console.log(" ITS A DRAW!")
}
if(marry > john){
    console.log("Mike wins with score average " + mike+ "!");
}
else{
    console.log("John wins with score average " + john+ "!");
}



