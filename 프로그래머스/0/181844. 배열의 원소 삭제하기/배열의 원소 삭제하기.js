function solution(arr, delete_list) {
    const deleteSet = new Set(delete_list);
    
    return arr.filter(n => !deleteSet.has(n));
}