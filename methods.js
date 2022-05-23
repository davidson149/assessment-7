
const sumZero = (arr) => {
    const zeroSet = new Set();
 
    let sum = 0;
    for (let i = 0 ; i < arr.length ; i++)
    {
        sum += arr[i];

        if (sum === 0 || zeroSet.has(sum))
            return true;
 
        zeroSet.add(sum);
    }
    return false;
}

const arr =  [1,-1];
if (sumZero(arr))
    console.log("array equals 0");
else
    console.log("does not equal zero");
    // here we have a function that will instantly see if an array equals to the sume of Zero



    function uniqueCharacters(str) {
     
    for(let i = 0; i < str.length; i++)
        for(let j = i + 1; j < str.length; j++)
            if (str[i] == str[j])
                return false;
 

    return true;
}
 
let input = "asdf";
 
if (uniqueCharacters(input) == true)
    console.log( input + " has all unique characters");
else
    console.log( input + "false")
    // This function checks to see if the input is has all unique characters or not




    function isPangram(string) {
        mark = new Array(26).fill(false);
        let index;
        for (let i = 0; i < string.length; i++) {
    
            if ('A' <= string[i] && string[i] <= 'Z')
                index = string.charCodeAt(i) - 'A'.charCodeAt(0);
    
            else if ('a' <= string[i] && string[i] <= 'z')
                 index = string.charCodeAt(i) - 'a'.charCodeAt(0);
    
            else continue;
     
            mark[index] = true;
        }
     
        for (let i = 0; i <= 25; i++)
            if (mark[i] == false)
                return false;
    
        return true;
    }
 
    let pangram = "The quick brown fox jumps over the lazy dog";
     
    console.log(pangram)
     
    if (isPangram(pangram) == true)
        console.log(pangram);
    else
        console.log("False");
// here we have a function that prints out the pangram and sees if it is or not. simply remove a letter or word and it will become false.

        function longestWord(string){
            var show = string.split(" ");
             show.sort(function (a,b){
                 return b.length - a.length; 
             })
             return show[0];
       }
       console.log(longestWord(string = "My dog Hebgen is the sweetest boy"));