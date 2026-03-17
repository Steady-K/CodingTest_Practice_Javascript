function solution(s) {
    const arr = [...s];
    const numArr = [];

    for(let i = 0; i < arr.length; i++) {
        if(!isNaN(Number(arr[i]))) {
            numArr.push(arr[i]);
        }
    }
        const isAllNum = arr.length === numArr.length
        const isValidLength = arr.length === 4 || arr.length === 6
        
        return isAllNum && isValidLength
}
