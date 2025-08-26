function solution(word) {
    const idx = {A : 0, E : 1, I : 2, O : 3, U: 4};
    const weight = [781, 156, 31, 6, 1];
    
    let ans = 0;
    for(let i = 0; i < word.length; i++) {
        ans += idx[word[i]] * weight[i] + 1;
    }
    return ans
}