function solution(d, budget) {
    let sum = 0
    let answer = 0;
    const sortedD = d.sort((a, b) => a - b)
    
   for(let i = 0; i < d.length; i++) {
       sum += sortedD[i];
       
       if(sum > budget) break
       
       answer++
   }
    return  answer
}