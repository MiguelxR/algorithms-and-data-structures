

function charCount(str) {
    var result = {};

    for (var i = 0; i < str.length; i++){
        var char = str[i].toLowerCase();
        console.log(char)
        if(result[char] > 0) {
            result[char]++;
        }
        else {
            result[char] = 1;
        }
    }
    return result
}

function charCount2Version(str) {
    var obj = {};

    for (var char of str){
        if(isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj
}

function isAlphaNumeric(char){
    var code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) && //numeric (0-9)
       !(code > 64 && code < 91) && //upper alpha (A-Z)
       !(code > 96 && code < 123)){// lowe alpha (a-z)
            return false;
        }
        return true;
}



//function for compare two arrays and throw true only if the second array have the cuadratic values of the first array.
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}


// console.log(same([1,2,3,2,5], [9,1,4,4, 25]));


function anagrams(arr1, arr2){

    if(arr1.length !== arr2.length) return false;

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of arr1) frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;

    for(let val of arr2) frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;

    for(let key in frequencyCounter1){

        if(!(key in frequencyCounter2)){
            return false
        }

        if(frequencyCounter2[key] !== frequencyCounter1[key]){
            return false
        }

    }
    return true;


}


//Multiple Pointers Pattern
function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if (sum > 0){
            right--;
        } else {
            left++;
        }
    }

}

//My solution
function countUniqueValues(arr){

    let pointerOne = 0;

    let pointerTwo = 1;

    const unique = [];

    for (let index = 0; index < arr.length; index++) {
        if(arr[pointerOne] === arr[pointerTwo]){
            pointerTwo++;
        } else {
            pointerOne++;
            arr[pointerOne] = arr[pointerTwo];
        }
        
    }    

    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
          unique.push(arr[i]);
        }
      }
      
    return unique.length;
}

//Sensei Solution
function uniqueValue(arr){
    if(arr.length === 0) return 0;
    let i = 0;
    for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}


function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;

    if(arr.length < num) return null;

    for (let i = 0; i < num; i++){
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

// maxSubarraySum([2,6,9,2,1,8,5,6,3], 3)

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3], 3));