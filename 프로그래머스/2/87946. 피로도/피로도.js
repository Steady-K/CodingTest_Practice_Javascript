function solution(k, dungeons) {
    const n = dungeons.length;
    const visited = Array(n).fill(false);
    let best = 0;
    
    function dfs(currK, cleared) {
        if(cleared > best) best = cleared;
        
        for(let i = 0; i < n; i++) {
            if(visited[i]) continue;
            const [need, cost] = dungeons[i];
            if(currK >= need) {
                visited[i] = true;
                dfs(currK - cost, cleared + 1);
                visited[i] = false
            }
        }
    }
    dfs(k, 0);
    return best;
}