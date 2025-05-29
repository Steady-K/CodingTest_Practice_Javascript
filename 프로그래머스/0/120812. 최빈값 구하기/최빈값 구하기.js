function solution(array) {
    const count = new Map();
    
    for(let num of array) {
        count.set(num, (count.get(num) || 0) + 1);
    }
    let max = 0;
    
    for (let value of count.values()) {
        if(value > max) max = value;
    }
    
    const modes = [];
    
    for(let [key, value] of count.entries()) {
        if(value === max) modes.push(key)
    }
    
    return modes.length > 1 ? -1 : modes[0];
}