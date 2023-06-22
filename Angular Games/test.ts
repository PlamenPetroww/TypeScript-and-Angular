

function countDigits(text: string): number {
    // your code here
    for(let i = 0; i <= text.length; i++) {
        if( typeof i !== "string") {
            return i;
        }
    }
}

console.log("Example:");
console.log(countDigits("hi"));
