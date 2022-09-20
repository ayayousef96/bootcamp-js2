const welcome = () => 'Welcome to Appleseeds Bootcamp!';


const power = a  =>  Math.pow(a, 2);

// From function expressions to IIFE functions.
(function(a) { return Math.sqrt(a); });
/*const squareRoot = a => Math.sqrt(a);*/
(function(a,b) { return Math.random() * (a - b) + b; });
/*const randomNumbers = (a, b) => Math.random() * (a - b) + b;*/