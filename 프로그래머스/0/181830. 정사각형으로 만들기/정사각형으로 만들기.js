function solution(arr) {
    const rowLen = arr.length;
    const colLen = arr[0].length;
    
    if(rowLen > colLen) {
        for(let i = 0; i< rowLen; i++) {
            while(arr[i].length < rowLen) {
                arr[i].push(0);
            }
        }
    } else if (rowLen < colLen) {
        for(let i = rowLen; i < colLen; i++) {
            arr.push(Array(colLen).fill(0))
        }
    }
        return arr;
}