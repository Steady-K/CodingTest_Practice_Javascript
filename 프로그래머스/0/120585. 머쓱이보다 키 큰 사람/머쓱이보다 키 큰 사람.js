function solution(array, height) {
    let count = 0;
    for(let stature of array) {
        if(stature > height) {
            count += 1;
        }
    }
    return count;
}