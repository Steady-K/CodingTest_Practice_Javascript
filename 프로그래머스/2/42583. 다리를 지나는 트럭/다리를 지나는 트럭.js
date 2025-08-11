function solution(bridge_length, weight, truck_weights) {
    const bridge = Array(bridge_length).fill(0);
    
    let time = 0;
    let currentWeight = 0;
    let i = 0;
    
    while(i < truck_weights.length || currentWeight > 0) {
        time++
        
        currentWeight -= bridge.shift();
        
        if(i < truck_weights.length && currentWeight + truck_weights[i] <= weight) {
            bridge.push(truck_weights[i]);
            currentWeight += truck_weights[i];
            i++;
        } else {
            bridge.push(0);
        }
    }
    return time;
}