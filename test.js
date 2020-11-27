var groupArrayElements = require( './group-array-elements.js' ).groupArrayElements;

// test empty array
let arr = [];
let groupNo = 3;
console.log( '---------------------------------' );
console.log( 'test empty array' );
console.log( 'array:', arr );
console.log( 'group number:', groupNo );
console.log( 'output:', groupArrayElements(arr, groupNo) );

// test 0 group number
arr = [1, 2, 3, 4, 5 ];
groupNo = 0;
console.log( '---------------------------------' );
console.log( 'test 0 group number' );
console.log( 'array:', arr );
console.log( 'group number:', groupNo );
console.log( 'output:', groupArrayElements(arr, groupNo) );

// test evenly grouped
arr = [1, 2, 3, 4, 5, 6 ];
groupNo = 2;
console.log( '---------------------------------' );
console.log( 'test evenly grouped' );
console.log( 'array:', arr );
console.log( 'group number:', groupNo );
console.log( 'output:', groupArrayElements(arr, groupNo) );

// test unevenly grouped
arr = [1, 2, 3, 4, 5, 6, 7];
groupNo = 2;
console.log( '---------------------------------' );
console.log( 'test unevenly grouped' );
console.log( 'array:', arr );
console.log( 'group number:', groupNo );
console.log( 'output:', groupArrayElements(arr, groupNo) );
