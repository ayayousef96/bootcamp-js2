const percentageOfWorld1 = (population) => {
    let worldpopulation= 7900000000;
    let percent=((population/worldpopulation)*100).toFixed(1);
    return percent +"%";
}
console.log(percentageOfWorld1(1441000000));
const percentageOfWorld2= population => percentageOfWorld2(population);
