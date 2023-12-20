
// To check missing number in array.
function findMissingNumber(arr) {
    let N = arr.length + 1, SumofNNumber, sumOfarr = 0;

    SumofNNumber = (N * (N + 1)) / 2;
    
    for (let i = 0; i < arr.length; i++ ) {
        sumOfarr = sumOfarr + arr[i];
    }
    return (SumofNNumber - sumOfarr);
}

// Example usage
const myArray = [1,2,4,5,6,7,8,9,10];


console.log("Missing number",findMissingNumber(myArray));
