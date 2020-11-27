/**
 * @function groupArrayElements
 * @description - Given an array of elements, and a group size, return the contents of the elements into equally sized arrays. Where the size of the original array cannot be divided equally, the final group will have the remainder.

 * @param {array} elements - the array of values to be grouped
 * @param {number} noOfGroups - number of grouped elements should be returned
 * @returns - an array of grouped elements from array input
 * @example
 * let elements = [1, 2, 3, 4, 5];
 * let noOfGroups =  3;
 * let output = groupArrayElement( elements, noOfGroups );
 * // output = [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
 */
module.exports.groupArrayElements = function( elements, noOfGroups ) {
    // defensive checks
    if (
        !Array.isArray( elements )
        || typeof( noOfGroups ) !== 'number'
        || noOfGroups <= 0
    ) { return false; }

    let output = [];
    const itemPerGroup = Math.ceil( elements.length / noOfGroups );

    for( let i = 0; i < noOfGroups; i++ ) {
        // remove from input array and push a group array to output
        output.push( elements.splice( 0, itemPerGroup ) );
    }
    return output;
}
