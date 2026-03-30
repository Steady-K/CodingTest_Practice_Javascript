function solution(n, arr1, arr2) {
    const result = Array.from({length : n}, () => Array(n).fill(0))
    for(let i = 0; i < n; i++) {
        let arr1B = arr1[i].toString(2).padStart(n, "0")
        let arr2B = arr2[i].toString(2).padStart(n, "0")
        
        for(let j = 0; j < n; j++) {
            if(arr1B[j] === "1" || arr2B[j] === "1") {
                result[i][j] = "#"
            } else {
                result[i][j] = " "
            }
        }
    }
   return result.map(row => row.join(''))
    
}