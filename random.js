var groupArrayElements = require( './group-array-elements.js' ).groupArrayElements;

// test against randomly generated data
const random = Math.ceil( Math.random() * 50 );
const randomArray = Array.from( { length: random }, function() { return Math.floor( Math.random() * random ) } );
const randomNoOfGroups = Math.ceil( Math.random() * 5 );

console.log( 'array:', randomArray );
console.log( 'group number:', randomNoOfGroups );
console.log( 'output:', groupArrayElements( randomArray, randomNoOfGroups ) );