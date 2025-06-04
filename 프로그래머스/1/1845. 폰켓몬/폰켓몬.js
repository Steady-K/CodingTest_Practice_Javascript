function solution(nums) {
    const set = new Set(nums);
    const max = nums.length / 2;
    console.log(set)
    if(set.size > max) {
        return max;
    } else if (set.size < max) {
        return set.size;
    } return set.size;
}