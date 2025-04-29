function solution(arr) {
    let count = 0;
    let changed = true;
    
    while (changed) {
        changed = false;
        const nextArr = [...arr];
        
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 50 && arr[i] % 2 === 0) {
                nextArr[i] = arr[i] / 2;
            } else if (arr[i] < 50 && arr[i] % 2 !== 0) {
                nextArr[i] = arr[i] * 2 + 1;
            }
        }
        
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== nextArr[i]) {
                changed = true;
                break;
            }
        }

        if (changed) {
            arr = nextArr;
            count++;
        }
    }

    return count;
}
