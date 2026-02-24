function solution(num_list) {
    const numListLen = num_list.length;
    const lastNum = num_list[numListLen - 1]
    const lastPrevNum = num_list[numListLen - 2]

    const addNum =  lastNum > lastPrevNum ? lastNum - lastPrevNum : lastNum * 2

    return [...num_list, addNum]

}