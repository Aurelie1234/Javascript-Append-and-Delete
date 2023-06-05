function appendAndDelete(s, t, k) {
    // Write your code here


s = s.split('')
t = t.split('')


if (k >= s.length + t.length) 


return "Yes"


let sameChars = Math.min(s.length, t.length)


for (let i=0; i< sameChars; i++) {
    if (s[i] != t[i]) {
        sameChars = i
        break
    }
}


k -= (s.length - sameChars) + (t.length - sameChars)


if(k>=0 && k%2==0) 
return "Yes"
else 
return "No"


}
