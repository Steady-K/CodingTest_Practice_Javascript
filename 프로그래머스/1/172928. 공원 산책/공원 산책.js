function solution(park, routes) {
    
    const h = park.length;
    const w = park[0].length;
    
    const dirs = {
        E : [0, 1],
        W : [0, -1],
        S : [1, 0],
        N : [-1, 0]
    }
    
 let y = 0;

    for (let i = 0; i < h; i++) {
        const j = park[i].indexOf("S");
        if (j !== -1) {
            x = i;
            y = j;
            break;
        }
    }
    
    for(const route of routes) {
        const [op, nStr] = route.split(' ');
        const n = Number(nStr);
        const [dx, dy] = dirs[op]
        
        let nx = x;
        let ny = y;
        let canMove = true;
        
        for(let step = 1; step <= n; step++) {
            const tx = x + dx * step;
            const ty = y + dy * step;
            
            if(tx < 0 || tx >= h || ty < 0 || ty >= w || park[tx][ty] === "X") {
                canMove = false;
                break
            }
            nx = tx;
            ny = ty
            
        }
        if( canMove) {
            x = nx;
            y = ny
        }
        
        
    }
    return [x, y]

}