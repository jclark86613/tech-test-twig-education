var groupArrayElements = require( './group-array-elements.js' ).groupArrayElements;

// test cases
const arr = [1, 2, 3, 4, 5 ];
const groupNo = 3;
console.log( 'array:', arr );
console.log( 'group number:', groupNo );
console.log( 'output:', groupArrayElements(arr, groupNo) );
