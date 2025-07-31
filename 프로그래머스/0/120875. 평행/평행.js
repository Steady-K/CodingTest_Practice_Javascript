function solution(dots) {
    const getScope = (a, b) => (b[1] - a[1]) / (b[0] - a[0]);
    
    const [p1, p2, p3, p4] = dots;
    
    if(getScope(p1, p2) === getScope(p3, p4)) return 1;
    if(getScope(p1, p3) === getScope(p2, p4)) return 1;
    if(getScope(p2, p3) === getScope(p1, p4)) return 1;
    
    return 0;
}