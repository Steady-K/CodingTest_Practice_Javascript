function solution(arr, queries) {
    let result = [];
    
    queries.forEach(([s, e, k]) => {
        let minVal = Infinity;
        
        for ( let i = s; i <= e; i++) {
            if (arr[i] > k && arr[i] < minVal) {
                minVal = arr[i]
            }
        }
        
        result.push(minVal === Infinity ? -1 : minVal)
    })
    return result;
}