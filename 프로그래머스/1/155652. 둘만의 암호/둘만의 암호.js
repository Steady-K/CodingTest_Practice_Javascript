function solution(s, skip, index) {

    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const filtered = alphabet.filter(c => !skip.includes(c))
    
   return s.split('').map(char => {
       const idx = filtered.indexOf(char)
       return filtered[(idx + index) % filtered.length]
   }).join('')
}