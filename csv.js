
var b
var a=prompt("enter any name:")
b=a
b.split("").reverse().join("")
if(strcmp(a,b)==0){
    document.getElementById("demo1").innerHTML="you type palindrome number"
}
else{
    document.getAnimations("demo2").innerHTML="you entered number is not palindrome"
}
reverseString("hello")