//frequency of char in a string
let str3 = "she is a girl";
let f={};
for(let i =0; i<str3.length;i++){
    let ch = str3[i];
    //console.log(ch)
    if(f[ch]){
        f[ch]++;
    }
    else{
        f[ch]=1;
    }
    
}
console.log(f)

//Duplicate characters in a string
for(let k in f){
    if(f[k]>1){
        console.log(k);
    }
}

//Remove duplicates from a string
for(let k in f){
    if(f[k]){
        console.log(k);
    }
}

//Reverse a string according to words
let str1 = "hey look there";
let wordsArray = str1.split(" "); 
let res = "";

for (let i = 0; i < wordsArray.length; i++) {
    for (let j = wordsArray[i].length - 1; j >= 0; j--) {
        res += wordsArray[i][j];
    }
        res += " ";
}
console.log(res); 


//anagram, panagram, string rotations, patterns, highest repeat , lowest, arrays