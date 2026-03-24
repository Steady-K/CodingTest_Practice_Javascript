function solution(a, b, n) {
    let emptyCola = n
    let count = 0
   
   while(emptyCola >= a) {
       
       const newCola = Math.floor(emptyCola / a) * b
       emptyCola = newCola + emptyCola % a
       count += newCola
   }
    return count
}