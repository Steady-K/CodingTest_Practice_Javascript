function solution(box, n) {
    const w = box[0];
    const d = box[1];
    const h = box[2];
    
    return Math.floor(w / n) * Math.floor(d / n) * Math.floor(h / n);
}