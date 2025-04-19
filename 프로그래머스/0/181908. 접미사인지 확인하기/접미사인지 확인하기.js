function solution(my_string, is_suffix) {
    
  const suffixes = Array.from(my_string, (_, i) => my_string.slice(i))
    console.log(suffixes.includes(is_suffix))
    if (suffixes.includes(is_suffix) === true) {
        return 1
    } else {
        return 0
    }
}