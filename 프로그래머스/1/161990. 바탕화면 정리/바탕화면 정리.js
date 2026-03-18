function solution(wallpaper) {
    const x = []
    const y = []
    const xLen = wallpaper.length
    const yLen = wallpaper[0].length
    for(let i = 0; i < xLen; i++) {
        for(let j = 0; j < yLen; j++) {
            if(wallpaper[i][j] === "#") {
                x.push(i);
                y.push(j);
            }
        }
    }
     x.sort((a, b) => a - b);
    y.sort((a, b) => a - b);
        
    return [x[0], y[0], x[x.length -1] + 1, y[y.length -1] + 1]
}