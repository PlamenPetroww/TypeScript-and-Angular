function countDigits(text) {
    // your code here
    for (var i = 0; i <= text.length; i++) {
        if (typeof i !== "string") {
            return i;
        }
    }
}
console.log("Example:");
console.log(countDigits("who is 1st here"));
