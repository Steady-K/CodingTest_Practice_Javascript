function solution(n) {
    const arr = Array.from({ length : n }, () => Array(n).fill(0));
    
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    
    let x = 0, y = 0, dir = 0;
    
    for (let i = 1; i <= n * n; i++) {
        arr[x][y] = i;
        
        const nx = x + dx[dir];
        const ny = y + dy[dir];
        
        if (nx < 0 || ny < 0 || nx >= n || ny >= n || arr[nx][ny] !== 0) {
            dir = (dir + 1) % 4;
            
            x += dx[dir]
            y += dy[dir]
        } else {
            x = nx;
            y = ny;
        }
    }
    return arr;
}