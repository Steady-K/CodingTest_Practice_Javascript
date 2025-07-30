function solution(board) {
    const n = board.length;
    const danger = Array.from( {length:n}, () => Array(n).fill(0) )
    const dx = [-1, -1, -1, 0, 0, 0, 1, 1, 1];
    const dy = [-1, 0, 1, -1, 0, 1, -1, 0, 1];
    
    for(let i = 0; i < n; i++) {
        for(let j= 0; j < n; j++) {
            if(board[i][j] === 1) {
                for(let d = 0; d < 9; d++) {
                    const ni = i + dx[d]
                    const nj = j + dy[d]
                    if(ni >= 0 && ni < n && nj >= 0 && nj < n) {
                        danger[ni][nj] = 1;
                    }
                }
            }
        }
    }
    
    let safeCount = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(danger[i][j] === 0 && board[i][j] === 0) safeCount++;
        }
    }
    return safeCount;
}