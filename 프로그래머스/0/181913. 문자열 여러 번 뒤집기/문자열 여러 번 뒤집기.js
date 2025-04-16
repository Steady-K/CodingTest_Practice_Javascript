function solution(my_string, queries) {
    let strArr = [...my_string];
    // console.log("초기 문자열:", strArr.join(""))
    
    for (let i = 0; i < queries.length; i++) {
        const [s, e] = queries[i]
        // console.log(`쿼리 ${i + 1}: [${s}, ${e}]`);
        
        const reversed = strArr.slice(s, e + 1).reverse();
        // console.log("뒤집은 부분:", reversed.join(""))
        
        strArr.splice(s, e - s + 1, ...reversed);
        // console.log(`현재 상태: ${strArr.join("")}`)
    }
    return strArr.join("");
}