function solution(my_string, index_list) {
    const ms = [...my_string];
    console.log(ms)
    let result = ''
    
    for ( let i = 0; i < index_list.length; i++) {
        result += ms[index_list[i]]
    }
    return result
}