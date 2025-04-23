function solution(my_string) {
    const arr = new Array(52).fill(0);
    
    my_string.split('').forEach((v) => {
        const code = v.charCodeAt(0);
        
        if ( v >= 'A' && v <= 'Z') {
            arr[code - 65]++; // A ~ Z → 0 ~ 25
        } else if ( v >= 'a' && v <= 'z') {
            arr[code - 71]++; // a ~ z → 26 ~ 51
        }
    })
    return arr;
    
    
}