function solution(priorities, location) {
    const queue = priorities.map((p, i) => [p, i]);
    let printed = 0;
    
    while(queue.length) {
        const[p, idx] = queue.shift();
        const hasHigher = queue.some(([q]) => q > p);
        
        if(hasHigher) {
            queue.push([p, idx]);
        } else {
            printed++;
            if(idx === location) return printed;
        }
    }
}