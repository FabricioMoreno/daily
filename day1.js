//Reverse string

const reverseString =  (word)=>{
    let result = ""
    for(let i = word.length-1; i >=0; i--){
        result+=word[i]
    }
    return result
}

const reverseString1 =(word)=>{
    return [...word].reverse().join("")
} 
console.log(reverseString("hello"))
console.log(reverseString1("world"))