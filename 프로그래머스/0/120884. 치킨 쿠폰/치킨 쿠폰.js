function solution(chicken) {
    let coupon = chicken;
    let service = 0
    
    while( coupon >= 10) {
        const newService = Math.floor(coupon / 10);
        service += newService;
        coupon = newService + (coupon % 10 )
    }
    return service;
    
    
    
}