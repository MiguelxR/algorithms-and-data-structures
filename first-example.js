

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

//Sliding window pattern
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


function sameFrequency(firstNum, SecondNum){

    let firstValue = firstNum.toString();

    let secondValue = SecondNum.toString();

    const firstFrequencyCounter = {};

    const secondFrequencyCounter = {};

    if(firstValue.length !== secondValue.length) return false; 

    for (const value of firstValue) firstFrequencyCounter[value] = (firstFrequencyCounter[value] || 0) + 1;

    for (const value of secondValue) secondFrequencyCounter[value] = (secondFrequencyCounter[value] || 0) + 1;
    
    for (const key in firstFrequencyCounter){

        if(!(key in secondFrequencyCounter)) return false;

        if(firstFrequencyCounter[key] !== secondFrequencyCounter[key]) return false;

    }

    return true;
}


function areThereDuplicates(...values){

    const frequencyCounter = {};

    if(values.length === 0) return false;

    for (const value of values) {
        frequencyCounter[value] = (frequencyCounter[value] || 0) + 1;
    }

    for (const value of values) {
        if(frequencyCounter[value] > 1) {return true}
    }
    
    return false;

}


function areThereDuplicatesPointer(...args) {
    // Two pointers
    args.sort((a,b) => a > b);

    let start = 0;

    let next = 1;

    while(next < args.length){

      if(args[start] === args[next]){
          return true
      }

      start++

      next++
    }

    return false
  }

// console.log(areThereDuplicatesPointer(1,2,3,4, 5,6,7))

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

//Multiple pointers
function averagePair(arr, number){

    let pointOne = 0;

    let pointTwo = arr.length - 1;

    let sum = 0;

    console.log(arr.length)

    if(arr.length === 0) return false;

    while(pointOne <= pointTwo){

        sum = arr[pointOne] + arr[pointTwo];

        if((sum / 2) === number)
        {
            return true;
        }else {
            pointTwo--
        }

        if(pointOne === pointTwo){
            pointTwo = arr.length - 1;
            pointOne++;
        }

    }

    return false;

}

// console.log(averagePair([],4));

//O(N)
function isSubsequence(firstString, secondString){

    let firstPointer = 0;

    let secondPointer = 0;

    //we can take the first string and put in an array because the order matters, the same for the second string
    //Now we can evaluate every character in the second array in order to get the correct one
    //example array1 = [a,b,t] array2 = [a,c,b]
    //example array1 = [h,e,l,l,o] array2 = [h,e,l,l,o,w,o,r,l,d]
    //we get the first caracter array1[0] = a
    //now we evaluate every character of the second array ultil to find the same character (if we find other character of the first array first we return false)
    
    for (let index = 0; index < firstString.length; index++) {
        
        if(firstString[firstPointer] === secondString[secondPointer]){
            secondPointer++
            firstPointer++
            if(!(firstString[firstPointer] === secondString[secondPointer])){

                firstPointer++

                if(firstString[firstPointer] === secondString[secondPointer]){
                    return false;

                } else {

                    secondPointer++

                    if(firstString[firstPointer] === secondString[secondPointer]){

                        return false;

                    }

                }

            }
        }

    }

    return true;

}

//sensei solution 

function isSubsequenceSensei(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
  }

  //O(1)


console.log(isSubsequence('abc', 'abracadabra'));